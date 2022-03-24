import React from 'react';
import useFetch from '../hooks/useFetch';

const url = 'https://jsonplaceholder.typicode.com/posts';

const Posts = () => {
  const { data } = useFetch(url);

  return (
    <ul>
      {
        data.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))
      }
    </ul>
  );
};

export default Posts;
