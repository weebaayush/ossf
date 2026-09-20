// Submission abstraction for the Request a Quote form.
//
// No backend/database exists yet. This function is the single seam to wire up
// once the client picks a provider (e.g. an email API route, Formspree, Resend,
// Google Sheets webhook). Every other component only ever imports `submitQuote`
// from here, so switching providers later means editing this one file.

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
  | { ok: true }
  | { ok: false; error: string };

export async function submitQuote(
  payload: QuoteFormPayload
): Promise<SubmitQuoteResult> {
  // TODO(client/dev): replace this stub with a real submission call, e.g.:
  //   const res = await fetch("/api/request-quote", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(payload),
  //   });
  //   if (!res.ok) return { ok: false, error: "Submission failed. Please try again." };
  //   return { ok: true };

  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.log("[submitQuote] payload (no backend wired yet):", payload);
  }

  await new Promise((resolve) => setTimeout(resolve, 600));

  return { ok: true };
}
