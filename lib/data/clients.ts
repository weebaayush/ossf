// The company profile references 100+ client relationships, but no approved
// public list of client names/logos has been supplied for the website.
// This file intentionally holds placeholder slots only — replace with real,
// client-approved names/logos before launch. Do not publish names that have
// not been explicitly cleared for public display.

export type ClientSlot = {
  placeholder: true;
};

export const clientLogoSlots: ClientSlot[] = Array.from({ length: 12 }, () => ({
  placeholder: true,
}));

export const clientShowcaseNote =
  "[CLIENT CONFIRMATION REQUIRED — approved client names/logos for public display]";
