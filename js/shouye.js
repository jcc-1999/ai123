$(document).ready(function () {
    //切换轮播介绍
    $(".bb_1>ul li").css("cursor","pointer").click(function () {
        var index=$(".bb_1>ul li").index(this);
        // console.log(index)
        $(this).addClass("current").siblings().removeClass("current");
        $(".bb_3>div:eq("+index+")").show().siblings().hide();
    })
    //文字显示动画
    $(".cc_2").css("cursor","pointer").hover(function () {
        $(this).children(".cc_2_1").animate({
            "height":"130px",
        }, 1000)
    },function () {
        $(this).children(".cc_2_1").animate({
            "height":"40px",
        }, 1000)
    })
    //酒店动画
    $(".dd_1 .thumbnail").css("cursor","pointer").mouseover(function () {
        $(this).css({"box-shadow":"0px 0px  10px 5px #aaa","top": "-10px"})
    }).mouseout(function () {
        $(this).css({"box-shadow":"0px 0px  10px 5px #ffffff","top": "0px"})
    })
    //特价机票
    $(".ee_1 ul li").css("cursor","pointer").hover(function () {
        $(this).css("border","2px solid #FFC467")
    },function () {
        $(this).css("border","2px solid #e9e9e9")
    })
    //旅游攻略
    $(".ff_2 .thumbnail").css("cursor","pointer").mouseover(function () {
        $(this).css({"box-shadow":"0px 0px  10px 5px #aaa","top": "-10px"})
    }).mouseout(function () {
        $(this).css({"box-shadow":"0px 0px  10px 5px #ffffff","top": "0px"})
    })
    //热门城市
    $(".ff_1 dl dd a").hover(function () {
        $(this).css( "background-color","#FFC467")
    },function () {
        $(this).css( "background-color","#ffffff")
    })
    //星星评价
    $(".input-21c").rating({
        min: 0, max: 5, stars: "5", step: 0.5, size: "xs",  readonly:false
    })
    //旅游局滚动效果
    setInterval(function () {
        var $lidom=$(".gg ul li:first")
        $(".gg ul li:last").after($lidom)

    }, 1000);



})