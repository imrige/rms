<template>
    <a-row :gutter="gutter">
        <a-col>
            <h2>{{$route.name}}</h2>
        </a-col>
        <a-col :span="span">
            <a-form :form="form">
                <a-form-item label="用户名">
                    <a-input placeholder="请输入" disabled
                             v-decorator="['username', {initialValue: user.username, rules: [{ required: true, message: '用户名不能为空!' }]}]"/>
                </a-form-item>
                <a-form-item label="昵称">
                    <a-input placeholder="请输入"
                             v-decorator="['nickname', {initialValue: user.nickname, rules: [{ required: true, message: '昵称不能为空!' }]}]"/>
                </a-form-item>
                <a-form-item label="个人简介">
                    <a-textarea placeholder="请输入" :rows="4"
                                v-decorator="['description', {initialValue: user.description}]"/>
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" html-type="submit" block :loading="loading">保存</a-button>
                </a-form-item>
            </a-form>
        </a-col>
        <a-col :span="24 - span">
            <a-form>
                <a-form-item label="头像">
                    <a-tooltip title="点击选择" placement="bottom">
                        <a-avatar :src="user.avatar" :size="144" class="cursor-pointer"/>
                    </a-tooltip>
                </a-form-item>
            </a-form>
        </a-col>
    </a-row>
</template>

<script>
    import {mapState} from 'vuex';

    let span = 10;

    export default {
        name: "Basic",
        inject: ['gutter'],
        data() {
            return {
                form: this.$form.createForm(this),
                loading: false,
                span
            }
        },
        computed: {
            ...mapState({
                user: state => state.account.user
            })
        }
    }
</script>
