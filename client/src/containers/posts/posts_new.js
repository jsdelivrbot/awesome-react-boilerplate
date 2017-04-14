import React, { Component } from 'react';
import { connectWithReduxForm } from 'redux-form-field';
import { initialState, createPost } from '../../actions/posts/actions_posts';
import { Link, browserHistory } from 'react-router';
import { ROOT } from '../../routes';

import { Cor_Input, Cor_Textarea } from '../../components/core';

class PostsNew extends Component {

    componentDidMount() {
        this.props.initialState();
    }

    componentWillReceiveProps(nextProps) {
        this._postCreatedHandler();
    }

    render() {
        const { handleSubmit }  = this.props;

        return (
            <form onSubmit={handleSubmit(this.props.createPost)} >

                <h3>Create A New Post</h3>

                <Cor_Input name="title" type="text" label="Title" />
                <Cor_Input name="categories" type="text" label="Categories" />
                <Cor_Textarea name="content" label="Content" />

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to={ROOT} className="btn btn-danger">Cancel</Link>

            </form>
        );
    }

    _postCreatedHandler() {
        if(this.props.createPostSuccess && this.props.submitting)
            browserHistory.push(ROOT);
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
            createPostSuccess: state.posts.createPostSuccess // boolean
        }
    },
    {
        createPost,
        initialState
    },
    {
        form : 'PostsNewForm',
        fields: ['title', 'categories', 'content'],
        validate
    }
);