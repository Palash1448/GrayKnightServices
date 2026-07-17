import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/terms-and-conditions")({
  component: TermsAndConditions,
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Grey Knight Services LLP" },
      { name: "description", content: "Terms and conditions governing consulting and software engineering services provided by Grey Knight Services LLP." },
    ],
  }),
});

function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <div>
        <Header />

        <main className="relative pt-28 pb-24 lg:pt-36 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 grid-lines opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)] pointer-events-none" />
          
          <div className="relative mx-auto max-w-4xl px-6 lg:px-10">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-muted-foreground mb-8">
              <span className="w-8 h-px bg-primary" />
              Last Updated: July 17, 2026
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] mb-12">
              Terms & <span className="gold-text italic">Conditions</span>
            </h1>

            <div className="prose prose-invert max-w-none space-y-10 text-muted-foreground leading-relaxed">
              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl text-foreground border-b border-border/40 pb-2">1. Agreement to Terms</h2>
                <p>
                  These Terms & Conditions govern your access to and use of the website and services provided by Grey Knight Services LLP ("we," "us," or "our"), a Limited Liability Partnership registered under the laws of India. By accessing this website or engaging our professional activities, you agree to comply with and be bound by these terms.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl text-foreground border-b border-border/40 pb-2">2. Scope of Services</h2>
                <p>
                  We provide professional computer programming, information technology consultancy, software engineering, and scientific/technical advisory services. 
                </p>
                <p>
                  All project engagements, milestones, deliverables, and fees are defined by separate, written Master Service Agreements (MSAs) or Statements of Work (SOWs) executed directly between us and the client. The terms of those specific contracts take precedence over these general website terms.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl text-foreground border-b border-border/40 pb-2">3. Intellectual Property</h2>
                <p>
                  Unless otherwise specified:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Our Content:</strong> All proprietary design assets, source code, logos, layouts, and copy presented on this website are the intellectual property of Grey Knight Services LLP and are protected by Indian and international copyright laws.</li>
                  <li><strong>Deliverables:</strong> Intellectual property rights concerning custom software, designs, or systems built for our clients are governed explicitly by the terms of our client-specific contract/SOW.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl text-foreground border-b border-border/40 pb-2">4. Acceptable Website Use</h2>
                <p>
                  You agree to use this website solely for legitimate purposes related to exploring or engaging our services. You are prohibited from:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Engaging in any action that causes or may cause disruption, damage, or impairment to the performance or security of the website.</li>
                  <li>Attempting to scrape, copy, modify, or reverse-engineer any portion of the site's layout, brand emblems, or assets.</li>
                  <li>Transmitting unauthorized commercial communications (spam) or malware through our contact channels.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl text-foreground border-b border-border/40 pb-2">5. Disclaimer of Warranties</h2>
                <p>
                  This website is provided on an "as-is" and "as-available" basis. While we strive to ensure the accuracy of the information presented on our site, we make no representations or warranties of any kind, express or implied, regarding the website's completeness, reliability, or availability.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl text-foreground border-b border-border/40 pb-2">6. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by applicable law, Grey Knight Services LLP shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your access to or use of this website. Our liability regarding specific consulting services is limited strictly by our service agreements with each client.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl text-foreground border-b border-border/40 pb-2">7. Governing Law & Jurisdiction</h2>
                <p>
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms or use of the website shall be subject to the exclusive jurisdiction of the courts located in Solapur, Maharashtra, India.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl text-foreground border-b border-border/40 pb-2">8. Modifications</h2>
                <p>
                  We reserve the right to revise these Terms & Conditions at any time. Any changes will be posted on this page with an updated "Last Updated" date. Continued use of the website after such changes constitute your acceptance of the revised terms.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl text-foreground border-b border-border/40 pb-2">9. Contact Us</h2>
                <p>
                  If you have any questions or require clarification regarding these terms, please contact us:
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
