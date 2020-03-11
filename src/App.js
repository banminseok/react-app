import React, { Component } from 'react';
import TOC from './components/TOC'
import Content from './components/Content'
import Subject from './components/Subject'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      subject:{title:'WEB', sub:'World wide web!'}
    }
  }
  render() {
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <Subject title="WOW React" sub="For UI"></Subject>
        <TOC></TOC>
        <Content title="HTML" sub="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;

