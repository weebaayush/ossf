export type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Why OSSF", href: "/why-ossf" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavLink[] = [
  ...primaryNav,
  { label: "Compliance", href: "/compliance" },
];
