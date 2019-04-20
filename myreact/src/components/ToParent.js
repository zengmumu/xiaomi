import React,{Component} from 'react'
export default class ToParent extends Component{
 
    
    render(){
        return (
            <div>
                <h1>子组件执行父亲组件的方法</h1>
                <button onClick={()=>{
                    this.props.fun('恭喜发财');
                }}>执行</button>
                <br/>
            </div>
        )
    }
}