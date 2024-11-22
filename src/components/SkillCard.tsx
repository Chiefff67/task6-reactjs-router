import * as React from "react";
import { CardProps } from "../types/types";

const Card: React.FC<CardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <article className="flex flex-col self-stretch w-full max-w-[298px] mx-auto">
      <div className="flex flex-col items-center px-4 sm:px-6 md:px-8 pt-6 sm:pt-8 md:pt-9 pb-12 sm:pb-16 md:pb-20 bg-neutral-50 shadow-[4px_4px_3px_rgba(0,0,0,0.2)] sm:shadow-[6px_6px_4px_rgba(0,0,0,0.25)] rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
        <div className="flex flex-col items-center text-center">
          {/* Icon */}
          <div className="aspect-square w-[45px] sm:w-[55px] md:w-[69px] transition-all duration-300">
            {typeof icon === "string" ? (
              <img
                loading="lazy"
                src={icon}
                alt={`${title} icon`}
                className="object-contain w-full h-full"
              />
            ) : (
              icon
            )}
          </div>

          {/* Title */}
          <h3 className="mt-2 sm:mt-3 text-xl sm:text-2xl font-medium text-primary">
            {title}
          </h3>

          {/* Description */}
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-zinc-500 max-w-[250px]">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Card;
