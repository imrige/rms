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
                <a-card>
                    <template slot="extra">
                        <a-radio-group :value="1" class="ml-2">
                            <a-radio-button :value="1">全部</a-radio-button>
                            <a-radio-button :value="2">进行中</a-radio-button>
                            <a-radio-button :value="3">等待中</a-radio-button>
                        </a-radio-group>
                        <a-input-search placeholder="请输入" style="width: 300px;" class="ml-2"/>
                    </template>

                    <a-button class="mb-3" block icon="plus">添加</a-button>
                    <a-list size="large" :pagination="pagination" :data-source="dataSource">
                        <a-list-item slot="renderItem" slot-scope="item, index">
                            <a-list-item-meta :title="item.title" :description="item.description">
                                <a-avatar slot="avatar" shape="square" :size="48" :src="item.avatar"/>
                            </a-list-item-meta>

                            <a-progress :percent="50 + index * 5" status="active" style="width: 200px;"/>

                            <a slot="actions">查看</a>
                            <a-dropdown slot="actions">
                                <a>
                                    更多
                                    <a-icon type="down"/>
                                </a>
                                <a-menu slot="overlay">
                                    <a-menu-item>
                                        <a>编辑</a>
                                    </a-menu-item>
                                    <a-menu-item>
                                        <a>删除</a>
                                    </a-menu-item>
                                </a-menu>
                            </a-dropdown>
                        </a-list-item>
                    </a-list>
                </a-card>
            </a-col>
        </a-row>
    </PageView>
</template>

<script>
    import PageView from "@/layouts/PageView";
    import Mixin from '../mixin';

    export default {
        name: "Basic",
        mixins: [Mixin],
        components: {PageView},
        data() {
            return {
                dataSource: []
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
                        title: 'Alipay',
                        description: '那是一种内在的东西， 他们到达不了，也无法触及的',
                        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    })
                }
            }
        }
    }
</script>
