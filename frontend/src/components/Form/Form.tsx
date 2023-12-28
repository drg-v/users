import { FC, ReactNode } from 'react';

interface FormProps {
  children: ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form: FC<FormProps> = ({ children, onSubmit }) => (
  <form onSubmit={onSubmit} className="flex flex-col">
    {children}
  </form>
);

export default Form;
