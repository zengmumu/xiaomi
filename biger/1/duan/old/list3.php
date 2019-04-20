<?php
header("Access-Control-Allow-Origin: *");
header('content-type:application/json;charset=utf8');//输出为 json格式
if(isset($_GET["page"])){//看get方法传过来的参数有没有page
$page=$_GET["page"];
}else{
$page=0;//page 默认
}
if(!isset($_GET["id"])){
	$id="11914760030";
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
            'Cookie: wuid=939756946794097; wuid_createAt=2018-09-21 13:41:24; UM_distinctid=165faa5a9672fa-0a108cc850b6b1-36664c08-144000-165faa5a96a89d; JSESSIONID=e9cfd9ee4e4234ed86b5f4ebfe5e9f5957d0aa01dd05eea072de55cf5d83405e; fingerprint=QgM5wVq3c2yDfMLxQ4wg1542865507302; weather_auth=2; Hm_lvt_15fafbae2b9b11d280c79eff3b840e45=1542865497,1542875444; CNZZDATA1255169715=1522335030-1537503103-%7C1542885743; captcha=s%3Ae1cd96ff509b209c2599f1161b4734ab.Bvkhm8%2BungaeSXyqcCb349H2cPC0gNINNbYLWFRqD04; cn_1255169715_dplus=%7B%22distinct_id%22%3A%20%22165faa5a9672fa-0a108cc850b6b1-36664c08-144000-165faa5a96a89d%22%2C%22sp%22%3A%20%7B%22%24_sessionid%22%3A%200%2C%22%24_sessionTime%22%3A%201542887370%2C%22%24dp%22%3A%200%2C%22%24_sessionPVTime%22%3A%201542887370%7D%7D; Hm_lpvt_15fafbae2b9b11d280c79eff3b840e45=1542888292'
        ));
 
        $result = curl_exec($ch);
        if (curl_errno($ch)) {
            print curl_error($ch);
        }
        curl_close($ch);
        echo   $result;
    }
    
    $url2 = "http://www.yidianzixun.com/home/q/news_list_for_channel?channel_id=$id&cstart=0&cend=10&infinite=true&refresh=1&__from__=wap&_spt=yz~eaod%3B%3B3%3B%3E%3D%3C%3A%3A9%3A%3A%3B%3A&appid=web_yidian&_=".time();
    http_post($url2,$timeout = 60)
?>