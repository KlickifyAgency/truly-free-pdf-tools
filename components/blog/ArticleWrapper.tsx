"use client";

import Link from "next/link";

interface ArticleWrapperProps {
  children: React.ReactNode;
  category: string;
  categoryColor: string;
  categoryBg: string;
  lang?: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  relatedLinks?: { href: string; label: string }[];
}

export default function ArticleWrapper({
  children,
  category,
  categoryColor,
  categoryBg,
  lang = "EN",
  title,
  description,
  date,
  readTime,
  relatedLinks = [],
}: ArticleWrapperProps) {
  return (
    <div style={{ background: "#f7fafc", minHeight: "100vh" }}>

      <div style={{
        background: "linear-gradient(135deg, #0058c3 0%, #0070f3 100%)",
        padding: "52px 24px 64px",
      }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <Link href="/blog" style={{
              fontSize: 12,
              fontWeight: 600,
              color: "rgba(255,255,255,0.7)",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}>
              ← Blog
            </Link>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 12 }}>/</span>
            <span style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "3px 9px",
              borderRadius: 4,
              background: "rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.9)",
            }}>
              {category}
            </span>
            {lang === "ES" && (
              <span style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.08em",
                padding: "3px 9px",
                borderRadius: 4,
                background: "rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.9)",
              }}>
                ES
              </span>
            )}
          </div>
          <h1 style={{
            fontSize: 36,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "#ffffff",
            lineHeight: 1.2,
            marginBottom: 16,
          }}>
            {title}
          </h1>
          <p style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.8)",
            lineHeight: 1.6,
            letterSpacing: "-0.01em",
            marginBottom: 24,
            maxWidth: 580,
          }}>
            {description}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{date}</span>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>·</span>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{readTime}</span>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>·</span>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>TrulyFreeTools Editorial</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px" }}>
        <div style={{
          background: "#ffffff",
          borderRadius: 8,
          padding: "48px 52px",
          marginTop: -32,
          boxShadow: "0px 4px 16px rgba(24,28,30,0.08)",
          marginBottom: 48,
        }}>
          <div style={{
            fontSize: 16,
            lineHeight: 1.75,
            color: "#181c1e",
            letterSpacing: "-0.01em",
          }}
          className="article-body">
            {children}
          </div>

          {relatedLinks.length > 0 && (
            <div style={{
              marginTop: 48,
              paddingTop: 28,
              borderTop: "1px solid #e5e9eb",
            }}>
              <p style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#718096",
                marginBottom: 12,
              }}>
                Related
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {relatedLinks.map((link) => (
                  <Link key={link.href} href={link.href} style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#0058c3",
                    textDecoration: "none",
                    padding: "6px 14px",
                    borderRadius: 6,
                    background: "#eff6ff",
                    letterSpacing: "-0.01em",
                    transition: "background 0.15s ease",
                  }}>
                    {link.label} →
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
