<template>
    <PageView>
        <a-card>
            <h3 class="mb-2">订单信息</h3>
            <a-form layout="inline">
                <a-row>
                    <a-col :span="span">
                        <a-form-item label="订单编号">
                            <span>0X1553762859929</span>
                        </a-form-item>
                    </a-col>
                    <a-col :span="span">
                        <a-form-item label="创建日期">
                            <span>2019-10-22 21:14:34</span>
                        </a-form-item>
                    </a-col>
                    <a-col :span="span">
                        <a-form-item label="支付时间">
                            <span>2019-10-22 21:16:03</span>
                        </a-form-item>
                    </a-col>
                    <a-col :span="span">
                        <a-form-item label="订单状态">
                            <span>退货中</span>
                        </a-form-item>
                    </a-col>
                    <a-col :span="span">
                        <a-form-item label="支付金额">
                            <span>￥500.00</span>
                        </a-form-item>
                    </a-col>
                    <a-col :span="span">
                        <a-form-item label="支付方式">
                            <span>支付宝</span>
                        </a-form-item>
                    </a-col>
                </a-row>
            </a-form>
            <a-divider/>

            <h3 class="mb-2">商品信息</h3>
            <a-form layout="inline">
                <a-row>
                    <a-col :span="span">
                        <a-form-item label="商品名称">
                            <span>3天循环 报警图片+视频</span>
                        </a-form-item>
                    </a-col>
                    <a-col :span="span">
                        <a-form-item label="商品类型">
                            <span>云存储</span>
                        </a-form-item>
                    </a-col>
                    <a-col :span="span">
                        <a-form-item label="商品单价">
                            <span>￥2.00</span>
                        </a-form-item>
                    </a-col>
                    <a-col :span="span">
                        <a-form-item label="商品简介">
                            <span>新设备限时免费</span>
                        </a-form-item>
                    </a-col>
                </a-row>
            </a-form>
            <a-divider/>

            <h3 class="mb-2">服务信息</h3>
            <a-form layout="inline">
                <a-row>
                    <a-col :span="span">
                        <a-form-item label="服务类型">
                            <span>图片云存储</span>
                        </a-form-item>
                    </a-col>
                    <a-col :span="span">
                        <a-form-item label="到期时间">
                            <span>2020-10-22 21:16:03</span>
                        </a-form-item>
                    </a-col>
                    <a-col :span="span">
                        <a-form-item label="服务有效期">
                            <span>1年</span>
                        </a-form-item>
                    </a-col>
                    <a-col :span="span">
                        <a-form-item label="存储容量">
                            <span>100 GB</span>
                        </a-form-item>
                    </a-col>
                </a-row>
            </a-form>
            <a-divider/>

            <h3 class="mb-2">退货进度</h3>
            <a-table :columns="columns" :dataSource="dataSource">
                <template slot="status" slot-scope="text">
                    <a-badge :status="statusMap[text].status" :text="statusMap[text].text"/>
                </template>
            </a-table>
        </a-card>
    </PageView>
</template>

<script>
    import PageView from "@/layouts/PageView";

    let span = 8,
        statusMap = {
            0: {text: '失败', status: 'error'},
            1: {text: '成功', status: 'success'},
            2: {text: '进行中', status: 'processing'},
        },
        columns = [
            {title: '日期', dataIndex: 'date'},
            {title: '当前进度', dataIndex: 'process'},
            {title: '经手人', dataIndex: 'operator'},
            {title: '状态', dataIndex: 'status', align: 'right', scopedSlots: {customRender: 'status'}},
            {title: '耗时', dataIndex: 'time', align: 'left'},
        ],
        dataSource = [
            {key: 5, date: '2019-10-21 23:57:30', status: 2, process: '正在发往目的', operator: '快递公司', time: '2h10m07s'},
            {key: 4, date: '2019-10-21 21:47:23', status: 1, process: '等待快递员发货', operator: '快递公司', time: '3h'},
            {key: 3, date: '2019-10-21 18:47:23', status: 1, process: '等待快递员取货', operator: '快递公司', time: '5h20m23s'},
            {key: 2, date: '2019-10-21 13:27:00', status: 1, process: '填写快递信息', operator: '买家', time: '32s'},
            {key: 1, date: '2019-10-21 13:26:28', status: 1, process: '申请审核通过', operator: '卖家', time: '1m40s'},
            {key: 0, date: '2019-10-21 13:25:48', status: 1, process: '发起退货申请', operator: '买家', time: '20s'},
        ];

    export default {
        name: "Basic",
        components: {PageView},
        data() {
            return {
                span,
                columns,
                dataSource,
                statusMap
            }
        }
    }
</script>
