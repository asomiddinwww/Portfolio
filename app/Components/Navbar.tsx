"use client";
import { useState, useEffect } from "react";

const navLinks = ["About me", "Skills", "Portfolio"];

function Logo() {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logotip"
      className="transition-transform duration-500 hover:rotate-12 cursor-pointer"
    >
      <polygon
        points="26,2 47,14 47,38 26,50 5,38 5,14"
        fill="none"
        stroke="#2563eb"
        strokeWidth="3.5"
      />
      <path
        d="M18 16 L34 16 L27 26 L34 36 L18 36"
        fill="none"
        stroke="#0f172a"
        strokeWidth="4.2"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

function AtIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.8" />
      <path
        d="M16 12v1.5a2.5 2.5 0 0 0 5 0V12a9 9 0 1 0-3.5 7.1"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.37 0 0 5.5 0 12.3c0 5.44 3.44 10.05 8.21 11.68.6.11.82-.27.82-.6 0-.29-.01-1.06-.02-2.08-3.34.75-4.04-1.65-4.04-1.65-.55-1.43-1.34-1.82-1.34-1.82-1.09-.77.08-.75.08-.75 1.21.09 1.84 1.27 1.84 1.27 1.07 1.87 2.81 1.33 3.5 1.02.11-.79.42-1.33.76-1.64-2.67-.31-5.47-1.37-5.47-6.1 0-1.35.47-2.45 1.24-3.31-.13-.31-.54-1.57.12-3.27 0 0 1.01-.33 3.3 1.26a11.2 11.2 0 0 1 6.02 0c2.29-1.59 3.3-1.26 3.3-1.26.66 1.7.25 2.96.12 3.27.77.86 1.24 1.96 1.24 3.31 0 4.74-2.81 5.78-5.49 6.09.43.38.81 1.13.81 2.28 0 1.65-.02 2.98-.02 3.38 0 .33.22.72.83.6C20.57 22.34 24 17.73 24 12.3 24 5.5 18.63 0 12 0Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export default function Navbar() {
  // 1. TYPING EFFECT LOGIKASI
  const words = ["Front-end Developer", "UI/UX Designer", "Back-end Developer"];
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = words[currentWordIdx];

      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);
      }

      if (!isDeleting && currentText === fullText) {
        setTypingSpeed(1500);
        setIsDeleting(true);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIdx((prev) => (prev + 1) % words.length);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIdx]);

  // 2. MOUSE EFFECT (CUSTOM CURSOR) LOGIKASI
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Hover funksiyalari (kod ixcham bo'lishi uchun)
  const enterpriseHover = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };

  return (
    <main className="flex-1 bg-[#e4e4e4] overflow-hidden relative">
      {/* SICHQONCHA EFFEKTI (Custom Cursor) - Faqat kompyuterda chiqadi */}
      <div
        className="hidden md:block pointer-events-none fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-neutral-900 -translate-x-1/2 -translate-y-1/2 z-50 transition-transform duration-150 ease-out"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 2 : 1})`,
          backgroundColor: isHovered ? "rgba(0, 0, 0, 0.05)" : "transparent",
          borderColor: isHovered ? "#2563eb" : "#171717",
        }}
      />
      <div
        className="hidden md:block pointer-events-none fixed top-0 left-0 w-2 h-2 rounded-full bg-blue-600 -translate-x-1/2 -translate-y-1/2 z-50"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
      />

      <section className="relative overflow-hidden min-h-[750px] md:h-[650px]">
        {/* Orqa fondagi qora blok */}
        <div
          className="absolute inset-y-0 right-0 w-full bg-[#0a0a0a]"
          style={{
            clipPath: "polygon(49% 0, 100% 0, 100% 100%, 39% 100%)",
            animation: "slideInBg 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
          }}
        />

        <div className="relative mx-auto flex max-w-[1440px] flex-col z-10">
          {/* NAVBAR */}
          <div className="flex items-center justify-between px-6 pt-8 sm:px-10 lg:px-14 animate-fade-in-down">
            <div {...enterpriseHover}>
              <Logo />
            </div>
            <nav className="hidden items-center gap-10 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  {...enterpriseHover}
                  className="text-sm font-semibold tracking-wide text-white/90 transition hover:text-white hover:scale-105"
                >
                  {link}
                </a>
              ))}
              <a
                href="#"
                {...enterpriseHover}
                className="rounded-full bg-white px-6 py-3 text-xs font-bold tracking-wide text-black transition hover:bg-black hover:text-white hover:ring-2 hover:ring-white"
              >
                CONTACT ME
              </a>
            </nav>
          </div>

          {/* MAIN CONTENT */}
          <div className="grid grid-cols-1 items-center md:grid-cols-2 mt-16 md:mt-24">
            {/* TEXT QISMI */}
            <div className="px-6 pb-12 sm:px-10 lg:px-14">
              <p
                className="text-xl font-medium text-neutral-900 sm:text-2xl animate-fade-in-up"
                style={{ animationDelay: "200ms" }}
              >
                Hi, I am
              </p>
              <h1
                className="mt-2 text-5xl font-extrabold leading-[1.05] tracking-tight text-neutral-900 sm:text-6xl lg:text-[3.5rem] animate-fade-in-up"
                style={{ animationDelay: "400ms" }}
              >
                Asomiddin Turakhanov
              </h1>

              {/* DINAMIK YOZILADIGAN QISM */}
              <p className="mt-3 text-lg font-bold text-neutral-500 sm:text-xl min-h-[28px] flex items-center">
                <span className="text-neutral-900 bg-neutral-300/50 px-2 py-0.5 rounded">
                  {currentText}
                </span>
                <span className="ml-1 inline-block w-0.5 h-5 bg-neutral-900 animate-pulse">
                  |
                </span>
              </p>

              {/* SOCIAL ICONS */}
              <div
                className="mt-10 flex items-center gap-4 animate-fade-in-up"
                style={{ animationDelay: "800ms" }}
              >
                <a
                  href="#"
                  {...enterpriseHover}
                  className="flex h-14 w-14 items-center justify-center rounded-md bg-neutral-800 transition hover:bg-neutral-700 hover:-translate-y-1"
                >
                  <AtIcon />
                </a>
                <a
                  href="#"
                  {...enterpriseHover}
                  className="flex h-14 w-14 items-center justify-center rounded-md bg-neutral-800 transition hover:bg-[#24292e] hover:-translate-y-1"
                >
                  <GithubIcon />
                </a>
                <a
                  href="#"
                  {...enterpriseHover}
                  className="flex h-14 w-14 items-center justify-center rounded-md bg-neutral-800 transition hover:bg-[#0077b5] hover:-translate-y-1"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>

            <div className="relative flex justify-center md:justify-start"></div>
          </div>
        </div>
      </section>

      {/* IT BERRIES SECTION */}
      <section className="relative overflow-hidden bg-[#181818] py-20 group">
        <span
          aria-hidden
          className="pointer-events-none absolute -right-6 -top-10 select-none text-[220px] font-black leading-none text-white/[0.04] sm:text-[320px] transition-transform duration-700 ease-out group-hover:scale-110 will-change-transform"
        >
          IT
        </span>

        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14 z-10">
          <h2 className="text-2xl font-extrabold tracking-[0.15em] text-white">
            IT BERRIES
          </h2>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-neutral-400">
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
            varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
            quis libero viverra facilisis ut ac est. Morbi commodo, eros in
            dignissim tempus, lacus odio rutrum augue, in semper sem magna quis
            tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit.
            Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet
            varius turpis vel pharetra. Ut ante justo, consequat vitae elementum
            tempor, accumsan nec eros.
          </p>

          <button
            {...enterpriseHover}
            className="mt-8 flex items-center gap-4 text-xs font-bold tracking-[0.2em] text-white group/btn"
          >
            <span className="transition-all duration-300 group-hover/btn:tracking-[0.3em]">
              READ MORE
            </span>
            <span className="h-6 w-px bg-white/40 transition-all duration-300 group-hover/btn:bg-white group-hover/btn:scale-y-125" />
          </button>
        </div>
      </section>
    </main>
  );
}
