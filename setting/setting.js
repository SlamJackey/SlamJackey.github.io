(function (document, window, $) {
    window.exports = {};
    window.vm = new Vue({
        el: '#setting',
        data() {
            return {
                tabNavLists: [
                    {
                        id:1,
                        imgUrl:'./static/images/icon_mrtj_selected@2x.png',
                        title: '每日推荐'
                    },
                    {
                        id:2,
                        imgUrl:'',
                        title: '通知公告'
                    },
                    {
                        id:3,
                        imgUrl:'',
                        title: '活动中心'
                    }
                ],
                tabNavChoice: 1,
                role:true,
                headerHide:false
            }
        },
        methods: {
            tab(val){
                this.tabNavChoice=val
            },
            tabNavHref(val){
                console.log(val)
            },
            applice(){
                this.headerHide=!this.headerHide
            }
        }
    });
})(document, window, jQuery);

$(function () {

});
