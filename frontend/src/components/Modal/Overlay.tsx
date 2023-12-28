import { FC, ReactNode } from 'react';

interface OverlayProps {
  children: ReactNode;
}

const Overlay: FC<OverlayProps> = ({ children }) => (
  <div className="fixed top-0 left-0 w-full h-screen z-50 transition-all backdrop-blur-sm bg-white/30">
    {children}
  </div>
);

export default Overlay;
