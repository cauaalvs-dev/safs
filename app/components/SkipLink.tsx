"use client";

export default function SkipLink() {
  return (
    <a
      href="#conteudo-principal"
      style={{
        position: "absolute",
        left: "-9999px",
        top: "auto",
        width: 1,
        height: 1,
        overflow: "hidden",
        zIndex: 9999,
      }}
      onFocus={e => {
        Object.assign(e.currentTarget.style, {
          left: "16px", top: "16px", width: "auto", height: "auto",
          overflow: "visible", background: "white", color: "#1a2e35",
          padding: "12px 20px", borderRadius: "8px",
          fontWeight: "700", textDecoration: "none",
        });
      }}
      onBlur={e => {
        Object.assign(e.currentTarget.style, {
          left: "-9999px", width: "1px", height: "1px",
        });
      }}
    >
      Ir para o conteúdo principal
    </a>
  );
}
