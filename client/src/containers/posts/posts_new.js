import React, { Component } from 'react';
import { connectWithReduxForm } from 'redux-form-field';
import { createPost } from '../../actions/posts/actions_posts';
import { Link } from 'react-router';

import { Input, Textarea } from '../../components/core';

class PostsNew extends Component {
    onChg () {
        console.log("aaaa");
    }

    render() {
        const { handleSubmit, pristine, reset, submitting }  = this.props;

        return (
            <form onSubmit={handleSubmit(this.props.createPost)} >

                <h3>Create A New Post</h3>

                <Input name="title" type="text" label="Title" onChange={this.onChg} />
                <Input name="categories" type="text" label="Categories" />
                <Textarea name="content" label="Content" onChange={this.onChg} />

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>

            </form>
        );
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
    null,
    {
        createPost
    },
    {
        form : 'PostsNewForm',
        fields: ['title', 'categories', 'content'],
        validate
    }
);