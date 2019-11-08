<template>
    <a-spin :spinning="loading">
        <a-tabs :tabBarStyle="{textAlign: 'center'}">
            <a-tab-pane tab="通知" key="1">
                <a-list size="small">
                    <template v-for="i in 5">
                        <a-list-item :key="i">
                            <a-list-item-meta title="标题" description="内容">
                                <a-avatar slot="avatar"
                                          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                            </a-list-item-meta>
                            <a slot="actions">已读</a>
                        </a-list-item>
                    </template>
                </a-list>
            </a-tab-pane>
            <a-tab-pane tab="消息" key="2">
                <a-list size="small">
                    <a-list size="small">
                        <template v-for="i in 3">
                            <a-list-item :key="i">
                                <a-list-item-meta title="标题" description="内容">
                                    <a-avatar slot="avatar"
                                              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                                </a-list-item-meta>
                                <a slot="actions">已读</a>
                            </a-list-item>
                        </template>
                    </a-list>
                </a-list>
            </a-tab-pane>
            <a-tab-pane tab="待办" key="3">
                <a-list size="small">
                    <a-list>
                        <template v-for="i in 1">
                            <a-list-item :key="i">
                                <a-list-item-meta title="标题" description="内容">
                                    <a-avatar slot="avatar"
                                              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                                </a-list-item-meta>
                                <a slot="actions">已读</a>
                            </a-list-item>
                        </template>
                    </a-list>
                </a-list>
            </a-tab-pane>
        </a-tabs>
    </a-spin>
</template>

<script>
    export default {
        name: "HeaderNotification",
        data() {
            return {
                loading: false
            }
        },
        mounted() {
            this.loading = true;
            setTimeout(() => this.loading = false, 1500);
        }
    }
</script>
