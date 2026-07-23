import { useEffect, useRef } from "react";
import storeVideo from "@/assets/CruznStore.mp4";
import pokemonVideo from "@/assets/CruznPokemon.mp4";
import toysVideo from "@/assets/CruznVintageToys.mp4";
import vhs1 from "@/assets/dvd-vhs/vhs-1.jpg";
import vhs2 from "@/assets/dvd-vhs/vhs-2.jpg";
import vhs3 from "@/assets/dvd-vhs/vhs-3.jpg";
import vhs4 from "@/assets/dvd-vhs/vhs-4.jpg";
import vhs5 from "@/assets/dvd-vhs/vhs-5.jpg";
import vhs6 from "@/assets/dvd-vhs/vhs-6.jpg";
import vhs7 from "@/assets/dvd-vhs/vhs-7.jpg";

const VHS_STILLS = [vhs1, vhs2, vhs3, vhs4, vhs5, vhs6, vhs7];

type DigItem = {
  id: string;
  index: string;
  title: string;
  text: string;
  tag: string;
  media: { kind: "video"; src: string } | { kind: "stills"; images: string[] };
};

const ITEMS: DigItem[] = [
  {
    id: "games",
    index: "01",
    title: "Retro & Modern Games",
    text: "NES, SNES, N64, PlayStation, Switch — consoles, controllers, and cartridges from every era.",
    tag: "Games",
    media: { kind: "video", src: storeVideo },
  },
  {
    id: "pokemon",
    index: "02",
    title: "Pokémon & Trading Cards",
    text: "Singles, sealed packs, vintage holos, and modern chase cards for collectors.",
    tag: "Pokémon",
    media: { kind: "video", src: pokemonVideo },
  },
  {
    id: "toys",
    index: "03",
    title: "Vintage Toys & Figures",
    text: "Star Wars, He-Man, Transformers, TMNT — the toy aisle, brought back.",
    tag: "Toys",
    media: { kind: "video", src: toysVideo },
  },
  {
    id: "vhs",
    index: "04",
    title: "DVDs, VHS & Nostalgia",
    text: "Cult classics, anime, and pop-culture treasures on the formats that started it all.",
    tag: "VHS / DVD",
    media: { kind: "stills", images: VHS_STILLS },
  },
];

const AutoVideo = ({ src }: { src: string }) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void el.play().catch(() => undefined);
        } else {
          el.pause();
        }
      },
      { threshold: 0.35 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      className="absolute inset-0 h-full w-full object-cover"
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden
    />
  );
};

const VhsCollage = ({ images }: { images: string[] }) => {
  const [hero, ...rest] = images;

  return (
    <div className="absolute inset-0 flex gap-1 p-1 sm:gap-1.5 sm:p-1.5">
      <div className="relative w-[58%] overflow-hidden rounded-sm">
        <img
          src={hero}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="grid w-[42%] grid-cols-2 grid-rows-3 gap-1 sm:gap-1.5">
        {rest.map((src) => (
          <div key={src} className="relative overflow-hidden rounded-sm">
            <img
              src={src}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const DigUpSection = () => (
  <section id="shop" className="relative py-20 sm:py-28">
    <div className="mx-auto max-w-6xl safe-px">
      <div className="max-w-2xl">
        <p className="section-kicker mb-3">Inside the shop</p>
        <h2 className="display text-4xl sm:text-5xl md:text-6xl">What you’ll dig up.</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Inventory rotates constantly. Every visit is a different hunt.
        </p>
      </div>

      <div className="mt-12 space-y-6 sm:mt-14 sm:space-y-8">
        {ITEMS.map((item, i) => {
          const flip = i % 2 === 1;

          return (
            <article
              key={item.id}
              className={`group grid overflow-hidden rounded-xl border border-white/10 bg-[hsl(var(--card))] shadow-[var(--shadow-lift)] lg:grid-cols-2 ${
                flip ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-black sm:aspect-[16/11] lg:aspect-auto lg:min-h-[22rem]">
                {item.media.kind === "video" ? (
                  <AutoVideo src={item.media.src} />
                ) : (
                  <VhsCollage images={item.media.images} />
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/20" />
                <span className="absolute left-3 top-3 rounded-md bg-black/65 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[hsl(var(--brand))] backdrop-blur-sm sm:left-4 sm:top-4">
                  {item.tag}
                </span>
              </div>

              <div className="flex flex-col justify-center border-t border-white/10 p-6 sm:p-8 lg:border-t-0 lg:p-10">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[hsl(var(--brand))]">
                    {item.index}
                  </p>
                </div>
                <h3 className="display mt-3 text-3xl sm:text-4xl md:text-5xl">{item.title}</h3>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                  {item.text}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default DigUpSection;
