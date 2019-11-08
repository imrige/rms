import Config from '@/config';
import storage from "@/utils/storage";

let defaultTheme = Config.theme,
    theme = storage.get('theme') || defaultTheme,
    title = Config.title;

export default {
    namespaced: true,
    state: {
        theme,
        defaultTheme,
        title
    },
    mutations: {
        setTheme(state, theme) {
            storage.set('theme', theme);
            state.theme = theme;
        }
    },
    actions: {},
}
