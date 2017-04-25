import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/posts/actions_posts';

class PostsShow extends Component {

    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }

    render () {
        console.log(this.props.post);
        return (
            <div>
                Show post {this.props.post ? this.props.post.content : "" }
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            post: state.posts.get('post')
        }
    },
    {
        fetchPost: actions.fetchPost
    }
)(PostsShow);