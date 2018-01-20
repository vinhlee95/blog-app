import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostNew extends Component {

   //display the form on the screen
   renderField(field) {
      const { meta: {touched, error}} = field;
      //destructuring nested properties: touched & error
      const className = `input ${touched && error ? 'red': '' }`;
      //conditional styling for input
      return(
         <div className="field">
            <label>{field.label}</label>
            <input
               type="text"
               {...field.input}
               className = {className}
               //conditional styling
            />
            <div className="error-message">
               {touched? error : ""}
               {/* touched means the user has focused on the input and then focused away from it */}
            </div>
         </div>
      );
   }

   onSubmit(values) {
      this.props.createPost(values, () => {
         this.props.history.push("/");
         //callback function navigates user to Home page
      });
   }
   //value contains an object: {title: '', categories, '', content: ''}

   render() {
      const { handleSubmit } = this.props;
      //handleSubmit is the prop passed to the component from Redux form      
      return(
         <div>
            <h1>New Post</h1>
            {/* form is just responsible for managing data */}
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="form-group">
            {/* when user submits => handleSubmit runs "Redux things" to validate info => if(true) => call the onSubmit function */}
               <Field
                  label="Title" 
                  name="title" //piece of state & connect to the validate function
                  component={this.renderField}
                  //render visuality of the Field component
               />
               <Field
                  label="Categories"
                  name="categories"
                  component={this.renderField}
               />
               <Field
                  label="Content"
                  name="content"
                  component={this.renderField}
               />
               <button type="submit" className="submit button">Submit</button>
               <Link to="/" className="cancel button">Cancel</Link>
            </form>
         </div>
      );
   }
}

// Form validation

const validate = values => {
   const errors = {};
   if(!values.title) {
      errors.title = "Enter a title";
   }
   if(!values.categories) {
      errors.categories = "Enter a categories";
   }
   if(!values.content) {
      errors.content = "Enter some content"
   }

   return errors;
}; 

//create reduxForm to allow the component to connect directly with the form reducer
export default reduxForm({
   validate,
   form: 'PostNewForm'
})(connect(null, { createPost })(PostNew));