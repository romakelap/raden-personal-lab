import Image from "next/image";

interface RadenLogoProps {
  className?: string;
  variant?: "black" | "white";
  priority?: boolean;
}

export default function RadenLogo({ 
  className = "w-8 h-8", 
  variant = "black",
  priority = true,
}: RadenLogoProps) {
  const src = variant === "white" ? "/logo-white.png" : "/logo.png";
  
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      <Image
        src={src}
        alt="RADEN.NI Logo"
        width={64}
        height={64}
        priority={priority}
        className="w-full h-full object-contain select-none"
      />
    </div>
  );
}
