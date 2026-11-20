// Submission for the Request a Quote form.
//
// Enquiries are sent through Netlify Forms, which is part of the hosting the
// site already uses: no extra account, key or dependency. Netlify stores each
// submission in the site dashboard (Forms) and emails it to the address set
// there under Forms > Form notifications.
//
// How it fits together:
//   - public/__forms.html declares the form so Netlify registers it at deploy.
//   - `submitQuote` below posts the visitor's details to that file's address.
//   - If the post fails for any reason (Netlify form detection switched off,
//     network error, local development), `delivered` is false and the form
//     falls back to opening the visitor's email app, so an enquiry is never
//     shown as sent when it was not.
//
// One-time setup in the Netlify dashboard (see README, "Quote form"):
//   1. Forms > enable form detection, then redeploy.
//   2. Forms > Form notifications > add an email notification to the OSSF mailbox.
//
// Every other component only imports from here, so changing provider later
// means editing this one file.

/** Name of the form as registered with Netlify (must match public/__forms.html). */
const FORM_NAME = "quote-request";
/** Address of the static file that carries the form definition. */
const FORM_ENDPOINT = "/__forms.html";

/**
 * `true`: the form posts through `submitQuote` and shows "Request sent" only
 * when the post succeeds; otherwise it falls back to the email app.
 * `false`: the form always opens the visitor's email app and sends nothing
 * itself. Set this to `false` to switch online submission off.
 */
export const QUOTE_SUBMISSION_CONNECTED = true;

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
  const body = new URLSearchParams({ "form-name": FORM_NAME, ...payload });

  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });
    return { ok: true, delivered: response.ok };
  } catch {
    // Offline or blocked: let the form fall back to the email app.
    return { ok: true, delivered: false };
  }
}
