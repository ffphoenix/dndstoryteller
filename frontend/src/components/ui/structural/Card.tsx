import React from "react";

export interface CardProps {
  children?: React.ReactNode;
}

export default ({ children }: CardProps) => (
  <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
    <div className="md:flex overflow-y-auto md:flex-row">{children}</div>
  </div>
);
