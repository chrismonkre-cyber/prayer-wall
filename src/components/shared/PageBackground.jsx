import React from "react";

/**
 * Full-page background. Pure dark maroon/black overlay — no color tint.
 * Light enough to keep the golden image vivid, strong enough for contrast.
 */
export default function PageBackground({ imageUrl }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Single clean dark maroon overlay — no green, no color wash */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(4,0,0,0.28)",
        }}
      />
    </div>
  );
}