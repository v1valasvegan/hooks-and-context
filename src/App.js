import React from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import Posts from './components/Posts';
import UserProvider from './components/UserProvider';
import PostEditor from './components/PostEditor';
import PostProvider from './components/PostProvider';
import Add from './components/Add';

function App() {
  return (
    <Router>
      <PostProvider>
        <UserProvider>
          <Switch>
            <Redirect exact from="/" to="/posts" />
            <Route exact path="/posts" component={Posts} />
            <Route path="/posts/new" component={Add} />
            <Route path="/posts/:id" component={PostEditor} />
          </Switch>
        </UserProvider>
      </PostProvider>
    </Router>
  );
}

export default App;
