import React, { Component } from 'react';
export default class App extends Component{
    
    render(){
        let lis = [<li>你好</li>,<li>react</li>];
        return (<div>你好react

            <ul>
                {lis}
                
            </ul>
            <p onClick={()=>{console.log("best")}}>this is p</p>
            <p><img src={require('./images/pic.jpg')}/></p>
        </div>)
    }
}