import { FC, forwardRef } from 'react';

interface SelectProps {
  options: Array<string>;
  id: string;
}

export type Ref = HTMLSelectElement;

const BareSelect = (
  { options, id, ...rest }: SelectProps,
  ref: React.LegacyRef<HTMLSelectElement>,
) => (
  <select
    id={id}
    className="bg-gray-200 border border-gray-400 text-gray-700 text-md font-semibold rounded-lg hover:bg-gray-300 hover:border-gray-500 hover:text-gray-800 focus:text-gray-700 focus:ring-green-500 focus:border-none focus:bg-green-50 focus:outline-none focus:ring-2 block w-full p-2.5"
    ref={ref}
    {...rest}
  >
    {options.map((option) => (
      <option key={option} className="text-gray-600 text-md font-medium my-5">
        {option}
      </option>
    ))}
  </select>
);

const Select: FC<SelectProps> = forwardRef<Ref, SelectProps>(BareSelect);

export default Select;
