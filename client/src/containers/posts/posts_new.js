import React, { Component } from 'react';
import { connectWithReduxForm } from 'redux-form-field';
import { createPost } from '../../actions/posts/actions_posts';
import { Link, browserHistory } from 'react-router';
import { ROOT } from '../../routes';

import { Cor_Input, Cor_Textarea } from '../../components/core';

class PostsNew extends Component {

    render() {

        return (
            <form onSubmit={this.props.handleSubmit(props => this.props.createPost(props, this.submitSuccessHandler.bind(this), this.submitErrorHandler.bind(this)))} >

                <h3>Create A New Post</h3>

                <Cor_Input name="title" type="text" label="Title" />
                <Cor_Input name="categories" type="text" label="Categories" />
                <Cor_Textarea name="content" label="Content" />

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to={ROOT} className="btn btn-danger">Cancel</Link>

            </form>
        );

    }

    submitSuccessHandler(response) {
        if(!response.error && this.props.submitting)
            browserHistory.push(ROOT);
    }

    submitErrorHandler(response) {
        console.error(response);
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

        }
    },
    {
        createPost
    },
    {
        form : 'PostsNewForm',
        fields: ['title', 'categories', 'content'],
        validate
    }
);