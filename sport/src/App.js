import React, { Component } from 'react';
import './App.css';
// 01 导入路由需要的组件
import { BrowserRouter as Router, Route, Link,NavLink,Switch} from "react-router-dom";
// 05 导入路由所需要的组件
import Home from './views/Home'
import Produce from './views/Produce'
import Detail from './views/Detail'
class App extends Component {
  render() {
    return (
      <div className="App">
{/* 02 配置总路由 Router */}
        <Router>
          <div>

          
            <div className="content has-tabs">
            <Switch>
              <Route path="/" exact component={Home}></Route>             
              <Route component={NoMatch}></Route>
            </Switch>
            </div> 
            <div className="tabs row"> 
              <NavLink to="/home" className="col">首页</NavLink>
              <NavLink to="/home" className="col">培训</NavLink>
              <NavLink to="/home" className="col">赛事</NavLink>
              <NavLink to="/home" className="col">我的</NavLink>
            </div>   
          </div>      
        </Router>
      </div>
    );
  }
}

export default App;
// 组件的快捷书写方式
function About(){
  return <h1>我是About页面</h1>
}
function NoMatch({location,history}){
  return ( <div>
    <h1>你的页面被外星人偷走了，找不到404</h1>
    <p>{location.pathname}</p>
    <button onClick={()=>{history.push("/")}}>回首页</button>
  </div> )
}
