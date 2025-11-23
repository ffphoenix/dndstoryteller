import React from "react";
import {
  InputSwitch,
  type InputSwitchChangeEvent,
  type InputSwitchProps,
} from "primereact/inputswitch";

type CustomInputSwitchProps = {
  label: string;
  dataKey: string;
  value: boolean;
  onChange: (e: { [p: string]: boolean }) => void;
  className?: string;
};

export default ({ ...props }: CustomInputSwitchProps) => {
  const customOnchange = (e: InputSwitchChangeEvent) => {
    console.log("Sw", e.value);
    props.onChange({ [props.dataKey]: e.value });
  };

  const InputProps: InputSwitchProps = {
    id: props.dataKey,
    checked: props.value,
    onChange: customOnchange,
    className: props.className ?? "",
  };
  return (
    <div className="flex-auto mb-2">
      <label htmlFor={props.dataKey} className="font-bold block">
        {props.label}
      </label>
      <InputSwitch {...InputProps} />
    </div>
  );
};
