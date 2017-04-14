import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './containers/posts/posts_index';
import PostsNew from './containers/posts/posts_new';

export const ROOT = "/";
export const POSTS_NEW = "posts/new";

export default (
    <Route path={ROOT} component={App} >
        <IndexRoute component={PostsIndex} />
        <Route path={POSTS_NEW} component={PostsNew} />
    </Route>
);



