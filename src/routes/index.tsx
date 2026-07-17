import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-knight.jpg";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { property: "og:image", content: "https://id-preview--12ebf94e-a34b-449c-acd7-7befe4c3df5f.lovable.app/og.jpg" },
    ],
  }),
});

const services = [
  {
    n: "01",
    title: "Software Engineering",
    body: "Custom applications, platform modernization and product engineering built with disciplined architecture.",
  },
  {
    n: "02",
    title: "IT Consulting",
    body: "Advisory across infrastructure, cloud strategy and digital transformation for growing enterprises.",
  },
  {
    n: "03",
    title: "Information Services",
    body: "Data pipelines, analytics enablement and information systems that turn operations into intelligence.",
  },
  {
    n: "04",
    title: "Technical Advisory",
    body: "Professional, scientific and technical guidance for teams navigating complex technology decisions.",
  },
];

const stats = [
  { k: "2020", v: "Established" },
  { k: "12+", v: "Specialists" },
  { k: "MSME", v: "Certified" },
  { k: "IN", v: "Solapur, MH" },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <Header isHome />

      {/* Hero */}
      <section className="relative pt-28 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-muted-foreground mb-8">
              <span className="w-8 h-px bg-primary" />
              Est. 2020 · Maharashtra, India
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02]">
              Strategy, engineered.
              <br />
              <span className="gold-text italic">Technology, delivered.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Grey Knight Services LLP is a technology consultancy for organizations that treat
              software as a strategic asset. We architect, build and steward the systems that
              move your business forward.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm text-sm font-medium hover:opacity-90 transition"
              >
                Start a conversation
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-foreground border-b border-transparent hover:border-primary/60 pb-1 transition"
              >
                Explore capabilities
              </a>
            </div>

            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl gold-text">{s.k}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-border">
              <img
                src={heroImg}
                alt="Chess knight sculpted in chrome and gold — Grey Knight brand emblem"
                width={1600}
                height={1408}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden lg:block bg-surface border border-border p-5 max-w-[240px]">
              <div className="text-xs uppercase tracking-widest text-primary">Udyam Certified</div>
              <div className="mt-2 text-sm text-muted-foreground">UDYAM-MH-32-0015138 · Government of India</div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee-ish tagline */}
      <section className="border-y border-border py-6 bg-surface/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-wrap items-center justify-between gap-6 text-sm text-muted-foreground">
          <span className="font-display italic text-lg text-foreground/90">"Our small hands to make you large."</span>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-xs uppercase tracking-[0.25em]">
            <span>Software</span>
            <span className="text-primary">/</span>
            <span>Consulting</span>
            <span className="text-primary">/</span>
            <span>Information Services</span>
            <span className="text-primary">/</span>
            <span>Advisory</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-5">
              <div className="text-xs uppercase tracking-[0.28em] text-primary mb-5">Capabilities</div>
              <h2 className="font-display text-4xl lg:text-5xl leading-tight">
                Four disciplines. One standard of craft.
              </h2>
            </div>
            <p className="lg:col-span-6 lg:col-start-7 text-muted-foreground text-lg leading-relaxed self-end">
              We work as an embedded partner, not a vendor. Each engagement is small by design,
              senior by default, and measured by the durability of what we leave behind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            {services.map((s) => (
              <article
                key={s.n}
                className="group bg-background p-10 lg:p-12 hover:bg-surface transition-colors"
              >
                <div className="flex items-baseline justify-between mb-8">
                  <span className="font-display text-2xl gold-text">{s.n}</span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground group-hover:text-primary transition">
                    Service
                  </span>
                </div>
                <h3 className="font-display text-3xl mb-4">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="py-28 lg:py-36 bg-surface/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-primary mb-5">The Approach</div>
            <h2 className="font-display text-4xl lg:text-5xl leading-tight mb-8">
              Move like a knight. <span className="italic gold-text">Never straight.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A knight's advantage is angle — the ability to reach where others cannot. We bring
              that same instinct to complex technology problems: pattern first, then precision.
            </p>
          </div>

          <ol className="space-y-8">
            {[
              ["Listen", "We start with the business, not the stack. What are you optimizing for?"],
              ["Architect", "A written plan before a written line of code. Trade-offs made explicit."],
              ["Build", "Small teams, senior engineers, weekly demos. No dark rooms, no surprises."],
              ["Steward", "Systems that survive their creators. Documentation, tests and handover."],
            ].map(([title, body], i) => (
              <li key={title} className="flex gap-6 pb-8 border-b border-border last:border-0 last:pb-0">
                <div className="font-display text-2xl gold-text w-10 shrink-0">0{i + 1}</div>
                <div>
                  <h4 className="font-display text-2xl mb-2">{title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.28em] text-primary mb-5">About the firm</div>
            <h2 className="font-display text-4xl lg:text-5xl leading-tight">
              A small firm with a long view.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              Founded in December 2020 in Solapur, Maharashtra, Grey Knight Services LLP is a
              registered Limited Liability Partnership serving clients across India and beyond.
              We are recognized by the Government of India's Ministry of MSME.
            </p>
            <p>
              Our team of twelve specialists works across computer programming, IT consultancy,
              information services and other professional, scientific and technical activities —
              the disciplines that make modern business run.
            </p>
            <dl className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Registration</dt>
                <dd className="mt-1 text-foreground">LLP · MSME Micro</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Udyam No.</dt>
                <dd className="mt-1 text-foreground">UDYAM-MH-32-0015138</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Founded</dt>
                <dd className="mt-1 text-foreground">15 December 2020</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Team</dt>
                <dd className="mt-1 text-foreground">12 Specialists</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 lg:py-36 bg-surface/40 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.28em] text-primary mb-5">Engage</div>
            <h2 className="font-display text-5xl lg:text-6xl leading-tight mb-8">
              Let's discuss what you're building.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              Whether you have a defined brief or an unshaped ambition, we're glad to think it
              through with you. Reach us directly — no forms, no funnels.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border">
            <div className="bg-background p-8">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Email</div>
              <a href="mailto:maulizambare86@gmail.com" className="font-display text-xl hover:text-primary transition break-all">
                maulizambare86@gmail.com
              </a>
            </div>
            <div className="bg-background p-8">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Telephone</div>
              <a href="tel:+919922370485" className="font-display text-xl hover:text-primary transition">
                +91 99223 70485
              </a>
            </div>
            <div className="bg-background p-8">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Office</div>
              <p className="text-foreground/90 leading-relaxed">
                First Floor, Sudershan Heights,<br />
                Damani Nagar, Solapur,<br />
                Maharashtra 413001
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
