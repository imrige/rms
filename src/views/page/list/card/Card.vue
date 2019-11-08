<template>
    <PageView>
        <template slot="content">
            <p>段落示意：蚂蚁金服务设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态， 提供跨越设计与开发的体验解决方案。</p>
            <p>
                <a>
                    <a-icon class="mr-1" type="home"/>
                    快速开始</a>
                <a-divider type="vertical"/>
                <a>
                    <a-icon class="mr-1" type="info-circle"/>
                    产品简介</a>
                <a-divider type="vertical"/>
                <a>
                    <a-icon class="mr-1" type="file-text"/>
                    产品文档</a>
            </p>
        </template>
        <template slot="extra">
            <img src="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png"
                 style="width: 126px; margin-right: 48px;" alt="">
        </template>

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
                    <a-row :gutter="gutter">
                        <template v-for="(item, index) in dataSource">
                            <a-col :span="span" :key="index">
                                <a-card hoverable class="mb-3">
                                    <template slot="actions">
                                        <a-icon type="setting"/>
                                        <a-icon type="edit"/>
                                        <a-icon type="ellipsis"/>
                                    </template>
                                    <a-card-meta :title="item.title" :description="item.description">
                                        <a-avatar size="large" slot="avatar" :src="item.avatar"/>
                                    </a-card-meta>
                                </a-card>
                            </a-col>
                        </template>
                    </a-row>
                </a-card>
            </a-col>
        </a-row>
    </PageView>
</template>

<script>
    import PageView from "@/layouts/PageView";
    import Mixin from '../mixin';

    export default {
        name: "Card",
        mixins: [Mixin],
        components: {PageView},
        data() {
            return {
                gutter: 24,
                span: 8,
                dataSource: []
            }
        },
        mounted() {
            this.get();
        },
        methods: {
            get() {
                let length = 12;
                for (let i = 0; i < length; i++) {
                    this.dataSource.push({
                        title: 'Alipay',
                        description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
                        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
                    })
                }
            }
        }
    }
</script>

