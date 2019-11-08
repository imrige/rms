<template>
    <PageView>
        <a-row>
            <a-col>
                <a-row :gutter="gutter">
                    <a-col :span="6">
                        <iChartCard :loading="loading" class="mb-3" title="总销售额" value="￥123,456">
                            <a-tooltip slot="extra">
                                <template slot="title">指标说明</template>
                                <a-icon type="info-circle"/>
                            </a-tooltip>
                            <iTrend>
                                <iTrendItem type="up" title="周同比" value="12%"/>
                                <iTrendItem type="down" title="日同比" value="8%"/>
                            </iTrend>
                            <template slot="footer">
                                日销售额 ￥12,423
                            </template>
                        </iChartCard>
                    </a-col>
                    <a-col :span="6">
                        <iChartCard :loading="loading" class="mb-3" title="访问量" value="8,848">
                            <a-tooltip slot="extra">
                                <template slot="title">指标说明</template>
                                <a-icon type="info-circle"/>
                            </a-tooltip>
                            <iTrend>
                                <iTrendItem type="up" title="周同比" value="12%"/>
                                <iTrendItem type="down" title="日同比" value="8%"/>
                            </iTrend>
                            <template slot="footer">
                                日访问量 1,234
                            </template>
                        </iChartCard>
                    </a-col>
                    <a-col :span="6">
                        <iChartCard :loading="loading" class="mb-3" title="支付笔数" value="6,560">
                            <a-tooltip slot="extra">
                                <template slot="title">指标说明</template>
                                <a-icon type="info-circle"/>
                            </a-tooltip>
                            <iTrend>
                                <iTrendItem type="up" title="周同比" value="12%"/>
                                <iTrendItem type="down" title="日同比" value="8%"/>
                            </iTrend>
                            <template slot="footer">
                                转化率 60%
                            </template>
                        </iChartCard>
                    </a-col>
                    <a-col :span="6">
                        <iChartCard :loading="loading" class="mb-3" title="运营活动效果" value="70%">
                            <a-tooltip slot="extra">
                                <template slot="title">指标说明</template>
                                <a-icon type="info-circle"/>
                            </a-tooltip>
                            <a-progress status="success" :percent="70" :showInfo="false"/>
                            <template slot="footer">
                                <iTrend>
                                    <iTrendItem type="up" title="周同比" value="12%"/>
                                    <iTrendItem type="down" title="日同比" value="8%"/>
                                </iTrend>
                            </template>
                        </iChartCard>
                    </a-col>
                </a-row>
            </a-col>
            <a-col>
                <a-card class="mb-3" :bodyStyle="{padding: 0}">
                    <a-tabs defaultActiveKey="1" :tabBarStyle="{padding: '0 16px'}" :tabBarGutter="gutter" size="large">
                        <div slot="tabBarExtraContent" style="line-height: 55px;">
                            <a-radio-group value="year">
                                <a-radio-button value="day">今日</a-radio-button>
                                <a-radio-button value="week">本周</a-radio-button>
                                <a-radio-button value="month">本月</a-radio-button>
                                <a-radio-button value="year">全年</a-radio-button>
                            </a-radio-group>
                            <a-range-picker class="ml-2" style="width: 300px"/>
                        </div>
                        <a-tab-pane class="pa-4 pt-1" tab="销售额" key="1">
                            <a-card :loading="loading" :bordered="false" :bodyStyle="{padding: 0}">
                                <a-row :gutter="gutter">
                                    <a-col :span="16">
                                        <h4>销售趋势</h4>
                                    </a-col>
                                    <a-col :span="8">
                                        <h4>门店销售额排名</h4>
                                        <iRank>
                                            <template v-for="i in 7">
                                                <iRankItem :key="i" :index="i" :title="`工专路${i}号店`" value="￥323,324"/>
                                            </template>
                                        </iRank>
                                    </a-col>
                                </a-row>
                            </a-card>
                        </a-tab-pane>
                        <a-tab-pane class="pa-4 pt-1" tab="访问量" key="2">
                            <a-card :loading="loading" :bordered="false" :bodyStyle="{padding: 0}">
                                <a-row :gutter="gutter">
                                    <a-col :span="16">
                                        <h4>销售趋势</h4>
                                    </a-col>
                                    <a-col :span="8">
                                        <h4>门店销售额排名</h4>
                                        <iRank>
                                            <template v-for="i in 7">
                                                <iRankItem :key="i" :index="i" :title="`工专路${i}号店`" value="￥323,324"/>
                                            </template>
                                        </iRank>
                                    </a-col>
                                </a-row>
                            </a-card>
                        </a-tab-pane>
                    </a-tabs>
                </a-card>
            </a-col>
            <a-col>
                <a-row :gutter="gutter">
                    <a-col :span="12">
                        <a-card :loading="loading" title="线上热门搜索">
                            <a-row :gutter="gutter">
                                <a-col :span="12">
                                    <iChartCard :bordered="false" :bodyStyle="{padding: '24px 0'}" class="mb-3"
                                                title="搜索用户数">
                                        <template slot="extra">
                                            <a-tooltip title="指标说明">
                                                <a-icon type="info-circle"/>
                                            </a-tooltip>
                                        </template>
                                        <template slot="value">
                                            <span>￥12,456</span>
                                            <iTrend>
                                                <iTrendItem type="up" value="12%"/>
                                            </iTrend>
                                        </template>
                                    </iChartCard>
                                </a-col>
                                <a-col :span="12">
                                    <iChartCard :bordered="false" :bodyStyle="{padding: '24px 0'}" class="mb-3"
                                                title="人均搜索次数">
                                        <template slot="extra">
                                            <a-tooltip title="指标说明">
                                                <a-icon type="info-circle"/>
                                            </a-tooltip>
                                        </template>
                                        <template slot="value">
                                            <span>2.7</span>
                                            <iTrend>
                                                <iTrendItem type="down" value="0.3"/>
                                            </iTrend>
                                        </template>
                                    </iChartCard>
                                </a-col>
                            </a-row>

                            <a-table :columns="columns" :dataSource="dataSource" size="small"/>
                        </a-card>
                    </a-col>
                    <a-col :span="12">
                        <a-card :loading="loading" title="销售额类别占比">
                            <template slot="extra">
                                <a-radio-group value="all" style="position: absolute; right: 24px; top: 12px;">
                                    <a-radio-button value="all">全部渠道</a-radio-button>
                                    <a-radio-button value="online">线上</a-radio-button>
                                    <a-radio-button value="offline">门店</a-radio-button>
                                </a-radio-group>
                            </template>

                            <h4>销售额</h4>
                        </a-card>
                    </a-col>
                </a-row>
            </a-col>
        </a-row>
    </PageView>
</template>

<script>
    import PageView from "@/layouts/PageView";

    let columns = [
            {title: '排名', dataIndex: 'key'},
            {title: '搜索关键词', dataIndex: 'name',},
            {title: '用户数', dataIndex: 'age', align: 'center'},
            {title: '周涨幅', dataIndex: 'address', align: 'right'}
        ],
        dataSource = [
            {key: 1, name: 'JonSnow', age: 11, address: 'New York No. 1 Lake Park',},
            {key: 2, name: 'JonSnow', age: 12, address: 'New York No. 2 Lake Park',},
            {key: 3, name: 'JonSnow', age: 13, address: 'New York No. 3 Lake Park',},
            {key: 4, name: 'JonSnow', age: 14, address: 'New York No. 4 Lake Park',},
            {key: 5, name: 'JonSnow', age: 15, address: 'New York No. 5 Lake Park',},
        ];

    export default {
        name: "Analysis",
        inject: ['gutter'],
        components: {PageView},
        data() {
            return {
                columns,
                dataSource,
                loading: false
            }
        },
        mounted() {
            this.loading = true;
            setTimeout(() => this.loading = false, 1500);
        }
    }
</script>
