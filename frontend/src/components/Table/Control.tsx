import { FC, useContext } from 'react';
import TableContext from './TableContext';

interface ControlProps {
  render: (isOpen: boolean) => JSX.Element;
  colSpan: number;
}

const Control: FC<ControlProps> = ({ render, colSpan }) => {
  const { isOpen, setOpen } = useContext(TableContext);
  return (
    <tr>
      <td colSpan={colSpan}>
        <div
          className="flex flex-col items-center justify-center w-full p-3"
          onClick={setOpen}
          onKeyDown={setOpen}
          role="gridcell"
          tabIndex={0}
        >
          {render(isOpen)}
        </div>
      </td>
    </tr>
  );
};

export default Control;
