<template>
    <a-layout class="min-vh-100">
        <a-layout-header style="background: transparent"></a-layout-header>
        <a-layout-content>
            <a-row>
                <a-col :span="24">
                    <div class="text-center">
                        <slot/>
                    </div>
                </a-col>
                <a-col :span="24">
                    <div class="text-center">
                        <a-button class="margin-lr" size="large" type="primary" @click="$router.push('/')">返回首页
                        </a-button>
                        <a-button class="margin-lr" size="large" @click="$router.go(-1)">刷新重试</a-button>
                    </div>
                </a-col>
            </a-row>
        </a-layout-content>
        <a-layout-footer>123</a-layout-footer>
    </a-layout>
</template>

<script>
    export default {
        name: "Common"
    }
</script>
