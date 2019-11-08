export default {
    title: 'Ant Design Vue',
    lang: 'zh',
    theme: {
        style: "dark",
        layout: "side",
        fixHeader: false,
        fixSidebar: false,
        collapsed: false,
        color: "#1890ff",
        colors: [
            {title: '薄暮', key: 'red', value: '#f5222d'},
            {title: '火山', key: 'orange', value: '#fa541c'},
            {title: '日暮', key: 'yellow', value: '#f9ad14'},
            {title: '明青', key: 'cyan', value: '#13c2c2'},
            {title: '翠绿', key: 'green', value: '#52c41b'},
            {title: '湖蓝', key: 'blue', value: '#1890ff'},
            {title: '星空', key: 'geek', value: '#2f54ea'},
            {title: '酱紫', key: 'purple', value: '#712ed1'},
        ]
    },
    routes: [
        {
            path: '/dashboard',
            name: '仪表盘',
            redirect: '/dashboard/workbench',
            meta: {
                keepalive: false,
                showPageHeader: true,
                icon: 'dashboard'
            },
            component: () => import('@/layouts/LayoutView.vue'),
            children: [
                {
                    path: '/dashboard/workbench',
                    name: '工作台',
                    meta: {
                        keepalive: false,
                        showPageHeader: true,
                        icon: 'dashboard'
                    },
                    component: () => import('@/views/page/dashboard/workbench/Workbench.vue')
                },
                {
                    path: '/dashboard/monitor',
                    name: '监控页',
                    meta: {
                        keepalive: false,
                        showPageHeader: false,
                        icon: 'dashboard'
                    },
                    component: () => import('@/views/page/dashboard/monitor/Monitor.vue')
                },
                {
                    path: '/dashboard/analysis',
                    name: '分析页',
                    meta: {
                        keepalive: false,
                        showPageHeader: false,
                        icon: 'dashboard'
                    },
                    component: () => import('@/views/page/dashboard/analysis/Analysis.vue')
                }
            ]
        },
        {
            path: '/form',
            name: '表单页',
            redirect: '/form/basic',
            meta: {
                keepalive: false,
                showPageHeader: true,
                icon: 'form'
            },
            component: () => import('@/layouts/LayoutView.vue'),
            children: [
                {
                    path: '/form/basic',
                    name: '基础表单',
                    meta: {
                        keepalive: false,
                        showPageHeader: true,
                        icon: 'form'
                    },
                    component: () => import('@/views/page/form/basic/Basic.vue')
                },
                {
                    path: '/form/step',
                    name: '分步表单',
                    meta: {
                        keepalive: false,
                        showPageHeader: true,
                        icon: 'form'
                    },
                    component: () => import('@/views/page/form/step/Step.vue')
                },
                {
                    path: '/form/advanced',
                    name: '高级表单',
                    meta: {
                        keepalive: false,
                        showPageHeader: true,
                        icon: 'form'
                    },
                    component: () => import('@/views/page/form/advanced/Advanced.vue')
                }
            ]
        },
        {
            path: '/list',
            name: '列表页',
            redirect: '/list/basic',
            meta: {
                keepalive: false,
                showPageHeader: true,
                icon: 'table'
            },
            component: () => import('@/layouts/LayoutView.vue'),
            children: [
                {
                    path: '/list/basic',
                    name: '标准列表',
                    meta: {
                        keepalive: false,
                        showPageHeader: true,
                        icon: 'table'
                    },
                    component: () => import('@/views/page/list/basic/Basic.vue')
                },
                {
                    path: '/list/table',
                    name: '查询表格',
                    meta: {
                        keepalive: false,
                        showPageHeader: true,
                        icon: 'table'
                    },
                    component: () => import('@/views/page/list/table/Table.vue')
                },
                {
                    path: '/list/card',
                    name: '卡片列表',
                    meta: {
                        keepalive: false,
                        showPageHeader: true,
                        icon: 'table'
                    },
                    component: () => import('@/views/page/list/card/Card.vue')
                }
            ]
        },
        {
            path: '/profile',
            name: '详情页',
            redirect: '/profile/basic',
            meta: {
                keepalive: false,
                showPageHeader: true,
                icon: 'profile'
            },
            component: () => import('@/layouts/LayoutView.vue'),
            children: [
                {
                    path: '/profile/basic',
                    name: '基础详情页',
                    meta: {
                        keepalive: false,
                        showPageHeader: true,
                        icon: 'profile'
                    },
                    component: () => import('@/views/page/profile/basic/Basic.vue')
                },
                {
                    path: '/profile/advanced',
                    name: '高级详情页',
                    meta: {
                        keepalive: false,
                        showPageHeader: true,
                        icon: 'profile'
                    },
                    component: () => import('@/views/page/profile/advanced/Advanced.vue')
                },
            ]
        },
        {
            path: '/account',
            name: '个人页',
            redirect: '/account/center',
            meta: {
                keepalive: false,
                showPageHeader: true,
                icon: 'user'
            },
            component: () => import('@/layouts/LayoutView.vue'),
            children: [
                {
                    path: '/account/center',
                    name: '个人中心',
                    redirect: '/account/center/notification',
                    meta: {
                        keepalive: false,
                        showPageHeader: false,
                        icon: 'user'
                    },
                    component: () => import('@/views/page/account/center/Center.vue'),
                    children: [
                        {
                            path: '/account/center/notification',
                            name: '通知管理',
                            meta: {
                                keepalive: false,
                                showPageHeader: false,
                                icon: 'user'
                            },
                            component: () => import('@/views/page/account/center/notification/Notification.vue'),
                        },
                        {
                            path: '/account/center/message',
                            name: '消息中心',
                            meta: {
                                keepalive: false,
                                showPageHeader: false,
                                icon: 'user'
                            },
                            component: () => import('@/views/page/account/center/message/Message.vue'),
                        },
                        {
                            path: '/account/center/logs',
                            name: '操作日志',
                            meta: {
                                keepalive: false,
                                showPageHeader: false,
                                icon: 'user'
                            },
                            component: () => import('@/views/page/account/center/logs/Logs.vue'),
                        }
                    ]
                },
                {
                    path: '/account/setting',
                    name: '账户设置',
                    redirect: '/account/setting/basic',
                    meta: {
                        keepalive: false,
                        showPageHeader: false,
                        icon: 'user'
                    },
                    component: () => import('@/views/page/account/setting/Setting.vue'),
                    children:[
                        {
                            path: '/account/setting/basic',
                            name: '基本设置',
                            meta: {
                                keepalive: false,
                                showPageHeader: false,
                                icon: 'user'
                            },
                            component: () => import('@/views/page/account/setting/basic/Basic.vue'),
                        },
                        {
                            path: '/account/setting/binding',
                            name: '账号绑定',
                            meta: {
                                keepalive: false,
                                showPageHeader: false,
                                icon: 'user'
                            },
                            component: () => import('@/views/page/account/setting/binding/Binding.vue'),
                        },
                        {
                            path: '/account/setting/notification',
                            name: '新消息通知',
                            meta: {
                                keepalive: false,
                                showPageHeader: false,
                                icon: 'user'
                            },
                            component: () => import('@/views/page/account/setting/notification/Notification.vue'),
                        },
                        {
                            path: '/account/setting/security',
                            name: '安全设置',
                            meta: {
                                keepalive: false,
                                showPageHeader: false,
                                icon: 'user'
                            },
                            component: () => import('@/views/page/account/setting/security/Security.vue'),
                        },
                    ]
                },
            ]
        },
    ],
    variables: {
        light: '#ffffff',
        dark: '#001529'
    },
    users: [
        {
            username: 'user',
            password: '123',
            nickname: '吴彦祖',
            avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'
        },
        {
            username: 'admin',
            password: '123',
            nickname: '彭于晏',
            avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'
        }
    ]
}
