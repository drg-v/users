import { FC, ReactNode } from 'react';

interface HeaderCellProps {
  data: ReactNode;
  align?: 'center' | 'left';
}

const HeaderCell: FC<HeaderCellProps> = ({ data, align }) => {
  const textAlign = align ? `text-${align}` : '';

  return (
    <th
      scope="col"
      className={`px-6 py-3 ${textAlign} bg-transparent text-bold text-lg text-gray-200`}
    >
      {data}
    </th>
  );
};

export default HeaderCell;
