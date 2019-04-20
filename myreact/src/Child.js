import React,{Component} from 'react'
export default class Child extends Component{
    render(){
        return (
            <div>
                <h1>我是子组件 我的名字:{this.props.name}</h1>
                <hr/>
                <br/>
            </div>
        )
    }
}
Child.defaultProps={name:'保密'}