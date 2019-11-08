<template>
    <a-row>
        <a-col>
            <h2>{{$route.name}}</h2>
        </a-col>
        <a-col>
            <a-list>
                <a-list-item>
                    <a-list-item-meta title="账户密码" description="账户消息将以站内信的形式通知"/>
                    <a-switch :checkedChildren="checkedChildren" :unCheckedChildren="unCheckedChildren"/>
                </a-list-item>
                <a-list-item>
                    <a-list-item-meta title="系统消息" description="系统消息将以站内信的形式通知，请留意通知栏信息"/>
                    <a-switch :checkedChildren="checkedChildren" :unCheckedChildren="unCheckedChildren"/>
                </a-list-item>
                <a-list-item>
                    <a-list-item-meta title="待办任务" description="待办任务将以站内信的形式通知，请留意通知栏信息"/>
                    <a-switch :checkedChildren="checkedChildren" :unCheckedChildren="unCheckedChildren"/>
                </a-list-item>
                <a-list-item>
                    <a-list-item-meta title="微信推送" description="所有新消息通知将通过微信推送方式通知"/>
                    <a-switch :checkedChildren="checkedChildren" :unCheckedChildren="unCheckedChildren"/>
                </a-list-item>
            </a-list>
        </a-col>
    </a-row>
</template>

<script>
    let checkedChildren = '开',
        unCheckedChildren = '关';

    export default {
        name: "Notification",
        data() {
            return {
                checkedChildren,
                unCheckedChildren
            }
        }
    }
</script>
