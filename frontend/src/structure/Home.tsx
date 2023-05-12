import styled from 'styled-components';
import Players from '@/components/Players';
import TopUsers from '@/components/TopUsers';
import { IUser } from '@/types/types';

const Container = styled.div`
  max-width: 1750px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 200px;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

const Content = styled.div`
  display: flex;
`;

const Home = (users: IUser) => {
  console.log('🚀 ~ file: Home.tsx:28 ~ Home ~ users:', users);
  return (
    <Container>
      <Header>
        <Image src="../img/banner.png" alt="Banner" />
      </Header>
      <Content>
        <TopUsers />
        <Players {...users} />
      </Content>
    </Container>
  );
};

export default Home;
