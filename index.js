// var program = require("commander");
var open = require("open");
var colors = require("colors");
var config = require("./config.json");
var version = require("./package.json").version;

var args = process.argv;
var url;

if (args.length > 2) {
    url = args[2];
    while (config.shorts[url]) {
        url = config.shorts[url];
    }

    if (config.urls[url]) {
        var url_to_open = config.urls[url];
        console.log("正在打开 : %s", url_to_open.green);
        open(url_to_open);
    }
    else{
        console.log("未配置网址,可自行在config.json中配置...".red);
    }
}
else {
    //ncepu
    console.log("使用说明 : ncepu <url>");
    console.log("   url可选值为:")
    console.log();
    console.log("   home                        : 保定校区主页");
    console.log("   vod/v down/d bbs/b mybits/m : VOD/DOWM铺/缘路有你/MyBits");
    console.log("   jiaowuchu/jiao/j            : 教务处");
    console.log("   library/lib/l               : 图书馆");
    console.log("   chachengji/cha/c            : 教务处查成绩那个东西");
    console.log();
    console.log("   BY Magicdawn".cyan + " v" + version.yellow);
}