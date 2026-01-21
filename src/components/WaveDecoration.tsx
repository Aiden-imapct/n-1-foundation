import dividerImage from "@/assets/divider.png";
import upperDividerImage from "@/assets/upper-divider.png";

interface WaveDecorationProps {
  position?: "top" | "bottom";
}

const WaveDecoration = ({ position = "bottom" }: WaveDecorationProps) => {
  const imageSrc = position === "bottom" ? dividerImage : upperDividerImage;
  const waveClass = position === "top" ? "top-0" : "bottom-0";

  return (
    <div className={`absolute ${waveClass} left-0 right-0 w-full overflow-hidden leading-[0] z-[2]`}>
      <img 
        src={imageSrc}
        alt="" 
        className="relative block w-full h-auto" 
      />
    </div>
  );
};

export default WaveDecoration;