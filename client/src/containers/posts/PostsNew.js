import React, { Component } from 'react';
import { connectWithReduxForm } from 'redux-form-field';
import * as actions from '../../actions/posts/actions_posts';
import { Link, browserHistory } from 'react-router';
import { ROOT } from '../../routes';

import { Cor_Input, Cor_Textarea } from '../../components/core';

class PostsNew extends Component {

    componentDidUpdate() {
        if(this.props.newPostCreated && this.props.submitting) {
            this.props.initializePosts();
            browserHistory.push(ROOT);
        }
    }

    render() {

        return (
            <form onSubmit={this.props.handleSubmit(this.handleSubmit.bind(this))} >

                <h3>Create A New Post</h3>

                <Cor_Input name="title" type="text" label="Title" />
                <Cor_Input name="categories" type="text" label="Categories" />
                <Cor_Textarea name="content" label="Content" />

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to={ROOT} className="btn btn-danger">Cancel</Link>

            </form>
        );

    }

    handleSubmit(props) {
        return new Promise(() => {
            this.props.createPost(props);
        });
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Enter a title';
    }

    if (!values.categories) {
        errors.categories = 'Enter categories';
    }

    if (!values.content) {
        errors.content = 'Enter some content';
    }

    return errors;
}


export default connectWithReduxForm(PostsNew,
    (state) => {
        return {
            newPostCreated: state.posts.get('newPostCreated')
        }
    },
    {
        createPost: actions.createPost,
        initializePosts: actions.initializePosts
    },
    {
        form : 'PostsNewForm',
        fields: ['title', 'categories', 'content'],
        validate
    }
);