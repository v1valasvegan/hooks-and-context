import React from 'react';
import useLoader from '../hooks/useLoader';
import { PostContext } from '../common/context';
import Loader from './Loader';

export default function PostProvider({ children }) {
  const postContext = useLoader('posts');
  const [posts, loading] = postContext;
  return (
    <PostContext.Provider value={postContext}>
      {loading || posts.length === 0 ? <Loader /> : children}
    </PostContext.Provider>
  );
}
