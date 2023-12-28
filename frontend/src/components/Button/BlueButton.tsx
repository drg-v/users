import { FC, ReactNode } from 'react';

interface ButtonProps {
  type: 'button' | 'submit';
  children: ReactNode;
  onClick?: () => void;
  align?: 'center' | 'start' | 'end' | 'stretch';
}

const BlueButton: FC<ButtonProps> = ({
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
      className={`${buttonAlign} rounded-2xl h-12 w-auto flex justify-center items-center font-semibold bg-blue-700 px-4 hover:bg-blue-500 text-gray-200 hover:text-gray-50 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-offset-2 active:bg-blue-100 active:text-gray-600 m-1`}
    >
      {children}
    </button>
  );
};

export default BlueButton;
