import React from 'react';
import { Table, majorScale } from 'evergreen-ui';
import PostTableRow from './PostTableRow';

export default function PostTable({ posts, onDeleteClick }) {
  return (
    <Table border>
      <Table.Head>
        <Table.TextHeaderCell>Title</Table.TextHeaderCell>
        <Table.TextHeaderCell>User</Table.TextHeaderCell>
        <Table.TextHeaderCell flexBasis={majorScale(10)} flexGrow={0}>
          Actions
        </Table.TextHeaderCell>
      </Table.Head>
      <Table.Body>
        {posts?.map((post) => (
          <PostTableRow key={post.id} post={post} onDeleteClick={onDeleteClick} />
        ))}
      </Table.Body>
    </Table>
  );
}
