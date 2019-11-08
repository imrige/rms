<template>
    <a-row>
        <a-col>
            <h2>{{$route.name}}</h2>
        </a-col>
        <a-col>
            <a-list>
                <a-list-item>
                    <a-list-item-meta title="账户密码" description="当前密码强度：弱"/>
                    <a slot="actions">修改</a>
                </a-list-item>
                <a-list-item>
                    <a-list-item-meta title="密保邮箱" :description="user.email || '未设置密保邮箱，密保邮箱可有效保护账户安全'"/>
                    <template v-if="user.email">
                        <a slot="actions">修改</a>
                    </template>
                    <template v-else>
                        <a slot="actions">设置</a>
                    </template>
                </a-list-item>
                <a-list-item>
                    <a-list-item-meta title="密保手机" :description="user.phone || '未设置密保手机，密保手机可有效保护账户安全'"/>
                    <template v-if="user.phone">
                        <a slot="actions">修改</a>
                    </template>
                    <template v-else>
                        <a slot="actions">设置</a>
                    </template>
                </a-list-item>
            </a-list>
        </a-col>
    </a-row>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "Security",
        inject: ['gutter'],
        data() {
            return {}
        },
        computed: {
            ...mapState({
                user: state => state.account.user
            })
        }
    }
</script>
