import React, { Component } from 'react';

class CreateContent extends Component{
  
    render(){
      console.log('CreateContent render');
      return(
          <article>
              <h2>Create</h2>
            <form action="/CreateContent"
                onSubmit={function(e){
                    e.preventDefault();
                    this.props.onSubmit (e.target.title.value, e.target.desc.value);
                }.bind(this)}>
                <p>
                    <input type="text" name="title" placeholder="title"/>
                </p>
                <p>
                    <textarea name="desc"></textarea>
                </p>
                <p>
                    <input type="submit" value="save" />
                </p>            
                
            </form>
          </article>      
      );
    }
  }
  export default CreateContent ;