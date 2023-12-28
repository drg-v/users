import { FC, ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
  align?: string;
}

const Title: FC<TitleProps> = ({ children, align }) => {
  const alignClass = align === 'left' ? 'text-left' : 'text-center';
  return (
    <h2
      className={`flex flex-row gap-5 px-2 text-4xl font-bold text-gray-700 ${alignClass} py-4`}
    >
      {children}
    </h2>
  );
};

export default Title;
