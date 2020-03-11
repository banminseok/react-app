import React, { Component } from 'react';

class Content extends Component{
    render(){
      return(
       <aticle>
         <h2>{this.props.title}</h2>
         {this.props.sub}
       </aticle>
      );
    }
  }
  export default Content ;