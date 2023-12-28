import { FC, ReactNode } from 'react';

interface CellProps {
  children?: ReactNode;
  align?: 'center' | 'left';
  colSpan?: number;
}

const Cell: FC<CellProps> = ({ children, align, colSpan }) => {
  const textAlign = align ? `text-${align}` : '';
  return (
    <td
      colSpan={colSpan}
      className={`px-6 py-4 text-gray-800 font-medium text-lg ${textAlign} whitespace-normal`}
    >
      {children || 0}
    </td>
  );
};

export default Cell;
