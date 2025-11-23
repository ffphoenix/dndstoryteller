import { InputText, type InputTextProps } from "primereact/inputtext";
import React from "react";

type CustomInputTextProps = {
  label: string;
  dataKey: string;
  value?: string;
  onChange: (e: { [p: string]: string }) => void;
  type?: string;
  placeholder?: string;
  className?: string;
};

export default ({ ...props }: CustomInputTextProps) => {
  const customOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange({ [props.dataKey]: e.target.value });
  };

  const textInputProps: InputTextProps = {
    id: props.dataKey,
    type: props.type,
    value: props.value,
    onChange: customOnchange,
    className: props.className ?? "w-full",
  };
  return (
    <div className="flex-auto mb-2">
      <label htmlFor={props.dataKey} className="font-bold block">
        {props.label}
      </label>
      <InputText {...textInputProps} />
    </div>
  );
};
