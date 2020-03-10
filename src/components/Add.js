import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Pane, Button, Select, TextInput, Textarea, toaster, majorScale,
} from 'evergreen-ui';
import { containerStyles, formStyles } from '../Styles';
import Loader from './Loader';
import Error from './Error';
import BASE_URL from '../common/constants';
import { UserContext, PostContext } from '../common/context';

export default function Add() {
  const [users, loadingUsers, , , errorUsers] = useContext(UserContext);
  const [, loadingPosts, setPostsLoading, , errorPosts, setErrorPosts] = useContext(PostContext);
  const [formState, setFormState] = useState({});

  const handleChange = (input) => (e) => {
    setFormState({ ...formState, [input]: e.target.value });
  };

  const addPost = async (e) => {
    e.preventDefault();
    setPostsLoading(true);
    try {
      await axios.post(`${BASE_URL}/posts/`, {
        body: JSON.stringify({
          title: formState.title,
          body: formState.body,
          userId: formState.userId,
        }),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      });
      toaster.success('Post added', { duration: 2 });
    } catch {
      setErrorPosts(true);
    }
    setPostsLoading(false);
  };

  if (loadingUsers || loadingPosts) return <Loader />;
  if (errorUsers || errorPosts) return <Error />;

  return (
    <Pane style={containerStyles}>
      <Button
        marginBottom={majorScale(2)}
        appearance="primary"
        iconBefore="arrow-left"
        is={Link}
        to="/posts"
      >
          Back
      </Button>
      <form
        style={formStyles}
        onSubmit={addPost}
      >
        <Select onInput={handleChange('userId')} required defaultValue="placeholder" marginBottom={majorScale(1)}>
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
          marginBottom={majorScale(1)}
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
        <Button type="submit" intent="success">Save</Button>
      </form>
    </Pane>
  );
}
