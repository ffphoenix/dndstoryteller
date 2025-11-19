import * as React from "react";
import Input from "./Input";

export interface InputProps {
  style?: React.CSSProperties;
  className?: string;
  onFocus?: () => void;
  onChange?: (value: any) => void;
  onBlur?: () => void;
  placeholder?: string;
  type?: "text" | "password" | "email";
  value?: string;
  label?: string;
  labelClassName?: string;
  inputClassName?: string;
  preIcon?: React.ReactNode;
}

const defaultLabelClassName = "text-md ";
export default ({
  style,
  className,
  onChange,
  onBlur,
  onFocus,
  type = "text",
  placeholder = "",
  value,
  label,
  labelClassName,
  inputClassName,
  preIcon = null,
}: InputProps) => {
  if (preIcon) {
    inputClassName = inputClassName + " pl-7";
  }
  return (
    <div className={className}>
      <label className="block text-md text-gray-900 dark:text-gray-700">
        <span className={defaultLabelClassName ?? labelClassName}>{label}</span>
        <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
          <Input
            style={style}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            className={inputClassName}
            type={type}
            placeholder={placeholder}
            value={value}
          />
          {preIcon && (
            <div className="absolute inset-y-0 flex items-center ml-2 self-center pointer-events-none w-4 h-4">
              {preIcon}
            </div>
          )}
        </div>
      </label>
    </div>
  );
  return;
};
