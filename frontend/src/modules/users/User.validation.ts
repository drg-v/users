import * as yup from 'yup';

const validationSchema = yup
  .object({
    email: yup
      .string()
      .email('Invalid email address')
      .required('Email is required'),
    password: yup
      .string()
      .min(6, 'Password must consist of at least 3 characters')
      .max(50, "Password can't be longer than 50 characters")
      .required('Password is required'),
    phone: yup
      .string()
      .min(6, 'Phone must consist of at least 3 characters')
      .max(50, "Phone can't be longer than 50 characters")
      .required('Phone is required'),
    username: yup
      .string()
      .min(6, 'Username must consist of at least 3 characters')
      .max(50, "Username can't be longer than 50 characters")
      .required('Username is required'),
    name: yup
      .string()
      .min(6, 'Name must consist of at least 3 characters')
      .max(50, "Name can't be longer than 50 characters")
      .required('Name is required'),
    surname: yup
      .string()
      .min(6, 'Surname must consist of at least 3 characters')
      .max(50, "Surname can't be longer than 50 characters")
      .required('Surname is required'),
  })
  .required();

export default validationSchema;