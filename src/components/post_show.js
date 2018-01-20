import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSinglePost, deletePost } from '../actions';

class PostShow extends Component {
   componentDidMount() {
      const id = this.props.match.params.id; //props from Router
      this.props.fetchSinglePost(id);
   }

   handleClick = () => {
      const id = this.props.match.params.id;
      this.props.deletePost(id, () => {
         this.props.history.push("/");
      })
   }
   
   render() {
      const { post } = this.props;
      if(!post) {
         return <div>Loading...</div>;
      }
      //component is rendered before data is being fetched
      return(
         <div>
            <Link to="/">Home</Link>
            <button onClick={this.handleClick}>X</button>
            <h2>{post.title}</h2>
            <h3>Categories: {post.categories}</h3>
            <p>{post.content}</p>
         </div>
      );
   }
}

const mapStateToProps = ({ posts }, ownProps) => {
   return {
      post: posts[ownProps.match.params.id]
   };
};
//ownProps is the property that is headed or going to the PostShow component
//this.props === ownProps

export default connect(mapStateToProps, { fetchSinglePost, deletePost })(PostShow);