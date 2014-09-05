// var program = require("commander");
var open = require("open");
var colors = require("colors");
var urls = require("./config.json");
var version = require("./package.json").version;

var args = process.argv;
var url;

if (args.length > 2) { //node necpu.js xxx
    url = args[2];
    do{
        url = urls[url];
    }
    while (urls[url]);
    //uel = "l"
    //urls[l] = "library"
    //urls["library"] = "http://xxxx"
    //urls["http://"] = undefined

    if (url) {
        console.log("正在打开 : %s", url.green);
        open(url);
    }
    else{
        console.log("未配置网址,可自行在config.json中配置...".red);
    }
}
else {
    //ncepu
    console.log("\
    使用说明 : ncepu <url>\n\
    \n\
    url可选值为:\n\
        home              ->   保定校区主页\n\
        ====================================\n\
        vod/v             ->   VOD\n\
        down/d            ->   DOWM铺\n\
        bbs/b             ->   缘路有你论坛\n\
        mybits/m          ->   MyBits\n\
        ====================================\n\
        jiaowuchu/jiao/j  ->   教务处\n\
        library/lib/l     ->   图书馆\n\
        tushuguan/tu/t    ->   还是图书馆\n\
        chachengji/cha/c  ->   教务处查成绩那个东西\n\
        tieba/tie/ba      ->   百度贴吧 - 华北电力大学保定吧\n\
        ====================================\n\
        fankui            ->   反馈地址\n\
    ");
    console.log("\
    BY Magicdawn".cyan + " v" + version.yellow
    );
}