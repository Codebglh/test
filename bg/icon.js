let pathlist = [
    "system/",
    "more/",
    "messy/",
    "tu/",
    "avatar/"
];
let localhost = "hiker://files/bgHouse/src/";
let url =  "https://gitea.com/bgcode/hikerrule/raw/branch/main/code/src/";
let numberlist =  [
    22,
    10,
    4,
    3,
    2
];
let typelist = [
    ".svg",
    ".png",
    ".svg",
    ".jpg",
    ".jpeg"
];
let namelist = [
    "系统",
    "更多",
    "其他",
    "图片",
    "头像",];
function getImg(filePath) {
    let file = $.require("https://hikerfans.com/weisyr/js/file.js");
    var folder = file.getFolder(filePath);
    var list = [];
    for (var i in folder) {
        var path = folder[i].name;
        list.push(path);
    }
    return list;
}

function F(){
    panduan()
    if (getItem("icon")=="yes"){
        setItem("icon","no")
        download();
    }
    if(getItem("icon") !==""){
    var d = [];
    if (getVar("icon1")==""){
        putVar("icon1", "0");
    }

    for (let i in namelist) {
        d.push({
            title:
                i === getVar("icon1", "0") ? "““””<font color='#00bbf0'>" + namelist[i] + "</font>" : namelist[i],
            url: $().lazyRule((i) => {
                putVar("icon1", i);
                refreshPage(true);
                return "hiker://empty";
            }, i),
            col_type: "scroll_button",
        });
    }
    d.push({
        col_type: "icon_2",
        title: "上传本地图片",
        pic_url:"hiker://files/bgHouse/src/system/19.svg",
        url: "fileSelect://" + $.toString(()=>{
            let file = $.require("https://hikerfans.com/weisyr/js/file.js");
            require(config.依赖);
            let dir = "hiker://files/bgHouse/src/"+pathlist[getVar("icon1")];
            let name = file.getName(input).replace("_fileSelect_", "");
            let path = dir + name;
            if(file.copyFile(input, getPath(path).slice(7), true)){
                refreshPage(true);
                return "toast://添加成功";
            }else{
                refreshPage(true);
                return "toast://添加失败";
            }

        }),
    }, {
        col_type: "icon_2",
        title: "上传网络图片",
        pic_url:"hiker://files/bgHouse/src/system/19.svg",
        url: $("https|hiker|绝对地址","请输入地址").input(function () {
            let name=input.split("/").at(-1);
            let file = $.require("https://hikerfans.com/weisyr/js/file.js");
            require(config.依赖);
            let dir = "hiker://files/bgHouse/src/"+pathlist[getVar("icon1")]+name;
            if(input.match(/http/g)){
                downloadFile(input, dir);
            }else if(input.match(/hiker/g)){
               input= input.replace("hiker://files/","/storage/emulated/0/Android/data/com.example.hikerview/files/Documents/")
                file.copyFile(input, getPath(dir).slice(7), true)
            }else if(input.match(/\/storage/g)){
                file.copyFile(input, getPath(dir).slice(7), true)
            }else {
                "toast://请输入正确地址"
            }

            if(fileExist(dir)){
                refreshPage(true);
                return "toast://添加成功";
            }else{
                refreshPage(true);
                return "toast://添加失败";
            }
        })
        },)

    if (getVar("icon1")==0) {
            var filePath="/storage/emulated/0/Android/data/com.example.hikerview/files/Documents/bgHouse/src/"+pathlist[getVar("icon1")]
            var list = getImg(filePath);
            for (var i in list) {
                let pic = "hiker://files/bgHouse/src/" +pathlist[getVar("icon1")]+ list[i];
                d.push({
                    col_type: "icon_small_4",
                    title: list[i],
                    extra:{longClick: [ {
                            title: " 删除 ",
                            js: $.toString((pic) => {
                                deleteFile(pic)
                                refreshPage(false);
                                toast("图片已删除");
                            },pic),
                        },]},
                    pic_url: pic,
                    url: $("#noLoading#").lazyRule((pic) => {
                        copy(pic);
                        return "hiker://empty";

                    }, pic),
                });
            };
           }else if(getVar("icon1")==1)
            {
            var filePath="/storage/emulated/0/Android/data/com.example.hikerview/files/Documents/bgHouse/src/"+pathlist[getVar("icon1")]
            var list = getImg(filePath);
            for (var i in list) {
                let pic = "hiker://files/bgHouse/src/" +pathlist[getVar("icon1")]+ list[i];
                d.push({
                    col_type: "icon_small_4",
                    title: list[i],
                    extra:{longClick: [ {
                            title: " 删除 ",
                            js: $.toString((pic) => {
                                deleteFile(pic)
                                refreshPage(false);
                                toast("图片已删除");
                            },pic),
                        },]},
                    pic_url: pic,
                    url: $("#noLoading#").lazyRule((pic) => {
                        copy(pic);
                        return "hiker://empty";
                    }, pic),
                });
            };
           }else if(getVar("icon1")==2)
            {
            var filePath="/storage/emulated/0/Android/data/com.example.hikerview/files/Documents/bgHouse/src/"+pathlist[getVar("icon1")]
            var list = getImg(filePath);
            for (var i in list) {
                let pic = "hiker://files/bgHouse/src/" +pathlist[getVar("icon1")]+ list[i];
                d.push({
                    col_type: "icon_small_4",
                    title: list[i],
                    extra:{longClick: [ {
                            title: " 删除 ",
                            js: $.toString((pic) => {
                                deleteFile(pic)
                                refreshPage(false);
                                toast("图片已删除");
                            },pic),
                        },]},
                    pic_url: pic,
                    url: $("#noLoading#").lazyRule((pic) => {
                        copy(pic);
                        return "hiker://empty";
                    }, pic),
                });
            };
            }else if(getVar("icon1")==3)
            {
            var filePath="/storage/emulated/0/Android/data/com.example.hikerview/files/Documents/bgHouse/src/"+pathlist[getVar("icon1")]
            var list = getImg(filePath);
            for (var i in list) {
                let pic = "hiker://files/bgHouse/src/" +pathlist[getVar("icon1")]+ list[i];
                d.push({
                    col_type: "movie_2",
                    title: list[i],
                    extra:{longClick: [ {
                            title: " 删除 ",
                            js: $.toString((pic) => {
                                deleteFile(pic)
                                refreshPage(false);
                                toast("图片已删除");
                            },pic),
                        },]},
                    pic_url: pic,
                    url: $("#noLoading#").lazyRule((pic) => {
                        copy(pic);
                        return "hiker://empty";
                    }, pic),
                });
            };
            }else if(getVar("icon1")==4)
            {
            var filePath="/storage/emulated/0/Android/data/com.example.hikerview/files/Documents/bgHouse/src/"+pathlist[getVar("icon1")]
            var list = getImg(filePath);
            for (var i in list) {
                let pic = "hiker://files/bgHouse/src/" +pathlist[getVar("icon1")]+ list[i];
                d.push({
                    col_type: "icon_round_4",
                    title: list[i],
                    extra:{longClick: [ {
                            title: " 删除 ",
                            js: $.toString((pic) => {
                                deleteFile(pic)
                                refreshPage(false);
                                toast("图片已删除");
                            },pic),
                        },]},
                    pic_url: pic,
                    url: $("#noLoading#").lazyRule((pic) => {
                        copy(pic);
                        return "hiker://empty";
                    }, pic),
                });
            };
            }

    setResult(d);
    }
}

function download() {
    var max = numberlist.reduce(function (a, b) {
        return parseInt(a) + parseInt(b)
    })
    let bbb = 0
    for (let i = 0; i < numberlist.length; i++) {
        for (let j = 1; j < numberlist[i] + 1; j++) {
            let url1 = url + pathlist[i] + j + typelist[i];
            let pic = localhost + pathlist[i] + j + typelist[i];
            bbb += 1;

            try {
                if (!fileExist(pic)) {
                    downloadFile(url1, pic);
                    log("下载到" + parseInt(bbb * (100 / max)) + "%");
                }
            } catch (e) {
                log(e + url1);
            }

        }
    }
}
function panduan() {
    if (getItem("icon", "") == "") {
        var d = [];
        var text = "是否下载自带图标库？\n"+
            "同意即可下载                 不同意也可继续使用小程序\n";
        d.push({
            title: text,
            col_type: 'rich_text',
            url: "hiker://empty",
            extra: {lineSpacing: 10, textSize: 18}
        });
        d.push({
            title: "同意",
            col_type: 'text_2',
            url: $("#noLoading#").lazyRule(() => {
                setItem("icon", "yes")
                refreshPage(false);
                return 'toast://开始下载图标大约1分钟'
            })
        });
        d.push({
            title: "不同意",
            col_type: 'text_2',
            url: $("#noLoading#").lazyRule(() => {
                setItem("icon", "no");
                refreshPage(false);
                return "hiker://empty";
            },),
        })
        setResult(d)

    }
}