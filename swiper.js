// 1. .swiper-container 来包括所有的的slide.他的宽高是第一个slide宽高 overflowhidden
            // 0张 current  
            //构建一个swiper 函数对象
            // goSlide 切换幻灯片
            // 需要一个dom元素来获取html的结构
            function Swiper (opt){
                this.dom = opt.dom //html元素
                // console.log(document.querySelector(opt.dom))
                console.log(this.dom,opt.dom)
                this.current = 0;   //播放到第几张
                this.timer=null;   // 定时器
   				this.wrap=null;   //幻灯片包裹器
    			this.slides = document.querySelectorAll(".slide");
                this.len = this.slides.length;//幻灯片的长度
    			this.width=null;  // 幻灯片的宽
   				this.startX=null;   //触摸开始位置
   				this.moveX=null; //触摸移动位置
  				this.offsetX=null; //偏移位置
                this.init();       //初始化幻灯片
              
            }
            //  初始化swiper
            Swiper.prototype.init=function(){
                this.renderDom();
                this.bindDom();
                this.auto();
            }
            // 渲染html结构
            Swiper.prototype.renderDom=function(){
                    console.log("幻灯片开始渲染html结构了")
                    // 创建一个div
                   this.wrap = document.createElement("div");
                   //  获取到d幻灯片
                  
                   // [01]
                   
                   this.width = this.dom.clientWidth;//获取dom元素的宽
                   // 设置class
                   this.wrap.className = "swiper_container";
                   // 设置宽
                   //04
                   this.wrap.style.width = (this.width*this.len)+"px";
                   // 设置 slides 浮动
                   for(let i=0;i<this.len;i++){
                       this.slides[i].style.float="left";
                       //[02]
                       this.slides[i].style.width = this.width+"px";
                       var img = this.slides[i].querySelector("img");
                       // [03]
                       img?img.style.width="100%":'';
                   }
                   // 设置wrap内容 为dom的内容
                   this.wrap.innerHTML = this.dom.innerHTML;
                   // 清空dom
                   this.dom.innerHTML="";
                   //  dom 插入wrap
                   this.dom.appendChild(this.wrap);
                   this.dom.style.overflow="hidden";
                   // 前后各插入一张
                   var first = this.slides[0].cloneNode(true);
                   var last = this.slides[this.len-1].cloneNode(true);
                   this.wrap.insertBefore(last,this.wrap.childNodes[0]);
                   this.wrap.appendChild(first);
                   this.wrap.style.width = (this.len+2)*this.width+"px";
                   this.wrap.style.transform=`translate(${this.width*-1}px,0)`;
					

            }
            //  绑定事件
            Swiper.prototype.bindDom=function(){
	            this.dom.addEventListener("mouseover",()=>{ this.overHd()});
            	this.dom.addEventListener("touchstart",(e)=>{
            		this.overHd();
            		this.startHd(e)
            		})
            	this.dom.addEventListener("mousedown",(e)=>{this.startHd(e);this.overHd();})
            	this.dom.addEventListener("touchmove",(e)=>{this.moveHd(e);})
            	this.dom.addEventListener("touchend",(e)=>{this.endHd();this.auto()})
            	this.dom.addEventListener("mouseup",(e)=>{this.endHd();})
            	this.dom.addEventListener("transitionend",(e)=>{this.tranHd(e)})
            		
            
            }
            //切换幻灯片
            Swiper.prototype.goSlide=function(){
            	if(this.current<=-1){
    			this.current = -1;
    			
    			}
				if(this.current>=this.len){
				this.current = this.len;
				
				}
            	// 如果到了最后一张 还让它平滑过渡，过渡完毕 ，迅速切换第一张不产生动画效果
            		// 可以允许 超过len 3
            		if(this.current>this.len){
            			this.current=0;
            		}
            		if(this.current<-1){
            			this.current=this.len-1;
            		}
            		this.wrap.style.transition="all ease .2s";
            		this.wrap.style.transform=`translate(${(this.current+1)*this.width*-1}px,0)`
                    console.log("幻灯片切换到第"+this.current+"张")
            }
            // 自动播放
            Swiper.prototype.auto =function(){
                  this.timer=setInterval(()=>{
                    this.current++;
                    if(this.current>=4){
                        this.current = 0;
                    }
                    this.goSlide();
                  },3000)
                 
            }
            // 停止播放
            Swiper.prototype.overHd=function(){
              
                clearInterval(this.timer)
            }
           // 开始触摸
           Swiper.prototype.startHd=function(e){
           		//记录触控开始位置
           		// 是不是手机是取手机touchX，不是取 鼠标x
              	this.startX = e.touches?e.touches[0].clientX:e.clientX;
              	this.wrap.onmousemove=(e)=>{this.moveHd(e)};
                console.log(e);
            }
           // 移动触摸
           Swiper.prototype.moveHd=function(e){
           	    e.preventDefault();//取消鼠标默认事件
           		//记录触控开始位置
           		if(e.touches){
           			this.moveX=e.touches[0].clientX
           		}else{
           			this.moveX=e.clientX;
           		}
              	
              	// 计算偏移量
              	this.offsetX = this.moveX-this.startX;
              	// 幻灯片swiper_container 移动这个偏移量
              	// 幻灯片偏移量=第几张*宽*-1+当前移动偏移量
              	if(this.current==-1||this.current==this.len){
              		return;
              	}
              	this.wrap.style.transform=`translate(${(this.current+1)*this.width*-1+this.offsetX}px,0)`;
            }
           // 触摸结束
           Swiper.prototype.endHd = function(){
           		// 如果偏移大于 1/3 currrent +1
           		// 小于-1/3 current -1
           		// goslide()
           		this.wrap.onmousemove = null;
           		console.log(this.offsetX,this.current)
           		if(this.offsetX>this.width/5){
           			this.current--;
           			
           		}
           		if(this.offsetX<this.width/5*-1){
           			this.current++;
           			
           		}
           		this.goSlide();
//         		this.auto()
           	
           }
          Swiper.prototype.tranHd=function(e){
           	this.wrap.style.transition="";
			
			
    		if(this.current==this.len){
    			//最后一张的后面一张 （切换到第0张）
    			
           		this.current=0;
    			this.wrap.style.transform=`translate(${(this.current+1)*this.width*-1}px,0)`;
           		
    		}
    		if(this.current==-1){
    			// 到第一张的前面一张，（切换到 len-1 最后一张）
    			this.current=this.len-1;
    			this.wrap.style.transform=`translate(${(this.current+1)*this.width*-1}px,0)`;
           	
    		}
    		
    		
           }
           export default Swiper;