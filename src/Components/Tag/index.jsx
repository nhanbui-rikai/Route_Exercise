import React from "react";

export default function Tag({
  color = "#bbdefa",
  textColor = "",
  className = "",
  value = 30,
  description = "Revenue",
  leftIcon,
}) {
  return (
    <div
      className={`flex flex-col w-fit rounded-md bg-[${color}] shadow-lg shadow-slate-300 py-5 px-4 min-w-[250px] ${className}`}
    >
      <div className="flex items-center">
        {leftIcon}
        <h3 className="text-lg font-bold ml-2">{value}</h3>
      </div>
      <p className={`text-xs mt-3 text-[${textColor}]`}>{description}</p>
    </div>
  );
}
