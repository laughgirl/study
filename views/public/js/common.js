

define(["jquery","template","cookie"],function ($,template) {
    //下面这段代码不能再login页面中执行，因为login页面中没有侧边栏，不需要加载头像以及用户名信息
    if(!(location.pathname =="/login" ||location.pathname== "/dashboard/login" || location.pathname == "/index.php/dashboard/login"))
    var useInfo = JSON.parse($.cookie("useInfo"));
    console.log(useInfo);
    var htmlStr=template("useInfotpl",useInfo);
    $("#profile").html(htmlStr);
})