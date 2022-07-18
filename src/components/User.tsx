import React from 'react';

interface Props {
  selectedUser: number;
}

export const User: React.FC<Props> = ({ selectedUser }) => {
  return (
    <h1>{`User: ${selectedUser}`}</h1>
  )
}