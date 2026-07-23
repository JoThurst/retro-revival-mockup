import { ArrowRight, Clock, Gamepad2, Instagram, MapPin, Phone, Star } from "lucide-react";
import arcadeArea from "@/assets/arcade-area.jpg";
import displayCases1 from "@/assets/display-cases-1.jpg";
import displayCases2 from "@/assets/display-cases-2.jpg";
import exterior from "@/assets/exterior.jpg";
import interior from "@/assets/interior.jpg";
import owners from "@/assets/owners.jpg";
import BrandLogo from "@/components/cruzn/BrandLogo";
import DigUpSection from "@/components/cruzn/DigUpSection";
import MobileStickyBar from "@/components/cruzn/MobileStickyBar";
import SiteHeader from "@/components/cruzn/SiteHeader";
import {
  ADDRESS,
  ADDRESS_SHORT,
  DIRECTIONS_URL,
  GOOGLE_REVIEWS_URL,
  HOURS,
  IG_HANDLE,
  IG_URL,
  MAPS_EMBED,
  PHONE_DISPLAY,
  PHONE_TEL,
  REVIEWS,
  TRADE_PILLARS,
} from "@/components/cruzn/site-data";

const MARQUEE = [
  "Follow @cruzn_retro",
  "New drops on Instagram",
  "Retro Games",
  "Action Figures",
  "Pokémon",
  "Free Arcade",
  "Buy · Sell · Trade",
  "Vernon, CT",
];

const GALLERY = [
  { src: arcadeArea, alt: "Free play arcade cabinets at Cruzn Retro", label: "Free arcade", wide: true },
  { src: displayCases1, alt: "Vintage action figures in glass cases", label: "Figures" },
  { src: displayCases2, alt: "Carded Marvel and X-Men figures on display", label: "Comics & toys" },
  { src: interior, alt: "Store aisles packed with retro games and collectibles", label: "The shop" },
  { src: exterior, alt: "Cruzn Retro storefront in Vernon, CT", label: "Storefront" },
  { src: owners, alt: "Cruzn Retro family behind the counter", label: "The crew" },
];

const CruznRetro = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteHeader />

      {/* HERO — brand first, full-bleed store photo */}
      <section id="top" className="relative min-h-[100svh] flex items-end">
        <div className="absolute inset-0">
          <img
            src={arcadeArea}
            alt="Arcade cabinets at Cruzn Retro in Vernon, CT"
            className="h-full w-full object-cover object-center"
            width={1920}
            height={1280}
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
          <div className="noise absolute inset-0" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl safe-px pb-16 pt-28 sm:pb-20 sm:pt-32">
          <div className="reveal mb-6 inline-flex max-w-full flex-wrap items-center gap-x-2.5 gap-y-1.5 rounded-md border border-[hsl(var(--brand))]/60 bg-black/70 px-3.5 py-2.5 shadow-[0_0_28px_hsl(var(--brand)/0.25)] backdrop-blur-md">
            <span className="text-[13px] font-extrabold uppercase tracking-[0.18em] text-white sm:text-sm">
              Vernon, CT
            </span>
            <span className="hidden h-3.5 w-px bg-[hsl(var(--brand))]/70 sm:block" aria-hidden />
            <span className="flex items-center gap-2 text-[13px] font-extrabold uppercase tracking-[0.16em] text-[hsl(var(--brand))] sm:text-sm">
              <span>Buy</span>
              <span className="text-white/35">·</span>
              <span>Sell</span>
              <span className="text-white/35">·</span>
              <span>Trade</span>
            </span>
          </div>

          <h1 className="reveal reveal-delay-1 max-w-3xl">
            <span className="sr-only">Cruzn Retro</span>
            <BrandLogo className="block w-[min(100%,28rem)] sm:w-[min(100%,34rem)]" priority />
            <span
              className="mt-5 block max-w-xl text-balance text-2xl font-semibold normal-case tracking-normal text-foreground/90 sm:text-3xl md:text-4xl"
              style={{ fontFamily: "Figtree, system-ui, sans-serif" }}
            >
              Games, toys &amp; collectibles worth hunting in person.
            </span>
          </h1>

          <p className="reveal reveal-delay-2 mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Packed shelves, free arcade play, and rotating finds from the 80s, 90s, and early 2000s —
            right here in Vernon. New inventory drops on Instagram first.
          </p>

          <div className="reveal reveal-delay-3 mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a href={DIRECTIONS_URL} target="_blank" rel="noreferrer" className="btn-brand text-base !px-7 !py-4">
              <MapPin className="h-5 w-5" />
              Get Directions
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={IG_URL} target="_blank" rel="noreferrer" className="btn-ghost">
              <Instagram className="h-4 w-4" />
              Follow {IG_HANDLE}
            </a>
            <a href={PHONE_TEL} className="btn-ghost">
              <Phone className="h-4 w-4" />
              Call {PHONE_DISPLAY}
            </a>
          </div>

          <div className="reveal reveal-delay-3 mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="flex gap-0.5 text-[hsl(var(--brand-glow))]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </span>
              <span className="font-bold text-foreground">4.9</span>
              <span>38 Google reviews</span>
            </a>
            <a
              href={IG_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-[hsl(var(--brand))] transition-colors hover:text-[hsl(var(--brand-hot))]"
            >
              <Instagram className="h-4 w-4" />
              See today’s finds on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="relative overflow-hidden border-y border-white/10 bg-[hsl(var(--ink))] py-3.5">
        <div className="marquee-track flex gap-10 whitespace-nowrap pr-10 text-sm font-extrabold uppercase tracking-[0.2em] text-foreground/80">
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <span key={`${item}-${i}`} className="inline-flex items-center gap-10">
              {item}
              <span className="text-[hsl(var(--brand))]" aria-hidden>
                ◆
              </span>
            </span>
          ))}
        </div>
      </div>

      <DigUpSection />

      {/* FREE ARCADE CALLOUT */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 checker-bg opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 safe-px lg:grid-cols-2">
          <div>
            <p className="section-kicker mb-3">Play free</p>
            <h2 className="display text-4xl sm:text-5xl md:text-6xl">Arcade cabinets. No tokens.</h2>
            <p className="mt-4 max-w-md text-lg text-muted-foreground">
              Full-size cabs and retro consoles are open to play while you browse — a real hangout for
              collectors and nostalgia hunters.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[hsl(var(--brand))]">
              <Gamepad2 className="h-4 w-4" />
              Free play while you shop
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border border-white/10 shadow-[var(--shadow-lift)]">
            <img
              src={arcadeArea}
              alt="Marvel vs Capcom and Mario Bros arcade cabinets"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
              width={1280}
              height={960}
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 safe-px lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="overflow-hidden rounded-lg border border-white/10">
              <img
                src={owners}
                alt="The Cruzn Retro crew in the shop"
                className="aspect-[4/3] w-full object-cover object-top"
                loading="lazy"
                width={1280}
                height={960}
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Family-run. Collector-built. Local to Vernon.
            </p>
          </div>
          <div>
            <p className="section-kicker mb-3">About the shop</p>
            <h2 className="display text-4xl sm:text-5xl md:text-6xl text-balance">
              Built for people who still chase the find.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Cruzn Retro is for anyone who remembers the feeling of pulling a favorite game, figure,
              card, or toy from childhood. Whether you collect seriously or just want to relive the
              memories, the shelves are packed with rotating inventory worth browsing in person.
            </p>
            <ul className="mt-10 space-y-0 border-t border-white/10">
              {[
                { label: "Thousands of finds", detail: "rotating on the shelves" },
                { label: "80s through early 2000s", detail: "and modern stock too" },
                { label: "Family-run in Vernon", detail: "local collectors, local shop" },
              ].map((stat) => (
                <li
                  key={stat.label}
                  className="flex flex-col gap-0.5 border-b border-white/10 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <span className="text-lg font-extrabold tracking-tight text-foreground sm:text-xl">
                    {stat.label}
                  </span>
                  <span className="text-sm text-muted-foreground sm:text-right">{stat.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BUY / SELL / TRADE */}
      <section id="trade" className="relative border-y border-white/10 bg-[hsl(var(--card))] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl safe-px">
          <div className="max-w-2xl">
            <p className="section-kicker mb-3">Bring it in</p>
            <h2 className="display text-4xl sm:text-5xl md:text-6xl">Buy. Sell. Trade.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Got games, toys, cards, or collectibles gathering dust? Bring them in — let’s talk.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {TRADE_PILLARS.map((pillar, i) => (
              <div key={pillar.title} className="md:border-l md:border-white/10 md:pl-8 first:md:border-l-0 first:md:pl-0">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[hsl(var(--brand))]">
                  0{i + 1}
                </p>
                <h3 className="display mt-3 text-4xl">{pillar.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{pillar.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={PHONE_TEL} className="btn-brand">
              <Phone className="h-4 w-4" />
              Call before you stop in
            </a>
            <p className="text-sm text-muted-foreground">A quick call helps us prep an honest offer.</p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl safe-px">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="section-kicker mb-3">Inside the shop</p>
              <h2 className="display text-4xl sm:text-5xl md:text-6xl">See the shelves.</h2>
              <p className="mt-3 text-muted-foreground">
                A peek at the floor — for daily drops and rare pulls, follow {IG_HANDLE}.
              </p>
            </div>
            <a href={IG_URL} target="_blank" rel="noreferrer" className="btn-brand w-fit">
              <Instagram className="h-4 w-4" />
              Open Instagram
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3">
            {GALLERY.map((shot) => (
              <figure
                key={shot.label}
                className={`group relative overflow-hidden rounded-md border border-white/10 ${
                  shot.wide ? "col-span-2 aspect-[16/10] md:aspect-auto md:row-span-2 md:min-h-full" : "aspect-square"
                }`}
              >
                <img
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-10">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-white/90">
                    {shot.label}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 checker-bg opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/92 to-background" />
        <div className="relative mx-auto max-w-6xl safe-px">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="section-kicker mb-3">Google reviews</p>
              <h2 className="display text-4xl sm:text-5xl md:text-6xl">Loved by local collectors.</h2>
            </div>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-3 rounded-md border border-[hsl(var(--brand))]/45 bg-[hsl(var(--brand))]/10 px-4 py-3 transition-colors hover:bg-[hsl(var(--brand))]/18"
            >
              <span className="flex gap-0.5 text-[hsl(var(--brand-glow))]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </span>
              <span className="display text-3xl leading-none text-foreground">4.9</span>
              <span className="text-sm font-semibold text-muted-foreground">38 reviews</span>
            </a>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
            {REVIEWS.map((review, i) => (
              <blockquote
                key={review.who}
                className={`relative flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[hsl(var(--card))] p-6 shadow-[var(--shadow-lift)] sm:p-7 ${
                  i === 0 ? "md:col-span-1 border-[hsl(var(--brand))]/40" : ""
                }`}
              >
                <div
                  className="absolute inset-x-0 top-0 h-1"
                  style={{ background: "linear-gradient(90deg, hsl(var(--brand)), hsl(var(--brand-glow)))" }}
                />
                <p
                  className="pointer-events-none absolute -right-1 -top-3 select-none font-serif text-[7rem] leading-none text-[hsl(var(--brand))]/20"
                  aria-hidden
                >
                  “
                </p>
                <div className="relative mb-5 flex items-center justify-between gap-3">
                  <div className="flex gap-0.5 text-[hsl(var(--brand-glow))]">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current drop-shadow-[0_0_8px_hsl(var(--brand)/0.45)]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-muted-foreground">
                    Google
                  </span>
                </div>
                <p className="relative flex-1 text-[15px] leading-relaxed text-foreground sm:text-base">
                  “{review.quote}”
                </p>
                <footer className="relative mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-extrabold text-[hsl(var(--primary-foreground))]"
                    style={{ background: "linear-gradient(135deg, hsl(var(--brand)), hsl(var(--brand-hot)))" }}
                  >
                    {review.who
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                  <div>
                    <p className="font-bold text-foreground">{review.who}</p>
                    <p className="text-xs text-muted-foreground">Verified Google review</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer" className="btn-ghost">
              <Star className="h-4 w-4 text-[hsl(var(--brand-glow))]" />
              Read more on Google
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* INSTAGRAM — primary social / inventory channel */}
      <section id="drops" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl safe-px">
          <div className="relative overflow-hidden rounded-lg border border-[hsl(var(--brand))]/35 bg-[hsl(var(--card))]">
            <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at 20% 20%, hsl(var(--brand) / 0.35), transparent 55%)" }} />
            <div className="relative grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
              <div>
                <p className="section-kicker mb-3 inline-flex items-center gap-2">
                  <Instagram className="h-3.5 w-3.5" />
                  Instagram first
                </p>
                <h2 className="display text-4xl sm:text-5xl md:text-6xl text-balance">
                  New stock shows up on {IG_HANDLE}.
                </h2>
                <p className="mt-5 max-w-md text-lg text-muted-foreground">
                  Rare pulls, trade-ins, and “just hit the shelf” posts land on Instagram before anywhere
                  else. Follow so you don’t miss the hunt.
                </p>
                <ul className="mt-6 space-y-2 text-sm font-semibold text-foreground/85">
                  <li className="flex items-center gap-2">
                    <span className="text-[hsl(var(--brand))]">◆</span> Daily inventory drops
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[hsl(var(--brand))]">◆</span> Store hours & visit updates
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[hsl(var(--brand))]">◆</span> Collector finds & trade-ins
                  </li>
                </ul>
                <a href={IG_URL} target="_blank" rel="noreferrer" className="btn-brand mt-8 text-base !px-7 !py-4">
                  <Instagram className="h-5 w-5" />
                  Follow {IG_HANDLE}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <a
                href={IG_URL}
                target="_blank"
                rel="noreferrer"
                className="group grid grid-cols-3 gap-2"
                aria-label={`Open ${IG_HANDLE} on Instagram`}
              >
                {[displayCases2, displayCases1, exterior, arcadeArea, owners, interior].map((src, i) => (
                  <div
                    key={i}
                    className="aspect-square overflow-hidden rounded-sm border border-white/10 transition-transform duration-500 group-hover:scale-[1.02]"
                  >
                    <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
                  </div>
                ))}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 safe-px lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-white/10">
            <div className="relative aspect-[16/10]">
              <img
                src={exterior}
                alt="Cruzn Retro storefront at 500 Talcottville Road"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-md bg-black/55 px-3 py-1.5 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                <MapPin className="h-3.5 w-3.5 text-[hsl(var(--brand))]" />
                Vernon, CT
              </div>
            </div>
            <iframe
              title="Map to Cruzn Retro in Vernon, CT"
              src={MAPS_EMBED}
              className="h-64 w-full border-0 sm:h-72"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div>
            <p className="section-kicker mb-3">Visit</p>
            <h2 className="display text-4xl sm:text-5xl md:text-6xl">Come hang out.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Browse in person — that’s how the best finds happen.
            </p>

            <div className="mt-8 space-y-6 border-t border-white/10 pt-8">
              <div className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--brand))]" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Address</p>
                  <p className="mt-1 font-semibold">{ADDRESS}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--brand))]" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone</p>
                  <a href={PHONE_TEL} className="mt-1 block font-semibold hover:text-[hsl(var(--brand))]">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--brand))]" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Hours</p>
                  <ul className="mt-1 space-y-1 font-semibold">
                    {HOURS.map((row) => (
                      <li key={row.day} className="flex flex-wrap gap-x-3 gap-y-0.5">
                        <span className="min-w-[5.5rem] text-muted-foreground">{row.day}</span>
                        <span>{row.time}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Hours can change —{" "}
                    <a href={IG_URL} target="_blank" rel="noreferrer" className="font-semibold text-[hsl(var(--brand))] hover:underline">
                      check Instagram
                    </a>{" "}
                    or call before you drive out.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={DIRECTIONS_URL} target="_blank" rel="noreferrer" className="btn-brand">
                <MapPin className="h-4 w-4" />
                Get Directions
              </a>
              <a href={IG_URL} target="_blank" rel="noreferrer" className="btn-ghost">
                <Instagram className="h-4 w-4" />
                {IG_HANDLE}
              </a>
              <a href={PHONE_TEL} className="btn-ghost">
                <Phone className="h-4 w-4" />
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 pb-28 pt-14 md:pb-14">
        <div className="mx-auto grid max-w-6xl gap-10 safe-px sm:grid-cols-3">
          <div>
            <BrandLogo className="w-36" />
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Retro games · Toys · Pokémon · Collectibles · Buy Sell Trade
            </p>
          </div>
          <div className="text-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Visit</p>
            <p className="mt-2">{ADDRESS_SHORT}</p>
            <a href={PHONE_TEL} className="mt-1 block text-muted-foreground hover:text-foreground">
              {PHONE_DISPLAY}
            </a>
          </div>
          <div className="text-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Follow for drops</p>
            <a
              href={IG_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-2 font-semibold text-[hsl(var(--brand))] hover:text-[hsl(var(--brand-hot))]"
            >
              <Instagram className="h-4 w-4" />
              {IG_HANDLE}
            </a>
            <p className="mt-2 text-xs text-muted-foreground">New inventory posts land here first.</p>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-6xl flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 safe-px text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Cruzn Retro. All rights reserved.</span>
          <span className="font-bold uppercase tracking-wider text-foreground/50">Vernon, CT</span>
        </div>
      </footer>

      <MobileStickyBar />
    </div>
  );
};

export default CruznRetro;
