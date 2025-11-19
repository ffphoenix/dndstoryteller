import * as React from "react";

const defaultClass =
  "block w-full rounded-md border-0 " +
  "ring-1 ring-inset ring-gray-300 " +
  "py-1.5 pl-5 pr-5 text-sm text-black text-gray-900 " +
  "dark:text-gray-300 dark:border-gray-600 " +
  "dark:bg-gray-700 focus:border-purple-400 focus:outline-none " +
  "focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input sm:leading-6";

export interface InputProps {
  style?: React.CSSProperties;
  className?: string;
  onFocus?: () => void;
  onChange?: (value: any) => void;
  onBlur?: () => void;
  placeholder?: string;
  type?: "text" | "password" | "email";
  value?: string;
}
export default ({
  style,
  className,
  onChange,
  onBlur,
  onFocus,
  type = "text",
  placeholder = "",
  value,
}: InputProps) => {
  return (
    <input
      style={style}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      className={className ? className + " " + defaultClass : defaultClass}
      type={type}
      placeholder={placeholder}
      value={value}
    />
  );
};
