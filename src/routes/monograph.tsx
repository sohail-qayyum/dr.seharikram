import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import portrait from "@/assets/portrait.jpg";
import follicle from "@/assets/follicle.jpg";
import before from "@/assets/scalp-before.jpg";
import after from "@/assets/scalp-after.jpg";

export const Route = createFileRoute("/monograph")({
  head: () => ({
    meta: [
      { title: "Dr. Sehar Ikram — Monograph & Authority Archive" },
      { name: "description", content: "An archive of Dr. Sehar Ikram's work in dermatology, hair restoration and facial architecture." },
      { property: "og:title", content: "Dr. Sehar Ikram — Monograph & Authority Archive" },
      { property: "og:description", content: "Dermatology, trichology and facial architecture, presented as a scientific monograph." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const f = () => setY(window.scrollY);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return y;
}

function Index() {
  const y = useScrollY();
  const [drawer, setDrawer] = useState(false);
  return (
    <main className="bg-bone text-ink">
      <Nav onInquire={() => setDrawer(true)} />
      <Hero y={y} />
      <Manifesto />
      <Atlas />
      <Research />
      <Blueprint />
      <Dossier onInquire={() => setDrawer(true)} />
      <Drawer open={drawer} onClose={() => setDrawer(false)} />
    </main>
  );
}

function Nav({ onInquire }: { onInquire: () => void }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-5 text-bone mix-blend-difference md:px-10">
      <span className="coord">S.I. — Monograph Vol. I</span>
      <nav className="hidden gap-8 md:flex">
        {["Manifesto", "Atlas", "Research", "Blueprint"].map((n) => (
          <a key={n} href={`#${n.toLowerCase()}`} className="coord hover:opacity-60">{n}</a>
        ))}
      </nav>
      <button onClick={onInquire} className="coord border-b border-current pb-0.5">Inquire</button>
    </header>
  );
}

function Hero({ y }: { y: number }) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-basalt text-bone">
      <div className="mx-auto grid min-h-screen max-w-[1500px] grid-cols-12 items-end gap-6 px-6 pb-16 pt-32 md:px-10">
        <div className="col-span-12 md:col-span-4" style={{ transform: `translateY(${y * -0.12}px)` }}>
          <p className="coord mb-8 text-sage">Cat. No. 001 — Dermatology</p>
          <h1 className="display text-6xl md:text-7xl xl:text-8xl">
            Anatomy is an <em>architecture</em> to preserve.
          </h1>
          <p className="mt-10 max-w-xs text-sm leading-relaxed text-bone/60">
            Dr. Sehar Ikram — dermatologist, trichologist and student of the face's quiet structure.
          </p>
        </div>
        <div className="relative col-span-12 md:col-span-5">
          <img src={portrait} alt="Portrait of Dr. Sehar Ikram" width={832} height={1152} className="w-full grayscale" />
          <span className="display absolute -bottom-6 right-4 text-5xl italic text-bone/30">Sehar Ikram</span>
        </div>
        <div className="col-span-12 space-y-8 md:col-span-3" style={{ transform: `translateY(${y * 0.1}px)` }}>
          <dl className="coord space-y-3 border-t border-bone/20 pt-4 text-bone/70">
            {[["Lat.", "31.5204° N"], ["Long.", "74.3587° E"], ["FCPS", "Dermatology"], ["Fellow", "Hair Restoration"], ["Focus", "Facial Architecture"]].map(([k, v]) => (
              <div key={k} className="flex justify-between"><dt>{k}</dt><dd className="text-bone">{v}</dd></div>
            ))}
          </dl>
          <figure>
            <img src={follicle} alt="Dermoscopic view of follicular units" width={1024} height={1024} loading="lazy" className="aspect-square w-40 object-cover grayscale" />
            <figcaption className="coord mt-2 text-bone/50">Fig. 01 — Follicular unit, ×40</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Label({ n, t }: { n: string; t: string }) {
  return <p className="coord mb-12 flex gap-6"><span>{n}</span><span className="opacity-60">{t}</span></p>;
}

function Manifesto() {
  const tenets = [
    ["Subcutaneous Integrity", "Structural preservation outlasts superficial alteration. The skin is a surface; what holds it is the work."],
    ["Follicular Longevity", "Hair restoration is chronic biological ecology — tended over years, never masked in an afternoon."],
    ["Anatomical Restraint", "The most rigorous decision in aesthetic medicine is knowing when not to intervene."],
  ];
  return (
    <section id="manifesto" className="mx-auto max-w-[1500px] px-6 py-32 md:px-10 md:py-48">
      <Label n="02" t="The Cellular Manifesto" />
      <h2 className="display max-w-4xl text-5xl md:text-7xl">Medicine practised at the scale of the cell, judged at the scale of a lifetime.</h2>
      <div className="mt-24 grid gap-px bg-linen md:grid-cols-3">
        {tenets.map(([h, p], i) => (
          <article key={h} className="bg-bone p-8 md:p-10">
            <span className="coord text-sage">Tenet {String(i + 1).padStart(2, "0")}</span>
            <h3 className="display mt-6 text-3xl">{h}</h3>
            <p className="mt-6 leading-relaxed text-ink/70">{p}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

const months = [0, 3, 6, 12];
function Atlas() {
  const [pos, setPos] = useState(50);
  const [m, setM] = useState(3);
  const ref = useRef<HTMLDivElement>(null);
  const move = (x: number) => {
    const r = ref.current!.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((x - r.left) / r.width) * 100)));
  };
  const density = [58, 71, 84, 96][m];
  return (
    <section id="atlas" className="bg-basalt px-6 py-32 text-bone md:px-10 md:py-40">
      <div className="mx-auto max-w-[1500px]">
        <Label n="03" t="The Clinical Atlas" />
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <div ref={ref} onMouseMove={(e) => move(e.clientX)} onTouchMove={(e) => move(e.touches[0]?.clientX ?? 0)}
              className="relative aspect-square cursor-ew-resize select-none overflow-hidden">
              <img src={after} alt="Month 12" loading="lazy" className="absolute inset-0 h-full w-full object-cover grayscale" style={{ opacity: m / 3 * 0.85 + 0.15 }} />
              <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
                <img src={before} alt="Month 0" loading="lazy" className="h-full w-full object-cover grayscale" />
              </div>
              <div className="absolute inset-y-0 w-px bg-bone" style={{ left: `${pos}%` }}>
                <span className="coord absolute top-4 left-2 whitespace-nowrap">x {pos.toFixed(1)}</span>
              </div>
              <span className="coord absolute bottom-4 left-4">Baseline</span>
              <span className="coord absolute bottom-4 right-4">Month {months[m]}</span>
            </div>
            <div className="mt-8 flex border-t border-bone/20">
              {months.map((mo, i) => (
                <button key={mo} onClick={() => setM(i)} className={`coord flex-1 border-t-2 pt-3 text-left transition ${i === m ? "border-sage text-bone" : "border-transparent text-bone/40"}`}>
                  Month {mo}
                </button>
              ))}
            </div>
          </div>
          <div className="md:col-span-5">
            <p className="coord text-sage">Case Study 04 // Androgenetic Regeneration</p>
            <h3 className="display mt-6 text-5xl">A crown, re-forested.</h3>
            <dl className="coord mt-10 grid grid-cols-2 gap-px bg-bone/15">
              {[["Patient", "M, 38"], ["Norwood", "IV → II"], ["Density", `${density} FU/cm²`], ["Protocol", "PRP + FUE"]].map(([k, v]) => (
                <div key={k} className="bg-basalt py-4 pr-4"><dt className="text-bone/50">{k}</dt><dd className="mt-1 text-bone">{v}</dd></div>
              ))}
            </dl>
            <p className="mt-10 leading-relaxed text-bone/70">
              "The follicles were miniaturised, not lost. Our first months were spent restoring the scalp's microcirculation before a single graft was placed — the soil before the seed. By month twelve, the terminal-to-vellus ratio had nearly inverted."
            </p>
            <p className="coord mt-4 text-bone/40">— Clinical note, Dr. S. Ikram</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const papers = [
  ["2025", "Microcirculatory priming prior to follicular unit extraction", "Trichological Regeneration", "J. Cosmet. Dermatol."],
  ["2024", "Polarised dermoscopy in early frontal fibrosing alopecia", "Dermal Pathology", "Int. J. Trichology"],
  ["2024", "The ethics of restraint in aesthetic medicine", "Aesthetic Ethics & Longevity", "Essay — APDS Lecture"],
  ["2023", "Platelet-rich plasma dosing intervals: a 12-month cohort", "Trichological Regeneration", "Dermatol. Ther."],
  ["2022", "Melasma recurrence and dermal vascular remodelling", "Dermal Pathology", "Pak. J. Med. Sci."],
  ["2021", "Longevity as an aesthetic outcome", "Aesthetic Ethics & Longevity", "Keynote — IMCAS Asia"],
];
const filters = ["All", "Trichological Regeneration", "Dermal Pathology", "Aesthetic Ethics & Longevity"];

function Research() {
  const [f, setF] = useState("All");
  const rows = papers.filter((p) => f === "All" || p[2] === f);
  return (
    <section id="research" className="mx-auto max-w-[1500px] px-6 py-32 md:px-10 md:py-40">
      <Label n="04" t="Research & Thought Leadership" />
      <div className="flex flex-wrap gap-2">
        {filters.map((x) => (
          <button key={x} onClick={() => setF(x)} className={`coord border px-4 py-2 transition ${f === x ? "border-ink bg-ink text-bone" : "border-linen hover:border-ink"}`}>{x}</button>
        ))}
      </div>
      <div className="mt-12 border-t border-linen">
        {rows.map(([yr, t, c, j]) => (
          <a key={t} href="#" className="group grid grid-cols-12 items-baseline gap-4 border-b border-linen py-6 transition hover:bg-alabaster">
            <span className="coord col-span-2 md:col-span-1">{yr}</span>
            <span className="display col-span-10 text-2xl md:col-span-6 md:text-3xl">{t}</span>
            <span className="coord col-span-6 text-sage md:col-span-3">{c}</span>
            <span className="coord col-span-6 text-right text-ink/50 md:col-span-2">{j} <span className="opacity-0 transition group-hover:opacity-100">↗</span></span>
          </a>
        ))}
      </div>
    </section>
  );
}

function Blueprint() {
  const pillars = [
    ["Anatomical Mapping", "Assessing bone dynamics, tissue movement and vascular pathways before any plan is drawn."],
    ["Microscopic Diagnostic", "Trichoscopy and dermal surface evaluation under polarised light."],
    ["Preservation Protocol", "An individualised, multi-stage restorative journey — measured in seasons, not sessions."],
  ];
  return (
    <section id="blueprint" className="bg-alabaster px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1500px]">
        <Label n="05" t="The Diagnostic Blueprint" />
        <div className="grid gap-16 md:grid-cols-3">
          {pillars.map(([h, p], i) => (
            <div key={h} className="border-t border-ink pt-6">
              <span className="display text-8xl text-ink/15">{["I", "II", "III"][i]}</span>
              <h3 className="display mt-4 text-3xl">{h}</h3>
              <p className="mt-4 leading-relaxed text-ink/70">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Dossier({ onInquire }: { onInquire: () => void }) {
  return (
    <footer className="bg-basalt px-6 pb-10 pt-32 text-bone md:px-10">
      <div className="mx-auto max-w-[1500px]">
        <Label n="06" t="The Dossier" />
        <button onClick={onInquire} className="display text-left text-5xl transition hover:text-sage md:text-7xl">
          Private Consultations, Academic Lectures & Advisory <span className="italic">→</span>
        </button>
        <div className="coord mt-32 flex flex-wrap justify-between gap-4 border-t border-bone/20 pt-6 text-bone/50">
          <span>© {new Date().getFullYear()} Dr. Sehar Ikram</span>
          <span>Lahore, Pakistan</span>
          <span>By appointment only</span>
        </div>
      </div>
    </footer>
  );
}

function Drawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sent, setSent] = useState(false);
  return (
    <>
      <div onClick={onClose} className={`fixed inset-0 z-50 bg-basalt/50 transition-opacity duration-500 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`} />
      <aside className={`fixed inset-y-0 right-0 z-50 w-full max-w-md bg-bone p-10 transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)] ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-between"><span className="coord">Inquiry</span><button onClick={onClose} className="coord">Close ×</button></div>
        {sent ? (
          <p className="display mt-24 text-4xl">Thank you. Your note has been received.</p>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-16 space-y-8">
            <h3 className="display text-4xl">Begin a correspondence.</h3>
            {["Name", "Email"].map((l) => (
              <label key={l} className="block"><span className="coord text-ink/60">{l}</span>
                <input required type={l === "Email" ? "email" : "text"} className="mt-2 w-full border-b border-linen bg-transparent py-2 outline-none focus:border-ink" /></label>
            ))}
            <label className="block"><span className="coord text-ink/60">Nature of inquiry</span>
              <select className="mt-2 w-full border-b border-linen bg-transparent py-2 outline-none">
                <option>Private consultation</option><option>Academic lecture</option><option>Advisory</option>
              </select></label>
            <label className="block"><span className="coord text-ink/60">Note</span>
              <textarea rows={4} className="mt-2 w-full border-b border-linen bg-transparent py-2 outline-none focus:border-ink" /></label>
            <button className="coord w-full bg-ink py-4 text-bone">Send inquiry</button>
          </form>
        )}
      </aside>
    </>
  );
}
