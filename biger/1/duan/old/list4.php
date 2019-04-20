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
	$id="u6220";
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
            'Cookie: JSESSIONID=9d3f6cd7f7af21eac2b7373d76837d60321d1da88f26809ea9a5040d97ef4f19; wuid=506057872721815; wuid_createAt=2019-03-29 08:03:43; UM_distinctid=16a142e71993f6-0480635380db2f-3c644d0e-1fa400-16a142e719a4a5; weather_auth=2; captcha=s%3A6b0084f1c238c9854189c79c31a98819.YFOfnoSMMDVC%2BDRV0iyrtYwkwiQRRyaMkKsqqIogTSM; Hm_lvt_15fafbae2b9b11d280c79eff3b840e45=1553817824,1555116749,1555337322; Hm_lpvt_15fafbae2b9b11d280c79eff3b840e45=1555337322; CNZZDATA1255169715=476481559-1555115547-%7C1555332134; cn_1255169715_dplus=%7B%22distinct_id%22%3A%20%2216a142e71993f6-0480635380db2f-3c644d0e-1fa400-16a142e719a4a5%22%2C%22%24_sessionid%22%3A%200%2C%22%24_sessionTime%22%3A%201555337328%2C%22%24dp%22%3A%200%2C%22%24_sessionPVTime%22%3A%201555337328%7D'
        ));
 
        $result = curl_exec($ch);
        if (curl_errno($ch)) {
            print curl_error($ch);
        }
        curl_close($ch);
        echo   $result;
    }
    if($page==0){
             $url2 = "http://www.yidianzixun.com/home/q/news_list_for_channel?channel_id=hot&cstart=0&cend=10&infinite=true&refresh=1&__from__=pc&multi=5&_spt=yz~eaodbe~%3A%3B%3A&appid=web_yidian&_=".time();
    }else if($page==1){
         $url2 ="http://www.yidianzixun.com/home/q/news_list_for_channel?channel_id=hot&cstart=10&cend=20&infinite=true&refresh=1&__from__=pc&multi=5&_spt=yz~eaodbe~%3B%3A8%3A&appid=web_yidian&_=".time();
    }else if($page==2){
        $url2 ="http://www.yidianzixun.com/home/q/news_list_for_channel?channel_id=hot&cstart=20&cend=30&infinite=true&refresh=1&__from__=pc&multi=5&_spt=yz~eaodbe~8%3A9%3A&appid=web_yidian&_=".time();
    }else if($page==3){
        $url2 ="http://www.yidianzixun.com/home/q/news_list_for_channel?channel_id=hot&cstart=20&cend=30&infinite=true&refresh=1&__from__=pc&multi=5&_spt=yz~eaodbe~8%3A9%3A&appid=web_yidian&_=".time();
    }else if($page==4){
        $url2 ="http://www.yidianzixun.com/home/q/news_list_for_channel?channel_id=hot&cstart=30&cend=40&infinite=true&refresh=1&__from__=pc&multi=5&_spt=yz~eaodbe~9%3A%3E%3A&appid=web_yidian&_=".time();
    }
   
    http_post($url2,$timeout = 60)
?>