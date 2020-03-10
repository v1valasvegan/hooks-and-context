import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Table, majorScale, IconButton } from 'evergreen-ui';
import { UserContext } from '../common/context';

export default function PostTableRow({ post, onDeleteClick }) {
  const [users] = useContext(UserContext);
  const { userId, id, title } = post;
  const { name } = users.find((user) => user.id === userId) || {};

  return (
    <Table.Row>
      <Table.TextCell>{title}</Table.TextCell>
      <Table.TextCell>{name}</Table.TextCell>
      <Table.Cell
        display="flex"
        justifyContent="space-around"
        flexBasis={majorScale(10)}
        flexGrow={0}
      >
        <IconButton
          appearance="minimal"
          icon="delete"
          color="muted"
          onClick={() => onDeleteClick(id)}
        />
        <IconButton appearance="minimal" icon="edit" color="muted" is={Link} to={`/posts/${id}`} />
      </Table.Cell>
    </Table.Row>
  );
}
