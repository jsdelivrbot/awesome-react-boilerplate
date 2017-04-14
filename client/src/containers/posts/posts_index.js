import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/posts/actions_posts';
import { Link } from 'react-router';
import { POSTS_NEW } from '../../routes'

class PostsIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    render () {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to={POSTS_NEW} className="btn btn-primary" >
                        Add a Post
                    </Link>
                </div>
                List of blog posts
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps, { fetchPosts } )(PostsIndex);