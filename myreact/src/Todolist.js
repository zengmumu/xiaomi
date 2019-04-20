import React, { Component } from 'react'

export default class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state={current:'msg',list:[{name:'vue',done:false},{name:'react',done:false},{name:'angular',done:false}]}
    }
    
  render() {
    return (
      <div>
          {this.state.current}
        <div> <input type="text" value={this.state.current} 
        onChange={(e)=>{this.setState({current:e.target.value}) }}
        onKeyUp={
          (e)=>{
            console.log(e.keyCode)
            if(e.keyCode===13){
             var olist = this.state.list;
             olist.unshift({name:this.state.current,done:false})
             this.setState({list:olist})
             this.setState({current:''})
            }
          }
        }
        /> 
         <button 
        
         onClick={()=>{
           var olist = this.state.list;
           olist.unshift({name:this.state.current,done:false})
           this.setState({list:olist})
         }}>添加</button> 
         </div>
        <ul>
          {
            this.state.list.map((item,index)=>{
              return (
                <li key={index} className={item.done?'done':''}>
                  <span>{item.name}</span>
                  <button onClick={()=>{
                     var olist= this.state.list;
                    let ind = olist.indexOf(item);
                    olist.splice(ind,1);
                    this.setState({list:olist});
                    console.log(ind);
                  }}>X</button>
                  <button
                  onClick={
                    ()=>{
                      item.done=!item.done;
                      var olist= this.state.list;                   
                    this.setState({list:olist});
                    }
                  }
                  >{item.done?'取消':'完成'}</button>
                </li>
              )
            })
          }
        </ul>
        
       

       
      </div>
    )
  }
}
