import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { contactSchema, sendToWeb3Forms, type ContactInput } from "@/lib/web3forms";
import portrait from "@/assets/portrait.jpg";
import clinic from "@/assets/clinic.jpg";
import before from "@/assets/scalp-before.jpg";
import after from "@/assets/scalp-after.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Sehar Ikram — Skin, Hair & Aesthetic Doctor" },
      { name: "description", content: "Meet Dr. Sehar Ikram, dermatologist and aesthetic doctor for skin and hair. Services, patient stories, career moments and skin-care advice." },
      { property: "og:title", content: "Dr. Sehar Ikram — Skin, Hair & Aesthetic Doctor" },
      { property: "og:description", content: "Healthy skin and hair, explained simply. Book a consultation with Dr. Sehar Ikram." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const services = [
  { t: "Skin Care", d: "Acne, pigmentation, melasma, scars and glow treatments — clear skin you feel confident in.", tags: ["Chemical peels", "Microneedling", "HydraFacial"] },
  { t: "Hair Restoration", d: "Hair fall, thinning and baldness treated at the root, from PRP to hair transplant.", tags: ["PRP", "Hair transplant", "Scalp care"] },
  { t: "Aesthetics", d: "Subtle, natural results that still look like you — never overdone.", tags: ["Botox", "Fillers", "Skin boosters"] },
  { t: "Dermatology", d: "Medical care for eczema, psoriasis, allergies, infections and every everyday skin concern.", tags: ["Eczema", "Psoriasis", "Allergies"] },
];

const journey = [
  ["2012", "Graduated in Medicine (MBBS)", "Where the journey began — and a fascination with skin started."],
  ["2017", "Specialised in Dermatology", "Years of hospital training in medical and clinical dermatology."],
  ["2019", "Hair Restoration Training", "Focused training in PRP, scalp health and hair transplant."],
  ["2022", "Opened her own clinic", "A calm, personal space for skin and hair care in Lahore."],
  ["Today", "Hospital doctor & clinic founder", "Treating patients in hospital while leading her own clinic."],
];

const reviews = [
  ["Ayesha K.", "Acne & scars", "I had tried everything for my acne. Dr. Sehar explained my skin to me like a friend would, and within months I stopped hiding my face."],
  ["Usman R.", "Hair restoration", "Honest from day one. She told me what would work and what wouldn't. My hair is back and so is my confidence."],
  ["Mehwish A.", "Pigmentation", "Very gentle, never pushy. The results look natural — people just say I look fresh."],
];

const posts = [
  ["Skin care", "5 min", "Why your sunscreen isn't working (and how to fix it)"],
  ["Hair", "4 min", "Hair fall after stress: when to worry, when to wait"],
  ["Aesthetics", "6 min", "Natural-looking fillers: what to ask before you book"],
];

const events = [
  ["Mar 2025", "Speaker", "National Dermatology Conference, Lahore"],
  ["Nov 2024", "Workshop", "Live PRP & scalp care training for doctors"],
  ["Jun 2024", "Awareness", "Free skin screening camp for the community"],
];

function Home() {
  const [open, setOpen] = useState(false);
  return (
    <main className="body2 overflow-x-hidden bg-cream text-plum">
      <Nav onBook={() => setOpen(true)} />
      <Hero onBook={() => setOpen(true)} />
      <Marquee />
      <About />
      <Services />
      <Results />
      <Journey />
      <Reviews />
      <Blog />
      <Cta onBook={() => setOpen(true)} />
      <Booking open={open} onClose={() => setOpen(false)} />
    </main>
  );
}

function Nav({ onBook }: { onBook: () => void }) {
  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-plum/10 bg-cream/80 px-5 py-3 backdrop-blur-md">
        <a href="#top" className="serif2 text-xl font-medium">Dr. Sehar<span className="text-rose">.</span></a>
        <nav className="hidden gap-7 text-sm font-medium md:flex">
          {[["About", "about"], ["Services", "services"], ["Journey", "journey"], ["Stories", "stories"], ["Blog", "blog"]].map(([l, h]) => (
            <a key={h} href={`#${h}`} className="transition hover:text-rose">{l}</a>
          ))}
        </nav>
        <button onClick={onBook} className="rounded-full bg-plum px-5 py-2 text-sm font-semibold text-cream transition hover:bg-rose">Book a visit</button>
      </div>
    </header>
  );
}

function Hero({ onBook }: { onBook: () => void }) {
  return (
    <section id="top" className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 md:pt-40">
      <div className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-blush blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[360px] w-[360px] rounded-full bg-gold/30 blur-3xl" />
      <div className="relative grid items-center gap-12 md:grid-cols-12">
        <div className="animate-rise md:col-span-7">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-plum/5 px-4 py-2 text-sm font-medium">
            <span className="h-2 w-2 rounded-full bg-rose" /> Dermatologist · Aesthetic Doctor · Lahore
          </p>
          <h1 className="serif2 text-6xl font-light sm:text-7xl lg:text-[8.5rem]">
            Healthy skin.<br />
            <em className="font-normal text-rose">Happy</em> hair.<br />
            Real you.
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-plum/70">
            Hi, I'm Dr. Sehar Ikram. I help people feel at home in their skin — with honest advice, gentle treatments and results that look natural.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button onClick={onBook} className="rounded-full bg-plum px-8 py-4 font-semibold text-cream shadow-xl shadow-plum/20 transition hover:-translate-y-0.5 hover:bg-rose">Book a consultation</button>
            <a href="#services" className="rounded-full border border-plum/20 px-8 py-4 font-semibold transition hover:border-plum">See treatments</a>
          </div>
          <div className="mt-14 flex gap-10">
            {[["10+", "Years in medicine"], ["5,000+", "Happy patients"], ["2", "Hospital & own clinic"]].map(([n, l]) => (
              <div key={l}><p className="serif2 text-4xl">{n}</p><p className="mt-1 text-xs uppercase tracking-wider text-plum/60">{l}</p></div>
            ))}
          </div>
        </div>
        <div className="relative animate-rise md:col-span-5" style={{ animationDelay: ".2s" }}>
          <div className="overflow-hidden rounded-t-full border-8 border-cream bg-blush shadow-2xl shadow-plum/20">
            <img src={portrait} alt="Dr. Sehar Ikram" width={832} height={1152} className="aspect-[3/4] w-full object-cover" />
          </div>
          <div className="absolute -left-10 top-16 grid h-32 w-32 place-items-center">
            <svg viewBox="0 0 100 100" className="animate-spin-slow absolute inset-0">
              <defs><path id="c" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" /></defs>
              <text className="fill-plum text-[10px] font-semibold uppercase tracking-[0.2em]"><textPath href="#c">Skin · Hair · Confidence · Care ·</textPath></text>
            </svg>
            <span className="grid h-14 w-14 place-items-center rounded-full bg-rose text-2xl text-cream">✦</span>
          </div>
          <div className="absolute -bottom-6 right-0 rounded-2xl bg-cream p-4 shadow-xl md:-right-6">
            <p className="text-sm font-semibold">★★★★★ 4.9</p>
            <p className="text-xs text-plum/60">from patient reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Acne care", "Hair transplant", "PRP", "Pigmentation", "Anti-ageing", "Eczema", "Laser", "Skin glow", "Scalp health"];
  return (
    <div className="-rotate-1 bg-plum py-5 text-cream">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="serif2 flex items-center gap-10 text-3xl italic">{t}<span className="text-gold">✦</span></span>
        ))}
      </div>
    </div>
  );
}

function Title({ k, t }: { k: string; t: React.ReactNode }) {
  return (
    <div className="mb-14">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-rose">{k}</p>
      <h2 className="serif2 max-w-3xl text-5xl font-light md:text-6xl">{t}</h2>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-28 md:py-36">
      <div className="grid items-center gap-16 md:grid-cols-2">
        <div className="relative">
          <img src={clinic} alt="Dr. Sehar's clinic" width={1280} height={960} loading="lazy" className="aspect-[4/5] w-full rounded-[2.5rem] object-cover" />
          <div className="absolute -bottom-8 -right-4 max-w-[220px] rounded-3xl bg-rose p-6 text-cream md:-right-10">
            <p className="serif2 text-2xl italic">"Your skin tells a story. I listen first."</p>
          </div>
        </div>
        <div>
          <Title k="Meet Sehar" t={<>A doctor first, an <em className="text-rose">artist</em> second.</>} />
          <div className="space-y-5 text-lg leading-relaxed text-plum/75">
            <p>Dr. Sehar Ikram is a qualified dermatologist and aesthetic doctor who specialises in skin and hair. She treats everything from everyday rashes to advanced hair restoration.</p>
            <p>Today she works as a hospital doctor while running her own clinic — so every patient gets the safety of medical training and the warmth of personal care.</p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4">
            {[["🏥", "Hospital doctor", "Medical dermatology"], ["✨", "Clinic founder", "Skin & hair aesthetics"]].map(([i, a, b]) => (
              <div key={a} className="rounded-3xl bg-sand p-6">
                <span className="text-2xl">{i}</span>
                <p className="mt-3 font-semibold">{a}</p>
                <p className="text-sm text-plum/60">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-plum px-5 py-28 text-cream md:py-36">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">What I treat</p>
        <h2 className="serif2 mb-16 max-w-3xl text-5xl font-light md:text-6xl">Care for every <em className="text-blush">skin</em> and every <em className="text-blush">strand</em>.</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <article key={s.t} className="group relative overflow-hidden rounded-[2rem] border border-cream/15 p-8 transition duration-500 hover:bg-cream hover:text-plum md:p-10">
              <span className="serif2 absolute right-8 top-6 text-7xl text-cream/10 transition group-hover:text-rose/30">0{i + 1}</span>
              <h3 className="serif2 text-4xl">{s.t}</h3>
              <p className="mt-4 max-w-md leading-relaxed opacity-75">{s.d}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {s.tags.map((t) => <span key={t} className="rounded-full border border-current/30 px-4 py-1.5 text-sm opacity-80">{t}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Results() {
  const [pos, setPos] = useState(50);
  return (
    <section className="mx-auto max-w-7xl px-5 py-28 md:py-36">
      <div className="grid items-center gap-14 md:grid-cols-2">
        <div>
          <Title k="Real results" t={<>Drag to see the <em className="text-rose">difference</em>.</>} />
          <p className="text-lg leading-relaxed text-plum/75">Hair restoration for a 38-year-old patient — 12 months of PRP and hair transplant. Slow, steady, natural.</p>
        </div>
        <div className="relative aspect-square select-none overflow-hidden rounded-[2.5rem]">
          <img src={after} alt="After treatment" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <img src={before} alt="Before treatment" loading="lazy" className="absolute inset-0 h-full w-full object-cover" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }} />
          <div className="pointer-events-none absolute inset-y-0 w-1 bg-cream" style={{ left: `${pos}%` }}>
            <span className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cream px-3 py-2 text-sm font-bold shadow-lg">⇆</span>
          </div>
          <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-xs font-semibold">Before</span>
          <span className="absolute right-4 top-4 rounded-full bg-rose px-3 py-1 text-xs font-semibold text-cream">After</span>
          <input type="range" min={0} max={100} value={pos} onChange={(e) => setPos(+e.target.value)} aria-label="Compare before and after" className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="bg-sand px-5 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Title k="Her journey" t={<>From medical school to her <em className="text-rose">own clinic</em>.</>} />
        <div className="grid gap-12 md:grid-cols-12">
          <ol className="relative border-l-2 border-plum/15 md:col-span-7">
            {journey.map(([y, t, d]) => (
              <li key={y} className="group relative pb-12 pl-10 last:pb-0">
                <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border-4 border-sand bg-plum transition group-hover:scale-150 group-hover:bg-rose" />
                <p className="text-sm font-bold text-rose">{y}</p>
                <h3 className="serif2 mt-1 text-3xl">{t}</h3>
                <p className="mt-2 text-plum/70">{d}</p>
              </li>
            ))}
          </ol>
          <div className="md:col-span-5">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em]">Events & talks</p>
            <div className="space-y-4">
              {events.map(([d, k, t]) => (
                <div key={t} className="rounded-3xl bg-cream p-6 transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex justify-between text-xs font-semibold uppercase tracking-wider"><span className="text-rose">{k}</span><span className="text-plum/50">{d}</span></div>
                  <p className="serif2 mt-3 text-2xl">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const [i, setI] = useState(0);
  const [n, tag, q] = reviews[i] ?? reviews[0]!;
  return (
    <section id="stories" className="mx-auto max-w-5xl px-5 py-28 text-center md:py-36">
      <p className="mb-10 text-sm font-semibold uppercase tracking-[0.2em] text-rose">Patient stories</p>
      <p key={i} className="serif2 animate-rise text-3xl font-light leading-tight md:text-5xl">"{q}"</p>
      <p className="mt-10 font-semibold">{n} <span className="font-normal text-plum/50">— {tag}</span></p>
      <div className="mt-8 flex justify-center gap-3">
        {reviews.map((r, j) => (
          <button key={r[0]} onClick={() => setI(j)} aria-label={`Story ${j + 1}`} className={`h-2.5 rounded-full transition-all ${j === i ? "w-10 bg-rose" : "w-2.5 bg-plum/20"}`} />
        ))}
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section id="blog" className="mx-auto max-w-7xl px-5 pb-28 md:pb-36">
      <Title k="From the blog" t={<>Simple advice for <em className="text-rose">everyday</em> skin & hair.</>} />
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map(([c, m, t], i) => (
          <a key={t} href="#blog" className="group rounded-[2rem] p-8 transition hover:-translate-y-1" style={{ background: ["var(--blush)", "var(--sand)", "color-mix(in oklab, var(--gold) 40%, var(--cream))"][i] }}>
            <div className="flex justify-between text-xs font-semibold uppercase tracking-wider"><span>{c}</span><span className="opacity-60">{m} read</span></div>
            <h3 className="serif2 mt-16 text-3xl leading-tight">{t}</h3>
            <p className="mt-8 text-sm font-semibold">Read article <span className="inline-block transition group-hover:translate-x-1">→</span></p>
          </a>
        ))}
      </div>
    </section>
  );
}

function Cta({ onBook }: { onBook: () => void }) {
  return (
    <footer className="px-5 pb-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-rose px-8 py-20 text-center text-cream md:py-28">
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gold/40 blur-3xl" />
        <h2 className="serif2 relative mx-auto max-w-4xl text-5xl font-light md:text-8xl">Ready to feel good in your <em>skin</em>?</h2>
        <button onClick={onBook} className="relative mt-10 rounded-full bg-cream px-10 py-4 font-semibold text-plum transition hover:bg-plum hover:text-cream">Book your consultation</button>
      </div>
      <div className="mx-auto mt-8 flex max-w-7xl flex-wrap justify-between gap-4 text-sm text-plum/60">
        <span>© {new Date().getFullYear()} Dr. Sehar Ikram · Lahore</span>
        {/* <Link to="/monograph" className="hover:text-rose">View the monograph edition →</Link> */}
        <a href="https://instagram.com/dr.seharikram" target="_blank" rel="noreferrer">Instagram @dr.seharikram →</a>
      </div>
    </footer>
  );
}

type FormStatus = "idle" | "loading" | "success" | "error";

const topics = ["Skin care", "Hair restoration", "Aesthetics", "Dermatology", "General question"];
const fieldClass = "w-full rounded-2xl bg-sand px-5 py-4 outline-none focus:ring-2 focus:ring-rose";

function Booking({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof ContactInput, string>>>({});
  const [serverError, setServerError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;
    setServerError("");
    const form = e.currentTarget;
    const fd = new FormData(form);
    const phone = String(fd.get("phone") ?? "").trim();
    const candidate = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      ...(phone ? { phone } : {}),
      topic: String(fd.get("topic") ?? "General question"),
      message: String(fd.get("message") ?? ""),
    };
    const parsed = contactSchema.safeParse(candidate);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof ContactInput, string>> = {};
      for (const [key, msgs] of Object.entries(parsed.error.flatten().fieldErrors)) {
        const first = msgs?.[0];
        if (first) fieldErrors[key as keyof ContactInput] = first;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setStatus("loading");
    try {
      await sendToWeb3Forms(parsed.data);
      setStatus("success");
      form.reset();
    } catch {
      setServerError("The message didn't go through. Check your connection and try again — or reach Dr. Sehar on WhatsApp.");
      setStatus("error");
    }
  }

  return (
    <>
      <div onClick={onClose} className={`fixed inset-0 z-50 bg-plum/40 backdrop-blur-sm transition-opacity ${open ? "opacity-100" : "pointer-events-none opacity-0"}`} />
      <aside className={`fixed inset-y-0 right-0 z-50 w-full max-w-md overflow-y-auto bg-cream p-8 transition-transform duration-500 ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-end"><button onClick={onClose} className="rounded-full bg-sand px-4 py-2 text-sm font-semibold">Close ✕</button></div>
        {status === "success" ? (
          <div role="status" aria-live="polite">
            <p className="serif2 mt-20 text-4xl">Thank you! We'll be in touch soon.</p>
            <button onClick={() => setStatus("idle")} className="mt-8 rounded-full bg-plum px-6 py-3 text-sm font-semibold text-cream transition hover:bg-rose">Send another message</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="mt-8">
            <fieldset disabled={status === "loading"} className={`space-y-5 transition ${status === "loading" ? "opacity-60" : ""}`}>
              <h3 className="serif2 text-4xl">Book a visit</h3>
              <div>
                <input name="name" aria-label="Your name" placeholder="Your name *" className={fieldClass} aria-invalid={!!errors.name} />
                {errors.name && <p className="mt-2 text-sm text-rose">{errors.name}</p>}
              </div>
              <div>
                <input name="email" type="email" aria-label="Email" placeholder="Email *" className={fieldClass} aria-invalid={!!errors.email} />
                {errors.email && <p className="mt-2 text-sm text-rose">{errors.email}</p>}
              </div>
              <div>
                <input name="phone" type="tel" aria-label="Phone (optional)" placeholder="Phone (optional)" className={fieldClass} aria-invalid={!!errors.phone} />
                {errors.phone && <p className="mt-2 text-sm text-rose">{errors.phone}</p>}
              </div>
              <select name="topic" aria-label="What's it about?" defaultValue="General question" className={fieldClass}>
                {topics.map((t) => <option key={t}>{t}</option>)}
              </select>
              <div>
                <textarea name="message" rows={4} aria-label="Your message" placeholder="Tell us a little about your concern *" className={fieldClass} aria-invalid={!!errors.message} />
                {errors.message && <p className="mt-2 text-sm text-rose">{errors.message}</p>}
              </div>
              {/* Honeypot for spam bots — hidden from humans. */}
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />
              {status === "error" && serverError && (
                <p role="alert" className="rounded-2xl border border-rose/40 bg-rose/10 px-5 py-4 text-sm">{serverError}</p>
              )}
              <button type="submit" className="w-full rounded-full bg-plum py-4 font-semibold text-cream transition hover:bg-rose disabled:cursor-not-allowed">
                {status === "loading" ? "Sending…" : "Send request"}
              </button>
            </fieldset>
          </form>
        )}
      </aside>
    </>
  );
}