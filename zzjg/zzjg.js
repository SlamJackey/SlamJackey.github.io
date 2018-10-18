(function (document, window, $) {
    window.exports = {};
    window.vm = new Vue({
        el: '#zzjg',
        data() {
            return {
                headerHide: false,
                groupLists: [
                    {
                        group_name: '杭州市人大常委',
                        total: 5,
                        status: true,
                        child: [
                            {
                                group_name: '常委会领导',
                                total: 2,
                                status: true,
                                child: [
                                    {
                                        id: 1000,
                                        name: '林光',
                                        gender: 1,
                                        bor: '1980-04-10',
                                        mobile: 18811111111,
                                        email: '18811111111@163.com',
                                        group: '杭州市人大常委会-常委会领导',
                                        pic: '',
                                        status: true,
                                    },
                                    {
                                        id: 1001,
                                        name: '郑丽',
                                        gender: 0,
                                        bor: '1980-04-10',
                                        mobile: 18812346789,
                                        email: '18812346789@163.com',
                                        group: '杭州市人大常委会-常委会领导',
                                        pic: '',
                                        status: true,
                                    },

                                ]
                            },
                            {
                                group_name: '常委会领导',
                                total: 2,
                                status: false,
                                child: [
                                    {
                                        id: 1002,
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                        status: false
                                    },
                                    {
                                        id: 1003,
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                        status: false
                                    },

                                ]
                            },
                            {
                                group_name: '常委会领导',
                                total: 2,
                                status: false,
                                child: [
                                    {
                                        id: 1004,
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                        status: false
                                    },
                                    {
                                        id: 1005,
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                        status: false
                                    },

                                ]
                            },
                            {
                                group_name: '常委会领导',
                                total: 2,
                                status: false,
                                child: [
                                    {
                                        id: 1006,
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                        status: false
                                    },
                                    {
                                        id: 10007,
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                        status: false
                                    },

                                ]
                            },
                            {
                                group_name: '常委会领导',
                                total: 2,
                                status: false,
                                child: [
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                        status: false
                                    },
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                        status: false
                                    },

                                ]
                            },

                        ]
                    },
                    {
                        group_name: '上城区人大常委',
                        total: 5,
                        status: false,
                        child: [
                            {
                                group_name: '常委会领导',
                                total: 2,
                                status: false,
                                child: [
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },

                                ]
                            },
                            {
                                group_name: '常委会领导',
                                total: 2,
                                status: false,
                                child: [
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },

                                ]
                            },
                            {
                                group_name: '常委会领导',
                                total: 2,
                                status: false,
                                child: [
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },

                                ]
                            },
                            {
                                group_name: '常委会领导',
                                total: 2,
                                status: false,
                                child: [
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },

                                ]
                            },
                            {
                                group_name: '常委会领导',
                                total: 2,
                                status: false,
                                child: [
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },

                                ]
                            },

                        ]
                    },
                    {
                        group_name: '杭州市人大常委',
                        total: 5,
                        status: false,
                        child: [
                            {
                                group_name: '常委会领导',
                                total: 2,
                                status: false,
                                child: [
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },

                                ]
                            },
                            {
                                group_name: '常委会领导',
                                total: 2,
                                status: false,
                                child: [
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },

                                ]
                            },
                            {
                                group_name: '常委会领导',
                                total: 2,
                                status: false,
                                child: [
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },

                                ]
                            },
                            {
                                group_name: '常委会领导',
                                total: 2,
                                status: false,
                                child: [
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },

                                ]
                            },
                            {
                                group_name: '常委会领导',
                                total: 2,
                                status: false,
                                child: [
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },

                                ]
                            },

                        ]
                    },
                    {
                        group_name: '杭州市人大常委',
                        total: 5,
                        status: false,
                        child: [
                            {
                                group_name: '常委会领导',
                                total: 2,
                                status: false,
                                child: [
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },

                                ]
                            },
                            {
                                group_name: '常委会领导',
                                total: 2,
                                status: false,
                                child: [
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },

                                ]
                            },
                            {
                                group_name: '常委会领导',
                                total: 2,
                                status: false,
                                child: [
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },

                                ]
                            },
                            {
                                group_name: '常委会领导',
                                total: 2,
                                status: false,
                                child: [
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },

                                ]
                            },
                            {
                                group_name: '常委会领导',
                                total: 2,
                                status: false,
                                child: [
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },

                                ]
                            },

                        ]
                    },
                    {
                        group_name: '杭州市人大常委',
                        total: 5,
                        status: false,
                        child: [
                            {
                                group_name: '常委会领导',
                                total: 2,
                                status: false,
                                child: [
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },

                                ]
                            },
                            {
                                group_name: '常委会领导',
                                total: 2,
                                status: false,
                                child: [
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },

                                ]
                            },
                            {
                                group_name: '常委会领导',
                                total: 2,
                                status: false,
                                child: [
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },

                                ]
                            },
                            {
                                group_name: '常委会领导',
                                total: 2,
                                status: false,
                                child: [
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },

                                ]
                            },
                            {
                                group_name: '常委会领导',
                                total: 2,
                                status: false,
                                child: [
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },

                                ]
                            },

                        ]
                    },
                    {
                        group_name: '杭州市人大常委',
                        total: 5,
                        status: false,
                        child: [
                            {
                                group_name: '常委会领导',
                                total: 2,
                                status: false,
                                child: [
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },

                                ]
                            },
                            {
                                group_name: '常委会领导',
                                total: 2,
                                status: false,
                                child: [
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },

                                ]
                            },
                            {
                                group_name: '常委会领导',
                                total: 2,
                                status: false,
                                child: [
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },

                                ]
                            },
                            {
                                group_name: '常委会领导',
                                total: 2,
                                status: false,
                                child: [
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },

                                ]
                            },
                            {
                                group_name: '常委会领导',
                                total: 2,
                                status: false,
                                child: [
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },
                                    {
                                        name: '林光',
                                        gender: 1,
                                        pic: '',
                                    },

                                ]
                            },

                        ]
                    },

                ],
                infoChoice: 1001,
                chatLists: [
                    {
                        type: 1,
                        name: '郑丽',
                        gender: 0,
                        detail: '周三的会议你这边准备一下'
                    },

                ],
                myChat:'',
                info: {
                    id: 1001,
                    name: '郑丽',
                    gender: 0,
                    bor: '1980-04-10',
                    mobile: 18812346789,
                    email: '18812346789@163.com',
                    group: '杭州市人大常委会-常委会领导',
                    pic: '',
                    status: true,
                },
            }
        },
        methods: {
            tab(val) {
                this.tabNavChoice = val
            },
            tabNavHref(val) {
                console.log(val)
            },
            applice() {
                this.headerHide = !this.headerHide
            },
            toggle(val) {
                val.status = !val.status
            },
            infomation(val) {
                this.infoChoice = val.id;
                this.info = val;
                    this.chatLists=[]
            },
            send() {
                var tmp = {
                    name:'我',
                    type: 0,
                    gender: 1,
                    detail: ''
                };
                tmp.detail=this.myChat;
                this.chatLists.push(tmp);
                this.myChat=''
            }
        }
    });
})(document, window, jQuery);

$(function () {

});
