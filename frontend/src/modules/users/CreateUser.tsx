import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Modal from '../../components/Modal';
import { BlueButton, GreenButton } from '../../components/Button';
import Container from '../../components/Container';
import Title from '../../components/Title';
import {
  Form, FormField, Input
} from '../../components/Form';
import validationSchema from './User.validation';
import useCreateUser from './hooks/useCreateUser';

interface UserForm {
  email: string;
  password: string;
  phone: string;
  username: string;
  name: string;
  surname: string;
}

const CreateUser: FC = () => {
  const createUser = useCreateUser()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: UserForm) => {
    createUser.mutate(data)
    reset();
  };

  const title = 'Create User';

  return (
    <>
      <Modal.Open opens="create">
        <BlueButton type="button">Add User</BlueButton>
      </Modal.Open>
      <Modal.Window name="create">
        <Container>
          <Title>{title}</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormField id="email" label="Email" error={errors.email?.message}>
              <Input type="text" id="email" disabled={false} {...register('email')} />
            </FormField>
            <FormField id="password" label="Password" error={errors.password?.message}>
              <Input
                type="password"
                id="password"
                disabled={false}
                {...register('password')}
              />
            </FormField>
            <FormField id="phone" label="Phone" error={errors.phone?.message}>
              <Input
                type="text"
                id="phone"
                disabled={false}
                {...register('phone')}
              />
            </FormField>
            <FormField id="username" label="Username" error={errors.username?.message}>
              <Input
                type="text"
                id="username"
                disabled={false}
                {...register('username')}
              />
            </FormField>
            <FormField id="name" label="Name" error={errors.name?.message}>
              <Input
                type="text"
                id="name"
                disabled={false}
                {...register('name')}
              />
            </FormField>
            <FormField id="surname" label="Surname" error={errors.surname?.message}>
              <Input
                type="text"
                id="surname"
                disabled={false}
                {...register('surname')}
              />
            </FormField>
            <GreenButton type="submit" align="end">
              Submit User
            </GreenButton>
          </Form>
        </Container>
      </Modal.Window>
    </>
  );
};
export default CreateUser;