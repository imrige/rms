<template>
    <PageView>
        <a-row :gutter="gutter">
            <a-col :span="8">
                <a-affix :offsetTop="88">
                    <a-card :bordered="false">
                        <div class="text-center">
                            <a-avatar :src="user.avatar" :size="96" class="mb-3"/>
                            <h2>{{user.nickname}}</h2>
                        </div>

                        <a-list>
                            <a-list-item>
                                <a-list-item-meta title="上次登录"/>
                                <span>{{user.time}}</span>
                            </a-list-item>
                            <a-list-item>
                                <a-list-item-meta title="身份角色"/>
                                <span>{{user.role}}</span>
                            </a-list-item>
                        </a-list>
                    </a-card>
                </a-affix>
            </a-col>
            <a-col :span="16">
                <a-card :bordered="false" :tabList="tabList" :activeTabKey="activeTabKey" @tabChange="bindClickTab">
                    <keep-alive>
                        <router-view v-if="$route.meta.keepalive"/>
                    </keep-alive>
                    <router-view v-if="!$route.meta.keepalive"/>
                </a-card>
            </a-col>
        </a-row>
    </PageView>
</template>

<script>
    import PageView from "@/layouts/PageView";
    import {mapState} from 'vuex';

    let tabList = [
        {tab: '通知管理', key: '/account/center/notification'},
        {tab: '消息中心', key: '/account/center/message'},
        {tab: '操作日志', key: '/account/center/logs'},
    ];

    export default {
        name: 'Center',
        inject: ['gutter'],
        components: {PageView},
        data() {
            return {
                tabList,
                activeTabKey: ''
            }
        },
        computed: {
            ...mapState({
                user: state => state.account.user
            })
        },
        mounted() {
            this.activeTabKey = this.$route.path;
        },
        methods: {
            bindClickTab(key) {
                this.$router.push(key);
                this.activeTabKey = key;
            }
        },
        watch: {
            '$route'(value) {
                this.activeTabKey = value.path;
            }
        }
    }
</script>
