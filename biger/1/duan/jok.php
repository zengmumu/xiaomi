<?php
header("Access-Control-Allow-Origin: *");
header('content-type:application/json;charset=utf8');//输出为 json格式
if(isset($_GET["page"])){//看get方法传过来的参数有没有page
$page=$_GET["page"];
$page=$page%4;
}else{
$page=0;//page 默认
}
if(!isset($_GET["id"])){
	$id="11914760062";
}else{
	$id=$_GET["id"];
}
$start=$page*10;//开始抓取的joke条目
$end=$page*10+10;//结束抓取的条目
  function http_post($url,$timeout = 60)
    {
        //curl验证成功
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($ch, CURLOPT_POSTFIELDS,$data_string);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER,true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);//// 跳过证书检查 
        curl_setopt($ch, CURLOPT_TIMEOUT, $timeout);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Referer: http://www.yidianzixun.com/',
            'Cookie: JSESSIONID=9d3f6cd7f7af21eac2b7373d76837d60321d1da88f26809ea9a5040d97ef4f19; wuid=506057872721815; wuid_createAt=2019-03-29 08:03:43; weather_auth=2; captcha=s%3A8486ef35cc7f8e593c55073e590e2f49.kzfstcDVEilKdRLq0k7l%2BpuWYURXGaV2Fm1KBNo86qA; Hm_lvt_15fafbae2b9b11d280c79eff3b840e45=1553817824; fingerprint=DtvLgciW5oAInjOKY8bL1553817866004; Hm_lpvt_15fafbae2b9b11d280c79eff3b840e45=1553817866'
        ));
 
        $result = curl_exec($ch);
        if (curl_errno($ch)) {
            print curl_error($ch);
        }
        curl_close($ch);
        echo   $result;
    }

    
   if($page==0){
             $url2 = "http://mb.yidianzixun.com/home/q/news_list_for_channel?channel_id=12138925930&cstart=0&cend=10&infinite=true&refresh=1&__from__=wap&_spt=yz~eaod%3B8%3B9238%3F39%3A%3A%3B%3A&appid=web_yidian&_=".time();
    }else if($page==1){
         $url2 ="http://mb.yidianzixun.com/home/q/news_list_for_channel?channel_id=12138925930&cstart=10&cend=20&infinite=true&refresh=1&__from__=wap&_spt=yz~eaod%3B8%3B9238%3F39%3A%3B%3A8%3A&appid=web_yidian&_=".time();
    }else if($page==2){
        $url2 ="http://mb.yidianzixun.com/home/q/news_list_for_channel?channel_id=12138925930&cstart=20&cend=30&infinite=true&refresh=1&__from__=wap&_spt=yz~eaod%3B8%3B9238%3F39%3A8%3A9%3A&appid=web_yidian&_=".time();
    }else if($page==3){
        $url2 ="http://mb.yidianzixun.com/home/q/news_list_for_channel?channel_id=12138925930&cstart=30&cend=40&infinite=true&refresh=1&__from__=wap&_spt=yz~eaod%3B8%3B9238%3F39%3A9%3A%3E%3A&appid=web_yidian&_=".time();
    }else if($page==4){
        $url2 ="http://mb.yidianzixun.com/home/q/news_list_for_channel?channel_id=12138925930&cstart=40&cend=50&infinite=true&refresh=1&__from__=wap&_spt=yz~eaod%3B8%3B9238%3F39%3A%3E%3A%3F%3A&appid=web_yidian".time();
    }
    http_post($url2,$timeout = 60)
?>