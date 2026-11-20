import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/utils/site-config";

/**
 * Fixed "WhatsApp" button in the bottom-right corner of every page. Opens a
 * chat with the OSSF number (siteConfig.whatsapp) with a short opening line
 * already typed. Rendered once, in app/layout.tsx.
 */
export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-md border border-line bg-panel px-4 py-3 text-sm font-semibold text-ink shadow-card transition-colors hover:border-ink/40 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-5 w-5 text-[#128C7E]" aria-hidden="true" />
      WhatsApp
      <span className="sr-only"> us (opens in a new tab)</span>
    </a>
  );
}
