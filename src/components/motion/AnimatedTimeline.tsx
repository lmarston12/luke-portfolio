"use client";

import { FadeIn } from "./FadeIn";

interface TimelineEntry {
  date: string;
  title: string;
  company: string;
  description: string;
}

interface AnimatedTimelineProps {
  entries: TimelineEntry[];
}

export function AnimatedTimeline({ entries }: AnimatedTimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-3 top-2 bottom-2 w-px bg-border" />
      <div className="space-y-8">
        {entries.map((entry, i) => (
          <FadeIn key={`${entry.company}-${entry.date}`} delay={i * 0.08}>
            <div className="relative pl-10">
              <div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full border-2 border-accent bg-surface" />
              <p className="text-xs font-medium text-text-secondary mb-1">
                {entry.date}
              </p>
              <h3 className="text-base font-semibold text-foreground">
                {entry.title}
              </h3>
              <p className="text-sm text-accent mb-1">{entry.company}</p>
              <p className="text-sm text-text-secondary leading-relaxed">
                {entry.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
