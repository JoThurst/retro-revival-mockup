import { Phone, MapPin, Instagram, Star, ArrowRight, Gamepad2, Disc3, Sparkles, Bot, ShoppingBag, HandCoins, Repeat, Clock } from "lucide-react";
import arcadeArea from "@/assets/arcade-area.jpg";
import displayCases1 from "@/assets/display-cases-1.jpg";
import displayCases2 from "@/assets/display-cases-2.jpg";
import exterior from "@/assets/exterior.jpg";
import interior from "@/assets/interior.jpg";
import owners from "@/assets/owners.jpg";

const PHONE_TEL = "tel:+18604540283";
const PHONE_DISPLAY = "(860) 454-0283";
const ADDRESS = "500 Talcottville Rd Suite 5, Vernon, CT 06066";
const DIRECTIONS_URL = "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(ADDRESS);
const MAPS_EMBED = "https://www.google.com/maps?q=" + encodeURIComponent(ADDRESS) + "&output=embed";
const IG_URL = "https://www.instagram.com/cruzn_retro/?hl=en";

const CruznRetro = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2">
            <span className="pixel text-[10px] neon-text-teal">CRUZN</span>
            <span className="display text-2xl tracking-wide">RETRO</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
            <a href="#shop" className="hover:text-foreground transition">Shop</a>
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#trade" className="hover:text-foreground transition">Buy / Sell / Trade</a>
            <a href="#gallery" className="hover:text-foreground transition">Gallery</a>
            <a href="#visit" className="hover:text-foreground transition">Visit</a>
          </nav>
          <a href={DIRECTIONS_URL} target="_blank" rel="noreferrer" className="hidden md:inline-flex btn-neon-teal !py-2 !px-4 text-xs">
            <MapPin className="w-4 h-4" /> Directions
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-[100svh] flex items-center pt-24 pb-32">
        <div className="absolute inset-0">
          <img src={interior} alt="Inside Cruzn Retro — packed shelves of retro games and collectibles" className="w-full h-full object-cover" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/70" />
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="absolute inset-0 scanlines opacity-15 pointer-events-none" />
          <div className="hidden md:block absolute top-24 left-6 w-10 h-10 border-t-2 border-l-2 border-[hsl(var(--neon-teal))]/60" />
          <div className="hidden md:block absolute bottom-10 right-6 w-10 h-10 border-b-2 border-r-2 border-[hsl(var(--neon-purple))]/60" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/70 backdrop-blur-md border border-border mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--neon-teal))] blink" />
              <span className="pixel text-[9px] neon-text-teal">NEW STOCK WEEKLY</span>
              <span className="w-px h-3 bg-border mx-1" />
              <span className="text-[11px] uppercase tracking-widest text-muted-foreground">Vernon, CT</span>
            </div>
            <h1 className="display text-5xl sm:text-7xl md:text-8xl text-balance leading-[0.95]">
              Retro Games, Toys & <span className="neon-text-teal">Collectibles</span> <span className="text-muted-foreground/80">in</span> <span className="neon-text-orange">Vernon, CT</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl text-balance">
              Step into Cruzn Retro and rediscover the games, figures, cards, and memories that made the
              <span className="text-foreground"> 80s, 90s, and early 2000s </span>
              unforgettable.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:items-center">
              <a href={DIRECTIONS_URL} target="_blank" rel="noreferrer"
                 className="btn-neon-teal !px-7 !py-4 text-base group">
                <MapPin className="w-5 h-5" /> Get Directions
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <div className="flex gap-3">
                <a href={PHONE_TEL} className="btn-ghost-neon flex-1 sm:flex-none"><Phone className="w-4 h-4" /> Call Shop</a>
                <a href={IG_URL} target="_blank" rel="noreferrer" className="btn-ghost-neon flex-1 sm:flex-none"><Instagram className="w-4 h-4" /> Instagram</a>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <a
                href="https://www.google.com/search?q=Cruzn+Retro+Vernon+CT"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 group"
              >
                <div className="flex items-center gap-0.5 text-[hsl(var(--neon-yellow))]">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="font-semibold">4.9</span>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">38 reviews on Google</span>
              </a>
              <span className="hidden sm:inline w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <span className="pixel text-[9px] neon-text-orange">BUY</span>
                <span className="text-border">/</span>
                <span className="pixel text-[9px] neon-text-purple">SELL</span>
                <span className="text-border">/</span>
                <span className="pixel text-[9px] neon-text-pink">TRADE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="shop" className="py-20 md:py-28 relative">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
        <div className="container relative">
          <div className="max-w-2xl mb-12">
            <p className="pixel text-[10px] neon-text-purple mb-3">// INVENTORY</p>
            <h2 className="display text-4xl md:text-6xl">What you'll dig up inside.</h2>
            <p className="mt-4 text-muted-foreground">Inventory rotates constantly. Every visit is a different hunt.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Gamepad2, color: "teal", title: "Retro & Modern Games", text: "NES, SNES, N64, PlayStation, Switch — consoles, controllers, and cartridges from every era.", tag: "LEVEL 99", foot: "READY PLAYER 1" },
              { icon: Sparkles, color: "orange", title: "Pokémon & Trading Cards", text: "Singles, sealed packs, vintage holos, and modern chase cards for serious collectors.", tag: "HOLO", foot: "1ST EDITION" },
              { icon: Bot, color: "purple", title: "Vintage Toys & Figures", text: "Star Wars, He-Man, Transformers, TMNT — figures that bring the toy aisle back.", tag: "RARE", foot: "MINT IN BOX" },
              { icon: Disc3, color: "pink", title: "DVDs, VHS & Nostalgia", text: "Cult classics, anime, and pop-culture treasures on the formats that started it all.", tag: "VINTAGE", foot: "BE KIND REWIND" },
            ].map((c, i) => (
              <div key={i} className="card-trading group" style={{ ['--card-accent' as any]: `var(--neon-${c.color})` }}>
                <div className="card-trading-inner flex flex-col h-full">
                  <div className="card-trading-header">
                    <span className={`pixel text-[8px] neon-text-${c.color}`}>#{String(i + 1).padStart(3, "0")} · {c.tag}</span>
                    <span className="pixel text-[7px] text-muted-foreground">AUTHENTIC</span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 neon-text-${c.color}`}
                         style={{ background: `hsl(var(--neon-${c.color}) / 0.12)`, border: `1px solid hsl(var(--neon-${c.color}) / 0.4)` }}>
                      <c.icon className="w-6 h-6" />
                    </div>
                    <h3 className="display text-2xl mb-2 leading-tight">{c.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{c.text}</p>
                    <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                      <span className={`pixel text-[8px] neon-text-${c.color} opacity-70`}>// {c.foot}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 md:py-28 relative">
        <div className="container grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-border card-retro">
              <img src={owners} alt="Cruzn Retro store owners" loading="lazy" width={1280} height={960} className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-4 md:-right-8 card-retro px-5 py-4 max-w-[220px]">
              <div className="flex items-center gap-1 text-[hsl(var(--neon-yellow))] mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
              </div>
              <p className="text-xs text-muted-foreground">"One of the nicest owners around."</p>
            </div>
          </div>
          <div>
            <p className="pixel text-[10px] neon-text-teal mb-3">// ABOUT THE SHOP</p>
            <h2 className="display text-4xl md:text-6xl text-balance">A nostalgia stop for collectors, gamers, and treasure hunters.</h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Cruzn Retro is built for people who still remember the feeling of finding a favorite game, figure, card, or toy from childhood.
              Whether you collect seriously or just want to relive the memories, the shop is packed with rotating inventory and retro finds worth browsing in person.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { k: "1000s", v: "Items in stock" },
                { k: "All eras", v: "80s → 2000s" },
                { k: "Local", v: "Family-run" },
              ].map((s, i) => (
                <div key={i} className="card-retro p-4 text-center">
                  <div className="display text-3xl neon-text-orange">{s.k}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUY / SELL / TRADE */}
      <section id="trade" className="py-20 md:py-28 relative">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="container relative">
          <div className="max-w-2xl mb-12">
            <p className="pixel text-[10px] neon-text-orange mb-3">// BRING IT IN</p>
            <h2 className="display text-4xl md:text-6xl">Buy. Sell. Trade.</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Got retro games, toys, cards, figures, or collectibles gathering dust? Bring them in — let's talk.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: ShoppingBag, c: "teal", t: "Buy unique finds", d: "Hunt rotating shelves stocked with hand-picked games, figures, and collectibles." },
              { icon: HandCoins, c: "orange", t: "Sell your collection", d: "Cash offers on retro games, cards, toys, and pop-culture pieces — bring 'em in." },
              { icon: Repeat, c: "purple", t: "Trade for something new", d: "Swap what you've outgrown for that grail piece you've been chasing." },
            ].map((b, i) => (
              <div key={i} className="card-retro card-retro-hover p-7">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 neon-text-${b.c}`}
                     style={{ background: `hsl(var(--neon-${b.c}) / 0.12)`, border: `1px solid hsl(var(--neon-${b.c}) / 0.4)` }}>
                  <b.icon className="w-7 h-7" />
                </div>
                <h3 className="display text-3xl mb-2">{b.t}</h3>
                <p className="text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href={PHONE_TEL} className="btn-neon-orange"><Phone className="w-4 h-4" /> Call Before You Stop In</a>
            <span className="text-sm text-muted-foreground">A quick call helps us prep an honest offer.</span>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-20 md:py-28">
        <div className="container">
          <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
            <div className="max-w-xl">
              <p className="pixel text-[10px] neon-text-purple mb-3">// INSIDE THE SHOP</p>
              <h2 className="display text-4xl md:text-6xl">Featured inventory & shop.</h2>
            </div>
            <a href={IG_URL} target="_blank" rel="noreferrer" className="btn-ghost-neon"><Instagram className="w-4 h-4" /> See more on IG <ArrowRight className="w-4 h-4" /></a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {[
              { src: arcadeArea, t: "Arcade area", span: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" },
              { src: displayCases1, t: "Action figures" },
              { src: displayCases2, t: "Pokémon & cards" },
              { src: interior, t: "Game shelves" },
              { src: exterior, t: "Storefront" },
              { src: owners, t: "Your local shop" },
            ].map((g, i) => (
              <figure key={i} className={`relative group overflow-hidden rounded-2xl border border-border ${g.span ?? "aspect-square"}`}>
                <img src={g.src} alt={g.t} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
                <figcaption className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="pixel text-[9px] neon-text-teal">{g.t.toUpperCase()}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 md:py-28 relative">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <p className="pixel text-[10px] neon-text-orange mb-3">// REVIEWS</p>
            <h2 className="display text-4xl md:text-6xl">Loved by local collectors.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { q: "Killer selection, clean and organized, with inventory priced to sell.", who: "Local collector", tag: "Inventory" },
              { q: "Great selection, fair prices, and owners cool.", who: "Repeat customer", tag: "Pricing" },
              { q: "Owner is one of the nicest people around.", who: "Vernon regular", tag: "Service" },
            ].map((r, i) => (
              <article key={i} className="card-retro p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "var(--gradient-neon)" }} />
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[hsl(var(--neon-yellow))]">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span className="pixel text-[8px] text-muted-foreground">#{String(i + 1).padStart(3, "0")}</span>
                </div>
                <p className="text-lg leading-relaxed mb-6">"{r.q}"</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm font-semibold">{r.who}</span>
                  <span className="chip !text-[10px]">{r.tag}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-20 md:py-28 relative">
        <div className="container">
          <div className="card-retro relative overflow-hidden p-10 md:p-16">
            <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-hero)" }} />
            <div className="absolute inset-0 grid-bg opacity-50" />
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="pixel text-[10px] neon-text-pink mb-3">// NEW DROPS</p>
                <h2 className="display text-4xl md:text-6xl text-balance">Fresh finds hit the shelves often.</h2>
                <p className="mt-5 text-muted-foreground text-lg">
                  Follow Cruzn Retro on Instagram for new inventory, rare finds, store updates, and collector posts.
                </p>
                <a href={IG_URL} target="_blank" rel="noreferrer" className="btn-neon-purple mt-7"><Instagram className="w-4 h-4" /> Follow @cruzn_retro</a>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[displayCases2, displayCases1, interior, arcadeArea, owners, exterior].map((src, i) => (
                  <div key={i} className="aspect-square rounded-xl overflow-hidden border border-border">
                    <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-20 md:py-28">
        <div className="container grid lg:grid-cols-2 gap-10">
          <div className="card-retro overflow-hidden">
            <div className="relative aspect-[4/3]">
              <img src={exterior} alt="Cruzn Retro storefront" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4 chip"><MapPin className="w-3.5 h-3.5" /> Vernon, CT</div>
            </div>
            <iframe
              title="Cruzn Retro map"
              src={MAPS_EMBED}
              className="w-full h-72 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div>
            <p className="pixel text-[10px] neon-text-teal mb-3">// VISIT</p>
            <h2 className="display text-4xl md:text-6xl">Come hang out.</h2>
            <p className="mt-4 text-muted-foreground text-lg">Browse in person — that's how the best finds happen.</p>

            <div className="mt-8 space-y-4">
              <div className="card-retro p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center neon-text-teal" style={{ background: "hsl(var(--neon-teal) / 0.12)" }}><MapPin className="w-5 h-5" /></div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Address</div>
                  <div className="font-semibold">{ADDRESS}</div>
                </div>
              </div>
              <div className="card-retro p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center neon-text-orange" style={{ background: "hsl(var(--neon-orange) / 0.12)" }}><Phone className="w-5 h-5" /></div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Phone</div>
                  <a href={PHONE_TEL} className="font-semibold hover:underline">{PHONE_DISPLAY}</a>
                </div>
              </div>
              <div className="card-retro p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center neon-text-purple" style={{ background: "hsl(var(--neon-purple) / 0.12)" }}><Clock className="w-5 h-5" /></div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Current hours</div>
                  <div className="font-semibold">Check Google or Instagram before visiting</div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={DIRECTIONS_URL} target="_blank" rel="noreferrer" className="btn-neon-teal"><MapPin className="w-4 h-4" /> Get Directions</a>
              <a href={PHONE_TEL} className="btn-neon-orange"><Phone className="w-4 h-4" /> Call {PHONE_DISPLAY}</a>
              <a href={IG_URL} target="_blank" rel="noreferrer" className="btn-ghost-neon"><Instagram className="w-4 h-4" /> View Instagram</a>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              Hours and inventory may change. Call or check Instagram before visiting.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border pt-16 pb-32 md:pb-16">
        <div className="container grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="pixel text-[10px] neon-text-teal">CRUZN</span>
              <span className="display text-2xl">RETRO</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Retro games • Toys • Pokémon • Collectibles • Buy Sell Trade</p>
          </div>
          <div className="text-sm space-y-2">
            <div className="text-muted-foreground uppercase text-xs tracking-widest">Visit</div>
            <div>{ADDRESS}</div>
            <a href={PHONE_TEL} className="block hover:text-foreground text-muted-foreground">{PHONE_DISPLAY}</a>
          </div>
          <div className="text-sm space-y-2">
            <div className="text-muted-foreground uppercase text-xs tracking-widest">Follow</div>
            <a href={IG_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:neon-text-purple">
              <Instagram className="w-4 h-4" /> @cruzn_retro
            </a>
          </div>
        </div>
        <div className="container mt-12 pt-6 border-t border-border text-xs text-muted-foreground flex flex-wrap gap-3 justify-between">
          <span>© {new Date().getFullYear()} Cruzn Retro. All rights reserved.</span>
          <span className="pixel text-[9px]">PRESS START TO PLAY</span>
        </div>
      </footer>

      {/* STICKY MOBILE BAR */}
      <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-background/95 backdrop-blur-xl border-t border-border pb-[env(safe-area-inset-bottom)]">
        <div className="absolute -top-px inset-x-0 h-px" style={{ background: "var(--gradient-neon)" }} />
        <div className="grid grid-cols-3 gap-2 p-2">
          <a href={PHONE_TEL} className="tap-target rounded-xl border border-[hsl(var(--neon-orange))]/40 bg-[hsl(var(--neon-orange))]/5 active:bg-[hsl(var(--neon-orange))]/15">
            <Phone className="w-5 h-5 neon-text-orange" />
            <span className="pixel text-[9px] neon-text-orange">CALL</span>
          </a>
          <a href={DIRECTIONS_URL} target="_blank" rel="noreferrer"
             className="tap-target rounded-xl bg-[hsl(var(--neon-teal))] text-[hsl(var(--primary-foreground))] shadow-[0_0_20px_hsl(var(--neon-teal)/0.35)]">
            <MapPin className="w-5 h-5" />
            <span className="pixel text-[9px]">DIRECTIONS</span>
          </a>
          <a href={IG_URL} target="_blank" rel="noreferrer" className="tap-target rounded-xl border border-[hsl(var(--neon-purple))]/40 bg-[hsl(var(--neon-purple))]/5 active:bg-[hsl(var(--neon-purple))]/15">
            <Instagram className="w-5 h-5 neon-text-purple" />
            <span className="pixel text-[9px] neon-text-purple">INSTAGRAM</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CruznRetro;
