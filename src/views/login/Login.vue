<template>
    <a-layout style="min-height: 100vh">

        <a-layout-header style="background: transparent; box-shadow: none"/>

        <a-layout-content>
            <img src="../../assets/logo.svg" alt="logo" class="ma-auto mb-3"
                 style="display: block; height: 64px; width: 64px;">

            <h1 class="text-center">{{title}}</h1>

            <a-form :style="formStyles" :form="form" @submit="bindClickSubmit">
                <a-form-item>
                    <a-input size="large" placeholder="账号" type="text"
                             v-decorator="rules.username">
                        <a-icon slot="prefix" type="user" style="color: rgba(0, 0, 0, .25)"/>
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-input size="large" placeholder="密码" type="password"
                             v-decorator="rules.password">
                        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-checkbox v-decorator="rules.remember">记住账号</a-checkbox>
                    <a class="float-right">忘记密码</a>
                </a-form-item>
                <a-form-item>
                    <a-button size="large" type="primary" html-type="submit" block :loading="loading">登录</a-button>
                </a-form-item>
                <a-form-item>
                    <a class="float-right" @click="$router.push('/register')">创建账号</a>
                </a-form-item>
                <template v-if="message">
                    <a-form-item>
                        <a-alert type="error" :message="message" banner/>
                    </a-form-item>
                </template>
            </a-form>
        </a-layout-content>
    </a-layout>
</template>

<script>
    import Config from '@/config';
    import storage from '@/utils/storage'
    import Mixin from './mixin';
    import {mapState, mapMutations} from 'vuex';

    export default {
        name: 'Login',
        mixins: [Mixin],
        data() {
            return {
                loading: false,
                message: ''
            }
        },
        computed: {
            ...mapState({
                title: state => state.setting.title
            })
        },
        mounted() {
            storage.clear();
        },
        methods: {
            ...mapMutations({
                setUser: 'account/setUser'
            }),
            bindClickSubmit(e) {
                e.preventDefault();
                this.form.validateFieldsAndScroll((err, values) => {
                    if (!err) {
                        this.loading = true;
                        this.message = '';
                        setTimeout(() => {
                            let user = Config.users.filter(user => {
                                return user.username === values.username && user.password === values.password;
                            })[0];

                            if (user) {
                                user.time = new Date().toLocaleString();
                                user.role = '管理员';
                                this.setUser(user);
                                this.$router.push("/");
                            } else this.message = '用户名或密码错误！';

                            this.loading = false;
                        }, 300);
                    }
                });
            },
        },
    };
</script>
