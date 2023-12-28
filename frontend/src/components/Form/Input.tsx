import { FC, forwardRef } from 'react';

interface InputProps {
  type: string;
  id: string;
  disabled: boolean;
}

export type Ref = HTMLInputElement;

const BareInput = (
  {
    type, id, disabled, ...rest
  }: InputProps,
  ref: React.LegacyRef<HTMLInputElement>,
) => (
  <input
    type={type}
    id={id}
    disabled={disabled}
    className="bg-gray-200 border border-gray-400 text-gray-700 text-md font-semibold rounded-lg hover:bg-gray-300 hover:border-gray-500 hover:text-gray-800 focus:text-gray-700 focus:ring-green-500 focus:bg-green-50 focus:outline-none  block w-full p-2.5 focus:ring-2 focus:border-none "
    ref={ref}
    {...rest}
  />
);

const Input: FC<InputProps> = forwardRef<Ref, InputProps>(BareInput);

export default Input;
