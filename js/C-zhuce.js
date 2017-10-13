/**
 * Created by Administrator on 2017/5/4.
 */


$().ready(function() {
    let btn=document.querySelector('button');
    let input=document.querySelectorAll('input');
    let ul=$('ul');
    let cuowu=document.querySelector('.cuowu');
    //输入时登录框变色
    ul.focusin(function() {
        if(input[0].value.length!==0||input[1].value.length!==0||input[1].value.length!==0){
            cuowu.style.display='none';
        }
    });

    btn.addEventListener('touchstart',function(){
        if(input[0].value.length>=0&&input[1].value.length>=6&&input[2].value.length>=3){
            location.href="C-login1.html";
            cuowu.style.display='none';
        }
        if(input[0].value.length==0||input[1].value.length==0||input[1].value.length==0){
           cuowu.style.display='block';
        }


    })


});