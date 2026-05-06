"use client";

import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  lang: string;
  category: string;
  categoryColor: string;
  categoryBg: string;
}

export function FeaturedCard({ post }: { post: Post }) {
  return (
    <Link href={"/blog/" + post.slug} style={{ textDecoration: "none", display: "block" }}>
      <div
        style={{
          background: "#ffffff",
          borderRadius: 8,
          padding: "36px 40px",
          boxShadow: "0px 8px 24px rgba(24,28,30,0.10)",
          cursor: "pointer",
          transition: "box-shadow 0.2s ease, transform 0.2s ease",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = "0px 16px 40px rgba(24,28,30,0.14)";
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = "0px 8px 24px rgba(24,28,30,0.10)";
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, padding: "4px 10px", borderRadius: 4, background: post.categoryBg, color: post.categoryColor }}>
            {post.category}
          </span>
          {post.lang === "ES" && (
            <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", padding: "4px 10px", borderRadius: 4, background: "#f5f3ff", color: "#7c3aed" }}>ES</span>
          )}
          <span style={{ fontSize: 11, color: "#a0aec0", fontWeight: 500, letterSpacing: "0.04em" }}>FEATURED</span>
        </div>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: "#181c1e", letterSpacing: "-0.03em", lineHeight: 1.25, marginBottom: 14 }}>
          {post.title}
        </h2>
        <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.65, letterSpacing: "-0.01em", marginBottom: 20, maxWidth: 620 }}>
          {post.description}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontSize: 13, color: "#718096" }}>{post.date}</span>
          <span style={{ fontSize: 13, color: "#cbd5e0" }}>·</span>
          <span style={{ fontSize: 13, color: "#718096" }}>{post.readTime}</span>
          <span style={{ marginLeft: "auto", fontSize: 13, fontWeight: 600, color: "#0058c3" }}>Read article →</span>
        </div>
      </div>
    </Link>
  );
}

export function PostCard({ post }: { post: Post }) {
  return (
    <Link href={"/blog/" + post.slug} style={{ textDecoration: "none" }}>
      <div
        style={{
          background: "#ffffff",
          borderRadius: 8,
          padding: "28px 28px 24px",
          boxShadow: "0px 2px 8px rgba(24,28,30,0.06)",
          minHeight: 280,
          display: "flex",
          flexDirection: "column" as const,
          cursor: "pointer",
          transition: "box-shadow 0.2s ease, transform 0.2s ease",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = "0px 8px 24px rgba(24,28,30,0.12)";
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = "0px 2px 8px rgba(24,28,30,0.06)";
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" as const, padding: "3px 8px", borderRadius: 4, background: post.categoryBg, color: post.categoryColor }}>
            {post.category}
          </span>
          {post.lang === "ES" && (
            <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", padding: "3px 8px", borderRadius: 4, background: "#f5f3ff", color: "#7c3aed" }}>ES</span>
          )}
        </div>
        <h2 style={{ fontSize: 16, fontWeight: 700, color: "#181c1e", letterSpacing: "-0.02em", lineHeight: 1.35, marginBottom: 10, flex: 1 }}>
          {post.title}
        </h2>
        <p style={{ fontSize: 13, color: "#4a5568", lineHeight: 1.6, letterSpacing: "-0.01em", marginBottom: 18 }}>
          {post.description}
        </p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 12, color: "#a0aec0" }}>{post.date}</span>
            <span style={{ fontSize: 12, color: "#e2e8f0" }}>·</span>
            <span style={{ fontSize: 12, color: "#a0aec0" }}>{post.readTime}</span>
          </div>
          <span style={{ fontSize: 12, fontWeight: 600, color: "#0058c3" }}>Read →</span>
        </div>
      </div>
    </Link>
  );
}
