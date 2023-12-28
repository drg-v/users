import { FC } from 'react';
import { GrPersonalComputer } from 'react-icons/gr';
import Title from '../components/Title';
import Container from '../components/Container';

const Header: FC = () => (
  <header>
    <Container>
      <Title align="left">
        <GrPersonalComputer />
        Users App
      </Title>
    </Container>
  </header>
);

export default Header;
