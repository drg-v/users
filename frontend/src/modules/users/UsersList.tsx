import { FC, useState } from 'react';
import { MdEdit, MdDeleteForever } from 'react-icons/md';
import Container from '../../components/Container';
import Title from '../../components/Title';
import Table from '../../components/Table';
import Modal from '../../components/Modal';
import { GreenButton } from '../../components/Button';
import EditUser from './EditUser';
import useUsers from './hooks/useUsers';
import CreateUser from './CreateUser';
import useDeleteUser from './hooks/useDeleteUser';

const UsersList: FC = () => {
  const [page, setPage] = useState<number>(1)
  const {users} = useUsers(page)
  const deleteUser = useDeleteUser()
  const title = 'Users List';
  const columns = [
    '#',
    'Email',
    'Phone',
    'Username',
    'Name',
    'Surname',
    'Edit',
    'Delete',
  ];

  const handleDelete = (id: string) => () => {
    deleteUser.mutate(id)
  };

  return (
    <Container>
      <Title>{title} Page: {page}</Title>
      <Modal>
        <div className="overflow-x-scroll">
        <Table columns={columns}>
          <Table.Header
            render={(data) => (
              <Table.HeaderCell data={data} key={data} align="center" />
            )}
          />
          <Table.Body>
            {users?.map((user) => (
              <Table.Row key={user.email}>
                <Table.Cell align="center">{user.id}</Table.Cell>
                <Table.Cell align="center">{user.email}</Table.Cell>
                <Table.Cell align="center">{user.phone}</Table.Cell>
                <Table.Cell align="center">{user.username}</Table.Cell>
                <Table.Cell align="center">{user.name}</Table.Cell>
                <Table.Cell align="center">{user.surname}</Table.Cell>
                <Table.Cell align="center">
                  <Modal.Open opens="edit" openId={user.id} page={page}>
                    <GreenButton type="button" align="center">
                      <MdEdit />
                    </GreenButton>
                  </Modal.Open>
                </Table.Cell>
                <Table.Cell align="center">
                  <GreenButton
                    align="center"
                    type="button"
                    onClick={handleDelete(user.id!)}
                  >
                    <MdDeleteForever />
                  </GreenButton>
                </Table.Cell>
              </Table.Row>
            ))}
            <Table.Control
              colSpan={9}
              render={() => (
              <div className="flex flex-row">
                { page > 1 && 
                <GreenButton type="button" onClick={() => {
                    setPage(prev => prev - 1)
                  }}>
                  Prev page
                </GreenButton>
                }
                { users && users?.length == 10 && 
                <GreenButton type="button" onClick={() => {
                  setPage(prev => prev + 1)
                }}>
                  Next page
                </GreenButton>
                }
              </div>
              )}
            />
          </Table.Body>
        </Table>
        </div>
        <CreateUser />
        <Modal.Window name="edit">
          <EditUser page={page} />
        </Modal.Window>
      </Modal>
    </Container>
  );
};

export default UsersList;