"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

interface CountUpMetricProps {
  value: string;
  label: string;
}

function parseValue(value: string): {
  prefix: string;
  number: number;
  suffix: string;
} | null {
  const match = value.match(/^([^0-9]*)([0-9,.]+)(.*)$/);
  if (!match) return null;
  const num = parseFloat(match[2].replace(/,/g, ""));
  if (isNaN(num)) return null;
  return { prefix: match[1], number: num, suffix: match[3] };
}

export function CountUpMetric({ value, label }: CountUpMetricProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const parsed = parseValue(value);
  const [display, setDisplay] = useState(parsed ? `${parsed.prefix}0${parsed.suffix}` : value);

  useEffect(() => {
    if (!isInView || !parsed) return;

    const hasDecimal = value.includes(".") && parsed.suffix !== "%";
    const controls = animate(0, parsed.number, {
      duration: 1.5,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate(latest) {
        const formatted = hasDecimal
          ? latest.toFixed(1)
          : Math.round(latest).toLocaleString();
        setDisplay(`${parsed.prefix}${formatted}${parsed.suffix}`);
      },
    });

    return () => controls.stop();
  }, [isInView, parsed, value]);

  return (
    <div ref={ref} className="bg-surface border border-border rounded-lg p-6 text-center">
      <p className="text-3xl font-bold text-accent mb-1">{display}</p>
      <p className="text-sm text-text-secondary">{label}</p>
    </div>
  );
}
