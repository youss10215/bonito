import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { IUser } from '@/types/types';
import CardItem from '@/components/CardItem';

const CardList = (users: IUser) => {
  const { users: toto } = users;
  return toto.map(({ username, meetings }, i) => {
    const count = meetings.length;
    return (
      <CardItem key={`card-${i}`} i={i} username={username} count={count} />
    );
  });
};

export default CardList;
