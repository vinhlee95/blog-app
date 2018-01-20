import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostIndex extends Component {
   //data from API is fetched immediately after component is rendered
   componentDidMount() {
      this.props.fetchPost();
   }

   renderPosts() {
      const posts = this.props.posts;
      return Object.keys(posts).map(id => {
         const post = posts[id];
         return <li key={post.id} className="post-item">
            <Link to={`/posts/${post.id}`}>
               {post.title}
            </Link>
         </li>;
      });
   }

   render() {
      return(
         <div>
            <h1>My Blogs</h1>
            <ul>
               {this.renderPosts()}
            </ul>
         </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      posts: state.posts
   };
};

export default connect(mapStateToProps, {fetchPost})(PostIndex);
//{fetchPost: fetchPost}