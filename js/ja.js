/**
 * Created by afei on 2017/4/10.
 */
$(function () {

function play() {
    let arr=[];//存放每张牌的数据
    let hsarr=['a','b','c','d'];// 花色 c d h s
    let sign={};//判断生成的键在不在数组内
    while(arr.length<52){
        let shuzi=Math.ceil(Math.random()*13);//生成随机数字
        let hs=hsarr[Math.floor(Math.random()*hsarr.length)];//生成随机花色
        if(!sign[shuzi+'_'+hs]){//如果sign中没有
            arr.push({shuzi,hs});//生成的牌放到arr中
            sign[shuzi+'_'+hs]=true;//牌的信息：true放到sign中
        }
    }
    // console.log(sign);
    //将arr数据画成牌放入页面
    let n=0;//第n张
    for(let i=0;i<7;i++){//行数
        for(let j=0;j<i+1;j++){//每一行牌数
            $('<li class="pai">').attr('id',i+'-'+j).attr('value',arr[n].shuzi).css('background-image',`url(img/${arr[n].shuzi}${arr[n].hs}.jpg)`).appendTo('ul').delay(n*50).animate({left:450-46*i+92*j,top:45*i,opacity:1},500);
            n++;
        }
    }
//剩余牌
    for(n;n<52;n++){
        $('<li class="pai zuo">').attr('id',7+'-'+n).attr('value',arr[n].shuzi).css('background-image',`url(img/${arr[n].shuzi}${arr[n].hs}.jpg)`).appendTo('ul').delay(n*50).animate({left:210,top:475, opacity: 1},500);
    }


    //牌的点击事件
    let current=null;//保存第一次点击的牌的信息
    $('.pai').click(function () {//牌点击事件
        let x=parseInt($(this).attr('id').split('-')[0]);//获取点击牌的i
        let y=parseInt($(this).attr('id').split('-')[1]);//获取点击牌的j
        if(x<6){//如果行数小于6
            if($(`#${x+1}-${y}`).length==1||$(`#${x+1}-${y+1}`).length==1){//如果点击的牌的上面有压得牌
                return;//返回
            }
        }
        $(this).toggleClass('active');//点击的牌移动

        if(!current){//判断第一次点击牌
            if($(this).attr('value')==13){//如果第一次点击的牌的value值为13
                $('.active').animate({left:700,top:0,opacity:0},400,function () {
                    $('.active').remove();//去除
                    current=null;//清空第一次
                })
            }else{
                current=$(this);//保存第一次点击的牌
            }
        }else{//判断第二次点击牌
            if((parseInt(current.attr('value'))+parseInt($(this).attr('value'))===13)){//如果第一次点击的牌的value值加第二次点击的牌的value值等于13
                $('.active').animate({left:700,top:0,opacity:0},400,function () {
                    $('.active').remove();//飞出并清除
                    current=null;
                })
            }else{
                setTimeout(function () {
                    $('.active').removeClass('active');
                    current=null;
                },500)

            }
        }
    });
}
play();
    let index=0;
    $('.left').click(function () {//向左移动事件
        $('.zuo').last().removeClass('zuo').addClass('you').css('z-index',++index).animate({left:650},500)
    });
    $('.right').click(function () {//向右移动事件
        $('.you').removeClass('you').addClass('zuo').css('z-index',++index).each(function (index,val) {
            $(val).delay(50*index).animate({left:210},500)
        })
    })
    $('.restart').click(function () {
        $('li').remove();
       play();
    })
});
