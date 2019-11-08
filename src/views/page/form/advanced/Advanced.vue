<template>
    <PageView content="高级表单常见于一次性输入和提交大批量数据的场景。">
        <a-row>
            <a-col>
                <a-card class="mb-3" title="订单信息">
                    <a-form>
                        <a-row :gutter="gutter">
                            <a-col :span="span">
                                <a-form-item label="订单号">
                                    <a-input placeholder="请输入"/>
                                </a-form-item>
                            </a-col>
                            <a-col :span="span">
                                <a-form-item label="订单价格">
                                    <a-input placeholder="请输入"/>
                                </a-form-item>
                            </a-col>
                            <a-col :span="span">
                                <a-form-item label="订单金额">
                                    <a-input placeholder="请输入"/>
                                </a-form-item>
                            </a-col>
                            <a-col :span="span">
                                <a-form-item label="创建日期">
                                    <a-input placeholder="请输入"/>
                                </a-form-item>
                            </a-col>
                            <a-col :span="span">
                                <a-form-item label="创建日期">
                                    <a-input placeholder="请输入"/>
                                </a-form-item>
                            </a-col>
                            <a-col :span="span">
                                <a-form-item label="创建日期">
                                    <a-input placeholder="请输入"/>
                                </a-form-item>
                            </a-col>
                        </a-row>
                    </a-form>
                </a-card>
            </a-col>
            <a-col>
                <a-card class="mb-3" title="商品信息">
                    <a-form>
                        <a-row :gutter="gutter">
                            <a-col :span="span">
                                <a-form-item label="订单号">
                                    <a-input placeholder="请输入"/>
                                </a-form-item>
                            </a-col>
                            <a-col :span="span">
                                <a-form-item label="订单价格">
                                    <a-input placeholder="请输入"/>
                                </a-form-item>
                            </a-col>
                            <a-col :span="span">
                                <a-form-item label="订单金额">
                                    <a-input placeholder="请输入"/>
                                </a-form-item>
                            </a-col>
                            <a-col :span="span">
                                <a-form-item label="创建日期">
                                    <a-input placeholder="请输入"/>
                                </a-form-item>
                            </a-col>
                            <a-col :span="span">
                                <a-form-item label="创建日期">
                                    <a-input placeholder="请输入"/>
                                </a-form-item>
                            </a-col>
                            <a-col :span="span">
                                <a-form-item label="创建日期">
                                    <a-input placeholder="请输入"/>
                                </a-form-item>
                            </a-col>
                        </a-row>
                    </a-form>
                </a-card>
            </a-col>
            <a-col>
                <a-card class="mb-3" title="服务信息">
                    <a-form>
                        <a-row :gutter="gutter">
                            <a-col :span="span">
                                <a-form-item label="订单号">
                                    <a-input placeholder="请输入"/>
                                </a-form-item>
                            </a-col>
                            <a-col :span="span">
                                <a-form-item label="订单价格">
                                    <a-input placeholder="请输入"/>
                                </a-form-item>
                            </a-col>
                            <a-col :span="span">
                                <a-form-item label="订单金额">
                                    <a-input placeholder="请输入"/>
                                </a-form-item>
                            </a-col>
                            <a-col :span="span">
                                <a-form-item label="创建日期">
                                    <a-input placeholder="请输入"/>
                                </a-form-item>
                            </a-col>
                            <a-col :span="span">
                                <a-form-item label="创建日期">
                                    <a-input placeholder="请输入"/>
                                </a-form-item>
                            </a-col>
                            <a-col :span="span">
                                <a-form-item label="创建日期">
                                    <a-input placeholder="请输入"/>
                                </a-form-item>
                            </a-col>
                        </a-row>
                    </a-form>
                </a-card>
            </a-col>
            <a-col>
                <iToolbar class="text-right" :offset-bottom="0">
                    <a-button class="ml-2">重置</a-button>
                    <a-button class="ml-2" type="primary">保存</a-button>
                </iToolbar>
            </a-col>
        </a-row>
    </PageView>
</template>

<script>
    import PageView from "@/layouts/PageView";

    export default {
        name: "Advanced",
        components: {PageView},
        data() {
            return {
                gutter: 64,
                span: 8
            }
        }
    }
</script>
