import React, { Component } from 'react';/**/
import TOC from './components/TOC'
import Subject from './components/Subject'
import ReadContent from './components/ReadContent'
import Control from './components/Control'
import CreateContent from './components/CreateContent'
import './App.css';

class App extends Component {/**/
  constructor(props){ /**/
    super(props);/**/
    this.max_content_id =3;
    this.state ={
      mode : 'create',
      selected_content_id:2,
      subject:{title:'WEB', sub:'World wide web!'},
      welcome:{title:'welcome', desc:'Hello React nice meet to you'},
      content:[
        {id:1 , title:"HTML", desc:"HTML is for information."},
        {id:2 , title:"CSS", desc:"CSS is for design."},
        {id:3 , title:"Javascript", desc:"Javascript is for interactivie."}
      ]
    }
  }
  render() {/**/
    console.log ('App Render');
    var _title, _desc= null, _article=null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    }else if(this.state.mode === 'read'){
      /*var i=0;
      while(i<this.state.content.length){
        var data = this.state.content[i];
        if(data.id==this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i=i+1;
      }*/
      var data= this.state.content.filter(function(n){
        return n.id === this.state.selected_content_id;
      }.bind(this));
      _title = data[0].title;
      _desc = data[0].desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    }else if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title, _desc){
        // add this.state.content add
        //console.log (_title, _desc)
        this.max_content_id = this.max_content_id+1;
        var _content = this.state.content.concat(
          {id:this.max_content_id, title:_title, desc:_desc}
        );
        this.setState({content:_content});
      }.bind(this)}></CreateContent>;
    }
    
    return (/**/
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode:'welcome'});
          }.bind(this)}
        >
        </Subject>

        <TOC data={this.state.content} 
        onChangePage={function(id){
          this.setState({
            mode:'read',
            selected_content_id :Number(id)
          });          
        }.bind(this)}></TOC>
        <Control 
          onChangeMode={function(_mode){
          this.setState(
            {mode:_mode}
          );
        }.bind(this)}>          
        </Control>
        
        {_article}
      </div>
    );
  }
}

export default App;/**/

