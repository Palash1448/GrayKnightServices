import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicy,
  head: () => ({
    meta: [
      { title: "Privacy Policy — Grey Knight Services LLP" },
      { name: "description", content: "Privacy Policy and information handling practices for Grey Knight Services LLP." },
    ],
  }),
});

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <div>
        <Header />

        <main className="relative pt-28 pb-24 lg:pt-36 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 grid-lines opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)] pointer-events-none" />
          
          <div className="relative mx-auto max-w-4xl px-6 lg:px-10">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-muted-foreground mb-8">
              <span className="w-8 h-px bg-primary" />
              Effective Date: July 17, 2026
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] mb-12">
              Privacy <span className="gold-text italic">Policy</span>
            </h1>

            <div className="prose prose-invert max-w-none space-y-10 text-muted-foreground leading-relaxed">
              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl text-foreground border-b border-border/40 pb-2">1. Overview</h2>
                <p>
                  Grey Knight Services LLP ("we," "us," or "our"), registered in Maharashtra, India, is committed to protecting the privacy of our clients, website visitors, and partners. This Privacy Policy details how we handle information obtained through our website and business interactions.
                </p>
                <p>
                  As a boutique consultancy offering software engineering, IT advisory, and technical consulting, our model relies on direct relationships. We do not use user data for automated profiling, tracking funnels, or advertising.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl text-foreground border-b border-border/40 pb-2">2. Information We Collect</h2>
                <p>
                  We limit data collection to the minimum required to conduct professional advisory services. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Contact Details:</strong> Information you voluntarily share when contacting us via email, phone, or direct correspondence (such as name, email address, phone number, and organization).</li>
                  <li><strong>Client Engagement Data:</strong> Files, requirements, and communication history shared in the scope of our software engineering or IT consulting agreements.</li>
                  <li><strong>Technical Server Logs:</strong> Standard server logs captured by hosting systems (IP address, browser type, and timestamps) solely for security, diagnostic, and platform performance monitoring.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl text-foreground border-b border-border/40 pb-2">3. How We Use Your Information</h2>
                <p>
                  Your information is utilized exclusively for running our business and delivering our services:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To respond to your inquiries, schedule consults, and negotiate services.</li>
                  <li>To fulfill, manage, and execute contracts for software engineering and advisory.</li>
                  <li>To comply with regulatory obligations, including tax, corporate, and MSME reporting rules in India.</li>
                  <li>To secure and maintain the integrity of our digital consulting systems.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl text-foreground border-b border-border/40 pb-2">4. Data Sharing and Retention</h2>
                <p>
                  We treat client information with absolute confidentiality:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>No Third-Party Sharing:</strong> We do not sell, rent, trade, or share your personal data with third-party marketing companies.</li>
                  <li><strong>Legal Compliance:</strong> We may disclose information if required to do so by applicable laws, court orders, or regulations from Indian government authorities.</li>
                  <li><strong>Retention:</strong> We retain contact details and communication archives only as long as necessary to fulfill project requirements, manage business relationships, or satisfy legal records-retention requirements.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl text-foreground border-b border-border/40 pb-2">5. Data Security</h2>
                <p>
                  We implement industry-standard administrative and technical security measures to protect project archives and personal communications from unauthorized access, loss, or alteration. However, please be aware that no method of transmission over the internet or electronic storage is completely secure.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl text-foreground border-b border-border/40 pb-2">6. Your Rights</h2>
                <p>
                  You have the right to request access to, correction of, or deletion of the personal information you have shared with us. To exercise these rights, please contact us using the details below.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl text-foreground border-b border-border/40 pb-2">7. Contact Information</h2>
                <p>
                  For questions regarding this policy or our data practices, please reach out to us:
                </p>
                <address className="not-italic text-foreground bg-surface border border-border p-6 rounded-sm mt-4 space-y-1 max-w-md">
                  <div className="font-medium">Grey Knight Services LLP</div>
                  <div>First Floor, Sudershan Heights, Damani Nagar,</div>
                  <div>Solapur, Maharashtra 413001, India</div>
                  <div>Email: <a href="mailto:maulizambare86@gmail.com" className="text-primary hover:underline">maulizambare86@gmail.com</a></div>
                  <div>Tel: <a href="tel:+919922370485" className="text-primary hover:underline">+91 99223 70485</a></div>
                </address>
              </section>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
