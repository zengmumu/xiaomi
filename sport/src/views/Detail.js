import React,{Component} from 'react';
import { BrowserRouter as Router, Route, NavLink,Redirect,Switch} from "react-router-dom";
export default class Detail extends Component{
    render(){
        return (
            <div className="">
                <h1>我是详情页面</h1>
                <hr/>
                <Router>
                    <div>
                    <NavLink to="/detail/com">评论</NavLink> |
                    <NavLink to="/detail/arg">参数</NavLink> |
                    {/* 能让 链接选中时候添加active class */}
                    <hr/>
                    <h2>子路由</h2>
                    <Switch>
                        {/* switch 路由只匹配第一个 */}
                    <Route path="/detail/com" component={Com}></Route>
                    <Route path="/detail/arg" component={Arg}></Route>
                    <Redirect from="/detail" to="/detail/com"></Redirect> 
                     {/* 重定向，一个页面定向到另外一个页面  */}
                    </Switch>  
                    </div>
                </Router>
            </div>
        )
    }
}
function Com(){
    return <h1>评论页面</h1>
}
function Arg(){
    return <h1>详情页面</h1>
}