// var program = require("commander");
var open = require("open");
var colors = require("colors");

//链接
var urls = {
    home: "http://ncepubd.tk/",

    vod: "http://v.ncepubd.tk/",
    down: "http://d.ncepubd.tk/",
    bbs: "http://www.ncepubbs.cn/",
    mybits: "http://m.ncepubd.tk/",

    jiaowuchu: "http://j.ncepubd.tk/",
    library: "http://202.206.214.254:8080/opac/",
    chachengji: "http://59.67.225.73/te/"
};

var shorts = {
    v: "vod",
    d: 'down',
    b: "bbs",
    m: "mybits",

    j: "jiaowuchu",
    l: "library",
    c: "chachengji",

    jiao: "j",
    lib: "l",
    cha: "c"
};

var args = process.argv;
var url;

if (args.length > 2) {
    url = args[2];
    while (shorts[url]) {
        url = shorts[url];
    }
    var url_to_open = urls[url];
    console.log("正在打开 : %s", url_to_open.green);
    open(url_to_open);
}
else {
    //ncepu
    console.log("使用说明 : ncepu <url>");
    console.log("   url可选值为:")
    console.log();
    console.log("   home : 保定校区主页");
    console.log("   vod/v down/d bbs/b mybits/m : VOD/DOWM铺/缘路有你/MyBits");
    console.log("   jiaowuchu/jiao/j : 教务处");
    console.log("   library/lib/l : 图书馆");
    console.log("   chachengji/cha/c : 教务处查成绩那个东西");
    console.log();
    console.log("   BY Magicdawn".cyan)
}