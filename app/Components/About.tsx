"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";

const navLinks = [
  { label: "About me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
];

const EMAIL = "hello@tomaszgajda.dev";
const GITHUB_URL = "https://github.com/";
const LINKEDIN_URL = "https://www.linkedin.com/";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

function Logo() {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logotip"
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

function DesignIcon() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 22 L22 6"
        stroke="#c9c9c9"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <rect
        x="3"
        y="19"
        width="6"
        height="6"
        rx="1"
        transform="rotate(-45 6 22)"
        stroke="#c9c9c9"
        strokeWidth="2.2"
        fill="none"
      />
      <rect
        x="19"
        y="3"
        width="6"
        height="6"
        rx="1"
        transform="rotate(-45 22 6)"
        stroke="#c9c9c9"
        strokeWidth="2.2"
        fill="none"
      />
      <path
        d="M24 24 L30 30"
        stroke="#c9c9c9"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle
        cx="27"
        cy="27"
        r="3.2"
        stroke="#c9c9c9"
        strokeWidth="2.2"
        fill="none"
      />
    </svg>
  );
}

function DevelopmentIcon() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 6 L28 23 C29 24 29 26 28 27 C27 28 25 28 24 27 L7 10"
        stroke="#c9c9c9"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M5 5 L11 6 L10 12 L5 13 L4 8 Z"
        stroke="#c9c9c9"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M23 28 L6 11 C5 10 5 8 6 7 C7 6 9 6 10 7 L27 24"
        stroke="#c9c9c9"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M29 29 L23 28 L24 22 L29 21 L30 26 Z"
        stroke="#c9c9c9"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function MaintenanceIcon() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="10"
        r="4.4"
        stroke="#c9c9c9"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M12 2 V4.2 M12 15.8 V18 M20 10 H17.8 M6.2 10 H4 M17.7 4.3 L16.1 5.9 M7.9 14.1 L6.3 15.7 M17.7 15.7 L16.1 14.1 M7.9 5.9 L6.3 4.3"
        stroke="#c9c9c9"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M6 30 V25 C6 22 8.5 20 12 20 C15.5 20 18 22 18 25 V30"
        stroke="#c9c9c9"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <rect x="4" y="29" width="16" height="2.6" rx="1" fill="#c9c9c9" />
    </svg>
  );
}

function ZigzagDivider() {
  return (
    <svg
      width="120"
      height="16"
      viewBox="0 0 120 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="0" y1="8" x2="30" y2="8" stroke="#171717" strokeWidth="2" />
      <path
        d="M34 14 L42 2 M42 14 L50 2 M50 14 L58 2 M58 14 L66 2 M66 14 L74 2 M74 14 L82 2"
        stroke="#171717"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <line x1="90" y1="8" x2="120" y2="8" stroke="#171717" strokeWidth="2" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <motion.svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <path
        d="M2 4.5 L7 9.5 L12 4.5"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.line
        x1="4"
        x2="22"
        y1="7"
        y2="7"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
        style={{ transformOrigin: "13px 7px" }}
      />
      <motion.line
        x1="4"
        x2="22"
        y1="13"
        y2="13"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        animate={open ? { opacity: 0 } : { opacity: 1 }}
      />
      <motion.line
        x1="4"
        x2="22"
        y1="19"
        y2="19"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
        style={{ transformOrigin: "13px 19px" }}
      />
    </svg>
  );
}

const skillsCopy =
  "I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.";

const skillsList = [
  { title: "DESIGN", Icon: DesignIcon, copy: skillsCopy },
  { title: "DEVELOPMENT", Icon: DevelopmentIcon, copy: skillsCopy },
  { title: "MAINTENANCE", Icon: MaintenanceIcon, copy: skillsCopy },
];

const aboutParagraph =
  "Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est.";

const readMoreExtra =
  " Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue, in semper sem magna quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit. Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet varius turpis vel pharetra. Ut ante justo, consequat vitae elementum tempor, accumsan nec eros.";

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [readMore, setReadMore] = useState(false);

  return (
    <main className="flex-1 overflow-x-hidden bg-[#e4e4e4]">
      <section
        id="about"
        className="scroll-mt-8 bg-[#e4e4e4] px-6 py-20 sm:px-10 lg:px-14"
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
            className="inline-block border-2 border-neutral-900 px-10 py-4 transition-colors hover:bg-neutral-900 hover:text-white"
          >
            <h2 className="text-lg font-extrabold tracking-[0.35em] sm:text-xl">
              ABOUT ME
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-neutral-600"
          >
            {aboutParagraph}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <span className="h-6 w-px bg-neutral-900" />
            <a
              href="#skills"
              className="group flex items-center gap-1 text-xs font-bold tracking-[0.2em] text-neutral-900"
            >
              EXPLORE
              <motion.span
                className="inline-block"
                animate={{ y: [0, 3, 0] }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ↓
              </motion.span>
            </a>
            <span className="h-6 w-px bg-neutral-900" />
          </motion.div>
        </motion.div>

        <motion.div
          id="skills"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mx-auto mt-16 grid max-w-5xl scroll-mt-20 grid-cols-1 gap-x-16 gap-y-16 md:grid-cols-2"
        >
          {skillsList.map(({ title, Icon, copy }, i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`flex gap-5 ${i === 2 ? "md:col-start-1" : ""}`}
            >
              <motion.div
                whileHover={{ rotate: -8, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Icon />
              </motion.div>
              <div>
                <h3 className="text-sm font-extrabold tracking-[0.15em] text-neutral-900">
                  {title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-neutral-500">
                  {copy}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div variants={fadeUp} className="mt-12 flex justify-center">
          <ZigzagDivider />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 flex justify-center"
        ></motion.div>
      </section>
    </main>
  );
}
