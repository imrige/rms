import {mapState} from 'vuex';
import Config from '@/config';

const {light, dark} = Config.variables;

export default {
    computed: {
        ...mapState({
            theme: state => state.setting.theme
        }),
        isCollapsed() {
            return this.theme.collapsed;
        },
        isSideLayout() {
            return this.theme.layout === 'side';
        },
        isTopLayout() {
            return this.theme.layout === 'top';
        },
        classes() {
            let {style, layout, fixHeader, fixSidebar, collapsed} = this.theme;
            return [
                `ant-layout-${style}`,
                {
                    [`ant-layout-fixed-sidebar`]: fixSidebar && layout === 'side',
                    [`ant-layout-sidebar-collapsed`]: collapsed && layout === 'side',
                    [`ant-layout-fixed-header`]: fixHeader,
                }
            ]
        },
        headerClasses() {
            return []
        },
        sidebarStyles() {
            return {
                background: this.theme.style === 'light' ? light : dark
            }
        }
    }
}
