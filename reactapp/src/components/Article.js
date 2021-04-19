import React from "react";

export default function Articles({ article }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid #3b5cb4",
        margin: "2px",
        width: `80%`,
      }}
    >
      <h1
        style={{
          fontFamily: "B612Mono-700",
          fontSize: "32px",
          textAlign: "center",
        }}
      >
        {article.title}
      </h1>
      <p
        style={{
          fontFamily: "B612Mono-italic",
          fontSize: "24px",
          textAlign: "center",
        }}
      >
        {article.body}
      </p>
    </div>
  );
}
