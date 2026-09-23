"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { Loader2, CheckCircle2, AlertCircle, ChevronDown, Mail, Phone } from "lucide-react";
import { services } from "@/lib/data/services";
import {
  submitQuote,
  QUOTE_SUBMISSION_CONNECTED,
  type QuoteFormPayload,
} from "@/lib/utils/submit-quote";
import { siteConfig, telHref } from "@/lib/utils/site-config";
import { cn } from "@/lib/utils/cn";

type Status = "idle" | "submitting" | "sent" | "not-sent" | "error";
type FieldName = keyof QuoteFormPayload;
type FieldErrors = Partial<Record<FieldName, string>>;

const initialForm: QuoteFormPayload = {
  name: "",
  company: "",
  phone: "",
  email: "",
  serviceRequired: "",
  location: "",
  message: "",
};

// Order used to move focus to the first invalid field.
const fieldOrder: FieldName[] = [
  "name",
  "company",
  "phone",
  "email",
  "serviceRequired",
  "location",
  "message",
];

const inputClasses =
  "w-full rounded-md border bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink-soft focus:outline-none focus:ring-1 focus-visible:ring-offset-0";

const labelClasses = "mb-1.5 block text-sm font-medium text-navy-950";

function validate(form: QuoteFormPayload): FieldErrors {
  const errors: FieldErrors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!form.company.trim()) errors.company = "Please enter your company or society name.";

  const phoneDigits = form.phone.replace(/\D/g, "");
  if (!form.phone.trim()) {
    errors.phone = "Please enter a contact number.";
  } else if (!/^[+\d][\d\s()-]*$/.test(form.phone.trim()) || phoneDigits.length < 10 || phoneDigits.length > 13) {
    errors.phone = "Please enter a valid phone number (at least 10 digits).";
  }

  if (!form.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
    errors.email = "Please enter a valid email address, e.g. name@company.com.";
  }

  if (!form.serviceRequired) errors.serviceRequired = "Please select the service you need.";
  if (!form.location.trim()) errors.location = "Please enter the site location.";
  return errors;
}

function buildMailto(payload: QuoteFormPayload): string {
  const subject = `Quote request — ${payload.serviceRequired} — ${payload.company}`;
  const body = [
    `Name: ${payload.name}`,
    `Company: ${payload.company}`,
    `Phone: ${payload.phone}`,
    `Email: ${payload.email}`,
    `Service required: ${payload.serviceRequired}`,
    `Site location: ${payload.location}`,
    "",
    "Requirement:",
    payload.message || "—",
  ].join("\n");
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function Field({
  id,
  label,
  required = false,
  error,
  hint,
  children,
}: {
  id: FieldName;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClasses}>
        {label}
        {required ? (
          <>
            <span className="ml-0.5 text-accent-600" aria-hidden="true">
              *
            </span>
            <span className="sr-only"> (required)</span>
          </>
        ) : (
          <span className="ml-1.5 text-xs font-normal text-ink-soft">(optional)</span>
        )}
      </label>
      {children}
      {hint && !error ? (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-ink-soft">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 flex items-start gap-1.5 text-xs text-accent-600">
          <AlertCircle className="mt-px h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function RequestQuoteForm() {
  const [form, setForm] = useState<QuoteFormPayload>(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState<QuoteFormPayload | null>(null);

  const formRef = useRef<HTMLFormElement>(null);
  const resultHeadingRef = useRef<HTMLHeadingElement>(null);
  // Guards against double submission (e.g. a double click) before React
  // re-renders the disabled button.
  const inFlight = useRef(false);

  useEffect(() => {
    if (status === "sent" || status === "not-sent") {
      resultHeadingRef.current?.focus();
    }
  }, [status]);

  function updateField(key: FieldName, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  }

  function fieldProps(key: FieldName, hint?: boolean) {
    const describedBy = [errors[key] ? `${key}-error` : null, hint && !errors[key] ? `${key}-hint` : null]
      .filter(Boolean)
      .join(" ");
    return {
      id: key,
      name: key,
      value: form[key],
      "aria-invalid": errors[key] ? true : undefined,
      "aria-describedby": describedBy || undefined,
      className: cn(
        inputClasses,
        errors[key]
          ? "border-accent-500 focus:border-accent-500 focus:ring-accent-500"
          : "border-surface-border focus:border-navy-600 focus:ring-navy-600"
      ),
    };
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;

    const nextErrors = validate(form);
    setErrors(nextErrors);

    const firstInvalid = fieldOrder.find((key) => nextErrors[key]);
    if (firstInvalid) {
      setStatus("idle");
      formRef.current?.querySelector<HTMLElement>(`#${firstInvalid}`)?.focus();
      return;
    }

    inFlight.current = true;
    setStatus("submitting");
    const payload: QuoteFormPayload = {
      ...form,
      name: form.name.trim(),
      company: form.company.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      location: form.location.trim(),
      message: form.message.trim(),
    };

    try {
      const result = await submitQuote(payload);
      if (!result.ok) {
        setStatus("error");
      } else if (result.delivered) {
        setSubmitted(payload);
        setForm(initialForm);
        setStatus("sent");
      } else {
        // Not delivered: keep what the visitor typed so nothing is lost.
        setSubmitted(payload);
        setStatus("not-sent");
      }
    } catch {
      setStatus("error");
    } finally {
      inFlight.current = false;
    }
  }

  const errorCount = Object.keys(errors).length;

  if (status === "sent" && submitted) {
    return (
      <div className="flex flex-col items-center rounded-xl border border-surface-border bg-white p-10 text-center" role="status">
        <CheckCircle2 className="h-10 w-10 text-accent-500" aria-hidden="true" />
        <h2 ref={resultHeadingRef} tabIndex={-1} className="mt-4 text-lg font-semibold text-navy-950 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0">
          Request sent
        </h2>
        <p className="mt-2 max-w-sm text-sm text-ink-muted">
          Thank you, {submitted.name}. Our team will review your requirement and
          contact you at {submitted.email} or {submitted.phone}.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded text-sm font-semibold text-accent-600 hover:text-accent-700"
        >
          Submit another request
        </button>
      </div>
    );
  }

  if (status === "not-sent" && submitted) {
    return (
      <div className="rounded-xl border border-surface-border bg-white p-6 sm:p-8" role="status">
        <h2 ref={resultHeadingRef} tabIndex={-1} className="text-lg font-semibold text-navy-950 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0">
          One more step: send your request by email
        </h2>
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-muted">
          Online form submission isn&apos;t connected on this website yet, so
          your details have <strong className="font-semibold text-navy-950">not</strong>{" "}
          been sent. We&apos;ve prepared an email with everything you entered —
          send it to {siteConfig.email}, or call us directly.
        </p>

        <dl className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 rounded-lg bg-surface-subtle p-5 text-sm sm:grid-cols-2">
          {[
            ["Service", submitted.serviceRequired],
            ["Location", submitted.location],
            ["Company", submitted.company],
            ["Contact", `${submitted.name} · ${submitted.phone}`],
          ].map(([term, value]) => (
            <div key={term} className="min-w-0">
              <dt className="text-xs font-medium uppercase tracking-wide text-ink-soft">{term}</dt>
              <dd className="mt-0.5 break-words text-navy-950">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={buildMailto(submitted)}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-accent-600"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email this request
          </a>
          <a
            href={telHref(siteConfig.phone)}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-surface-border px-6 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-surface-subtle"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call {siteConfig.phone}
          </a>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="rounded px-2 py-3 text-sm font-semibold text-ink-muted hover:text-navy-950"
          >
            Edit details
          </button>
        </div>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      aria-busy={submitting}
      aria-describedby="quote-form-note"
      className="rounded-xl border border-surface-border bg-white p-6 sm:p-8"
    >
      {errorCount > 0 ? (
        <div
          role="alert"
          className="mb-6 flex items-start gap-2.5 rounded-md border border-accent-100 bg-accent-50 px-4 py-3 text-sm text-accent-700"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          {errorCount === 1
            ? "One field needs your attention before you continue."
            : `${errorCount} fields need your attention before you continue.`}
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" required error={errors.name}>
          <input {...fieldProps("name")} type="text" autoComplete="name" required
            onChange={(e) => updateField("name", e.target.value)} />
        </Field>

        <Field id="company" label="Company / Society" required error={errors.company}>
          <input {...fieldProps("company")} type="text" autoComplete="organization" required
            onChange={(e) => updateField("company", e.target.value)} />
        </Field>

        <Field id="phone" label="Phone" required error={errors.phone}>
          <input {...fieldProps("phone")} type="tel" inputMode="tel" autoComplete="tel" required
            onChange={(e) => updateField("phone", e.target.value)} />
        </Field>

        <Field id="email" label="Email" required error={errors.email}>
          <input {...fieldProps("email")} type="email" autoComplete="email" required
            onChange={(e) => updateField("email", e.target.value)} />
        </Field>

        <Field id="serviceRequired" label="Service Required" required error={errors.serviceRequired}>
          <div className="relative">
            <select {...fieldProps("serviceRequired")} required
              onChange={(e) => updateField("serviceRequired", e.target.value)}
              className={cn(fieldProps("serviceRequired").className, "appearance-none pr-10")}
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service.slug} value={service.title}>
                  {service.title}
                </option>
              ))}
              <option value="Other / Not sure">Other / Not sure</option>
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft"
              aria-hidden="true"
            />
          </div>
        </Field>

        <Field id="location" label="Site Location" required error={errors.location} hint="City or site address">
          <input {...fieldProps("location", true)} type="text" autoComplete="address-level2" required
            onChange={(e) => updateField("location", e.target.value)} />
        </Field>
      </div>

      <div className="mt-5">
        <Field id="message" label="Requirement details" hint="Number of personnel, shift pattern, site type, start date — anything that helps us scope the proposal.">
          <textarea {...fieldProps("message", true)} rows={5} maxLength={2000}
            onChange={(e) => updateField("message", e.target.value)}
            className={cn(fieldProps("message").className, "resize-y")}
          />
        </Field>
      </div>

      {status === "error" ? (
        <div role="alert" className="mt-5 flex items-start gap-2.5 rounded-md border border-accent-100 bg-accent-50 px-4 py-3 text-sm text-accent-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>
            We couldn&apos;t submit your request. Please try again, or email{" "}
            <a href={`mailto:${siteConfig.email}`} className="font-semibold underline">
              {siteConfig.email}
            </a>
            .
          </span>
        </div>
      ) : null}

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-accent-600 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin motion-reduce:animate-none" aria-hidden="true" />
              {QUOTE_SUBMISSION_CONNECTED ? "Submitting…" : "Checking…"}
            </>
          ) : QUOTE_SUBMISSION_CONNECTED ? (
            "Submit Request"
          ) : (
            "Continue to Send"
          )}
        </button>
        <p className="text-xs text-ink-soft sm:text-right">
          <span className="text-accent-600" aria-hidden="true">*</span> Required fields
        </p>
      </div>

      <p id="quote-form-note" className="mt-4 border-t border-surface-border pt-4 text-xs leading-relaxed text-ink-soft">
        {QUOTE_SUBMISSION_CONNECTED
          ? "We use your details only to respond to this enquiry."
          : `Online submission is being set up. After you continue, we'll prepare an email with your details for you to send to ${siteConfig.email}. We use your details only to respond to this enquiry.`}
      </p>
    </form>
  );
}
