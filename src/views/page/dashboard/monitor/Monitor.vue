<template>
    <PageView>
        <a-row>
            <a-col>
                <a-row :gutter="24">
                    <a-col :span="18">
                        <a-card :loading="loading" class="mb-3" title="活动实时交易情况">
                            <iInformation align="center" :split="false">
                                <iInformationItem title="今日交易总额" content="124,543,233元"/>
                                <iInformationItem title="销售目标完成率" content="92%"/>
                                <iInformationItem title="剩余活动时间" content="0"/>
                                <iInformationItem title="每秒交易总额" content="234元"/>
                            </iInformation>
                        </a-card>
                    </a-col>
                    <a-col :span="6">
                        <a-card :loading="loading" class="mb-3" title="活动情况预测">
                        </a-card>
                        <a-card :loading="loading" class="mb-3" title="核券效率">
                        </a-card>
                    </a-col>
                </a-row>
            </a-col>
            <a-col>
                <a-row :gutter="24">
                    <a-col :span="12">
                        <a-card :loading="loading" class="mb-3" title="各品类占比">
                        </a-card>
                    </a-col>
                    <a-col :span="6">
                        <a-card :loading="loading" class="mb-3" title="热门搜索">
                        </a-card>
                    </a-col>
                    <a-col :span="6">
                        <a-card :loading="loading" class="mb-3" title="资源剩余">
                        </a-card>
                    </a-col>
                </a-row>
            </a-col>
        </a-row>
    </PageView>
</template>

<script>
    import PageView from "@/layouts/PageView";

    export default {
        name: "Monitor",
        inject: ['gutter'],
        components: {PageView},
        data() {
            return {
                loading: false,
            }
        },
        mounted() {
            this.loading = true;
            setTimeout(() => this.loading = false, 1500);
        }
    }
</script>
