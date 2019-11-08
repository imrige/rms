<template>
    <a-layout class="min-vh-100">
        <a-layout-header style="background: transparent;"/>

        <a-layout-content>
            <p class="text-center">
                <img src="../../assets/logo.svg" alt="logo" style="height: 64px; width: 64px;">
            </p>

            <h1 class="text-center">通用后台管理系统</h1>

            <a-form style="max-width: 365px; margin: 0 auto;" :form="form" @submit="bindClickSubmit">
                <a-form-item>
                    <h2 class="text-center">注册</h2>
                </a-form-item>
                <a-form-item>
                    <a-input size="large" placeholder="账号" type="text" v-decorator="['username']"/>
                </a-form-item>
                <a-form-item>
                    <a-button size="large" type="primary" html-type="submit" :loading="loading" style="width: 50%">立即注册</a-button>
                    <a class="float-right" @click="$router.push('/login')">使用已有账户登录</a>
                </a-form-item>
            </a-form>
        </a-layout-content>

        <Footer/>
    </a-layout>
</template>

<script>

    export default {
        name: 'Register',
        data() {
            return {
                loading: false
            }
        },
        mounted() {
        },
        methods: {
            bindClickSubmit(e) {
                e.preventDefault();

                this.form.validateFieldsAndScroll((err, values) => {
                    if (!err) {
                        console.log(values);
                    }
                });
            },
        },
    };
</script>
