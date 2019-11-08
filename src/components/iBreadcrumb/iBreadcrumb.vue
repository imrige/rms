<template>
    <a-breadcrumb>
        <a-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="item.name">
            <template v-if="index  === 0">
                <router-link to="/">{{item.name}}</router-link>
            </template>
            <template v-else>
                <span>{{item.name}}</span>
            </template>
        </a-breadcrumb-item>
    </a-breadcrumb>
</template>

<script>
    export default {
        name: "iBreadcrumb",
        data() {
            return {
                breadcrumbs:[]
            }
        },
        mounted() {
            this.getBreadcrumb();
        },
        methods: {
            getBreadcrumb() {
                this.breadcrumbs = [];
                this.$route.matched.forEach(item => this.breadcrumbs.push(item));
            }
        },
        watch: {
            $route() {
                this.getBreadcrumb();
            }
        }
    }
</script>
