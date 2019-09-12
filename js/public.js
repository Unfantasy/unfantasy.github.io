/**
 * Created by zm on 2016/11/21.
 */
function getVedioData(){
    $.get('data/jingwaiTV70.txt',function(data){
        var vedioSrcList = data.split('\n');
        var vedioSrcs = [];
        for(let i=0;i<vedioSrcList.length;i++){
            if(vedioSrcList[i]=='')
                vedioSrcList.splice(i,1);
            let j = vedioSrcList[i].split(',');
            let k = new Object();
            k[j[0]]=j[1];
            if(j[0]!='')
            vedioSrcs.push(k);
        }
        return vedioSrcs;
        //console.log(vedioSrcs);
    });
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
