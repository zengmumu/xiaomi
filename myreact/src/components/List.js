import React,{Component} from 'react'
export default class List extends Component{
    constructor(props) {
        super(props);
        this.state={list:[
            {name:"Vue"},{name:"React"},{name:"Angular"}
        ]}
    }
    
    render(){
        return (
            <div>
                <h1>列表渲染</h1>
                {this.state.list.map((item,index)=>{
                   return <div key={index}>{item.name}</div> 
                })}
                <hr/>
                <br/>
            </div>
        )
    }
}