<?php
header("Access-Control-Allow-Origin: *");
//header('Access-Control-Allow-Credentials:true');
//header('Access-Control-Allow-Methods:GET, POST, OPTIONS, PUT, PATCH, DELETE');
//header('Access-Control-Allow-Header:X-Requested-With,content-type');
header('content-type:application/json;charset=utf8');//输出为 json格式
if(isset($_GET["page_type"])){//看get方法传过来的参数有没有page
$page=$_GET["page_type"];
}else{
$page="home";//page 默认
}
if(!isset($_GET["page_id"])){
	$id="";
}else{
	$id=$_GET["page_id"];
}
$start=$page*10;//开始抓取的joke条目
$end=$page*10+10;//结束抓取的条目
  function http_post($url,$timeout = 60,$post_data)
    {
        //curl验证成功
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($ch, CURLOPT_POSTFIELDS,$post_data);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER,true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);//// 跳过证书检查 
        curl_setopt($ch, CURLOPT_TIMEOUT, $timeout);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Referer: https://m.mi.com/',
            'Cookie: xmuuid=XMGUEST-B116CEB0-AC3B-11E8-AE56-E785A0E14EC1; mstuid=1535623301428_6030; __utma=127562001.163237074.1533101638.1535962835.1537522266.9; __utmz=127562001.1537522266.9.4.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; Hm_lvt_4982d57ea12df95a2b24715fb6440726=1542795237,1542810990,1542865072,1543365936; pageid=81190ccc4d52f577; msttime=https%3A%2F%2Fwww.mi.com%2F; msttime1=https%3A%2F%2Fwww.mi.com%2F; mstz=||967806898.134|||; xm_vistor=1535623301428_6030_1543467168230-1543467172956; Hm_lpvt_4982d57ea12df95a2b24715fb6440726=1543467176'
        ));
 
        $result = curl_exec($ch);
        if (curl_errno($ch)) {
            print curl_error($ch);
        }
        curl_close($ch);
        echo   $result;
    }
    $url2 = "https://m.mi.com/v1/home/page";

    $post_data = array(
        "client_id" => "180100031051",
        "channel_id" => "0",
        "webp" => "1",
        "page_type" => "$page",
        "page_id" => "$id",
    );

   
    http_post($url2,$timeout = 60,$post_data);
?>