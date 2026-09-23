import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { LegalDocument } from "@/components/sections/LegalDocument";
import { buildMetadata } from "@/lib/utils/seo";
import { siteConfig } from "@/lib/utils/site-config";

// Update this date whenever the text below changes.
//
// MAINTAINERS: this policy describes the website as currently built — the
// Request a Quote form is NOT connected to any backend or third-party provider
// (see lib/utils/submit-quote.ts). When a real form/email provider, analytics
// or any other data-processing service is added, review and update this policy
// to name that provider and describe how the data is handled.
const LAST_UPDATED = "23 September 2026";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.name} (${siteConfig.shortName}) handles information shared through its website and enquiries.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const { name, shortName, email } = siteConfig;

  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <LegalDocument
        lastUpdated={LAST_UPDATED}
        intro={
          <p>
            This policy explains what information {name} (&ldquo;{shortName}
            &rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) may receive through this
            website and how we use it. We only use the information you choose to
            share with us for purposes connected with your enquiry.
          </p>
        }
      >
        <h2>1. Information you provide</h2>
        <p>
          When you contact us or fill in our enquiry form, you may share
          information such as:
        </p>
        <ul>
          <li>your name;</li>
          <li>phone number;</li>
          <li>email address;</li>
          <li>company, society or organisation name;</li>
          <li>site location and service requirements; and</li>
          <li>any other details you choose to include in your enquiry.</li>
        </ul>
        <p>
          Please share only what is needed to describe your requirement. We do
          not ask for sensitive personal information through this website.
        </p>

        <h2>2. How the enquiry form currently works</h2>
        <p>
          Our <Link href="/request-a-quote" className="font-medium text-navy-950 underline hover:text-accent-600">Request a Quote</Link>{" "}
          form is not yet connected to an online submission service. When you
          complete it, the website checks your details in your browser and then
          prepares an email for you to send to {email} using your own email
          app. The website itself does not store your form details in a
          database and does not send them to any third-party form, CRM,
          analytics or marketing service.
        </p>
        <p>
          Your information reaches {shortName} only when you send that email,
          email us directly or call us.
        </p>

        <h2>3. How we use your information</h2>
        <p>We use the information you share for legitimate enquiry-related purposes, namely to:</p>
        <ul>
          <li>respond to your enquiry;</li>
          <li>understand your security or facility management requirements;</li>
          <li>contact you about your enquiry;</li>
          <li>verify relevant information when we are evaluating or working on the requested service;</li>
          <li>discuss potential services with you; and</li>
          <li>prepare or evaluate a potential service engagement.</li>
        </ul>
        <p>
          We do not sell your information, and we do not use it for unrelated
          marketing or profiling.
        </p>

        <h2>4. Sharing</h2>
        <p>
          Your information is shared only with {shortName} staff who need it to
          handle your enquiry, and otherwise only where required by law.
        </p>

        <h2>5. Retention</h2>
        <p>
          We keep enquiry information only for as long as it is reasonably
          needed for the purposes above, including any ongoing discussion or
          service relationship, or where we are required to keep it by law.
        </p>

        <h2>6. Technical information and cookies</h2>
        <p>
          This website does not use analytics or advertising trackers, and does
          not set its own cookies. Like most websites, the server that hosts it
          may automatically record basic technical information (such as IP
          address, browser type and pages requested) in standard logs used to
          keep the website running securely.
        </p>
        <p>
          Our <Link href="/contact" className="font-medium text-navy-950 underline hover:text-accent-600">Contact</Link>{" "}
          page shows an embedded Google Map. When that page loads, Google may
          collect information and set cookies under Google&apos;s own privacy
          policy.
        </p>

        <h2>7. Your choices</h2>
        <p>
          You can ask us to access, correct or delete the enquiry information
          you have shared with us, or to stop contacting you, by using the
          contact details below. We will respond in line with applicable law.
        </p>

        <h2>8. Changes to this policy</h2>
        <p>
          We may update this policy when our website or practices change — for
          example, when an online form submission or email service is connected.
          When that happens, this page will be updated to identify the service
          used and how the information is handled, and the &ldquo;Last
          updated&rdquo; date above will change.
        </p>
      </LegalDocument>
    </>
  );
}
