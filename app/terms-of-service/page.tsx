import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { LegalDocument } from "@/components/sections/LegalDocument";
import { buildMetadata } from "@/lib/utils/seo";
import { siteConfig } from "@/lib/utils/site-config";

// Update this date whenever the text below changes.
const LAST_UPDATED = "23 September 2026";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description: `Terms and conditions for using the ${siteConfig.name} (${siteConfig.shortName}) website and submitting enquiries.`,
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  const { name, shortName } = siteConfig;

  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" />
      <LegalDocument
        lastUpdated={LAST_UPDATED}
        intro={
          <p>
            These terms apply to your use of this website, operated by {name}{" "}
            (&ldquo;{shortName}&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). By
            using the website you agree to them. If you do not agree, please do
            not use the website.
          </p>
        }
      >
        <h2>1. Purpose of this website</h2>
        <p>
          This website provides general information about {shortName} and the
          security and facility management services we offer. Its content is
          provided for general business and informational purposes only and
          does not constitute professional, legal or security advice for any
          specific site or situation.
        </p>

        <h2>2. Enquiries do not create a service agreement</h2>
        <p>
          You can contact us or send an enquiry through this website, by email
          or by phone. Submitting an enquiry:
        </p>
        <ul>
          <li>does not create a service agreement or any other contract;</li>
          <li>does not automatically engage {shortName} to provide any service; and</li>
          <li>does not oblige you or {shortName} to proceed further.</li>
        </ul>
        <p>
          An enquiry is only the start of a conversation about your
          requirements.
        </p>

        <h2>3. Quotations and service arrangements</h2>
        <p>
          Nothing on this website is a binding quotation, offer or service
          contract unless it is separately confirmed by {shortName}. Final
          service arrangements — including pricing, scope of work, manpower,
          deployment, shift structure and contractual terms — are agreed
          separately between {shortName} and the client, based on the
          client&apos;s specific requirements.
        </p>

        <h2>4. Service availability</h2>
        <p>
          The services, sectors and regions described on this website indicate
          what {shortName} generally offers. Whether a particular service can be
          provided, and how it is deployed, depends on the client&apos;s
          requirements, the site location, operational feasibility and mutually
          agreed terms.
        </p>

        <h2>5. Information you provide</h2>
        <p>
          Please make sure the information you send us is accurate and that you
          are entitled to share it. Information submitted through the website
          or otherwise provided to us is subject to verification, particularly
          when we are evaluating or preparing a potential service engagement.
          How we handle that information is described in our{" "}
          <Link href="/privacy-policy" className="font-medium text-navy-950 underline hover:text-accent-600">
            Privacy Policy
          </Link>
          .
        </p>

        <h2>6. Website content and changes</h2>
        <p>
          We aim to keep the information on this website accurate and current,
          but we do not guarantee that it is complete or free of errors at all
          times. {shortName} may update, change or remove website content,
          including these terms, when appropriate and without prior notice. The
          &ldquo;Last updated&rdquo; date above shows when these terms were last
          revised.
        </p>

        <h2>7. Photographs</h2>
        <p>
          Some photographs on this website are licensed stock images used for
          illustration only. Unless stated otherwise, they do not depict{" "}
          {shortName} personnel, clients, sites or facilities.
        </p>

        <h2>8. Intellectual property</h2>
        <p>
          The text, layout and {shortName} name and branding on this website
          belong to {shortName}. Third-party photographs remain the property of
          their respective owners and are used under their licences. You may view
          and share pages of this website for your own reference, but you may
          not copy or reuse its content for commercial purposes without our
          written permission.
        </p>

        <h2>9. External links</h2>
        <p>
          This website may link to third-party websites or services (for
          example, map services). Those websites are outside {shortName}&apos;s
          control, and we are not responsible for their content, availability or
          privacy practices.
        </p>

        <h2>10. Limitation of liability</h2>
        <p>
          To the extent permitted by law, {shortName} is not liable for any loss
          or damage arising from the use of, or reliance on, the general
          information on this website. This does not affect any obligations set
          out in a separately agreed service contract.
        </p>

        <h2>11. Governing law</h2>
        <p>These terms are governed by the laws of India.</p>

        <h2>12. Questions</h2>
        <p>If you have any questions about these terms, please contact us using the details below.</p>
      </LegalDocument>
    </>
  );
}
