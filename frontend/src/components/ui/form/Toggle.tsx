import React from "react";

const defaultClassName = 'relative w-11 h-6 bg-gray-200 ' +
    'peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 ' +
    'rounded-full peer dark:bg-gray-700 ' +
    'peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white ' +
    'after:content-[\'\'] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 ' +
    'after:border after:rounded-full after:h-5 after:w-5 after:transition-all ' +
    'dark:border-gray-600 peer-checked:bg-blue-600';

export interface ToggleProps {
    style?: React.CSSProperties;
    className?: string;
    onFocus?: () => void;
    onChange?: (value: any) => void;
    onBlur?: () => void;
    value?: string;
    label?: string;
}

export default ({style, label, value, onChange, className} : ToggleProps) => <label className="inline-flex items-center cursor-pointer">
    <input type="checkbox" value={value} onChange={onChange} className="sr-only peer"/>
    <div style={style}
        className={className ? defaultClassName + ' ' + className : defaultClassName}></div>
    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</span>
</label>
