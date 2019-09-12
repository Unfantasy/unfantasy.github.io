/**
 * Created by zm on 2016/4/25.
 */
$(function () {
    //移动端加载css文件
    if(isMobile()){
        loadjscssfile("css/mo_mobile.css","css");
    }
    //导航
    $(".little_tool_class").on('mouseover',function(){
        $(".little_tool").slideDown();
    }).on('mouseleave',function(){
        $(".little_tool").hide();
    });
    //底部footer 固定
    var clientHeight = document.documentElement.clientHeight;
    var bodyHeight = $("body").height();
    if (bodyHeight <= clientHeight) {
        $("footer").css({"position": "fixed", "bottom": "0", "width": "100%"})
    } else {
        $('footer').css("position", "relative");
    }
    $(document).scroll(function(){
        var scrollTop = document.body.scrollTop;
        if(scrollTop>0){
            $(".fixed-btn").fadeIn();
            return false;
        }
        $(".fixed-btn").fadeOut();
    })
    $(".go-top").click(function(){
        $("body").animate({scrollTop:0});
    });
    //往事
    $(".qw_content .question").click(function () {
        $(this).next().slideToggle();
    });
});
