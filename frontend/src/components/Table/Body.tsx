import { FC, ReactNode } from 'react';

interface BodyProps {
  children: ReactNode;
}

const Body: FC<BodyProps> = ({ children }) => <tbody>{children}</tbody>;

export default Body;
