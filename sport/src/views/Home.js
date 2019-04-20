import React,{Component} from 'react';
import { NavBar, Icon } from 'antd-mobile';
import axios from 'axios';
// 导入axios 
import { Carousel} from 'antd-mobile';

export default class Home extends Component{
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
      }
    componentDidMount(){
        axios.get("https://dd.51yundong.me/v3/carousel/get_pic?source=WX_USER")
        .then(xhr=>{
            console.log(xhr.data.data);
            this.setState({data:xhr.data.data,imgHeight:'auto'})
        })
    }
    render(){
        return (
            <div className="">
                <NavBar
                mode="dark"
                leftContent="Back"
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    <Icon key="1" type="ellipsis" />,
                ]}
                >NavBar</NavBar>
              
                <Carousel
          autoplay={true}
          infinite
         
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href={val.linkUrl}
              style={{ display: 'inline-block', width: '100%'}}
            >
              <img
                src={val.pictureUrl}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
       
               
   
            </div>
        )
    }
}