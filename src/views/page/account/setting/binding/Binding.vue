<template>
<a-row>
    <a-col>
        <h2>{{$route.name}}</h2>
    </a-col>
    <a-col>
        <a-list>
            <a-list-item>
                <a-list-item-meta title="绑定微信" description="当前未绑定微信账号">
                    <a-avatar shape="square" :size="48" slot="avatar" icon="wechat"/>
                </a-list-item-meta>
                <a slot="actions">绑定</a>
            </a-list-item>
            <a-list-item>
                <a-list-item-meta title="绑定QQ" description="当前未绑定QQ账号">
                    <a-avatar shape="square" :size="48" slot="avatar" icon="qq"/>
                </a-list-item-meta>
                <a slot="actions">绑定</a>
            </a-list-item>
            <a-list-item>
                <a-list-item-meta title="绑定微博" description="当前未绑定微博账号">
                    <a-avatar shape="square" :size="48" slot="avatar" icon="weibo"/>
                </a-list-item-meta>
                <a slot="actions">绑定</a>
            </a-list-item>
        </a-list>
    </a-col>
</a-row>
</template>

<script>
    export default {
        name: "Binding"
    }
</script>
