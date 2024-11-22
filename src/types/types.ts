export interface ProjectCardProps {
  imageSrc: string;
  imageAlt: string;
}

export interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

export interface InputFieldProps {
  label: string;
  type?: string;
  id: string;
}

export interface CardProps {
  icon: string | React.ReactNode;
  title: string;
  description: string;
  variant?: "service" | "skill";
}

export interface ButtonProps {
  text?: string;
  href?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}


export interface ImageSliderProps {
  images: string[];
  variant?: "poster" | "ui";
}

