define(["jquery","cookie","form"],function ($) {
    //获取之前用户登录的时候服务器返回来的头像信息
    var userInfoStr = $.cookie("userInfo");
    if(userInfoStr){
        //如果获取到了，就把这个头像设置为用户的头像
        var userInfo = JSON.parse(userInfoStr);
        $(".avatar img").attr("src", userInfo.tc_avatar);
    }

    $("form").submit(function () {
        $("form").ajaxSubmit({
            success:function (data) {
                if(data.code ==200){
                    console.log(data);
                    //返回用户名和头像存储到cookie
                    $.cookie("useInfo",JSON.stringify(data.result),{path: "/"})
                    //登录成功，跳转到首页
                    location.href = "/" ;
                }else{
                    //登录失败，提示错误信息
                    alert(data.msg);
                }
            }
        })
        return false;
    })
})
