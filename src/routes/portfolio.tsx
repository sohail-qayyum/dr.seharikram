import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import portrait from "@/assets/portrait.jpg";
import clinic from "@/assets/clinic.jpg";
import before from "@/assets/scalp-before.jpg";
import after from "@/assets/scalp-after.jpg";
import { contactSchema, sendToWeb3Forms, type ContactInput } from "@/lib/web3forms";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Dr. Sehar Ikram — Portfolio | Skin, Hair & Aesthetics" },
      { name: "description", content: "Who Dr. Sehar Ikram is, what she does, her journey, results and patient stories — plus a direct way to contact her." },
      { property: "og:title", content: "Dr. Sehar Ikram — Portfolio | Skin, Hair & Aesthetics" },
      { property: "og:description", content: "Meet Dr. Sehar Ikram — dermatologist and aesthetic physician in Lahore. Her work, journey, results and patient stories." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

/* ---------------------------------- data ---------------------------------- */

const expertise = [
  { t: "Skin care", d: "Acne, pigmentation, melasma, scars and glow treatments — clear skin you can feel confident in.", tags: ["Chemical peels", "Microneedling", "HydraFacial"] },
  { t: "Hair restoration", d: "Hair fall, thinning and baldness treated at the root — from PRP to hair transplant.", tags: ["PRP", "Hair transplant", "Scalp care"] },
  { t: "Aesthetic treatments", d: "Subtle, natural results that still look like you — never overdone.", tags: ["Botox", "Fillers", "Skin boosters"] },
  { t: "Medical dermatology", d: "Care for eczema, psoriasis, allergies, infections and every everyday skin concern.", tags: ["Eczema", "Psoriasis", "Allergies"] },
];

const tools = ["PRP", "Botox", "Dermal fillers", "Chemical peels", "Microneedling", "HydraFacial", "Laser treatments", "Skin boosters", "Hair transplant"];

const journey = [
  ["2012", "Graduated in medicine (MBBS)", "Where it all started — and where a fascination with skin began."],
  ["2017", "Specialised in dermatology", "Years of hospital training in medical skin care."],
  ["2019", "Trained in hair restoration", "Deep focus on PRP, scalp health and hair transplant."],
  ["2022", "Opened her own clinic", "A calm, personal space for skin and hair care in Lahore."],
  ["Today", "Hospital doctor & clinic founder", "Treating patients in hospital while leading her own clinic."],
];

const events = [
  ["Mar 2025", "Speaker", "National Dermatology Conference, Lahore"],
  ["Nov 2024", "Workshop", "Live PRP & scalp care training for doctors"],
  ["Jun 2024", "Awareness", "Free skin screening camp for the community"],
];

const reviews = [
  ["Ayesha K.", "Acne & scars", "I had tried everything for my acne. Dr. Sehar explained my skin to me like a friend would, and within months I stopped hiding my face."],
  ["Usman R.", "Hair restoration", "Honest from day one. She told me what would work and what wouldn't. My hair is back and so is my confidence."],
  ["Mehwish A.", "Pigmentation", "Very gentle, never pushy. The results look natural — people just say I look fresh."],
];

const notes = [
  ["Skin care", "5 min", "Why your sunscreen isn't working (and how to fix it)"],
  ["Hair", "4 min", "Hair fall after stress: when to worry, when to wait"],
  ["Aesthetics", "6 min", "Natural-looking fillers: what to ask before you book"],
];

const contactDetails = [
  ["Call or WhatsApp", "+92 309 001 6666", "tel:+923090016666"],
  ["Instagram", "@dr.seharikram", "https://instagram.com/dr.seharikram"],
  ["Where to find her", "Askari 11, Lahore · Shaikh Zayed Hospital", "https://instagram.com/dr.seharikram"],
  ["Clinic hours", "Mon – Sat, 11:00 AM – 8:00 PM", "tel:+923090016666"],
];

/* ---------------------------------- page ---------------------------------- */

function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.is-in)"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Portfolio() {
  useReveal();
  return (
    <main className="body2 bg-paper text-jade">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Expertise />
      <Toolkit />
      <Journey />
      <Results />
      <Stories />
      <Notes />
      <Contact />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-paper/15 bg-jade/80 px-5 py-3 text-paper backdrop-blur-md">
        <a href="#top" className="serif2 text-xl font-medium">
          Dr. Sehar<span className="text-coral">.</span>
        </a>
        <nav className="hidden gap-7 text-sm font-medium md:flex">
          {[["About", "about"], ["Expertise", "expertise"], ["Journey", "journey"], ["Stories", "stories"], ["Contact", "contact"]].map(([l, h]) => (
            <a key={h} href={`#${h}`} className="transition hover:text-coral">{l}</a>
          ))}
        </nav>
        <a href="#contact" className="rounded-full bg-coral px-5 py-2 text-sm font-semibold text-paper transition hover:bg-peach hover:text-jade">Say hello</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-jade px-5 pb-24 pt-36 text-paper md:pt-44">
      <div className="pointer-events-none absolute -right-40 top-16 h-[540px] w-[540px] rounded-full bg-moss/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[380px] w-[380px] rounded-full bg-coral/25 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-12">
        <div className="reveal md:col-span-7">
          <p className="coord mb-6 inline-flex items-center gap-2 rounded-full border border-paper/20 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-coral" /> Dermatologist · Aesthetic physician · Lahore
          </p>
          <h1 className="serif2 text-6xl font-light sm:text-7xl lg:text-[7.5rem]">
            I help people feel good in their <em className="font-normal text-coral">skin</em> — and love their <em className="font-normal text-coral">hair</em> again.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/75">
            I'm Dr. Sehar Ikram. By day I treat patients at the hospital; the rest of the week I run my own clinic in Lahore — from acne and hair fall to natural-looking aesthetic treatments.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-full bg-coral px-8 py-4 font-semibold text-paper transition hover:-translate-y-0.5 hover:bg-peach hover:text-jade">Get in touch</a>
            <a href="#journey" className="rounded-full border border-paper/25 px-8 py-4 font-semibold transition hover:border-coral hover:text-coral">Her journey</a>
          </div>
          <div className="mt-14 flex gap-10 border-t border-paper/15 pt-8">
            {[["10+", "Years in medicine"], ["5,000+", "Patients cared for"], ["4.9★", "Patient rating"]].map(([n, l]) => (
              <div key={l}>
                <p className="serif2 text-4xl">{n}</p>
                <p className="coord mt-1 text-paper/60">{l}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal relative md:col-span-5" style={{ transitionDelay: ".15s" }}>
          <div className="overflow-hidden rounded-t-full border-8 border-paper/10 shadow-2xl">
            <img src={portrait} alt="Dr. Sehar Ikram, dermatologist and aesthetic physician" width={832} height={1152} className="aspect-[3/4] w-full object-cover" />
          </div>
          <div className="absolute -left-8 top-10 grid h-32 w-32 place-items-center md:-left-12">
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" style={{ animation: "spin-slow 18s linear infinite" }}>
              <defs><path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" /></defs>
              <text className="fill-paper text-[10px] font-semibold uppercase tracking-[0.2em]"><textPath href="#badge-circle">Skin · Hair · Confidence · Care ·</textPath></text>
            </svg>
            <span className="grid h-14 w-14 place-items-center rounded-full bg-coral text-2xl text-paper">✦</span>
          </div>
          <div className="absolute -bottom-6 right-0 max-w-[240px] rounded-3xl bg-coral p-5 text-paper shadow-xl md:-right-6">
            <p className="serif2 text-xl italic">"Every patient gets honesty first, treatment second."</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Acne care", "Hair transplant", "PRP", "Botox", "Fillers", "Peels", "HydraFacial", "Laser", "Pigmentation", "Scalp health"];
  return (
    <div className="-rotate-1 overflow-hidden bg-coral py-5 text-paper">
      <div className="flex w-max gap-10 whitespace-nowrap" style={{ animation: "marquee 32s linear infinite" }}>
        {[...items, ...items].map((t, i) => (
          <span key={i} className="serif2 flex items-center gap-10 text-3xl italic">{t}<span className="not-italic">✦</span></span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-28 md:py-36">
      <div className="grid items-center gap-16 md:grid-cols-2">
        <div className="reveal relative order-2 md:order-1">
          <img src={clinic} alt="Inside Dr. Sehar's clinic in Lahore" width={1280} height={960} loading="lazy" className="aspect-[4/5] w-full rounded-[2.5rem] object-cover" />
          <div className="absolute -bottom-8 right-4 max-w-[230px] rounded-3xl bg-jade p-6 text-paper md:-right-8">
            <p className="serif2 text-2xl italic">"Your skin tells a story. I listen first."</p>
          </div>
        </div>
        <div className="reveal order-1 md:order-2">
          <p className="coord mb-4 text-coral">Who is Sehar?</p>
          <h2 className="serif2 max-w-2xl text-5xl font-light md:text-6xl">First, a doctor. Then, an <em className="text-coral">artist</em>.</h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-jade/75">
            <p>Dr. Sehar Ikram is a qualified dermatologist and aesthetic physician. In plain words: she treats skin and hair problems — from everyday rashes to advanced hair restoration — and does it with a gentle, honest approach.</p>
            <p>Her work has two sides. At the hospital she handles medical dermatology with all the safety of clinical training. At her own clinic she focuses on aesthetics: glow, hair density and natural-looking results.</p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4">
            {[["🏥", "Hospital doctor", "Everyday medical dermatology"], ["✨", "Clinic founder", "Skin, hair & aesthetic care"]].map(([i, a, b]) => (
              <div key={a} className="rounded-3xl bg-peach/60 p-6">
                <span className="text-2xl">{i}</span>
                <p className="mt-3 font-semibold">{a}</p>
                <p className="text-sm text-jade/60">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section id="expertise" className="bg-jade px-5 py-28 text-paper md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="reveal">
          <p className="coord mb-4 text-coral">What she does</p>
          <h2 className="serif2 mb-16 max-w-3xl text-5xl font-light md:text-6xl">Four crafts, one <em className="text-coral">promise</em>: results that look natural.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {expertise.map((s, i) => (
            <article key={s.t} className="reveal group relative overflow-hidden rounded-[2rem] border border-paper/15 p-8 transition duration-500 hover:bg-paper hover:text-jade md:p-10" style={{ transitionDelay: `${i * 0.06}s` }}>
              <span className="serif2 absolute right-8 top-6 text-7xl text-paper/10 transition group-hover:text-coral/30">0{i + 1}</span>
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

function Toolkit() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      <div className="reveal flex flex-wrap items-center gap-4">
        <p className="coord text-coral">Tools she works with</p>
        <span className="h-px flex-1 bg-jade/15" />
      </div>
      <div className="reveal mt-8 flex flex-wrap gap-3" style={{ transitionDelay: ".1s" }}>
        {tools.map((t) => (
          <span key={t} className="rounded-full border border-jade/20 px-5 py-2.5 text-sm font-medium transition hover:border-coral hover:bg-peach/50">{t}</span>
        ))}
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="bg-peach/50 px-5 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="reveal">
          <p className="coord mb-4 text-coral">Her journey</p>
          <h2 className="serif2 mb-16 max-w-3xl text-5xl font-light md:text-6xl">From medical school to her <em className="text-coral">own clinic</em>.</h2>
        </div>
        <div className="grid gap-12 md:grid-cols-12">
          <ol className="reveal relative border-l-2 border-jade/15 md:col-span-7">
            {journey.map(([y, t, d]) => (
              <li key={y} className="group relative pb-12 pl-10 last:pb-0">
                <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border-4 border-peach/50 bg-jade transition group-hover:scale-150 group-hover:bg-coral" />
                <p className="coord text-coral">{y}</p>
                <h3 className="serif2 mt-1 text-3xl">{t}</h3>
                <p className="mt-2 text-jade/70">{d}</p>
              </li>
            ))}
          </ol>
          <div className="reveal md:col-span-5" style={{ transitionDelay: ".15s" }}>
            <p className="coord mb-6">Beyond the clinic — talks & activities</p>
            <div className="space-y-4">
              {events.map(([d, k, t]) => (
                <div key={t} className="rounded-3xl bg-paper p-6 transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex justify-between text-xs font-semibold uppercase tracking-wider"><span className="text-coral">{k}</span><span className="text-jade/50">{d}</span></div>
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

function Results() {
  const [pos, setPos] = useState(50);
  return (
    <section className="mx-auto max-w-7xl px-5 py-28 md:py-36">
      <div className="grid items-center gap-14 md:grid-cols-2">
        <div className="reveal">
          <p className="coord mb-4 text-coral">Real results</p>
          <h2 className="serif2 max-w-lg text-5xl font-light md:text-6xl">Drag to see the <em className="text-coral">difference</em>.</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-jade/75">Hair restoration for a 38-year-old patient — 12 months of PRP and a hair transplant. Slow, steady, natural.</p>
        </div>
        <div className="reveal relative aspect-square select-none overflow-hidden rounded-[2.5rem]" style={{ transitionDelay: ".1s" }}>
          <img src={after} alt="After treatment" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <img src={before} alt="Before treatment" loading="lazy" className="absolute inset-0 h-full w-full object-cover" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }} />
          <div className="pointer-events-none absolute inset-y-0 w-1 bg-paper" style={{ left: `${pos}%` }}>
            <span className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-paper px-3 py-2 text-sm font-bold text-jade shadow-lg">⇆</span>
          </div>
          <span className="absolute left-4 top-4 rounded-full bg-jade/85 px-3 py-1 text-xs font-semibold text-paper">Before</span>
          <span className="absolute right-4 top-4 rounded-full bg-coral px-3 py-1 text-xs font-semibold text-paper">After</span>
          <input type="range" min={0} max={100} value={pos} onChange={(e) => setPos(+e.target.value)} aria-label="Compare before and after" className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
        </div>
      </div>
    </section>
  );
}

function Stories() {
  return (
    <section id="stories" className="mx-auto max-w-7xl px-5 pb-28 md:pb-36">
      <div className="reveal text-center">
        <p className="coord mb-10 text-coral">Patient stories</p>
        <h2 className="serif2 mx-auto max-w-2xl text-5xl font-light md:text-6xl">Kind words from <em className="text-coral">real people</em>.</h2>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {reviews.map(([n, tag, q], i) => (
          <figure key={n} className="reveal flex flex-col rounded-[2rem] bg-peach/60 p-8 transition hover:-translate-y-1 hover:shadow-xl" style={{ transitionDelay: `${i * 0.08}s` }}>
            <span className="text-coral">★★★★★</span>
            <blockquote className="serif2 mt-4 flex-1 text-2xl font-light leading-snug">"{q}"</blockquote>
            <figcaption className="mt-6 text-sm font-semibold">{n} <span className="font-normal text-jade/50">— {tag}</span></figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Notes() {
  return (
    <section id="notes" className="mx-auto max-w-7xl px-5 pb-28 md:pb-36">
      <div className="reveal">
        <p className="coord mb-4 text-coral">From her notebook</p>
        <h2 className="serif2 max-w-3xl text-5xl font-light md:text-6xl">Simple advice for <em className="text-coral">everyday</em> skin & hair.</h2>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {notes.map(([c, m, t], i) => (
          <article key={t} className="reveal group rounded-[2rem] p-8 transition hover:-translate-y-1" style={{ background: ["var(--peach)", "var(--coral)", "color-mix(in oklab, var(--moss) 30%, var(--paper))"][i], transitionDelay: `${i * 0.08}s` }}>
            <div className="flex justify-between text-xs font-semibold uppercase tracking-wider"><span>{c}</span><span className="opacity-60">{m} read</span></div>
            <h3 className="serif2 mt-16 text-3xl leading-tight">{t}</h3>
            <p className="mt-8 text-sm font-semibold">Read article <span className="inline-block transition group-hover:translate-x-1">→</span></p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------- contact -------------------------------- */

type FormStatus = "idle" | "loading" | "success" | "error";

const inputClass = "w-full rounded-2xl bg-paper/60 px-5 py-4 text-jade outline-none transition placeholder:text-jade/40 focus:ring-2 focus:ring-coral";
const labelClass = "coord mb-2 block text-paper/70";

function Contact() {
  return (
    <section id="contact" className="bg-jade px-5 py-28 text-paper md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
        <div className="reveal">
          <p className="coord mb-4 text-coral">Contact</p>
          <h2 className="serif2 text-5xl font-light md:text-7xl">Say <em className="text-coral">hello</em>.</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-paper/75">A question about your skin or hair, or an event invitation? Write below — messages reach Dr. Sehar directly by email.</p>
          <dl className="mt-12 space-y-3">
            {contactDetails.map(([k, v, href]) => (
              <a key={k} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block rounded-2xl border border-paper/15 p-5 transition hover:border-coral hover:bg-paper/5">
                <dt className="coord text-paper/60">{k}</dt>
                <dd className="mt-1 font-semibold">{v}</dd>
              </a>
            ))}
          </dl>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof ContactInput, string>>>({});
  const [serverError, setServerError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;
    setServerError("");
    const form = e.currentTarget;
    const fd = new FormData(form);
    const candidate = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? "").trim() || undefined,
      topic: String(fd.get("topic") ?? "General question") as ContactInput["topic"],
      message: String(fd.get("message") ?? ""),
    };
    const parsed = contactSchema.safeParse(candidate);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof ContactInput, string>> = {};
      for (const [key, msgs] of Object.entries(parsed.error.flatten().fieldErrors)) {
        if (msgs?.length) fieldErrors[key as keyof ContactInput] = msgs[0];
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

  if (status === "success") {
    return (
      <div className="reveal is-in flex flex-col items-center justify-center rounded-[2.5rem] bg-paper p-10 text-center text-jade md:p-14" role="status" aria-live="polite">
        <svg viewBox="0 0 52 52" className="h-20 w-20 text-coral" aria-hidden>
          <circle cx="26" cy="26" r="24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ strokeDasharray: 151, strokeDashoffset: 151, animation: "check-draw 0.6s ease forwards" }} />
          <path d="M15 27l8 8 14-16" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" style={{ strokeDasharray: 36, strokeDashoffset: 36, animation: "check-draw 0.4s 0.5s ease forwards" }} />
        </svg>
        <h3 className="serif2 mt-6 text-4xl font-light">Thank you!</h3>
        <p className="mt-3 max-w-sm text-jade/70">Your message is on its way to Dr. Sehar. If you left an email or phone number, she'll get back to you there.</p>
        <button onClick={() => setStatus("idle")} className="mt-8 rounded-full bg-jade px-6 py-3 text-sm font-semibold text-paper transition hover:bg-coral">Send another message</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="reveal relative overflow-hidden rounded-[2.5rem] bg-jade-soft p-8 md:p-10" style={{ transitionDelay: ".15s" }}>
      {status === "loading" && (
        <div className="absolute inset-x-0 top-0 h-1 overflow-hidden" aria-hidden>
          <div className="h-full w-1/3 bg-coral" style={{ animation: "load-slide 1.1s ease-in-out infinite" }} />
        </div>
      )}
      <fieldset disabled={status === "loading"} className={`space-y-5 transition ${status === "loading" ? "opacity-60" : ""}`}>
        <h3 className="serif2 text-3xl font-light">Write a message</h3>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="pf-name" className={labelClass}>Your name *</label>
            <input id="pf-name" name="name" placeholder="Ayesha Khan" className={inputClass} aria-invalid={!!errors.name} />
            {errors.name && <p className="mt-2 text-sm text-coral">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="pf-email" className={labelClass}>Email *</label>
            <input id="pf-email" name="email" type="email" placeholder="you@example.com" className={inputClass} aria-invalid={!!errors.email} />
            {errors.email && <p className="mt-2 text-sm text-coral">{errors.email}</p>}
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="pf-phone" className={labelClass}>Phone (optional)</label>
            <input id="pf-phone" name="phone" type="tel" placeholder="+92 3xx xxx xxxx" className={inputClass} aria-invalid={!!errors.phone} />
            {errors.phone && <p className="mt-2 text-sm text-coral">{errors.phone}</p>}
          </div>
          <div>
            <label htmlFor="pf-topic" className={labelClass}>What's it about?</label>
            <select id="pf-topic" name="topic" className={inputClass} defaultValue="General question">
              {["Skin care", "Hair restoration", "Aesthetics", "General question"].map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="pf-message" className={labelClass}>Your message *</label>
          <textarea id="pf-message" name="message" rows={5} placeholder="Tell Dr. Sehar a little about your concern…" className={inputClass} aria-invalid={!!errors.message} />
          {errors.message && <p className="mt-2 text-sm text-coral">{errors.message}</p>}
        </div>
        {/* Honeypot for spam bots — hidden from humans, ignored by the schema. */}
        <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />
        {status === "error" && serverError && (
          <p role="alert" className="rounded-2xl border border-coral/40 bg-coral/10 px-5 py-4 text-sm">{serverError}</p>
        )}
        <button type="submit" className="flex w-full items-center justify-center gap-3 rounded-full bg-coral py-4 font-semibold text-paper transition hover:bg-paper hover:text-jade disabled:cursor-not-allowed">
          {status === "loading" ? (
            <>
              <span className="h-5 w-5 rounded-full border-2 border-paper/40 border-t-paper" style={{ animation: "spin-slow 0.9s linear infinite" }} aria-hidden />
              Sending…
            </>
          ) : (
            "Send message →"
          )}
        </button>
      </fieldset>
    </form>
  );
}

function Footer() {
  return (
    <footer className="bg-jade px-5 pb-10">
      <div className="mx-auto max-w-7xl border-t border-paper/15 pt-8">
        <div className="flex flex-wrap justify-between gap-6 text-sm text-paper/60">
          <span>© {new Date().getFullYear()} Dr. Sehar Ikram · Lahore</span>
          <span className="flex gap-6">
            <a href="/" className="transition hover:text-coral">Warm edition →</a>
            <a href="/monograph" className="transition hover:text-coral">Monograph edition →</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
