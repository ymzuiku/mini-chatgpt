import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export function AnimateText({ texts }) {
  const [step, setStep] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [textLength, setTextLength] = useState(0);
  const { title, info } = texts[step];
  useEffect(() => {
    let fadeTimer;
    const textLengthTimer = setInterval(() => {
      setTextLength((v) => {
        return v + 1;
      });
    }, 50);
    const stepTimer = setInterval(() => {
      setFadeIn(false);
      fadeTimer = setTimeout(() => {
        setFadeIn(true);
        setTextLength(0);
        setStep((v) => {
          return (v + 1) % texts.length;
        });
      }, 500);
    }, 4000);
    return () => {
      clearInterval(stepTimer);
      clearTimeout(fadeTimer);
      clearInterval(textLengthTimer);
    };
  }, [texts.length]);
  return (
    <div
      className={twMerge(
        "transition-all duration-500",
        fadeIn ? "" : "translate-y-10 opacity-0"
      )}
    >
      <strong>{title}</strong>
      <div className="h-32 mt-4">
        {info.slice(0, textLength)}
        <span
          className={twMerge(
            "inline-block w-8 h-8 bg-orange-700 rounded-full ml-4 translate-y-1 transition-opacity duration-200"
          )}
          style={{ animation: "fadeInOut 2s infinite" }}
        ></span>
      </div>
    </div>
  );
}
