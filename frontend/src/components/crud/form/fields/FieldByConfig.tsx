import CustomInputText, { type CustomInputTextProps } from "./CustomInputText";
import React from "react";
import { observer } from "mobx-react-lite";
import CustomInputSwitch from "./CustomInputSwitch";
import type { FieldConfig } from "../crudForm";
import type { InputError } from "../../createDataStorage";
import CustomTextarea from "./CustomTextarea";

type Props<T> = {
  fieldConfig: FieldConfig;
  onChange: (data: Partial<T>) => void;
  value: string;
  errors?: InputError[];
  onBlur?: () => void;
  onFocus?: () => void;
};

function filterTextInputProps<T>(fieldProps: Props<T>): CustomInputTextProps<T> {
  return {
    dataKey: fieldProps.fieldConfig.dataKey,
    onChange: fieldProps.onChange,
    onBlur: fieldProps.onBlur,
    onFocus: fieldProps.onFocus,
    label: fieldProps.fieldConfig.label,
    type: fieldProps.fieldConfig.type,
    value: fieldProps.value,
    errors: fieldProps.errors,
  };
}

export default observer(<T,>({ ...fieldProps }: Props<T>) => {
  if (fieldProps.fieldConfig.type === "switch") {
    return (
      <CustomInputSwitch<T>
        dataKey={fieldProps.fieldConfig.dataKey}
        label={fieldProps.fieldConfig.label}
        onChange={fieldProps.onChange}
        value={!!fieldProps.value}
      />
    );
  }
  const textInputProps = filterTextInputProps<T>(fieldProps);
  if (fieldProps.fieldConfig.type === "textarea") {
    return <CustomTextarea<T> {...textInputProps} />;
  }
  return <CustomInputText<T> {...textInputProps} />;
});
