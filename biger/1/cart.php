<?php
header("Access-Control-Allow-Origin: *");
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
            'Referer: https://m.mi.com/cart',
            'Cookie: xmuuid=XMGUEST-B116CEB0-AC3B-11E8-AE56-E785A0E14EC1; mstuid=1535623301428_6030; __utma=127562001.1643511981.1552224377.1553092364.1553303305.7; __utmz=127562001.1553303305.7.3.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; Hm_lvt_4982d57ea12df95a2b24715fb6440726=1542795237,1542810990,1542865072,1543365936; hd_log_code=317769wapactivitylist_two_type13002024%23t%3Dproduct%26act%3Dother%26page%3Dactivity%26page_id%3D7769%26bid%3D3376295.2%26pid%3D10000111; pageid=df5f1a9f995c0818; log_code=df5f1a9f995c0818-cc2e28801d5bc99d|https%3A%2F%2Fm.mi.com%2Fcart%3Ffrom%3Dproduct%26address_id%3D; mstz=||967806898.253|||; client_id=180100041086; xm_vistor=1535623301428_6030_1543467168230-1543468607260; Hm_lpvt_183aed755f0fd3efc9912dbf655=1554560608'
          
        ));
 
        $result = curl_exec($ch);
        if (curl_errno($ch)) {
            print curl_error($ch);
        }
        curl_close($ch);
        // echo   $result;
    }
    $url2 = "https://m.mi.com/v1/cart/index";

    $post_data = array(
        "client_id" => "180100031051",
        "channel_id" => "0",
        "webp" => "1",
        "access_code" => "",
       
    );

$array = array(array(
    buy_limit=>5,                       
    image_url=>"//i8.mifile.cn/v1/a1/ef617fac-7489-436d-b74e-c43582f09633.jpg",
    num=>1,
    price=>899,
    name=>"小米电视4A 32英寸",
    goods_id=>2172700021,
    server_time=>1554270183
    ),
 
array(
    buy_limit=>1,                       
    image_url=>"//i8.mifile.cn/v1/a1/65be1bac-6d3f-3766-3bac-c11b3aa13b8e.webp",
    num=>1,
    price=>1199,
    name=>"Redmi Note 7 4GB+64GB 梦幻蓝",
    goods_id=>2185200032,
    server_time=>1554561810
),
array(
    buy_limit=>5,                       
    image_url=>"//i8.mifile.cn/a1/pms_1514387870.88251945.jpg",
    num=>1,
    price=>3599,
    name=>"小米笔记本Air 12.5  4G 128G 银色",
    goods_id=>2175200001,
    server_time=>1554562020
));
echo json_encode($array);
   
    // http_post($url2,$timeout = 60,$post_data);
?>