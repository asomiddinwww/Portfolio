"use client";

import React, { useState } from "react";
import img1 from "../image/design.jpg";
import img2 from "../image/uzum.jpg";
import img3 from "../image/space.jpg";
import img4 from "../image/portfol.png";
import img5 from "../image/eat.jpg";
import img6 from "../image/admin.jpg";

type Category = "ALL" | "CODED" | "DESIGNED";

type Project = {
  id: number;
  title: string;
  subtitle: string;
  eyebrow?: string;
  category: "CODED" | "DESIGNED";
  image: string;
  demoUrl?: string;
  moreUrl?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    category: "DESIGNED",
    title: "Brand identity",
    subtitle: "Visual identity va grafik dizayn ishi",
    image: img1.src,
    moreUrl: "https://preact-green-shop.vercel.app/",
  },
  {
    id: 2,
    category: "CODED",
    eyebrow: "coded, designed",
    title: "eatsome.",
    subtitle: "Restaurant browsing in React.js (Using Yelp API)",
    image: img2.src,
    demoUrl: "https://uzummm.vercel.app/#",
    moreUrl: "https://uzummm.vercel.app/#",
    featured: true,
  },
  {
    id: 3,
    category: "DESIGNED",
    title: "Editorial layout",
    subtitle: "Print va veb uchun tayyorlangan sahifa dizayni",
    image: img3.src,
    moreUrl: "https://space-asomiddin-turakhanov-2025.netlify.app/#",
  },
  {
    id: 4,
    category: "DESIGNED",
    title: "Studio poster",
    subtitle: "Tipografik poster va bosma materiallar",
    image: img4.src,
    moreUrl: "https://portfolio-2025-turakhanov-a.netlify.app/",
  },
  {
    id: 5,
    category: "CODED",
    title: "Dashboard UI",
    subtitle: "React va Tailwind asosida boshqaruv paneli",
    image: img5.src,
    demoUrl: "https://turakhanov-asomiddin-eaturkish-2025.netlify.app/",
    moreUrl: "https://turakhanov-asomiddin-eaturkish-2025.netlify.app/",
  },
  {
    id: 6,
    category: "DESIGNED",
    title: "Packaging concept",
    subtitle: "Mahsulot qadoqlash uchun konsept dizayn",
    image: img6.src,
    moreUrl: "https://8-preact-end.vercel.app/login",
  },
];

const tabs: Category[] = ["ALL", "CODED", "DESIGNED"];

export default function Portfolio() {
  const [active, setActive] = useState<Category>("ALL");

  const visible =
    active === "ALL" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="w-full bg-neutral-900">
      <div className="relative flex h-64 w-full items-center justify-center overflow-hidden sm:h-72">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-slate-400/20" />
        <div className="relative animate-[fadeInUp_0.7s_ease-out_forwards] opacity-0 border-2 border-neutral-900 bg-white/0 px-10 py-4 backdrop-blur-[1px]">
          <h1 className="text-2xl font-bold tracking-[0.4em] text-neutral-900 sm:text-3xl">
            PORTFOLIO
          </h1>
        </div>
      </div>

      <div className="flex items-center justify-center gap-10 border-b border-white/10 bg-neutral-900 py-6 sm:gap-16">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`relative pb-2 text-xs font-semibold tracking-[0.2em] transition-colors duration-300 sm:text-sm ${
              active === tab
                ? "text-white"
                : "text-neutral-500 hover:text-neutral-300"
            }`}
          >
            {tab}
            <span
              className={`absolute -bottom-[1px] left-0 h-[2px] w-full origin-left bg-white transition-transform duration-300 ${
                active === tab ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 p-5">
        {visible.map((project, i) => {
          const primaryLink = project.demoUrl || project.moreUrl || "#";

          return (
            <a
              href={primaryLink}
              target="_blank"
              rel="noopener noreferrer"
              key={project.id}
              className="group relative block aspect-square cursor-pointer overflow-hidden rounded-sm opacity-0 outline-none ring-white/40 transition-shadow duration-500 animate-[fadeIn_0.6s_ease-out_forwards] focus-visible:ring-2"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url('${project.image}')` }}
              />

              {/* Base dim */}
              <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:bg-black/10" />

              {/* Bottom gradient that rises on hover */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 translate-y-full bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-transform duration-500 ease-out group-hover:translate-y-0" />

              {/* Category badge, always visible top-left */}
              <span className="absolute left-3 top-3 z-10 text-[10px] font-semibold tracking-[0.2em] text-white/80 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-1">
                {project.category}
              </span>

              {/* Corner arrow, signals "clickable" */}
              <span className="absolute right-3 top-3 z-10 flex h-8 w-8 -translate-y-2 rotate-45 items-center justify-center rounded-full border border-white/40 text-white opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0 group-hover:opacity-100">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-4 w-4"
                >
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </span>

              {project.featured ? (
                <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center">
                  <span className="text-[11px] italic tracking-wide text-neutral-300 opacity-0 transition-all delay-75 duration-500 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100">
                    {project.eyebrow}
                  </span>
                  <h3 className="font-serif text-3xl font-bold tracking-wide text-white sm:text-4xl transition-transform duration-500 group-hover:-translate-y-1">
                    {project.title}
                  </h3>
                  <p className="max-w-xs text-xs text-neutral-300 opacity-0 transition-all delay-100 duration-500 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100">
                    {project.subtitle}
                  </p>
                  <div className="mt-2 flex items-center gap-4 text-[11px] font-semibold tracking-[0.2em] text-white opacity-0 transition-all delay-150 duration-500 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100">
                    {project.demoUrl && (
                      <>
                        <span className="text-neutral-500">|</span>
                        <span className="underline-offset-4 transition-opacity hover:opacity-70 hover:underline">
                          DEMO
                        </span>
                      </>
                    )}
                    {project.moreUrl && (
                      <>
                        <span className="text-neutral-500">||</span>
                        <span className="underline-offset-4 transition-opacity hover:opacity-70 hover:underline">
                          MORE
                        </span>
                      </>
                    )}
                    <span className="text-neutral-500">|</span>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-1 p-4 opacity-0 transition-all duration-500 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="text-sm font-bold tracking-wide text-white">
                    {project.title}
                  </h3>
                  <p className="text-[11px] leading-snug text-neutral-300">
                    {project.subtitle}
                  </p>
                  <div className="mt-2 flex items-center gap-3 text-[10px] font-semibold tracking-[0.2em] text-white">
                    {project.demoUrl && (
                      <span className="underline-offset-4 transition-opacity hover:opacity-70 hover:underline">
                        DEMO
                      </span>
                    )}
                    {project.moreUrl && (
                      <span className="underline-offset-4 transition-opacity hover:opacity-70 hover:underline">
                        MORE
                      </span>
                    )}
                  </div>
                </div>
              )}
            </a>
          );
        })}
      </div>

      <div className="bg-neutral-900 py-6 text-center">
        <p className="text-sm font-medium tracking-wide text-white">
          And many more to come!
        </p>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
