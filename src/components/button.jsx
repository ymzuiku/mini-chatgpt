import { twMerge } from "tailwind-merge";

export function Button({ children, className, ...rest }) {
  return (
    <button
      className={twMerge(
        "bg-primary rounded-sm relative h-12 w-20 text-white hover:bg-primary-deep active:ring-4 ring-indigo-100",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
