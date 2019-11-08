import Vue from 'vue';
import Router from 'vue-router';

import Config from '@/config';
import iLoadingBar from "@/components/iLoadingBar";
import storage from "@/utils/storage";

Vue.use(Router);

let loginPath = '/login',
    originalPush = Router.prototype.push,
    baseRoutes = [
        {
            path: '/',
            name: '首页',
            redirect: '/dashboard',
            meta: {
                keepalive: false,
            },
            component: () => import('@/App.vue'),
            children: Config.routes
        },
        {
            path: '/login',
            component: () => import('@/views/login/Login.vue')
        }
    ],
    router = new Router({
        mode: 'history',
        base: process.env.BASE_URL,
        dynamic: false,
        routes: []
    });

Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};

router.beforeEach((to, from, next) => {
    iLoadingBar.start();

    if (router.options.initialized) next();
    else {
        router.addRoutes(baseRoutes);
        router.options.initialized = true;
        next(to);
    }

    if (to.path === loginPath) {
        next();
    } else {
        if (storage.get('user')) next();
        else next(loginPath)
    }
});

router.afterEach(() => {
    iLoadingBar.finish();
});

export default router;
