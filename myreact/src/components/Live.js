import React,{Component} from 'react'
export default class Live extends Component{
    constructor(props){
        super(props);
        this.state={num:1}
        console.log("constructor","--初始化")
    }
    componentWillMount(){
        console.log("componentWillMount","将要装载完毕")
    }
    componentDidMount(){
        console.log("componentDidMount","已经装载完毕")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount","将要卸载")
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate")
        return true;
    }
    componentWillUpdate(){
        console.log("componentWillUpdate")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    
    
    render(){
        console.log("render","渲染dom")
        return (
            <div>
                <h1>组件生命周期</h1>
                <input onChange={()=>{}} value={this.state.num} />
                <button onClick={
                    ()=>{ this.setState({num:this.state.num+1})}
                }>按钮</button> 
                <p>getInitialState-constructor:初始化 this.state 的值，只在组件装载之前调用一次。</p> 
                <p>getDefaultProps-</p>
              
                <br/>
            </div>
        )
    }
}