import { useEffect, useState } from "react";
import { useInView } from "../hooks/useInView";

type AnimatedCounterProps = {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

export default function AnimatedCounter({
  target,
  suffix = "",
  duration = 1500,
  className,
}: AnimatedCounterProps) {
  const { ref, inView } = useInView<HTMLParagraphElement>();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, duration]);

  return (
    <p ref={ref} className={className}>
      {value}
      {suffix}
    </p>
  );
}
