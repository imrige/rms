<template>
    <a-row :gutter="gutter">
        <a-col :span="24">
            <a-form layout="inline" class="margin-bottom-lg">
                <a-form-item label="分类">
                    <iTagGroup :tags="typeTags" @change="bindClickChange"/>
                </a-form-item>
                <a-divider/>
            </a-form>
        </a-col>

        <a-col :span="24">
            <a-list itemLayout="vertical" :dataSource="dataSource">
                <a-list-item slot="renderItem" slot-scope="item">
                    <a-list-item-meta :title="item.title">
                        <template slot="description">
                            <a-tag>{{item.type}}</a-tag>
                        </template>
                    </a-list-item-meta>

                    <p>{{item.content}}</p>
                    <p>{{item.dateTime}}</p>
                </a-list-item>
            </a-list>
        </a-col>
    </a-row>
</template>

<script>

    let typeTags = ['私信', '系统通知', '账户通知', '消息通知'],
        dateTags = ['今天', '近一周', '近一个月', '近一季度', '近一年'],
        otherTags = ['已读', '未读', '已完成', '未完成'],
        dataSource = [
            {
                title: '您有新的外卖订单，请注意查收！',
                type: '消息通知',
                content: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque blanditiis dolor eius exiure laborum modi mollitia omnis recusandae? Adipisci iure laborum magnam minus necessitatibus possimus sint temporibus voluptatibus.',
                dateTime: '2019-08-29 09:56:08'
            },
            {
                title: 'Hi，小哥哥我关注你很久了！',
                type: '私信',
                content: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque blanditiis dolor eius exiure laborum modi mollitia omnis recusandae? Adipisci iure laborum magnam minus necessitatibus possimus sint temporibus voluptatibus.',
                dateTime: '2019-09-08 18:23:45'
            },
            {
                title: '异地登录',
                type: '账户通知',
                content: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque blanditiis dolor eius exiure laborum modi mollitia omnis recusandae? Adipisci iure laborum magnam minus necessitatibus possimus sint temporibus voluptatibus.',
                dateTime: '2018-06-07 12:45:16'
            },
            {
                title: '新应用审核，请尽快处理！',
                type: '系统消息',
                content: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque blanditiis dolor eius exiure laborum modi mollitia omnis recusandae? Adipisci iure laborum magnam minus necessitatibus possimus sint temporibus voluptatibus.',
                dateTime: '2019-07-12 14:39:46'
            },
        ];

    export default {
        name: "Notification",
        inject: ['gutter'],
        data() {
            return {
                typeTags,
                dateTags,
                otherTags,
                dataSource
            }
        },
        methods: {
            bindClickChange() {
            }
        }
    }
</script>
