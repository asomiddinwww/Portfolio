"use client";

import React from "react";
import {
  SiHtml5,
  SiSass,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiGit,
  SiFigma,
  SiNodedotjs,
  SiTypescript,
  SiNextdotjs,
  SiCss,
  SiCplusplus,
} from "react-icons/si";
import type { IconType } from "react-icons";

type SkillItem = {
  label: string;
  sublabel?: string;
  color: string;
  Icon?: IconType;
  emoji?: string;
};

const usingNow: SkillItem[] = [
  { label: "HTML5", color: "#E34F26", Icon: SiHtml5 },
  { label: "CSS", color: "#1572B6", Icon: SiCss },
  { label: "Sass", color: "#CC6699", Icon: SiSass },
  { label: "JavaScript", color: "#F7DF1E", Icon: SiJavascript },
  { label: "React", color: "#61DAFB", Icon: SiReact },
  { label: "Bootstrap", color: "#7952B3", Icon: SiBootstrap },
  { label: "Git", color: "#F05032", Icon: SiGit },
  { label: "Figma", color: "#A259FF", Icon: SiFigma },
];

const learning: SkillItem[] = [
  { label: "NodeJS", color: "#5FA04E", Icon: SiNodedotjs },
  { label: "Next", color: "#61DAFB", Icon: SiNextdotjs },
  { label: "TypeScript", color: "#3178C6", Icon: SiTypescript },
];

const otherSkills: SkillItem[] = [
  { label: "Angielski", sublabel: "C1/C2", color: "#00247D", emoji: "🇬🇧" },
  { label: "Russki", sublabel: "B1/B2", color: "#AA151B", emoji: "🇷🇺" },
  { label: "C++", color: "#00599C", Icon: SiCplusplus },
];

function SkillCard({ item, index }: { item: SkillItem; index: number }) {
  const { Icon, emoji, label, sublabel, color } = item;

  return (
    <div
      className="group flex flex-col items-center gap-3 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div
        className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04] transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:rotate-3 group-hover:shadow-xl sm:h-20 sm:w-20"
        style={{
          ["--glow" as any]: color,
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-40"
          style={{ backgroundColor: color }}
        />
        {Icon ? (
          <Icon
            className="relative z-10 h-15 p-3 w-15 transition-transform duration-300 group-hover:scale-110 sm:h-50 sm:w-50"
            style={{ color }}
          />
        ) : (
          <span className="relative z-10 text-3xl transition-transform duration-300 group-hover:scale-110 sm:text-4xl">
            {emoji}
          </span>
        )}
      </div>
      <div className="text-center">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-700 transition-colors duration-300 group-hover:text-neutral-900 sm:text-xs">
          {label}
        </p>
        {sublabel && (
          <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500 sm:text-xs">
            {sublabel}
          </p>
        )}
      </div>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-8 text-sm font-bold uppercase tracking-[0.15em] text-neutral-900 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
      {children}
    </h3>
  );
}

export default function Skills() {
  return (
    <section className="relative w-full  bg-gradient-to-b from-neutral-100 via-neutral-50 to-neutral-100 px-6 py-15 sm:px-10">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="mx-auto max-w-3xl" id="skillss">
        <div className="mb-16 flex justify-center opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
          <div className="border-2 border-neutral-900 px-10 py-4">
            <h2 className="text-2xl font-bold tracking-[0.35em] text-neutral-900">
              SKILLS
            </h2>
          </div>
        </div>

        <div className="mb-16">
          <SectionHeading>Using now:</SectionHeading>
          <div className="grid grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-8">
            {usingNow.map((item, i) => (
              <SkillCard key={item.label} item={item} index={i} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <SectionHeading>Learning:</SectionHeading>
          <div className="grid grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-8">
            {learning.map((item, i) => (
              <SkillCard key={item.label} item={item} index={i} />
            ))}
          </div>
        </div>

        <div>
          <SectionHeading>Other skills:</SectionHeading>
          <div className="grid grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-8">
            {otherSkills.map((item, i) => (
              <SkillCard key={item.label} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
