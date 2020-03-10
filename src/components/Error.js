import React from 'react';
import { Pane } from 'evergreen-ui';
import { containerStyles } from '../Styles';

export default function Error({ error }) {
  return (
    <Pane style={containerStyles}>
      <span>Oops, something went wrong.</span>
      <div>{error?.message}</div>
      <button type="button" onClick={() => window.location.reload()}>Try to reload page</button>
    </Pane>
  );
}
