import React from "react";

export default function Button({ text, onClick, className = "" }) {
  return (
    <button
      className={`px-8 py-4 border-4 text-lg border-[#5D36E7] text-white rounded-md  transition ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
