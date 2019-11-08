import storage from "@/utils/storage";

let user = storage.get('user');

export default {
    namespaced: true,
    state: {
        user
    },
    mutations: {
        setUser(state, user) {
            storage.set('user', user);
            state.user = user;
        }
    },
    actions: {}
}
