import * as React from 'react';

const defaultClass = 'align-bottom inline-flex items-center justify-center ' +
    'cursor-pointer leading-5 transition-colors duration-150 font-medium ' +
    'focus:outline-none px-4 py-2 rounded-lg text-sm text-white ' +
    'bg-green-600 border border-transparent active:bg-green-600 ' +
    'hover:bg-green-700 focus:shadow-outline-purple';

export interface InputProps {
    style?: React.CSSProperties;
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    children?: React.ReactNode;
}
export default ({style, className, onClick, type = 'button', children}: InputProps) => {
    return <button
        style={style}
        onClick={onClick}
        className={className ? className + ' ' + defaultClass : defaultClass}
        type={type}
    >{children}</button>;
}