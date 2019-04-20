import React, { Component } from 'react';
import List from './components/List.js'
import Refs from './components/Refs.js'
import Live from './components/Live.js'
import ToParent from './components/ToParent'
import Todolist from './components/Todolist'

class App extends Component {  
  showMsg(s){
    alert("你好我是父亲react"+s);
  }
  render() {  
    return (
      <div className="App">
      <Todolist/>
      <List></List>
      <Refs></Refs>
      <Live></Live>
      <ToParent fun={this.showMsg}></ToParent>
      </div>
     
    );
  }
}

export default App;
