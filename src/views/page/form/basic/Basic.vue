<template>
    <PageView content="表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。">
        <a-card>
            <a-form :style="formStyles">
                <a-form-item v-bind="formLayout" label="昵称">
                    <a-input placeholder="请输入"/>
                </a-form-item>
                <a-form-item v-bind="formLayout" label="手机">
                    <a-input placeholder="请输入">
                        <a-select slot="addonBefore" value="86" v-decorator="['prefix']" style="width: 70px">
                            <a-select-option value="86">+86</a-select-option>
                            <a-select-option value="87">+87</a-select-option>
                        </a-select>
                    </a-input>
                </a-form-item>
                <a-form-item v-bind="formLayout" label="简介">
                    <a-textarea placeholder="请输入" :rows="4"/>
                </a-form-item>
                <a-form-item v-bind="formLayout" label="出生日期">
                    <a-date-picker style="width: 100%;"/>
                </a-form-item>
                <a-form-item v-bind="formLayout" label="朋友圈可见范围">
                    <a-radio-group :defaultValue="1">
                        <a-radio :value="1">全部</a-radio>
                        <a-radio :value="2">近半年</a-radio>
                        <a-radio :value="3">近一个月</a-radio>
                        <a-radio :value="4">近三天</a-radio>
                    </a-radio-group>
                </a-form-item>
                <a-form-item v-bind="formTailLayout">
                    <a-button class="mr-2" type="primary">提交</a-button>
                    <a-button class="mr-2">重置</a-button>
                </a-form-item>
            </a-form>
        </a-card>
    </PageView>
</template>

<script>
    import PageView from "@/layouts/PageView";
    import Mixin from '../mixin';

    export default {
        name: "Basic",
        mixins: [Mixin],
        components:{PageView}
    }
</script>
