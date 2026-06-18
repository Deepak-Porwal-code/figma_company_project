import { createFileRoute } from "@tanstack/react-router";
import {
  Wrench, Trophy, Users, Medal, Scale, Briefcase, Zap,
  Lightbulb, UserCog, Brain, Youtube, Instagram, Facebook, Twitter, Menu,
  Cog, ArrowRight, Landmark,
} from "lucide-react";
import heroArena from "@/assets/hero-arena.jpg";
import discRoboRace from "@/assets/disc-robo-race.jpg";
import discLine from "@/assets/disc-line.jpg";
import discRc from "@/assets/disc-rc.jpg";
import discFpv from "@/assets/disc-fpv.jpg";
import discHockey from "@/assets/disc-hockey.jpg";
import discWar from "@/assets/disc-war.jpg";
import catMiniMakers from "@/assets/cib_makerbot.png";
import catJuniorInnovators from "@/assets/icons8_idea.png";
import catYoungEngineers from "@/assets/material-symbols_engineering.png";
import catRoboMinds from "@/assets/hugeicons_bitcoin-mind.png";
import category1 from "@/assets/download-removebg-preview (1) 1.png";
import category2 from "@/assets/images__1_-removebg-preview 1.png";
import category3 from "@/assets/download__1_-removebg-preview 1.png";
import category4 from "@/assets/images__3_-removebg-preview 1.png";
import leaderboardImg from "@/assets/11299407_4672785-removebg-preview 1.png";
import circuitBgImg from "@/assets/download__2_-removebg-preview 1.png";
import whatIsArtImg from "@/assets/Screenshot_2026-04-26_114455-Picsart-AiImageEnhancer-removebg-preview 1.png";
import iitBombayLogo from "@/assets/images-removebg-preview 1.png";
import delhiveryLogo from "@/assets/images__2_-removebg-preview 1.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BOTLEAGUE — India's Ultimate Robotics Arena" },
      { name: "description", content: "Build. Compete. Rank. Join India's national ecosystem for robotics competitions, rankings and engineering careers." },
    ],
  }),
  component: Index,
});

function Logo() {
  return (
    <a href="#" className="relative flex items-center font-display text-2xl font-bold tracking-wider">
      <span className="absolute -left-2 -top-2 h-3 w-3 border-l-2 border-t-2 border-yellow-400" />
      <span className="absolute -left-2 -bottom-2 h-3 w-3 border-l-2 border-b-2 border-yellow-400" />
      <span className="absolute -right-2 -top-2 h-3 w-3 border-r-2 border-t-2 border-yellow-400" />
      <span className="absolute -right-2 -bottom-2 h-3 w-3 border-r-2 border-b-2 border-yellow-400" />
      <span className="text-[#2b6cff] italic">B</span>
      <Cog className="mx-[1px] h-5 w-5 text-[#2b6cff]" strokeWidth={2.5} />
      <span className="text-[#2b6cff] italic">T</span>
      <span className="ml-1 italic text-brand">LEAGUE</span>
    </a>
  );
}

function Nav() {
  const links = [
    { name: "Events", active: true },
    { name: "Programs", active: false },
    { name: "Community", active: false },
    { name: "Ranks", active: false },
  ];
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-10 md:flex">
          {links.map(l => (
            <a key={l.name} href={`#${l.name.toLowerCase()}`} className={`relative font-display text-base font-semibold tracking-wide ${l.active ? "text-foreground" : "text-foreground/90 hover:text-foreground"}`}>
              {l.name}
              {l.active && <span className="absolute -bottom-2 left-0 right-0 h-[3px] bg-brand" />}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" className="hidden rounded-md border border-white/40 px-6 py-2 font-display text-sm font-semibold tracking-widest text-foreground hover:bg-white/5 sm:block">LOGIN</a>
          <a href="#" className="rounded-md bg-gradient-to-b from-[#ff7a55] to-brand px-5 py-2.5 font-display text-sm font-bold tracking-wider text-white shadow-lg shadow-brand/30">REGISTER NOW</a>
          <button className="md:hidden text-foreground" aria-label="menu"><Menu className="h-6 w-6" /></button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-20">
      <div className="relative h-[580px] w-full overflow-hidden">
        <img src={heroArena} alt="Robotics arena" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-transparent" />
        <div className="absolute right-8 top-6 flex items-center gap-3 rounded bg-black/70 px-3 py-1.5 text-xs font-semibold ring-1 ring-white/10">
          <span className="flex items-center gap-1.5 text-brand"><span className="h-2 w-2 animate-pulse rounded-full bg-brand" /> LIVE</span>
          <span className="text-foreground/80">: Episode 14 · Bengaluru Regionals</span>
          <a href="#" className="font-bold text-brand">WATCH LIVE</a>
        </div>
        <div className="container-x relative z-10 flex h-full flex-col justify-center">
          <h1 className="font-display text-5xl font-bold uppercase leading-[1.05] tracking-wide sm:text-6xl md:text-7xl">
            India's Ultimate<br />Robotics Arena
          </h1>
          <p className="mt-6 max-w-md text-base font-medium text-foreground/90">
            Build.Compete.Rank.The National Ecosystem for Robotics Arena
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#" className="rounded-md bg-gradient-to-b from-[#ff7a55] to-brand px-6 py-3 font-display text-sm font-bold tracking-wider text-white shadow-lg shadow-brand/30">CREATE ACCOUNT</a>
            <a href="#events" className="rounded-md border border-white/40 px-6 py-3 font-display text-sm font-bold tracking-wider text-foreground hover:bg-white/5">EXPLORE EVENTS</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Bracket() {
  return (
    <svg viewBox="0 0 320 280" className="mt-6 w-full">
      <g stroke="#e63b2e" strokeWidth="1.5" fill="none">
        <line x1="100" y1="40" x2="140" y2="40" />
        <line x1="100" y1="90" x2="140" y2="90" />
        <line x1="140" y1="40" x2="140" y2="90" />
        <line x1="140" y1="65" x2="180" y2="65" />
        <line x1="100" y1="190" x2="140" y2="190" />
        <line x1="100" y1="240" x2="140" y2="240" />
        <line x1="140" y1="190" x2="140" y2="240" />
        <line x1="140" y1="215" x2="180" y2="215" />
        <line x1="180" y1="65" x2="180" y2="215" />
        <line x1="180" y1="140" x2="230" y2="140" />
      </g>
      <g fill="#3a3a3a">
        <rect x="20" y="28" width="80" height="24" rx="2" />
        <rect x="20" y="78" width="80" height="24" rx="2" />
        <rect x="20" y="178" width="80" height="24" rx="2" />
        <rect x="20" y="228" width="80" height="24" rx="2" />
        <rect x="180" y="53" width="80" height="24" rx="2" />
        <rect x="180" y="203" width="80" height="24" rx="2" />
        <rect x="230" y="128" width="80" height="24" rx="2" />
      </g>
    </svg>
  );
}

function Events() {
  const upcoming = [
    { city: "Mumbai" },
    { city: "Delhi" },
  ];
  return (
    <section id="events" className="section-pad relative bg-background">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand/10 to-transparent" />
      <div className="container-x relative">
        <h2 className="font-display text-4xl font-bold uppercase tracking-wide sm:text-5xl">Competitions & Events</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div>
            <div className="font-display text-xl font-bold uppercase tracking-widest text-brand">Live Now</div>
            <div className="mt-5 rounded-md border border-white/10 bg-surface/40 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xl font-bold">Bengaluru Regionals</div>
                  <div className="text-sm text-muted-foreground">Lorem Ipsum</div>
                </div>
                <span className="rounded bg-brand px-2 py-0.5 text-[10px] font-bold uppercase text-white">Ongoing</span>
              </div>
              <Bracket />
            </div>
          </div>
          <div>
            <div className="font-display text-xl font-bold uppercase tracking-widest text-foreground">Upcoming</div>
            <div className="mt-5 space-y-5">
              {upcoming.map(e => (
                <div key={e.city} className="rounded-md border border-white/10 bg-surface/40 p-5">
                  <div className="text-xl font-bold">Event in {e.city}</div>
                  <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
                    <div><div className="text-foreground/70">Date</div><div className="text-foreground">11/11/25</div></div>
                    <div><div className="text-foreground/70">Location</div><div className="text-foreground">BKC</div></div>
                    <div><div className="text-foreground/70">Category</div><div className="text-foreground">Lorem</div></div>
                  </div>
                  <button className="mt-4 w-full rounded bg-brand py-2.5 font-display text-sm font-bold tracking-widest text-white">REGISTER</button>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="font-display text-xl font-bold uppercase tracking-widest text-foreground">Past Results</div>
            <div className="mt-5 rounded-md border border-white/10 bg-surface/40">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className={`px-5 py-5 ${i < 2 ? "border-b border-white/10" : ""}`}>
                  <div className="text-lg font-bold">Bengaluru Regionals</div>
                  <div className="text-sm text-muted-foreground">Lorem Ipsum</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  const steps = [
    { icon: Wrench, title: "Build Your Team" },
    { icon: Landmark, title: "Compete Across India" },
    { icon: Trophy, title: "Earn National Ranking & Value" },
    { icon: Users, title: "Join the League" },
  ];
  return (
    <section className="section-pad bg-black">
      <div className="container-x text-center">
        <div className="font-display text-base font-bold uppercase tracking-[0.25em] text-brand">User Journey</div>
        <h2 className="mt-2 font-display text-4xl font-bold uppercase tracking-wide sm:text-5xl">Your Path to the League</h2>
        <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
        <div className="relative mt-14">
          <div className="absolute left-[14%] right-[14%] top-12 hidden h-px bg-[#2b6cff]/60 md:block" />
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="relative flex flex-col items-center">
                <div className="relative z-10 grid h-24 w-24 place-items-center rounded-full bg-surface ring-2 ring-[#2b6cff]">
                  <s.icon className="h-9 w-9 text-foreground" />
                </div>
                <div className="mt-6 h-6 w-px bg-foreground/20" />
                <div className="font-display text-sm font-bold uppercase tracking-widest text-brand">Step {i + 1}</div>
                <div className="mt-2 max-w-[160px] font-display text-base font-bold uppercase">{s.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatIsArt() {
  return (
    <div className="relative h-96 w-96">
      <img src={whatIsArtImg} alt="BotLeague system diagram" className="h-full w-full object-contain opacity-90" />
    </div>
  );
}

function WhatIs() {
  const items = [
    { n: 1, title: "Structured Events", body: '"From one-off events to a year-round competitive season."' },
    { n: 2, title: "Digital Identity", body: '"Your professional robotics legacy, tracked and verified."' },
    { n: 3, title: "National Ranking", body: '"Benchmark your skills against the best engineers in India."' },
    { n: 4, title: "Career Pathway", body: '"Turning arena victories into real-world industry opportunities."' },
  ];
  return (
    <section className="section-pad bg-background">
      <div className="container-x">
        <h2 className="font-display text-4xl font-bold uppercase tracking-wide sm:text-5xl">What is BotLeague?</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
          <div className="grid grid-cols-1 gap-x-16 gap-y-10 sm:grid-cols-2">
            {items.map(i => (
              <div key={i.n}>
                <div className="font-display text-3xl font-bold text-brand">{i.n}.</div>
                <div className="mt-1 font-display text-2xl font-bold uppercase">{i.title}</div>
                <p className="mt-3 max-w-xs text-base text-muted-foreground">{i.body}</p>
              </div>
            ))}
          </div>
          <div className="hidden items-center justify-center md:flex"><WhatIsArt /></div>
        </div>
      </div>
    </section>
  );
}

function Categories() {
  const cats = [
    { img: catMiniMakers, title: "Mini Makers", body: "Where Creativity Meets Logic.", accent: true },
    { img: catJuniorInnovators, title: "Junior Innovators", body: "Engineering & Strategy Fundamentals." },
    { img: catYoungEngineers, title: "Young Engineers", body: "Advanced Wireless & Autonomous Control." },
    { img: catRoboMinds, title: "Robo Minds", body: "Elite Professional Sports & Robotics." },
  ];
  return (
    <section className="section-pad bg-background">
      <div className="container-x">
        <h2 className="font-display text-4xl font-bold uppercase tracking-wide sm:text-5xl">Categories</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cats.map(c => (
            <div key={c.title} className={`flex flex-col rounded-2xl p-6 ${c.accent ? "bg-gradient-to-br from-yellow-900/40 to-surface ring-2 ring-yellow-500/60" : "bg-surface ring-1 ring-white/10"}`}>
              <div className="mb-8 flex h-24 items-center justify-center">
                <img src={c.img} alt={c.title} className="h-24 w-auto object-contain" />
              </div>
              <div className="font-display text-2xl font-bold uppercase leading-tight">{c.title}</div>
              <p className="mt-3 text-base text-muted-foreground">{c.body}</p>
              <a href="#" className="mt-8 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-widest text-brand">
                Learn More <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Disciplines() {
  const items = [
    { img: discRoboRace, title: "Robo Race" },
    { img: discLine, title: "Line Follower" },
    { img: discRc, title: "RC Racing" },
    { img: discFpv, title: "FPV Drone Racing & Aeromodelling" },
    { img: discHockey, title: "Robo Hockey" },
    { img: discWar, title: "Robo War" },
  ];
  return (
    <section className="section-pad bg-black">
      <div className="container-x">
        <div className="font-display text-base font-bold uppercase tracking-[0.25em] text-brand">Sports</div>
        <h2 className="mt-2 font-display text-4xl font-bold uppercase tracking-wide sm:text-5xl">Competition Disciplines</h2>
        <div className="relative mt-10">
          <div className="absolute inset-0 -z-0 overflow-hidden opacity-40">
            <img src={circuitBgImg} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="relative z-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {items.map(d => (
              <div key={d.title} className="overflow-hidden rounded-xl bg-surface">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={d.img} alt={d.title} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="px-4 py-4 text-center text-lg font-semibold">{d.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Leaderboard() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <img src={leaderboardImg} alt="Leaderboard" className="w-full rounded-xl" />
    </div>
  );
}

function Advantage() {
  const list = [
    { icon: Medal, title: "National Recognition", body: null, color: "text-brand" },
    { icon: Scale, title: "Fair Judging", body: null, color: "text-brand" },
    { icon: Briefcase, title: "Career Ops", body: '"Bridge the gap between arena victories and top-tier tech placements."', color: "text-yellow-400" },
    { icon: Zap, title: "High - Energy Eco", body: '"Join a nationwide community of elite innovators and robotics athletes."', color: "text-brand" },
  ];
  return (
    <section className="section-pad bg-background">
      <div className="container-x grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div>
          <div className="font-display text-2xl font-bold uppercase tracking-wide text-brand">Why Register ?</div>
          <h2 className="mt-2 font-display text-4xl font-bold uppercase tracking-wide sm:text-5xl">The League Advantage</h2>
          <div className="mt-10 space-y-8">
            {list.map(i => (
              <div key={i.title} className="grid grid-cols-[auto_minmax(0,1fr)] gap-5">
                <i.icon className={`h-20 w-20 shrink-0 ${i.color}`} strokeWidth={1.2} />
                <div>
                  <div className="font-display text-2xl font-bold uppercase">{i.title}</div>
                  {i.body && <p className="mt-2 max-w-md text-base text-muted-foreground">{i.body}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Leaderboard />
      </div>
    </section>
  );
}

function Ecosystem() {
  const cards = ["Become in Judge", "Volunteer", "Community Member"];
  return (
    <section className="section-pad bg-background">
      <div className="container-x">
        <h2 className="font-display text-4xl font-bold uppercase tracking-wide sm:text-5xl">Join the Ecosystem</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cards.map(c => (
            <form key={c} className="rounded-xl bg-surface/60 p-6 ring-1 ring-white/10">
              <div className="font-display text-xl font-bold uppercase tracking-wider">{c}</div>
              <div className="mt-5 space-y-4">
                {["Name", "Location", "Enroll"].map(f => (
                  <input key={f} placeholder={f} className="w-full rounded-md bg-transparent px-4 py-3 text-sm outline-none ring-1 ring-white/15 placeholder:text-muted-foreground focus:ring-brand" />
                ))}
              </div>
              <button type="button" className="mt-6 w-full rounded-md bg-brand py-3 font-display text-base font-bold tracking-widest text-white">SIGN UP</button>
            </form>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sponsors() {
  const list = [
    { name: "NIT Delhi", logo: category1 },
    { name: "Indian BIT", logo: category4 },
    { name: "NIT Silchar", logo: category2 },
    { name: "Robo Company", logo: delhiveryLogo },
    { name: "IIT Bombay", logo: iitBombayLogo },
    { name: "Robo Company", logo: category3 },
  ];
  return (
    <section className="pt-8 pb-12 bg-background">
      <div className="container-x">
        <h3 className="font-display text-2xl font-bold uppercase tracking-wider">Sponsors</h3>
        <div className="mt-8 grid grid-cols-2 gap-y-10 sm:grid-cols-3">
          {list.map((s, i) => (
            <div key={i} className="flex items-center justify-center gap-4 text-muted-foreground">
              <div className="grid h-28 w-28 place-items-center rounded-full bg-surface ring-2 ring-white/20 overflow-hidden p-2">
                <img src={s.logo} alt={s.name} className="h-24 w-24 object-contain" />
              </div>
              <span className="font-display text-base font-bold uppercase">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background pt-8 pb-16">
      <div className="container-x">
        <div className="border-t border-white/10" />
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <div>
            <div className="font-display text-lg font-bold uppercase tracking-wider">Quick Links</div>
          </div>
          <div className="sm:text-right">
            <div className="font-display text-lg font-bold uppercase tracking-wider">Social Media</div>
            <div className="mt-4 flex gap-5 sm:justify-end">
              {[Youtube, Instagram, Facebook, Twitter].map((I, i) => (
                <a key={i} href="#" className="text-foreground/80 hover:text-brand">
                  <I className="h-7 w-7" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Events />
        <Journey />
        <WhatIs />
        <Categories />
        <Disciplines />
        <Advantage />
        <Ecosystem />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}
