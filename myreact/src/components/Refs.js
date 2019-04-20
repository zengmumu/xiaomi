import React,{Component} from 'react'
export default class Refs extends Component{
 
    
    render(){
        return (
            <div>
                <h1>Refs</h1>
                <p>在react 获取元素不要用 document.getxxx</p>
                <p>ref 是获取dom的唯一可靠方法</p>
                <input type="text" ref="inp" /> 
                <button onClick={
                    ()=>{
                        this.refs.inp.focus();
                    }
                }>获取焦点</button> 
                <br/>
            </div>
        )
    }
}