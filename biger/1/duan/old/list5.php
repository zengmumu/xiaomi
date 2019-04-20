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
            'Cookie: JSESSIONID=f410f2e07358ecfd3254bfcde911235b4f33332fc93fb55c8583a22aa4397a3d; wuid=537843166067927; wuid_createAt=2018-11-22 14:54:36; weather_auth=2; Hm_lvt_15fafbae2b9b11d280c79eff3b840e45=1542869677; UM_distinctid=1673a32f4e17bc-0d7c32b0bdc5b4-3f674706-1fa400-1673a32f4e260; CNZZDATA1255169715=1995173796-1542869543-null%7C1542869543; captcha=s%3A63db2b442a9b70eee9eea5ce40bc5ea3.ANsakX02cmBH1yqk4Yk5KGPqTF7Ow2hbFr4B3jGp5aQ; Hm_lpvt_15fafbae2b9b11d280c79eff3b840e45=1542869686; cn_1255169715_dplus=%7B%22distinct_id%22%3A%20%221673a32f4e17bc-0d7c32b0bdc5b4-3f674706-1fa400-1673a32f4e260%22%2C%22sp%22%3A%20%7B%22%24_sessionid%22%3A%200%2C%22%24_sessionTime%22%3A%201542869815%2C%22%24dp%22%3A%200%2C%22%24_sessionPVTime%22%3A%201542869815%7D%7D'
        ));
 
        $result = curl_exec($ch);
        if (curl_errno($ch)) {
            print curl_error($ch);
        }
        curl_close($ch);
        echo   $result;
    }
    
   if($page==0){
             $url2 = "http://www.yidianzixun.com/home/q/news_list_for_channel?channel_id=11914760062&cstart=0&cend=10&infinite=true&refresh=1&__from__=wap&_spt=yz~eaod%3B%3B3%3B%3E%3D%3C%3A%3A%3C8%3A%3B%3A&appid=web_yidian&_=".time();
    }else if($page==1){
         $url2 ="http://www.yidianzixun.com/home/q/news_list_for_channel?channel_id=11914760062&cstart=19&cend=29&infinite=true&refresh=1&__from__=wap&_spt=yz~eaod%3B%3B3%3B%3E%3D%3C%3A%3A%3C8%3B383&appid=web_yidian&_=".time();
    }else if($page==2){
        $url2 ="http://www.yidianzixun.com/home/q/news_list_for_channel?channel_id=11914760062&cstart=29&cend=39&infinite=true&refresh=1&__from__=wap&_spt=yz~eaod%3B%3B3%3B%3E%3D%3C%3A%3A%3C88393&appid=web_yidian&_=".time();
    }else if($page==3){
        $url2 ="http://www.yidianzixun.com/home/q/news_list_for_channel?channel_id=11914760062&cstart=39&cend=49&infinite=true&refresh=1&__from__=wap&_spt=yz~eaod%3B%3B3%3B%3E%3D%3C%3A%3A%3C893%3E3&appid=web_yidian&_=1542887908392".time();
    }else if($page==4){
        $url2 ="http://www.yidianzixun.com/home/q/news_list_for_channel?channel_id=11914760062&cstart=49&cend=59&infinite=true&refresh=1&__from__=wap&_spt=yz~eaod%3B%3B3%3B%3E%3D%3C%3A%3A%3C8%3E3%3F3&appid=web_yidian&_=".time();
    }
    http_post($url2,$timeout = 60)
?>