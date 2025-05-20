interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export const Display1 = ({ children, className }: TextProps) => {
  return <h1 className={`font-bold text-[3rem] lg:text-[4rem] leading-[120%] ${className}`}>{children}</h1>;
};

export const Display2 = ({ children, className }: TextProps) => {
  return <h1 className={`font-bold text-[2.5rem] lg:text-[3.5rem] leading-[120%] ${className}`}>{children}</h1>;
};

export const H1 = ({ children, className }: TextProps) => {
  return <h1 className={`font-bold text-[2rem] lg:text-[3rem] leading-normal ${className}`}>{children}</h1>;
};

export const H2 = ({ children, className }: TextProps) => {
  return <h2 className={`font-bold text-[2rem] lg:text-[2.5rem] leading-normal ${className}`}>{children}</h2>;
};

export const H3 = ({ children, className }: TextProps) => {
  return <h3 className={`font-bold text-[1.25rem] lg:text-[2rem] leading-normal ${className}`}>{children}</h3>;
};

export const H4 = ({ children, className }: TextProps) => {
  return <h4 className={`font-bold text-[1.125rem] lg:text-[1.5rem] leading-normal ${className}`}>{children}</h4>;
};

export const H5 = ({ children, className }: TextProps) => {
  return <h5 className={`font-bold text-[1rem] lg:text-[1.25rem] leading-normal ${className}`}>{children}</h5>;
};

export const H6 = ({ children, className }: TextProps) => {
  return <h6 className={`font-bold text-[0.875rem] lg:text-[1.125rem] leading-normal ${className}`}>{children}</h6>;
};

export const BodyXLarge = ({ children, className }: TextProps) => {
  return <p className={`font-bold text-[1rem] lg:text-[1.250rem] leading-normal ${className}`}>{children}</p>;
};

export const BodyLarge = ({ children, className }: TextProps) => {
  return <p className={`font-bold text-[0.875rem] lg:text-[1.125rem] leading-normal ${className}`}>{children}</p>;
};

export const BodyMedium = ({ children, className }: TextProps) => {
  return <p className={`font-bold text-[1.125rem] lg:text-[1rem] leading-normal ${className}`}>{children}</p>;
};

export const BodySmall = ({ children, className }: TextProps) => {
  return <p className={`font-bold text-[0.750rem] lg:text-[0.875rem] leading-normal ${className}`}>{children}</p>;
};

export const BodyXSmall = ({ children, className }: TextProps) => {
  return <p className={`font-bold text-[0.625rem] lg:text-[0.750rem] leading-normal ${className}`}>{children}</p>;
};
