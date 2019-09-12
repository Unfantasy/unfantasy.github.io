/**
 * Created by zm on 2016/10/17.
 */
//微信公众平台信息
 var weixinInfo = {appid:'wx7a5ce852bb663a64',secret:'0cb4b9d17cc9ce44d4556b8199fd06fc'};
//判断是否是IOS
var u = navigator.userAgent, app = navigator.appVersion;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
//移动端控制
if(isMobile()){
    (function(doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function() {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                docEl.style.fontSize = 20 * (clientWidth / 300) + 'px';
            };

        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);
}

//获取页面显示区域高度
function getDocHeight() {
    var D = document;
    return Math.max(
        Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
        Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
        Math.max(D.body.clientHeight, D.documentElement.clientHeight)
    );
}
//获取页面显示区域宽度
function getDocWidth() {
    var D = document;
    return Math.max(
        Math.max(D.body.scrollWidth, D.documentElement.scrollWidth),
        Math.max(D.body.offsetWidth, D.documentElement.offsetWidth),
        Math.max(D.body.clientWidth, D.documentElement.clientWidth)
    );
}
//判断是否是手机页面
function isMobile() {
    if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)))
        return true;
    else
        return false;

}
// JavaScript 加载文件
function loadjscssfile(filename,filetype){

    if(filetype == "js"){
        var fileref = document.createElement('script');
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src",filename);
    }else if(filetype == "css"){

        var fileref = document.createElement('link');
        fileref.setAttribute("rel","stylesheet");
        fileref.setAttribute("type","text/css");
        fileref.setAttribute("href",filename);
    }
    if(typeof fileref != "undefined"){
        document.getElementsByTagName("head")[0].appendChild(fileref);
    }

}
//网址获取参数
var src = window.location.search; //获取url中"?"符后的字串
var theRequest = new Object();
if (src.indexOf("?") != -1) {
    var str = src.substr(1);
    strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
        theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
    }
}
//提示框
function showTip(msg,callback,time){
    var html = '<div id="success_messagehtml" class="success_messagehtml"></div>';
    if(isNaN(time)){
        time = 1000;
    }
    $('#success_messagehtml').length||$(html).appendTo($("body"));
    $("#success_messagehtml").html(msg).fadeIn();
    setTimeout(function () {
        $("#success_messagehtml").fadeOut();
        if(callback)
        callback();
    }, time);
}
//加载框
//显示加载提示
function showLoading(msg) {
    var dh = getDocHeight();
    var dw = getDocWidth();
    var loading_area =  '<div id="loading_area" class="loading_area"></div>';
    var loading_messagehtml = '<div id="loading_messagehtml" class="loading_messagehtml"></div>';
    $('#loading_area').length||$(loading_area).appendTo($("body"));
    $('#loading_messagehtml').length||$(loading_messagehtml).appendTo($("body"));
    $("#loading_area").height(dh);
    $("#loading_area").width(dw);
    $("#loading_area").show();
    if(msg==undefined){
        msg="";
    }
    $("#loading_messagehtml").html(msg);
    $("#loading_messagehtml").css("left",(dw-$("#loading_messagehtml").width())/2+"px");
    $("#loading_messagehtml").css("top",(dh-$("#loading_messagehtml").height())/2+"px");
    $("#loading_messagehtml").show();
}
//隐藏加载提示
function hideLoading() {
    $("#loading_area").hide();
    $("#loading_messagehtml").hide();
}
//ios 桥接
function setupWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) {
        return callback(WebViewJavascriptBridge);
    }
    if (window.WVJBCallbacks) {
        return window.WVJBCallbacks.push(callback);
    }
    window.WVJBCallbacks = [callback];
    var WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function () {
        document.documentElement.removeChild(WVJBIframe)
    }, 0)
}

//是否为空
function isNull(obj) {
    return obj.value == "";
}

//电话号码验证
function isPhone(obj) {
    var reg = /^1[0-9]{10}$/;
    if (!reg.test(obj.value.NoSpace())) {
        return false;
    }
    return true;
}

//验证邮件格式
function isMail(obj) {
    var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
    if (!reg.test(obj.value)) {
        return false;
    }
    return true;
}

//短信验证码格式
function isSmsCode(obj) {
    var reg = /^[0-9]{6}$/;
    return reg.test(obj.value.NoSpace());
}
//验证密码格式
function isPwd(obj) {
    var reg = /^[a-zA-Z0-9]{6,20}$/;
    if (!reg.test(obj.value)) {
        return false;
    }
    return true;
}
//身份证号
function isCardNo(card) {
    // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (reg.test(card) === false) {
        return false;
    }
    return true;
}

//去空格
String.prototype.NoSpace = function () {
    return this.replace(/\s+/g, "");
};
//手机格式空格
String.prototype.AddSpace = function () {
    var str = this;
    return str.substr(0, 3) + " " + str.substr(3, 4) + " " + str.substr(7, 4);
};
//alert
(function() {

    $.extend($.fn, {
        //提示框组件1按钮
        alert: function(options) {

            var defaults = {
                tip: '',
                cancelBtnLbl: '确定',
                maskColor: '#000',
                cancelCallback: null
            };

            var settings = $.extend(defaults, options || {}),
                $this;

            function initialize() {
                var HTML = '<div style="background:#000;opacity:.5;position:fixed;z-index:99999;left:0px;top:0px;width:100%;height:100%;"></div><div style="background-color: #fff;width: 60%;margin: auto;position: fixed;left: 50%;top: 50%;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align: center;border-radius: 5px;z-index:100000;display:table;"><div style="display:table;width:100%;border-bottom:1px solid #aaa;"><span style="display:table-cell;height:50px;line-height:2;vertical-align:middle;text-align:center;font-size:16px;color:#000;padding:10px 20px;">' + settings.tip + '</span></div><div style="display:table;width:100%;"><span style="display:table-cell;height:50px;line-height:50px;vertical-align:middle;color:#0075ff;font-size:16px;" id="alertBtn">' + settings.cancelBtnLbl + '</span></div></div>';
                $this = $(HTML).appendTo($('body'));
                var $btn = $this.children('div:eq(1)');
                $btn.children().eq(0).off('click', cancelBtnClickHandler).on('click', cancelBtnClickHandler);
                $btn.children().eq(1).off('click', confirmBtnClickHandler).on('click', confirmBtnClickHandler);
            }

            //取消按钮事件
            function cancelBtnClickHandler() {
                $this.remove();
                if (settings.cancelCallback && typeof settings.cancelCallback == 'function') {
                    settings.cancelCallback();
                }
            }

            function confirmBtnClickHandler() {
                $this.remove();
                if (settings.confirmCallback && typeof settings.confirmCallback == 'function') {
                    settings.confirmCallback();
                }
            }

            initialize();

        },
        //提示框组件2按钮
        alert2: function(options) {

            var defaults = {
                tip: '',
                cancelBtnLbl: '取消',
                confirmBtnLbl: '确定',
                maskColor: '#000',
                cancelCallback: null,
                confirmCallback: null
            };

            var settings = $.extend(defaults, options || {}),
                $this;

            function initialize() {
                var HTML = '<div style="background:#000;opacity:.5;position:fixed;z-index:99999;left:0px;top:0px;width:100%;height:100%;"></div><div style="background-color: #fff;width: 60%;margin: auto;position: fixed;left: 50%;top: 50%;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align: center;border-radius: 5px;z-index:100000;display:table;"><div style="display:table;width:100%;border-bottom:1px solid #aaa;"><span style="display:table-cell;height:50px;line-height:2;vertical-align:middle;text-align:center;font-size:16px;color:#000;padding:10px 20px;">' + settings.tip + '</span></div><div style="display:table;width:100%;"><span style="display:table-cell;height:50px;line-height:50px;vertical-align:middle;color:#000;font-size:16px;width: 50%;" id="alertBtn">' + settings.cancelBtnLbl + '</span><span style="display:table-cell;height:50px;line-height:50px;vertical-align:middle;border-left:1px solid #EAEAEA;color:#0075ff;font-size:16px;">' + settings.confirmBtnLbl + '</span></div></div>';
                $this = $(HTML).appendTo($('body'));
                var $btn = $this.children('div:eq(1)');
                $btn.children().eq(0).off('click', cancelBtnClickHandler).on('click', cancelBtnClickHandler);
                $btn.children().eq(1).off('click', confirmBtnClickHandler).on('click', confirmBtnClickHandler);
            }

            //取消按钮事件
            function cancelBtnClickHandler() {
                $this.remove();
                if (settings.cancelCallback && typeof settings.cancelCallback == 'function') {
                    settings.cancelCallback();
                }
            }

            function confirmBtnClickHandler() {
                $this.remove();
                if (settings.confirmCallback && typeof settings.confirmCallback == 'function') {
                    settings.confirmCallback();
                }
            }
            initialize();
        }

    });
})(jQuery)

//微信调用API
function getWeixinToken(){
    if(!shareData){alert('please define asharData')}
    var wxConfig = {};
    $.get('http://mihaokj.com/share_short/get_wx_jsapi_signature?url='+encodeURIComponent(location.href),function(e){
        if(e.success){
            wxConfig = e.result;
        }
        wx.config({
            debug: false,
            appId: wxConfig.appId,
            timestamp:wxConfig.timestamp,
            nonceStr: wxConfig.nonceStr,
            signature: wxConfig.signature,
            jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo','onMenuShareQZone']
        });
        onBridgeReady()
    });
    function onBridgeReady(){
        wx.error(function(res){alert('errorres:'+JSON.stringify(res));});
        wx.ready(function(){
            wx.onMenuShareTimeline({
                title: shareData.title, // 分享标题
                desc:shareData.desc, // 分享描述
                link: shareData.link, // 分享链接
                imgUrl: shareData.img // 分享图标
            });
            wx.onMenuShareAppMessage({
                title: shareData.title, // 分享标题
                desc:shareData.desc, // 分享描述
                link: shareData.link, // 分享链接
                imgUrl: shareData.img // 分享图标
            });
            wx.onMenuShareQQ({
                title: shareData.title, // 分享标题
                desc:shareData.desc, // 分享描述
                link: shareData.link, // 分享链接
                imgUrl: shareData.img // 分享图标
            });
            wx.onMenuShareWeibo({
                title: shareData.title, // 分享标题
                desc:shareData.desc, // 分享描述
                link: shareData.link, // 分享链接
                imgUrl: shareData.img // 分享图标
            });
            wx.onMenuShareQZone({
                title: shareData.title, // 分享标题
                desc:shareData.desc, // 分享描述
                link: shareData.link, // 分享链接
                imgUrl: shareData.img // 分享图标
            });
        });
    }
}

//手机长按复制到剪切板
function myCopy(e,id){
    //目前只测试ios可用
    if(isIOS){
        $('*').css({
        '-webkit-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none',
        'user-select': 'none'
        });
        //需要引入clipboard.min.js
        $('.copyBtn'+id).click(function(){
            $(this).hide();
        });
        var clipboard = new Clipboard('.copyBtn'+id, {
            text: function() {
                var text = e.innerText;
                text += '\n（股狗秘闻－中国证券人最常看的行业匿闻）\n http://www.mihaokj.com/stock_dog_news/news_list';
                return text;
            }
        });
        var timeout;
        $('.copyDiv'+id).on('touchstart',function(e){
            e.preventDefault();
            timeout = setTimeout(function(){$('.copyBtn'+id).fadeIn();$(document).click(function(){$('.copyBtn'+id).hide()});},500);
            $(this).removeAttr('onclick');
        });
        $('.copyDiv'+id).on('touchend',function(){
            if($('.copyBtn'+id).css('display')=='none')
                toComment(this);
            clearTimeout(timeout);
        });
    }

}


