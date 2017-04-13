import React, { Component } from 'react';
import { connectWithReduxForm } from '../../utiles';
import { createPost } from '../../actions/posts/actions_posts';

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

            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Enter a username';
    }

    return errors;
}

/* connectWithReduxForm parameters:
    1 - component
    2 - mapStateToProps
    3 - mapDispatchToProps
    4 - reduxForm config
 */
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