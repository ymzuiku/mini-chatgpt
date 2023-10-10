import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function Input({ placeholder, className, value, onChange }) {
  const [_focus, setFocus] = useState(false);
  const [subValue, setSubValue] = useState(value || "");
  const focus = value || _focus || subValue.length;
  return (
    <div
      className={twMerge(
        "border border-solid border-gray-300 rounded-sm relative h-12",
        focus && "border-primary",
        className
      )}
    >
      <input
        value={value}
        onChange={(v) => {
          setSubValue(v.currentTarget.value);
          onChange?.(v.currentTarget.value);
        }}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className="bg-transparent w-full h-full outline-none p-3"
      />
      <div
        className={twMerge(
          "absolute left-3 text-gray-500 pointer-events-none bg-white  transition-all p-2",
          focus
            ? "-top-1/2 translate-y-[22%] text-xs text-primary"
            : "top-1/2 -translate-y-1/2 text-sm"
        )}
      >
        {placeholder}
      </div>
    </div>
  );
}
