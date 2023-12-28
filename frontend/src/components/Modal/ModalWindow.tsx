import { FC, ReactNode } from 'react';

interface ModalWindowProps {
  children: ReactNode;
  reference: React.RefObject<HTMLDivElement>;
}

const ModalWindow: FC<ModalWindowProps> = ({ children, reference }) => (
  <div
    ref={reference}
    className="fixed rounded-lg px-3 py-3 transition-all w-full"
  >
    {children}
  </div>
);

export default ModalWindow;
