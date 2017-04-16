import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/posts/actions_posts';
import { Link } from 'react-router';
import { POSTS_NEW } from '../../routes'

class PostsIndex extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }

    renderPosts(post) {
        return (
            <li className="list-group-item" key={post.id}>
                <span className="pull-xs-right">{post.categories}</span>
                <strong>{post.title}</strong>
            </li>
        );
    }

    render () {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to={POSTS_NEW} className="btn btn-primary" >
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.props.posts.map(this.renderPosts)}
                </ul>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            posts: state.posts.get('all')
        }
    },
    {
        fetchPosts
    }
)(PostsIndex);