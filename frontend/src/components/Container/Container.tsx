import { FC, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => (
  <div className="flex flex-col rounded-xl px-2 py-2 gap-4 container mx-auto my-10 border-gray-400/50 border-2 bg-gray-50 w-full">
    {children}
  </div>
);

export default Container;
