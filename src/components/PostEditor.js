import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import {
  Pane, Button, Select, TextInput, Textarea, toaster, majorScale,
} from 'evergreen-ui';
import useLoader from '../hooks/useLoader';
import { containerStyles, formStyles } from '../Styles';
import Loader from './Loader';
import Error from './Error';
import BASE_URL from '../common/constants';
import { UserContext } from '../common/context';

export default function PostEditor() {
  const { id } = useParams();
  const [post, loadingPosts, setPostsLoading, , errorPosts, setErrorPosts] = useLoader(`posts/${id}`);
  const [users, loadingUsers, , , errorUsers] = useContext(UserContext);
  const [formState, setFormState] = useState({ ...post });

  useEffect(() => setFormState(post), [post]);


  const handleChange = (input) => (e) => {
    setFormState({ ...formState, [input]: e.target.value });
  };

  const editPost = async (e) => {
    e.preventDefault();
    setPostsLoading(true);
    try {
      await axios.put(`${BASE_URL}/posts/${id}`, {
        body: JSON.stringify({
          title: formState.title,
          body: formState.body,
          userId: formState.userId,
          id,
        }),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      });
      toaster.success('Changes have been saved', { duration: 2 });
    } catch {
      setErrorPosts(true);
    }
    setPostsLoading(false);
  };

  if (loadingPosts || loadingUsers) return <Loader />;
  if (errorPosts || errorUsers) return <Error />;

  return (
    <Pane style={containerStyles}>
      <Button
        marginBottom={majorScale(2)}
        appearance="primary"
        iconBefore="back"
        is={Link}
        to="/posts"
      >
          Back
      </Button>
      <form
        style={formStyles}
        onSubmit={editPost}
      >
        <Select onInput={handleChange('userId')} required defaultValue={formState.userId} marginBottom={majorScale(2)}>
          <option value="placeholder" disabled>
            -- Select user --
          </option>
          {users
            && users.map((user) => (
              <option value={user.id} key={user.id}>
                {user.name}
              </option>
            ))}
        </Select>
        <TextInput
          marginBottom={majorScale(2)}
          onChange={handleChange('title')}
          defaultValue={formState.title}
          placeholder="Add title here"
          required
        />
        <Textarea
          marginBottom={majorScale(2)}
          onChange={handleChange('body')}
          defaultValue={formState.body}
          placeholder="Add yor text here"
        />
        <Button type="submit">Save</Button>
      </form>
    </Pane>
  );
}
