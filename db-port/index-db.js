(function (document, window, $) {
    window.exports = {};
    window.vm = new Vue({
        el: '#index-db',
        data() {
            return {
                tabNavLists: [
                    {
                        id:1,
                        imgUrl:'../static/images/icon_mrtj_selected@2x.png',
                        title: '每日推荐'
                    },
                    {
                        id:2,
                        imgUrl:'../static/images/icon_tongzgg_default@2x.png',
                        title: '通知公告'
                    },
                    {
                        id:3,
                        imgUrl:'../static/images/icon_mrtj_selected@2x.png',
                        title: '活动中心'
                    }
                ],
                tabNavChoice: 1,
                role:true,
                headerHide:false,
                searchType:1
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
