import { useEffect, useState } from "react";
import { Instagram, MapPin, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import BrandLogo from "./BrandLogo";
import { DIRECTIONS_URL, IG_HANDLE, IG_URL, NAV_LINKS } from "./site-data";

const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-background/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between safe-px lg:h-[4.25rem]">
        <a href="#top" className="block w-[9.5rem] sm:w-[11rem]" aria-label="Cruzn Retro home">
          <BrandLogo />
        </a>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-muted-foreground lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors hover:text-foreground ${
                link.href === "#drops" ? "text-[hsl(var(--brand))] hover:text-[hsl(var(--brand-hot))]" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={IG_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost !hidden !px-3 !py-2.5 !text-xs md:!inline-flex"
            aria-label={`Follow ${IG_HANDLE} on Instagram`}
          >
            <Instagram className="h-4 w-4" />
            {IG_HANDLE}
          </a>
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-brand !hidden !px-4 !py-2.5 !text-xs lg:!inline-flex"
          >
            <MapPin className="h-4 w-4" />
            Directions
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/15 bg-white/5 text-foreground lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex h-full w-[min(100%,20rem)] flex-col border-white/10 bg-background p-0"
            >
              <SheetHeader className="border-b border-white/10 px-5 py-5 text-left">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <BrandLogo className="w-40" />
              </SheetHeader>
              <nav className="flex flex-1 flex-col gap-1 p-3">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-md px-4 py-3.5 text-base font-semibold transition-colors hover:bg-white/5 ${
                      link.href === "#drops" ? "text-[hsl(var(--brand))]" : "text-foreground/90"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="space-y-2 border-t border-white/10 p-4">
                <a
                  href={IG_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="btn-brand w-full"
                >
                  <Instagram className="h-4 w-4" />
                  Follow {IG_HANDLE}
                </a>
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="btn-ghost w-full"
                >
                  <MapPin className="h-4 w-4" />
                  Get Directions
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
