import React, { Component } from 'react';
//import { connect } from 'react-redux';
import axios from 'axios';
export default class Post extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      post_title: '',
     
    }
  }
  onChangeTitle(e) {
    this.setState({
      post_title: e.target.value
    });
  }
  

  onSubmit(e) {
    
    const obj = {
      title: this.state.post_title,
    };
    axios.post('http://localhost:5000/api/AddNewPost', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      post_title: '',
    })
  }
// handleSubmit = (e) => {
// e.preventDefault();
//  const title = this.getTitle.value;
//  const message = this.getMessage.value;
//  const data = {
//   id: new Date(),
//   title,
//   message,
//   editing: false
//  }
//  this.props.dispatch({
//  type: 'ADD_POST',
//  data
//  })
//  this.getTitle.value = '';
//  this.getMessage.value = '';
// }

componentDidMount(){
  axios.get('http://localhost:5000/api/NewPost')
    .then(response => {
      this.setState({ userarray: response.data });
    })
    .catch(function (error) { 
      console.log(error);
    })
}
render() {
return (

<div className="post-container"><br></br>
<close/>
  <h1 className="post_heading">Create a Post</h1><br></br>
  <form className="form" onSubmit={this.onSubmit}>
   <input required type="text" 
   ref={(input) => this.getTitle = input}
   placeholder="Enter Post Title" 
   value={this.state.post_title}
   onChange={this.onChangeTitle}/><br /><br />
   <button>Post</button><br></br>
  </form>
</div>
);
}
}
