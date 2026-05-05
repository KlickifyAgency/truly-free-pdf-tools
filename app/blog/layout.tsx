import type { Metadata } from "next";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ background: "#f7fafc", minHeight: "100vh" }}>
      {children}
    </div>
  );
}
