import logo from "@/assets/cruzn-logo.png";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  imgClassName?: string;
  priority?: boolean;
};

const BrandLogo = ({ className, imgClassName, priority }: BrandLogoProps) => (
  <span className={cn("inline-flex items-center", className)}>
    <img
      src={logo}
      alt="Cruzn Retro"
      width={900}
      height={600}
      className={cn("h-auto w-full object-contain", imgClassName)}
      {...(priority ? { fetchPriority: "high" as const } : { loading: "lazy" as const })}
    />
  </span>
);

export default BrandLogo;
