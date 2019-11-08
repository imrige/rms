<template>
    <PageView>
        <a-row>
            <a-col>
                <a-card class="mb-3">
                    <a-form layout="inline">
                        <a-row>
                            <a-col>
                                <a-form-item label="规则状态">
                                    <a-checkable-tag :checked="selectedAll">全选</a-checkable-tag>
                                    <template v-for="tag in tags">
                                        <a-checkable-tag :key="tag"
                                                         :checked="checkedTags.indexOf(tag) > -1"
                                                         @change="checked => bindClickChangeTag(tag, checked)"
                                        >{{tag}}
                                        </a-checkable-tag>
                                    </template>
                                </a-form-item>
                                <a-divider dashed class="mt-2 mb-2"/>
                            </a-col>
                            <a-col>
                                <a-form-item label="调度时间">
                                    <a-range-picker/>
                                </a-form-item>
                                <a-divider dashed class="mt-2 mb-2"/>
                            </a-col>
                            <a-col>
                                <a-form-item label="其他选项">
                                    <a-form layout="inline">
                                        <a-form-item label="好评率">
                                            <a-select style="width: 200px;" defaultValue="从低到高">
                                                <a-select-option value="从低到高">从低到高</a-select-option>
                                                <a-select-option value="从高到低">从高到低</a-select-option>
                                            </a-select>
                                        </a-form-item>
                                        <a-form-item label="点赞数">
                                            <a-select style="width: 200px;" defaultValue="从多到少">
                                                <a-select-option value="从多到少">从多到少</a-select-option>
                                                <a-select-option value="从少到多">从少到多</a-select-option>
                                            </a-select>
                                        </a-form-item>
                                    </a-form>
                                </a-form-item>
                            </a-col>
                        </a-row>
                    </a-form>
                </a-card>
            </a-col>
            <a-col>
                <a-card class="mb-3">
                    <a-button type="primary" icon="plus" class="mb-3">新增</a-button>

                    <a-alert showIcon class="mb-3">
                        <template slot="message">
                            <span>已选择 0 项  服务调用次数总计 0 万</span>
                            <a class="ml-3">清空</a>
                        </template>
                    </a-alert>

                    <a-table :columns="columns"
                             :data-source="dataSource"
                             :pagination="pagination"
                             :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}">
                        <template slot="status" slot-scope="text">
                            <template v-if="text % 2">
                                <a-badge status="success" text="已上线"/>
                            </template>
                            <template v-else-if="text % 3">
                                <a-badge status="processing" text="运行中"/>
                            </template>
                            <template v-else-if="text % 4">
                                <a-badge status="default" text="关闭"/>
                            </template>
                            <template v-else-if="text % 5">
                                <a-badge status="warning" text="警报"/>
                            </template>
                            <template v-else>
                                <a-badge status="error" text="异常"/>
                            </template>
                        </template>
                        <template slot="action">
                            <a>配置</a>
                            <a-divider type="vertical"/>
                            <a>订阅报警</a>
                        </template>
                    </a-table>
                </a-card>
            </a-col>
        </a-row>
    </PageView>
</template>

<script>
    import PageView from "@/layouts/PageView";
    import Mixin from '../mixin';

    let columns = [
            {title: '规则名称', dataIndex: 'name',},
            {title: '描述', dataIndex: 'description',},
            {title: '服务调用次数', dataIndex: 'count', sorter: true, align: 'right'},
            {
                title: '状态',
                dataIndex: 'status',
                scopedSlots: {customRender: 'status'},
                filters: [
                    {text: '已上线', value: 'success'},
                    {text: '运行中', value: 'processing'},
                    {text: '警报', value: 'warning'},
                    {text: '异常', value: 'error'},
                    {text: '关闭', value: 'close'}
                ],
            },
            {title: '上次调度时间', dataIndex: 'time', sorter: true,},
            {title: '操作', dataIndex: 'action', scopedSlots: {customRender: 'action'}},
        ],
        dataSource = [];

    export default {
        name: "Table",
        mixins: [Mixin],
        components: {PageView},
        data() {
            return {
                columns,
                dataSource,
            }
        },
        mounted() {
            this.get();
        },
        methods: {
            get() {
                let length = 100;
                for (let i = 0; i < length; i++) {
                    this.dataSource.push({
                        key: i,
                        name: `TradeCode ${i}`,
                        description: '这是一段描述',
                        count: `${230 + i} 万`,
                        status: i,
                        time: new Date().toLocaleString()
                    })
                }
            }
        }
    }
</script>
