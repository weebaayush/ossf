// Submission abstraction for the Request a Quote form.
//
// No backend/database exists yet. This function is the single seam to wire up
// once the client picks a provider (e.g. an email API route, Formspree, Resend,
// Google Sheets webhook). Every other component only ever imports `submitQuote`
// from here, so switching providers later means editing this one file.

/**
 * `false` (current): the form works by email — "Email this request" opens the
 * visitor's email app with the request filled in, addressed to OSSF, and the
 * visitor presses Send. Nothing is sent by the website itself.
 * `true`: the form posts through `submitQuote` below. Flip this only once
 * `submitQuote` actually delivers enquiries (and update the Privacy Policy).
 */
export const QUOTE_SUBMISSION_CONNECTED = false;

export type QuoteFormPayload = {
  name: string;
  company: string;
  phone: string;
  email: string;
  serviceRequired: string;
  location: string;
  message: string;
};

export type SubmitQuoteResult =
  // `delivered` tells the UI whether the enquiry actually reached OSSF. If it
  // is `false`, the form falls back to the email flow instead of claiming success.
  { ok: true; delivered: boolean } | { ok: false; error: string };

export async function submitQuote(payload: QuoteFormPayload): Promise<SubmitQuoteResult> {
  // TODO(client/dev): replace this stub with a real submission call, e.g.:
  //   const res = await fetch("/api/request-quote", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(payload),
  //   });
  //   if (!res.ok) return { ok: false, error: "Submission failed. Please try again." };
  //   return { ok: true, delivered: true };

  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.log("[submitQuote] payload (no backend wired yet):", payload);
  }

  await new Promise((resolve) => setTimeout(resolve, 400));

  // Nothing was sent anywhere — be explicit so the UI stays truthful.
  return { ok: true, delivered: false };
}
