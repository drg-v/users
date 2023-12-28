import { FC, ReactNode, useContext } from 'react';
import TableContext from './TableContext';

interface RowProps {
  children: ReactNode;
}

const Row: FC<RowProps> = ({ children }) => {
  const { isOpen } = useContext(TableContext);
  if (!isOpen) return null;
  return (
    <tr className="bg-transparent border-b hover:bg-white/50 ">{children}</tr>
  );
};

export default Row;
