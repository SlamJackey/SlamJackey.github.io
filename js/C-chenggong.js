/**
 * Created by Administrator on 2017/5/5.
 */
$(function () {

    let body=$('body');
    let i=3;
    let t=setInterval(function(){
        i--;console.log(i);
        if(i<0){
            location.href="C-login1.html";
            clearInterval(t);
            return;
        }
    },500)
})