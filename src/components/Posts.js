import axios from 'axios';
import {
  Button, Dialog, majorScale, Pane, toaster,
} from 'evergreen-ui';
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import BASE_URL from '../common/constants';
import { containerStyles } from '../Styles';
import Error from './Error';
import Loader from './Loader';
import PostTable from './PostTable';
import { PostContext } from '../common/context';

export default function Posts() {
  const [dialogId, setDialogId] = useState(null);
  const [posts, isLoading, setLoading, reload, error] = useContext(PostContext);

  const requestDelete = async (id) => {
    setLoading(true);
    try {
      setDialogId(null);
      await axios.delete(`${BASE_URL}/posts/${id}`);
      reload();
      toaster.success('Post deleted', { duration: 2 });
    } catch {
      setDialogId(null);
      toaster.danger('Something went wrong', { duration: 2 });
    }
  };

  if (error) return <Error error={error} />;
  if (isLoading) return <Loader />;

  return (
    <Pane style={containerStyles}>
      <Button
        marginBottom={majorScale(2)}
        appearance="primary"
        iconBefore="add"
        is={Link}
        to="/posts/new"
      >
        Add task
      </Button>

      <PostTable posts={posts} onDeleteClick={setDialogId} />

      <Dialog
        isShown={Boolean(dialogId)}
        title="Delete"
        intent="danger"
        onCloseComplete={() => setDialogId(null)}
        confirmLabel="Yes, delete"
        onConfirm={() => requestDelete(dialogId)}
      >
        Are you sure you want to delete this post?
      </Dialog>
    </Pane>
  );
}
