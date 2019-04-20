import React,{Component} from 'react';
export default class Produce extends Component{
   
    render(){
        return (
            <div className="">
                <button onClick={()=>{this.props.history.go(-1)}}>返回</button>
                <button  onClick={()=>{this.props.history.push('/')}}>回首页</button>
                <h1>我是产品页面 {this.props.match.params.id}</h1>
            </div>
        )
    }
}