import Menu from 'ant-design-vue/es/menu';
import Icon from 'ant-design-vue/es/icon';

const {Item, SubMenu} = Menu;

export default {
    name: 'SidebarMenu',
    props: {
        dataSource: {
            type: Array,
            default() {
                return []
            }
        },
        theme: {
            type: String,
            default: 'dark'
        },
        mode: {
            type: String,
            default: 'inline'
        },
        collapsed: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            openKeys: [],
            selectedKeys: [],
            cachedOpenKeys: []
        }
    },
    computed: {
        rootSubMenuKeys(vm) {
            let keys = [];
            vm.dataSource.forEach(item => {
                keys.push(item.path);
            });
            return keys;
        }
    },
    mounted() {
        this.updateMenu();
    },
    methods: {
        renderMenu(h, dataSource) {
            let menus = [];
            dataSource.forEach((item, index) => {
                menus.push(this.renderItem(h, item, '0', index));
            });
            return menus;
        },
        renderItem(h, item, pIndex, index) {
            return item.children ? this.renderSubMenu(h, item, pIndex, index) : this.renderMenuItem(h, item, pIndex, index);
        },
        renderSubMenu(h, item, pIndex, index) {
            let subMenuItem = [
                h('span', {slot: 'title'}, [this.renderIcon(h, item.icon), h('span', [item.name])])
            ];

            let itemArr = [];
            let _pIndex = `${pIndex}_${index}`;
            item.children.forEach((child, _index) => {
                itemArr.push(this.renderItem(h, child, _pIndex, _index))
            });
            return h(SubMenu, {key: item.path ? menu.path : `submenu_${pIndex}_${index}`}, subMenuItem.concat(itemArr));
        },
        renderMenuItem(h, item, pIndex, index) {
            return h(
                Item, {
                    key: item.path ? item.path : `item_${pIndex}_${index}`
                },
                [
                    h(
                        'index-link', {
                            attrs: {
                                to: `${item.path}`
                            }
                        },
                        [
                            this.renderIcon(h, item.icon),
                            h('span', [item.name])
                        ]
                    )
                ]
            )
        },
        renderIcon(h, icon) {
            return !icon ? null : h(
                Icon, {
                    props: {
                        type: icon
                    }
                }
            )
        },
        bindOpenChange(openKeys) {
            const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
            if (this.rootSubMenuKeys.indexOf(latestOpenKey) === -1) this.openKeys = openKeys;
            else this.openKeys = latestOpenKey ? [latestOpenKey] : [];
        },
        updateMenu() {
            let routes = this.$route.matched.concat();
            if (routes.length >= 3 && this.$route.meta.hidden) {
                routes.pop();
                this.selectedKeys = [routes[routes.length - 1].path];
            } else {
                this.selectedKeys = [routes.pop().path];
            }

            let openKeys = [];
            if (this.mode === 'inline') routes.forEach(item => openKeys.push(item.path));

            this.collapsed ? (this.cachedOpenKeys = openKeys) : (this.openKeys = openKeys);
        }
    },
    render(h) {
        return h(
            Menu, {
                props: {
                    theme: this.$props.theme,
                    mode: this.$props.mode,
                    openKeys: this.openKeys,
                    selectedKeys: this.selectedKeys
                },
                on: {
                    openChange: this.bindOpenChange,
                    select: item => {
                        this.selectedKeys = item.selectedKeys;
                        this.$emit('select', item);
                    }
                }
            }, this.renderMenu(h, this.dataSource)
        )
    }
}
