import React, { useState } from 'react';
import styled from 'styled-components';
import { IUser } from '@/types/types';
import CardList from '@/components/CardList';

const Container = styled.div`
  flex: 3;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 20px;
  border-radius: 5px;
  background-color: #edf756;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
`;

const Players = (users: IUser) => {
  return (
    <Container>
      <CardList {...users} />
    </Container>
  );
};

export default Players;
