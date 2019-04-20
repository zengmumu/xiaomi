<?php
header("Access-Control-Allow-Origin: *");
header('content-type:application/json;charset=utf8');//输出为 json格式
 if(isset($_GET["page"])){//看get方法传过来的参数有没有page
$page=$_GET["page"];
}else{
$page=0;//page 默认
}
if(!isset($_GET["id"])){
	$id="hot";
}else{
	$id=$_GET["id"];
}
$start=$page*10;//开始抓取的joke条目
$end=$page*10+10;//结束抓取的条目



  // $conn=file_get_contents("https://www.yidianzixun.com/home/q/news_list_for_channel?channel_id=$id&cstart=$start&cend=$end&infinite=true&refresh=1&__from__=wap&appid=yidian&_=1517464988241");
  // echo $conn
 //file_get_contents 是php可以完全一个网页里面的内容。
 //


$data = array ('channel_id' => 'u6220','cstart'=>'0','cend'=>'30','infinite'=>'true','refresh'=>'1','__from__'=>'pc','_spt'=>'yz~eaod%257F%3C88%253A%253A9%253A','appid'=>'web_yidian','_'=>1542880787520);
$data = http_build_query($data);
$opts = array (
'http' => array (
'method' => 'GET',
'header'=> "Accept:*/*\r\n".
                    "User-Agent:Mozilla/5.0 (Windows NT 6.1; WOW64; rv:29.0) Gecko/20120101 Firefox/29.0\r\n".
                    "Cookie:JSESSIONID=f410f2e07358ecfd3254bfcde911235b4f33332fc93fb55c8583a22aa4397a3d; wuid=537843166067927; wuid_createAt=2018-11-22 14:54:36; weather_auth=2; Hm_lvt_15fafbae2b9b11d280c79eff3b840e45=1542869677; UM_distinctid=1673a32f4e17bc-0d7c32b0bdc5b4-3f674706-1fa400-1673a32f4e260; CNZZDATA1255169715=1995173796-1542869543-null%7C1542869543; captcha=s%3A63db2b442a9b70eee9eea5ce40bc5ea3.ANsakX02cmBH1yqk4Yk5KGPqTF7Ow2hbFr4B3jGp5aQ; Hm_lpvt_15fafbae2b9b11d280c79eff3b840e45=1542869686; cn_1255169715_dplus=%7B%22distinct_id%22%3A%20%221673a32f4e17bc-0d7c32b0bdc5b4-3f674706-1fa400-1673a32f4e260%22%2C%22sp%22%3A%20%7B%22%24_sessionid%22%3A%200%2C%22%24_sessionTime%22%3A%201542869815%2C%22%24dp%22%3A%200%2C%22%24_sessionPVTime%22%3A%201542869815%7D%7D\r\n".
                    "Referer:http://www.yidianzixun.com/\r\n",

'content' => $data
)
);
$context = stream_context_create($opts);
print_r($data);
print_r($opts);

$html = file_get_contents('http://www.yidianzixun.com/home/q/news_list_for_channel',false, $context);
// $fp = fopen('https://www.yidianzixun.com/home/q/news_list_for_channel', 'r', false, $context);

echo json_encode($html);
// var_dump($fp);
// echo $fp;

?>