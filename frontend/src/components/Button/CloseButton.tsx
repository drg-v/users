import { FC, ReactNode } from 'react';

interface CloseButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const CloseButton: FC<CloseButtonProps> = ({ children, onClick }) => (
  <button
    type="button"
    className="rounded-2xl h-12 w-auto bg-gray-800 px-3 hover:bg-gray-600 text-gray-200 hover:text-gray-50 self-end m-1 focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-offset-2 active:bg-gray-400 active:text-gray-800 font-semibold focus:ring-opacity-70"
    onClick={onClick}
  >
    {children}
  </button>
);

export default CloseButton;
