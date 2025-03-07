import React from 'react';
import { useParams } from 'react-router-dom';

type DetailParam = {
  id: string;
}

export const Detail: React.FC = () => {
  const { id } = useParams<DetailParam>();

  return (
    <div>Detail Page {id}</div>
  )
}
