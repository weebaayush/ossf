"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { services } from "@/lib/data/services";
import { submitQuote, type QuoteFormPayload } from "@/lib/utils/submit-quote";
import { cn } from "@/lib/utils/cn";

type Status = "idle" | "submitting" | "success" | "error";

const initialForm: QuoteFormPayload = {
  name: "",
  company: "",
  phone: "",
  email: "",
  serviceRequired: "",
  location: "",
  message: "",
};

const inputClasses =
  "w-full rounded-md border border-surface-border bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink-soft focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500";

const labelClasses = "mb-1.5 block text-sm font-medium text-navy-950";

export function RequestQuoteForm() {
  const [form, setForm] = useState<QuoteFormPayload>(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormPayload, string>>>({});

  function updateField<K extends keyof QuoteFormPayload>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): boolean {
    const nextErrors: Partial<Record<keyof QuoteFormPayload, string>> = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.company.trim()) nextErrors.company = "Please enter your company name.";
    if (!form.phone.trim()) nextErrors.phone = "Please enter a contact number.";
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.serviceRequired) nextErrors.serviceRequired = "Please select a service.";
    if (!form.location.trim()) nextErrors.location = "Please enter the site location.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    const result = await submitQuote(form);

    if (result.ok) {
      setStatus("success");
      setForm(initialForm);
    } else {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-xl border border-surface-border bg-white p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-accent-500" aria-hidden="true" />
        <h3 className="mt-4 text-lg font-semibold text-navy-950">
          Request received
        </h3>
        <p className="mt-2 max-w-sm text-sm text-ink-muted">
          Thank you — our team will review your requirements and get back to
          you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-accent-600 hover:text-accent-700"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-xl border border-surface-border bg-white p-6 sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name <span className="text-accent-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            className={inputClasses}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? (
            <p id="name-error" className="mt-1.5 text-xs text-accent-600">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="company" className={labelClasses}>
            Company <span className="text-accent-500">*</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={(e) => updateField("company", e.target.value)}
            className={inputClasses}
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "company-error" : undefined}
          />
          {errors.company ? (
            <p id="company-error" className="mt-1.5 text-xs text-accent-600">
              {errors.company}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone <span className="text-accent-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className={inputClasses}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone ? (
            <p id="phone-error" className="mt-1.5 text-xs text-accent-600">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email <span className="text-accent-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={inputClasses}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <p id="email-error" className="mt-1.5 text-xs text-accent-600">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="serviceRequired" className={labelClasses}>
            Service Required <span className="text-accent-500">*</span>
          </label>
          <select
            id="serviceRequired"
            name="serviceRequired"
            value={form.serviceRequired}
            onChange={(e) => updateField("serviceRequired", e.target.value)}
            className={cn(inputClasses, "appearance-none bg-white")}
            aria-invalid={Boolean(errors.serviceRequired)}
            aria-describedby={errors.serviceRequired ? "service-error" : undefined}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Other">Other / Not sure</option>
          </select>
          {errors.serviceRequired ? (
            <p id="service-error" className="mt-1.5 text-xs text-accent-600">
              {errors.serviceRequired}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="location" className={labelClasses}>
            Location <span className="text-accent-500">*</span>
          </label>
          <input
            id="location"
            name="location"
            type="text"
            placeholder="City / site address"
            value={form.location}
            onChange={(e) => updateField("location", e.target.value)}
            className={inputClasses}
            aria-invalid={Boolean(errors.location)}
            aria-describedby={errors.location ? "location-error" : undefined}
          />
          {errors.location ? (
            <p id="location-error" className="mt-1.5 text-xs text-accent-600">
              {errors.location}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your requirement — number of personnel, shift pattern, site type, etc."
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          className={cn(inputClasses, "resize-none")}
        />
      </div>

      {status === "error" ? (
        <div className="mt-5 flex items-center gap-2 rounded-md bg-accent-50 px-4 py-3 text-sm text-accent-700">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          Something went wrong submitting your request. Please try again.
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-600 disabled:pointer-events-none disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Submitting...
          </>
        ) : (
          "Submit Request"
        )}
      </button>
      <p className="mt-3 text-xs text-ink-soft">
        Fields marked <span className="text-accent-500">*</span> are required.
        We use your details only to respond to this enquiry.
      </p>
    </form>
  );
}
