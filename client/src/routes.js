import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './containers/posts/PostsIndex';
import PostsNew from './containers/posts/PostsNew';
import PostsShow from './containers/posts/PostsShow';

export const ROOT = "/";
export const POSTS_NEW = "posts/new";
export const POSTS_SHOW = "posts/";

export default (
    <Route path={ROOT} component={App} >
        <IndexRoute component={PostsIndex} />
        <Route path={POSTS_NEW} component={PostsNew} />
        <Route path={POSTS_SHOW + ":id"} component={PostsShow} />
    </Route>
);



