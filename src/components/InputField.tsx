import * as React from "react";
import { InputFieldProps } from "../types/types";

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  id,
}) => {
  return (
    <div className="flex flex-col mt-3 sm:mt-5 w-full max-w-[492px] mx-auto px-4 sm:px-0">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          className="w-full px-3 pt-3.5 pb-20 sm:pb-28 bg-white rounded-md border border-solid border-stone-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder={label}
          aria-label={label}
        />
      ) : (
        <input
          type={type}
          id={id}
          className="w-full px-3 py-2 sm:py-3 bg-white rounded-md border border-solid border-stone-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder={label}
          aria-label={label}
        />
      )}
    </div>
  );
};
