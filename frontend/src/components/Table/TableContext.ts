import { createContext } from 'react';

interface TableContextType {
  columns: Array<string>;
  isOpen: boolean;
  setOpen: () => void;
}

const TableContext = createContext<TableContextType>({
  columns: [],
  isOpen: true,
  setOpen: () => {},
});

export default TableContext;
