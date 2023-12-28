import { FC, ReactNode } from 'react';

interface FormFieldProps {
  label: string;
  id: string;
  children: ReactNode;
  error?: string;
}

const FormField: FC<FormFieldProps> = ({
  label, children, id, error,
}) => (
  <div className="mb-6">
    <label
      htmlFor={id}
      className="ml-2 pb-10 text-gray-700 font-medium text-xl"
    >
      {label}
    </label>
    {children}
    {error && (
      <p className="block mb-2 text-sm font-medium text-red-500 ml-2">
        {error}
      </p>
    )}
  </div>
);

export default FormField;
