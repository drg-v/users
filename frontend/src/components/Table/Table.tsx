import {
  FC, ReactNode, useCallback, useMemo, useState,
} from 'react';
import TableContext from './TableContext';
import Header from './Header';
import Body from './Body';
import Row from './Row';
import HeaderCell from './HeaderCell';
import Cell from './Cell';
import Control from './Control';

interface TableProps {
  children: ReactNode;
  columns: Array<string>;
}

interface TableComposition {
  Header: typeof Header;
  Body: typeof Body;
  Row: typeof Row;
  HeaderCell: typeof HeaderCell;
  Cell: typeof Cell;
  Control: typeof Control;
}

const Table: FC<TableProps> & TableComposition = ({
  columns,
  children,
}: TableProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const setOpen = useCallback(() => setIsOpen((open) => !open), [setIsOpen]);

  const value = useMemo(
    () => ({
      columns,
      isOpen,
      setOpen,
    }),
    [columns, isOpen, setOpen],
  );

  return (
    <TableContext.Provider value={value}>
      <table className="bg-gray-50 w-full text-sm text-left text-gray-700">
        {children}
      </table>
    </TableContext.Provider>
  );
};

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.HeaderCell = HeaderCell;
Table.Cell = Cell;
Table.Control = Control;

export default Table;
