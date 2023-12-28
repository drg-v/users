import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { GreenButton } from '../../components/Button';
import Container from '../../components/Container';
import Title from '../../components/Title';
import {
  Form, FormField, Input
} from '../../components/Form';
import validationSchema from './User.validation';
import useUsers from './hooks/useUsers';
import useUpdateUser from './hooks/useUpdateUser';

interface UserForm {
  email: string;
  password: string;
  phone: string;
  username: string;
  name: string;
  surname: string;
}

interface EditUserProps {
  openId?: string;
  page: number
}

const EditUser: FC<EditUserProps> = ({ openId, page }) => {
  const {users} = useUsers(page)
  const updateUser = useUpdateUser()
  const user = users?.find(user => user.id == openId)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserForm>({
    defaultValues: user,
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: UserForm) => {    
    updateUser.mutate(data)
    reset();
  };

  const title = 'Edit User';

  return (
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
  );
};

export default EditUser;