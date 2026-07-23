import { Instagram, MapPin, Phone } from "lucide-react";
import { DIRECTIONS_URL, IG_URL, PHONE_TEL } from "./site-data";

const MobileStickyBar = () => (
  <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-background/95 backdrop-blur-xl md:hidden pb-[env(safe-area-inset-bottom)]">
    <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[hsl(var(--brand))] to-transparent" />
    <div className="grid grid-cols-3 gap-1.5 p-2">
      <a
        href={PHONE_TEL}
        className="tap-target rounded-md border border-white/10 bg-white/[0.03] active:bg-white/[0.08]"
      >
        <Phone className="h-5 w-5 text-foreground/90" />
        <span className="text-[10px] font-extrabold uppercase tracking-wider text-foreground/80">Call</span>
      </a>
      <a
        href={DIRECTIONS_URL}
        target="_blank"
        rel="noreferrer"
        className="tap-target rounded-md bg-[hsl(var(--brand))] text-[hsl(var(--primary-foreground))] shadow-[0_0_24px_hsl(var(--brand)/0.35)]"
      >
        <MapPin className="h-5 w-5" />
        <span className="text-[10px] font-extrabold uppercase tracking-wider">Directions</span>
      </a>
      <a
        href={IG_URL}
        target="_blank"
        rel="noreferrer"
        className="tap-target rounded-md border border-[hsl(var(--brand))]/40 bg-[hsl(var(--brand))]/10 active:bg-[hsl(var(--brand))]/20"
      >
        <Instagram className="h-5 w-5 text-[hsl(var(--brand))]" />
        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[hsl(var(--brand))]">
          Instagram
        </span>
      </a>
    </div>
  </div>
);

export default MobileStickyBar;
