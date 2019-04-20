import React,{Component} from 'react'
export default class Todolist extends Component{
    constructor(props) {
        super(props);
        this.state = {
            list:[
            {name:"vue",done:false},
            {name:"react",done:false},
            {name:"angular",done:true}
            ],
            currrent:''
       }
    }
    deleteItem(index){
        // 之前的list 删除一个
        var olist = this.state.list.splice(index,1);
        // 重新更新list值
        this.setState({olist:olist});
    }
    addItem(){
        // 取原来的list
        var olist = this.state.list;
        // 添加一个对象在前面
       olist.unshift({name:this.state.current,done:false});
       // 跟新list与current
       this.setState({list:olist,current:''})
    }
    changeVal(e){
        this.setState({current:e.target.value})
    }
    
    render(){
        return (
            <div>
                <h1>美妙清单</h1>
              <div> 
                  <input type="text" 
                    name="mumu"
                    value={this.state.current?this.state.current:''}
                    onChange={this.changeVal.bind(this)}
                    /> 
                    <button onClick={this.addItem.bind(this)}>添加</button></div>
              <div className="list">
                    {
                        this.state.list.map((item,index)=>{
                            return <div key={index}>
                            {/* 更具item.done 值动态的绑定一个 class  */}
                            <span className={item.done?'done':''}>{item.name}</span> 
                            <button onClick={this.deleteItem.bind(this,index)}>x</button>
                            <button
                            onClick={()=>{
                                // 让done 取反
                                item.done=!item.done;
                                // 更新state
                                this.setState({list:this.state.list})
                            }}
                            >{item.done?'取消':'完成'}</button>
                            </div>
                        })
                    }
              </div>
                <br/>
            </div>
        )
    }
}