import { FC, useContext } from 'react';
import TableContext from './TableContext';

interface HeaderProps {
  render: (data: string) => JSX.Element;
}

const Header: FC<HeaderProps> = ({ render }) => {
  const { columns } = useContext(TableContext);
  return (
    <thead className="text-xs text-gray-200 uppercase bg-gray-700">
      <tr>{columns.map(render)}</tr>
    </thead>
  );
};

export default Header;
