import { FC, ReactNode } from 'react';

interface ButtonProps {
  type: 'button' | 'submit';
  children: ReactNode;
  onClick?: () => void;
  align?: 'center' | 'start' | 'end' | 'stretch';
}

const GreenButton: FC<ButtonProps> = ({
  type = 'button',
  children,
  onClick,
  align,
}) => {
  const buttonAlign = align ? `self-${align}` : '';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${buttonAlign} rounded-2xl h-12 w-auto flex justify-center items-center bg-green-700 px-4 hover:bg-green-500 text-gray-200 hover:text-gray-50focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-offset-2 active:bg-green-200 active:text-gray-600 font-semibold m-1 `}
    >
      {children}
    </button>
  );
};

export default GreenButton;
