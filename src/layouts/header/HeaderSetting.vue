<template>
    <a-drawer placement="right" :visible="value" @close="bindClickClose" width="300" :closable="false">
        <h3>风格设置</h3>
        <iRadioGroup v-model="theme.style">
            <iRadio title="明亮" value="light" style="margin-right: 16px;"
                    src="https://gw.alipayobjects.com/zos/antfincdn/NQ%24zoisaD2/jpRkZQMyYRryryPNtyIC.svg"/>
            <iRadio title="黑暗" value="dark" style="margin-right: 16px;"
                    src="https://gw.alipayobjects.com/zos/antfincdn/XwFOFbLkSM/LCkqqYNmvBEbokSDscrm.svg"/>
        </iRadioGroup>
        <a-divider/>

        <h3>颜色设置</h3>
        <iRadioGroup v-model="theme.color">
            <iRadio v-for="item in theme.colors" :key="item.key" :value="item.value" :title="item.title"/>
        </iRadioGroup>
        <a-divider/>

        <h3>布局设置</h3>
        <iRadioGroup v-model="theme.layout">
            <iRadio title="侧边菜单布局" value="side" style="margin-right: 16px;"
                    src="https://gw.alipayobjects.com/zos/antfincdn/XwFOFbLkSM/LCkqqYNmvBEbokSDscrm.svg"/>
            <iRadio title="顶部菜单布局" value="top" style="margin-right: 16px;"
                    src="https://gw.alipayobjects.com/zos/antfincdn/URETY8%24STp/KDNDBbriJhLwuqMoxcAr.svg"/>
        </iRadioGroup>
        <a-divider/>

        <h3>导航设置</h3>
        <a-list :split="false" size="small">
            <a-list-item>
                <a-list-item-meta description="固定导航栏"/>
                <a-switch slot="actions" size="small"
                          v-model="theme.fixHeader"/>
            </a-list-item>
            <a-list-item>
                <a-list-item-meta description="固定侧边栏"/>
                <a-switch slot="actions" size="small" :disabled="theme.layout !== 'side'"
                          v-model="theme.fixSidebar"/>
            </a-list-item>
            <a-list-item>
                <a-list-item-meta description="默认折叠侧边栏"/>
                <a-switch slot="actions" size="small" :disabled="theme.layout !== 'side'"
                          v-model="theme.collapsed"/>
            </a-list-item>
        </a-list>
        <a-divider/>

        <a-button block @click="setTheme($_.cloneDeep(defaultTheme))" icon="reload">恢复默认设置</a-button>
    </a-drawer>
</template>

<script>
    import Mixin from './mixin';
    import {mapState, mapMutations} from 'vuex';

    export default {
        name: "HeaderSetting",
        mixins:[Mixin],
        computed: {
            ...mapState({
                theme: state => state.setting.theme,
                defaultTheme: state => state.setting.defaultTheme,
            })
        },
        methods: {
            ...mapMutations({
                setTheme: 'setting/setTheme'
            }),
        },
        watch: {
            theme: {
                handler(value) {
                    this.setTheme(value);
                },
                deep: true
            }
        }
    }
</script>
