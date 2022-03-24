import React, { useEffect } from 'react';
import useStore from '../store';

const Posts = () => {
  const posts = useStore(state => state.posts);
  const fetchPosts = useStore(state => state.fetchPosts);

  useEffect(() => {
    if (!posts.length) {
      fetchPosts();
    }
  }, []);
  return (
    <ul>
      {
        posts.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))
      }
    </ul>
  );
};

export default Posts
