import React,{Component} from 'react'
export default class Child extends Component{
     
    render(){
        return (
            <div className="child">
                    <h1>我是子组件 我的名字是{this.props.name}</h1>
                    <button onClick={()=>{this.props.fun('我爱我的祖国')}}>调用父亲函数方法</button>                   
                    <hr/>
            </div>
        );
    }
}
Child.defaultProps = {
    name:"保密"
}
// props 默认值