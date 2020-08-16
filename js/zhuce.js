$(document).ready(function () {
    //切换手机和邮箱的注册方式
    $("#id2").click(function () {
        if (this.checked==true){
            $(".cc").hide();
            $(".c_c").show();
        }
    })
    $("#id1").click(function () {
        if (this.checked==true){
            $(".cc").show();
            $(".c_c").hide();
        }
    })
    //验证码
    $(".span3").click(function () {
        var arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

        var index1 = Math.floor(Math.random() * arr.length);
        var index2 = Math.floor(Math.random() * arr.length);
        var index3 = Math.floor(Math.random() * arr.length);
        var index4 = Math.floor(Math.random() * arr.length);

        var text1= arr[index1];
        var text2= arr[index2];
        var text3= arr[index3];
        var text4= arr[index4];
        var text=text1+text2+text3+text4;
        // console.log(text)

        $(".span2").html(text);
    })
    //手机
    var flag1=false;
    $("#shouji").focus(function () {
        $("#sjspan").css("color","#FFCA0E").html("<span class=\"glyphicon glyphicon-exclamation-sign\"></span>请输入手机号");
    })
    $("#shouji").blur(function () {
        var shouji=$("#shouji").val();
        var reg1= /^1[0-9]{10}/
        if (shouji==""){
            $("#sjspan").css("color","red").html("<span class=\"glyphicon glyphicon-remove-sign\">手机号码不能为空");
            fla1=false;
            return false;
        }else if (reg1.test(shouji)==false){
            $("#sjspan").css("color","red").html("<span class=\"glyphicon glyphicon-remove-sign\">请输入正确的手机号");
            flag1=false;
            return false;
        }else {
            $("#sjspan").css("color","green").html("<span class=\"glyphicon glyphicon-ok-sign\">");
            flag1=true;
            return true;
        }
    })
    //密码
    var flag2=false;
    $("#pwd").focus(function () {
        $("#pwdspan").css("color","#FFCA0E").html("<span class=\"glyphicon glyphicon-exclamation-sign\"></span>以字每开头的6- 18位字符、数字和下划线");
    })
    $("#pwd").blur(function () {
        var mima=$("#pwd").val();
        var reg2=/^[a-zA-Z]\w{5,17}$/
        if (mima==""){
            $("#pwdspan").css("color","red").html("<span class=\"glyphicon glyphicon-remove-sign\">密码不能为空");
            fla2=false;
            return false;
        }else if (reg2.test(mima)==false){
            $("#pwdspan").css("color","red").html("<span class=\"glyphicon glyphicon-remove-sign\">请输入正确的密码");
            flag2=false;
            return false;
        }else {
            $("#pwdspan").css("color","green").html("<span class=\"glyphicon glyphicon-ok-sign\">");
            flag2=true;
            return true;
        }
    })
    //验证码
    var flag3=false;
    $("#yanzheng").focus(function () {
        $("#yzspan").css("color","#FFCA0E").html("<span class=\"glyphicon glyphicon-exclamation-sign\"></span>请输入验证码，不区分大小写");
    })
    $("#yanzheng").blur(function () {
        var yanzhengma=$("#yanzheng").val();
        var yanzhengma2=$(".span2").html().toLowerCase();
        // console.log(yanzhengma2)
        // 1、转换成大写：toUpperCase()
        // 2、转换成小写：toLowerCase()
        if (yanzhengma==""){
            $("#yzspan").css("color","red").html("<span class=\"glyphicon glyphicon-remove-sign\">验证码不能为空");
            fla3=false;
            return false;
        }else if(yanzhengma != yanzhengma2){
            $("#yzspan").css("color","red").html("<span class=\"glyphicon glyphicon-remove-sign\">验证码不一致");
            fla3=false;
            return false;
        }else {
            $("#yzspan").css("color","green").html("<span class=\"glyphicon glyphicon-ok-sign\">");
            flag3=true;
            return true;
        }
    })
    //激活码
    var flag4=false;
    $("#jihuo").focus(function () {
        $("#jhspan").css("color","#FFCA0E").html("<span class=\"glyphicon glyphicon-exclamation-sign\"></span>请输入正确的密码");
    })
    $("#jihuo").blur(function () {
        var jihuoma=$("#jihuo").val();
        if (jihuoma==""){
            $("#jhspan").css("color","red").html("<span class=\"glyphicon glyphicon-remove-sign\">激活码不能为空");
            fla4=false;
            return false;
        }else {
            $("#jhspan").css("color","green").html("<span class=\"glyphicon glyphicon-ok-sign\">");
            flag4=true;
            return true;
        }
    })

    //手机注册
    $("#btn").click(function(){
        $("#shouji").blur();
        $("#pwd").blur();
        $("#yanzheng").blur();
        $("#jihuo").blur();
        return flag1 && flag2 && flag3 && flag4;
    });
    //邮箱
    var flag5=false;
    $("#email").focus(function () {
        $("#emspan").css("color","#FFCA0E").html("<span class=\"glyphicon glyphicon-exclamation-sign\"></span>邮箱格式错误/请以***@***.com/.cn/.net");
    })
    $("#email").blur(function () {
        var youxiang=$("#email").val();
        var reg3 = /^\w+\@[0-9a-zA-Z]+(.(com|cn|net))+$/
        if (youxiang==""){
            $("#emspan").css("color","red").html("<span class=\"glyphicon glyphicon-remove-sign\">邮箱不能为空");
            flag5=false;
            return false;
        }else if (reg3.test(youxiang)==false){
            $("#emspan").css("color","red").html("<span class=\"glyphicon glyphicon-remove-sign\">请输入正确的邮箱格式");
            flag5=false;
            return false;
        }else {
            $("#emspan").css("color","green").html("<span class=\"glyphicon glyphicon-ok-sign\">");
            flag5=true;
            return true;
        }
    })
    //邮箱密码
    var flag6=false;
    $("#pwd2").focus(function () {
        $("#pwdspan").css("color","#FFCA0E").html("<span class=\"glyphicon glyphicon-exclamation-sign\"></span>以字每开头的6- 18位字符、数字和下划线");
    })
    $("#pwd2").blur(function () {
        var mima2=$("#pwd2").val();
        var reg2=/^[a-zA-Z]\w{5,17}$/
        if (mima2==""){
            $("#pwd2span").css("color","red").html("<span class=\"glyphicon glyphicon-remove-sign\">密码不能为空");
            fla6=false;
            return false;
        }else if (reg2.test(mima2)==false){
            $("#pwd2span").css("color","red").html("<span class=\"glyphicon glyphicon-remove-sign\">请输入正确的密码");
            flag6=false;
            return false;
        }else {
            $("#pwd2span").css("color","green").html("<span class=\"glyphicon glyphicon-ok-sign\">");
            flag6=true;
            return true;
        }
    })
    //邮箱注册
    $(".zhuce").click(function(){
        $("#email").blur();
        $("#pwd2").blur();
        return flag5 && flag6;
    });
})
