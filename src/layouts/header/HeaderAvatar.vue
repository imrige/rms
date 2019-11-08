<template>
    <a-dropdown placement="bottomRight">
        <div>
            <a-avatar :src="user.avatar" size="small"/>
            <span style="margin-left: 8px;">{{user.nickname}}</span>
        </div>
        <a-menu slot="overlay" style="width: 160px">
            <a-menu-item key="0" @click="$router.push(`/account/center`)">
                <a>
                    <a-icon style="margin-right: 4px" type="user"/>
                    个人中心
                </a>
            </a-menu-item>
            <a-menu-item key="1" @click="$router.push(`/account/setting`)">
                <a>
                    <a-icon style="margin-right: 4px" type="setting"/>
                    账户设置
                </a>
            </a-menu-item>
            <a-menu-divider/>
            <a-menu-item key="2" @click="bindClickLogout">
                <a>
                    <a-icon style="margin-right: 4px" type="logout"/>
                    退出登录
                </a>
            </a-menu-item>
        </a-menu>
    </a-dropdown>
</template>

<script>
    import storage from "@/utils/storage";

    export default {
        name: "HeaderAvatar",
        props: {
            user: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {
            bindClickLogout() {
                storage.clear();
                window.location.reload();
            }
        }
    }
</script>
