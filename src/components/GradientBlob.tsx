// src/components/GradientBlob.tsx
interface GradientBlobProps {
  color?: string;       // main blob color
  size?: string;        // width/height, e.g. "40vw"
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  opacity?: number;
}

function GradientBlob({
  color = "#5b21b6",
  size = "40vw",
  top,
  left,
  right,
  bottom,
  opacity = 0.6,
}: GradientBlobProps) {
  return (
    <div
      className="absolute rounded-full blur-3xl pointer-events-none z-[-1]"
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity,
      }}
    />
  );
}

export default GradientBlob;