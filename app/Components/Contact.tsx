"use client";
import React, { useState } from "react";
import { Mail, ChevronUp } from "lucide-react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const initialForm = { name: "", email: "", phone: "", message: "" };

const socialLinks = [
  {
    Icon: FaFacebook,
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61586031346181",
  },
  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/asomiddin-to-raxonovv-5ba3993ba/",
  },
  {
    Icon: BsInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/turakhano.v/",
  },
  { Icon: Mail, label: "Email", href: "mailto:asomiddinto@gmail.com" },
];

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<{
    name?: string | null;
    email?: string | null;
    message?: string | null;
  }>({});
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const triggerCursor = (hovering: boolean) => {
    if (typeof window !== "undefined") {
      const event = new CustomEvent("cursorHover", { detail: hovering });
      window.dispatchEvent(event);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((er) => ({ ...er, [name]: null }));
    }
  };

  const validate = () => {
    const er: typeof errors = {};
    if (!form.name.trim()) er.name = "Ismingizni kiriting";
    if (!form.email.trim()) er.email = "Emailingizni kiriting";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      er.email = "Email noto'g'ri";
    if (!form.message.trim()) er.message = "Xabar yozing";
    return er;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length > 0) return;

    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm(initialForm);
      setTimeout(() => setStatus("idle"), 3000);
    }, 1100);
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const fields = [
    { name: "name", placeholder: "ENTER YOUR NAME*", type: "text" },
    { name: "email", placeholder: "ENTER YOUR EMAIL*", type: "email" },
    { name: "phone", placeholder: "PHONE NUMBER", type: "tel" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 50% 45%, #ffffff 0%, #e9e9e9 55%, #d9d9d9 100%)",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
      }}
    >
      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes underlineGrow {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.85);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .fade-up {
          animation: fadeUp 0.7s ease both;
        }
        .field-underline {
          position: absolute;
          left: 0;
          bottom: 0;
          height: 2px;
          width: 100%;
          background: #111;
          transform-origin: left;
          animation: underlineGrow 0.4s ease forwards;
        }
        .submit-btn {
          transition:
            letter-spacing 0.25s ease,
            transform 0.2s ease,
            opacity 0.2s ease;
        }
        .submit-btn:hover:not(:disabled) {
          letter-spacing: 4px;
          transform: translateY(-1px);
        }
        .submit-btn:active:not(:disabled) {
          transform: translateY(0px) scale(0.97);
        }
        .submit-btn:disabled {
          opacity: 0.55;
        }
        .submit-btn:focus-visible,
        .back-top:focus-visible,
        .social-icon:focus-visible,
        .contact-input:focus-visible,
        .contact-textarea:focus-visible {
          outline: 2px solid #111;
          outline-offset: 3px;
        }
        .social-icon {
          transition:
            transform 0.25s ease,
            opacity 0.25s ease;
          opacity: 0.85;
        }
        .social-icon:hover {
          transform: translateY(-3px);
          opacity: 1;
        }
        .back-top {
          transition:
            opacity 0.2s ease,
            transform 0.2s ease;
        }
        .back-top:hover {
          opacity: 0.7;
          transform: translateY(-2px);
        }
        .contact-input::placeholder,
        .contact-textarea::placeholder {
          color: #9a9a9a;
          letter-spacing: 1px;
        }
        .contact-input,
        .contact-textarea {
          transition: border-color 0.2s ease;
        }
        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        @media (prefers-reduced-motion: reduce) {
          .fade-up,
          .field-underline,
          [style*="animation"] {
            animation: none !important;
          }
          .submit-btn,
          .social-icon,
          .back-top,
          .contact-input,
          .contact-textarea {
            transition: none !important;
          }
        }
      `}</style>

      {/* MAIN CONTENT */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "80px 20px 100px",
        }}
      >
        {/* Title */}
        <div
          className="fade-up"
          style={{
            border: "3px solid #111",
            padding: "14px 42px",
            marginBottom: "34px",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "22px",
              fontWeight: 700,
              letterSpacing: "10px",
              color: "#111",
            }}
          >
            CONTACT
          </h1>
        </div>

        {/* Description */}
        <p
          className="fade-up"
          style={{
            animationDelay: "0.1s",
            maxWidth: "560px",
            textAlign: "center",
            color: "#555",
            fontSize: "14.5px",
            lineHeight: "1.7",
            margin: 0,
          }}
        >
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
          quis libero viverra facilis ut ac est.
        </p>

        {/* Divider */}
        <div
          className="fade-up"
          style={{
            animationDelay: "0.2s",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            margin: "26px 0 50px",
            color: "#111",
          }}
        >
          <span style={{ width: "46px", height: "1px", background: "#111" }} />
          <span style={{ fontSize: "13px", letterSpacing: "2px" }}>\\V//</span>
          <span style={{ width: "46px", height: "1px", background: "#111" }} />
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="fade-up"
          noValidate
          style={{
            animationDelay: "0.3s",
            width: "100%",
            maxWidth: "480px",
            display: "flex",
            flexDirection: "column",
            gap: "34px",
          }}
        >
          {fields.map((f) => {
            const fieldError = errors[f.name as keyof typeof errors];
            const errorId = `${f.name}-error`;
            return (
              <div key={f.name} style={{ position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: "2px",
                    background: "#111",
                  }}
                />
                <label htmlFor={f.name} className="visually-hidden">
                  {f.placeholder}
                </label>
                <input
                  id={f.name}
                  className="contact-input"
                  type={f.type}
                  name={f.name}
                  autoComplete={
                    f.name === "email"
                      ? "email"
                      : f.name === "phone"
                        ? "tel"
                        : "name"
                  }
                  value={form[f.name as keyof typeof form]}
                  onChange={handleChange}
                  onFocus={() => setFocused(f.name)}
                  onBlur={() => setFocused(null)}
                  onMouseEnter={() => triggerCursor(true)}
                  onMouseLeave={() => triggerCursor(false)}
                  placeholder={f.placeholder}
                  aria-invalid={!!fieldError}
                  aria-describedby={fieldError ? errorId : undefined}
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    padding: "10px 0 10px 18px",
                    fontSize: "12px",
                    letterSpacing: "1px",
                    color: "#333",
                    borderBottom: `2px solid ${fieldError ? "#c0392b" : "#111"}`,
                  }}
                />
                {focused === f.name && (
                  <div
                    className="field-underline"
                    style={{ background: fieldError ? "#c0392b" : "#111" }}
                  />
                )}
                {fieldError && (
                  <div
                    id={errorId}
                    role="alert"
                    style={{
                      color: "#c0392b",
                      fontSize: "11px",
                      marginTop: "6px",
                      paddingLeft: "18px",
                    }}
                  >
                    {fieldError}
                  </div>
                )}
              </div>
            );
          })}

          {/* Message */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: "2px",
                background: "#111",
              }}
            />
            <label htmlFor="message" className="visually-hidden">
              YOUR MESSAGE
            </label>
            <textarea
              id="message"
              className="contact-textarea"
              name="message"
              value={form.message}
              onChange={handleChange}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              onMouseEnter={() => triggerCursor(true)}
              onMouseLeave={() => triggerCursor(false)}
              placeholder="YOUR MESSAGE*"
              rows={5}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              style={{
                width: "100%",
                boxSizing: "border-box",
                border: "none",
                outline: "none",
                background: "transparent",
                resize: "vertical",
                padding: "10px 0 10px 18px",
                fontSize: "12px",
                letterSpacing: "1px",
                color: "#333",
                borderBottom: `2px solid ${
                  errors.message ? "#c0392b" : "#111"
                }`,
                fontFamily: "inherit",
              }}
            />
            {focused === "message" && (
              <div
                className="field-underline"
                style={{ background: errors.message ? "#c0392b" : "#111" }}
              />
            )}
            {errors.message && (
              <div
                id="message-error"
                role="alert"
                style={{
                  color: "#c0392b",
                  fontSize: "11px",
                  marginTop: "6px",
                  paddingLeft: "18px",
                }}
              >
                {errors.message}
              </div>
            )}
          </div>

          {/* Submit */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "14px",
            }}
          >
            <button
              id="contact"
              type="submit"
              disabled={status === "sending"}
              className="submit-btn"
              onMouseEnter={() => triggerCursor(true)}
              onMouseLeave={() => triggerCursor(false)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
                background: "none",
                border: "none",
                cursor: status === "sending" ? "default" : "pointer",
                padding: "6px 4px",
              }}
            >
              <span
                style={{ width: "1px", height: "18px", background: "#111" }}
              />
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  color: "#111",
                }}
              >
                {status === "sending" ? "SENDING..." : "SUBMIT"}
              </span>
              <span
                style={{ width: "1px", height: "18px", background: "#111" }}
              />
            </button>
          </div>

          {status === "sent" && (
            <p
              role="status"
              style={{
                textAlign: "center",
                color: "#2e7d32",
                fontSize: "13px",
                letterSpacing: "1px",
                animation: "popIn 0.3s ease",
                margin: 0,
              }}
            >
              Xabaringiz yuborildi. Rahmat!
            </p>
          )}
        </form>
      </div>

      {/* FOOTER */}
      <footer
        style={{
          background: "#161616",
          color: "#fff",
          padding: "40px 20px 30px",
          textAlign: "center",
        }}
      >
        <button
          onClick={scrollTop}
          className="back-top"
          onMouseEnter={() => triggerCursor(true)}
          onMouseLeave={() => triggerCursor(false)}
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
            margin: "0 auto 26px",
          }}
        >
          <ChevronUp size={16} />
          <span
            style={{ fontSize: "11px", letterSpacing: "2px", fontWeight: 600 }}
          >
            BACK TO TOP
          </span>
        </button>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "22px",
            marginBottom: "26px",
          }}
        >
          {socialLinks.map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                href.startsWith("mailto:") ? undefined : "noopener noreferrer"
              }
              className="social-icon"
              onMouseEnter={() => triggerCursor(true)}
              onMouseLeave={() => triggerCursor(false)}
              style={{
                width: "34px",
                height: "34px",
                border: "1px solid #666",
                borderRadius: "3px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
              }}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <p style={{ fontSize: "12px", color: "#bbb", margin: 0 }}>
          @2026 <strong style={{ color: "#fff" }}>Asomiddin Turakhanov</strong>{" "}
          All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
