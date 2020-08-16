$(document).ready(function () {
    //切换登录方式
    $("#id2").click(function () {
        if (this.checked==true){
            $("#bb__1").hide();
            $("#bb__2").show();
        }
    })
    $("#id1").click(function () {
        if (this.checked==true){
            $("#bb__1").show();
            $("#bb__2").hide();
        }
    })
    //动画切换
    $("#images1").css("cursor","pointer").click(function () {
        if ($("#images2").is(":hidden")){
            $("#images1").hide();
            $("#images2").show();
            $("#images3").show();
            //移动动画
            $("#images4").show().animate({
                "margin-left":"-235px",
            }, 2000,function () {
                $("#images5").show().animate({
                    "margin-left":"-175px",
                }, 1000)
            })
        }
    })
    $("#images2").css("cursor","pointer").click(function () {
        if ($("#images1").is(":hidden")){
            $("#images1").show();
            $("#images2").hide();
            $("#images3").hide();
            //还原动画
            $("#images4").css("margin-left","0px").hide();
            $("#images5").css("margin-left","0px").hide();
        }
    })
    //登录
    $("#denglu").click(function(){
        var shouji=$("#shouji").val();
        var reg1= /^1[0-9]{10}/
        var mima=$("#pwd").val();
        var reg2=/^[a-zA-Z]\w{5,17}$/
        if (shouji==""){
            //手机验证
            $(".bb_3_2_1").css("display","block").children().css("color","red").html("<span class=\"glyphicon glyphicon-remove-sign\">手机号码不能为空");
            return false;
        }else if (reg1.test(shouji)==false){
            $(".bb_3_2_1").css("display","block").children().css("color","red").html("<span class=\"glyphicon glyphicon-remove-sign\">请输入正确的手机号");
            return false;
        }else if (mima==""){
            //密码验证
            $(".bb_3_2_1").css("display","block").children().css("color","red").html("<span class=\"glyphicon glyphicon-remove-sign\">密码不能为空");
            return false;
        }else if (reg2.test(mima)==false){
            $(".bb_3_2_1").css("display","block").children().css("color","red").html("<span class=\"glyphicon glyphicon-remove-sign\">请输入正确的密码");
            return false;
        }else {
            $(".bb_3_2_1").css("display","none");
            return true;
        }
    });


})

