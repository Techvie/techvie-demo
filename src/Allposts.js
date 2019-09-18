import React, { Component } from 'react';
import axios from 'axios';
export default class Allposts extends Component{
    constructor(props){
        super(props);

        this.state =  {
            postarray: [],
            currentpost: { }
        }
    }

componentDidMount(req, res) {
    axios.get('https://sample-service1.herokuapp.com/api/NewPost')
      .then(response => {
        this.setState({ postarray: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  render() {
      const{postarray}= this.state;
    return (
      <div>
        <h1 className="post_heading">All Posts</h1>
          <div>
          <ol>
                {postarray.map(postarray => (
                    <li key={postarray.title}>
                    {postarray.title}
                    </li>
                ))}
                </ol>
          </div>
          </div>
    );
   }     
}

          