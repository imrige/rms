<template>
    <PageView>
        <a-row>
            <a-col>
                <a-card class="mb-3" title="流程进度">
                    <a-steps progressDot :current="1">
                        <a-step title="创建项目"/>
                        <a-step title="等待初审"/>
                        <a-step title="等待复审"/>
                        <a-step title="项目完成"/>
                    </a-steps>
                </a-card>
            </a-col>
            <a-col>
                <a-card class="mb-3" title="用户信息">
                    <a-form layout="inline">
                        <a-row>
                            <a-col :span="span">
                                <a-form-item label="姓名">
                                    <span>付小小</span>
                                </a-form-item>
                            </a-col>
                            <a-col :span="span">
                                <a-form-item label="身份证">
                                    <span>3321944288191034921</span>
                                </a-form-item>
                            </a-col>
                            <a-col :span="span">
                                <a-form-item label="会员卡号">
                                    <span>32943898021309809423</span>
                                </a-form-item>
                            </a-col>
                            <a-col :span="span">
                                <a-form-item label="联系方式">
                                    <span>18112345678</span>
                                </a-form-item>
                            </a-col>
                            <a-col :span="span * 2">
                                <a-form-item label="联系地址">
                                    <span>浙江省杭州市西湖区黄姑山路工专路交叉路口</span>
                                </a-form-item>
                            </a-col>
                        </a-row>
                    </a-form>

                    <a-card class="mt-3" type="inner" title="银行卡信息">
                        <template v-for="i in 3">
                            <a-form :key="i" layout="inline">
                                <a-row>
                                    <a-col :span="span">
                                        <a-form-item label="银行">
                                            <span>中国人民银行</span>
                                        </a-form-item>
                                    </a-col>
                                    <a-col :span="span">
                                        <a-form-item label="卡号">
                                            <span>3298738920927989</span>
                                        </a-form-item>
                                    </a-col>
                                    <a-col :span="span">
                                        <a-form-item label="注册时间">
                                            <span>2019-03-29 29:34:30</span>
                                        </a-form-item>
                                    </a-col>
                                    <a-col :span="span">
                                        <a-form-item label="卡种">
                                            <span>借记卡</span>
                                        </a-form-item>
                                    </a-col>
                                </a-row>
                                <a-divider v-if="i < 3"/>
                            </a-form>
                        </template>
                    </a-card>
                </a-card>
            </a-col>
        </a-row>
    </PageView>
</template>

<script>
    import PageView from "@/layouts/PageView";

    let span = 8;

    export default {
        name: "Advanced",
        components: {PageView},
        data() {
            return {
                span
            }
        }
    }
</script>
