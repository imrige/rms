<template>
    <PageView>
        <a-card :bordered="false" :bodyStyle="{padding: '24px 24px 24px 0'}">
            <a-row :gutter="24">
                <a-col :span="6">
                    <a-menu mode="inline" :selectedKeys="selectedKeys" @click="bindClickMenu">
                        <a-menu-item key="/account/setting/basic">基本设置</a-menu-item>
                        <a-menu-item key="/account/setting/security">安全设置</a-menu-item>
                        <a-menu-item key="/account/setting/binding">账号绑定</a-menu-item>
                        <a-menu-item key="/account/setting/notification">新消息通知</a-menu-item>
                    </a-menu>
                </a-col>
                <a-col :span="18">
                    <router-view/>
                </a-col>
            </a-row>
        </a-card>
    </PageView>
</template>

<script>
    import PageView from "@/layouts/PageView";

    export default {
        name: "Setting",
        components: {PageView},
        data() {
            return {
                selectedKeys: []
            }
        },
        mounted() {
            this.selectedKeys = [this.$route.path];
        },
        methods: {
            bindClickMenu(e) {
                const {key} = e;
                this.$router.push(key);
                this.selectedKeys = [key];
            }
        },
        watch: {
            '$route'(value) {
                this.selectedKeys = [value.path];
            }
        }
    }
</script>
