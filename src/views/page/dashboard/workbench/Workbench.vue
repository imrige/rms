<template>
    <PageView>
        <template slot="content">
            <a-list>
                <a-list-item>
                    <a-list-item-meta>
                        <template slot="avatar">
                            <a-avatar :size="72" :src="user.avatar"/>
                        </template>
                        <template slot="title">
                            <iGreeting :username="user.nickname"/>
                        </template>
                        <template slot="description">
                            <p>{{`${'暂无部门'} | 上次登录：${new Date().toLocaleString()}`}}</p>
                        </template>
                    </a-list-item-meta>
                </a-list-item>
            </a-list>
        </template>
        <template slot="extra">
            <iInformation align="right">
                <iInformationItem title="待办任务" content="3"/>
                <iInformationItem title="今日来访" content="8"/>
                <iInformationItem title="总访问量" content="325"/>
            </iInformation>
        </template>

        <a-row :gutter="24">
            <a-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
                <a-row>
                    <a-col>
                        <a-card :loading="loading" class="mb-3" title="进行中的项目">
                            <router-link slot="extra" to="/">全部项目</router-link>
                            <template v-for="i in 6">
                                <a-card-grid style="width: 33.33%;" :key="i">
                                    <a-card :bordered="false" :bodyStyle="{padding: 0}">
                                        <a-card-meta title="Alipay" description="那时候我只会想自己想要什么，从不想自己拥有什么">
                                            <template slot="avatar">
                                                <a-avatar
                                                        src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"/>
                                            </template>
                                        </a-card-meta>
                                        <p class="mb-0 mt-3">
                                            <span>程序员日常</span>
                                            <span class="float-right">3秒前</span>
                                        </p>
                                    </a-card>
                                </a-card-grid>
                            </template>
                        </a-card>
                    </a-col>
                    <a-col>
                        <a-card :loading="loading" class="mb-3" title="动态">
                            <a-list>
                                <template v-for="i in 8">
                                    <a-list-item :key="i">
                                        <a-list-item-meta>
                                            <template slot="title">
                                                周杰伦 发布了 单曲 <a>说好不哭</a>
                                            </template>
                                            <template slot="description">
                                                2019年9月16日23时
                                            </template>
                                            <template slot="avatar">
                                                <a-avatar
                                                        src="https://ss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=4044178357,429904261&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=5fd49a2149b0b952a7ce67b672a2abb4"/>
                                            </template>
                                        </a-list-item-meta>
                                    </a-list-item>
                                </template>
                            </a-list>
                        </a-card>
                    </a-col>
                </a-row>
            </a-col>

            <a-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
                <a-row>
                    <a-col>
                        <a-card :loading="loading" class="mb-3" title="快速开始 / 便捷导航">
                            <a-row :gutter="gutter">
                                <template v-for="i in 7">
                                    <a-col :span="6" :key="i">
                                        <a style="color: rgba(0, 0, 0, .67); display: block; line-height: 24px; margin: 4px 0;">
                                            {{`操作${i}`}}
                                        </a>
                                    </a-col>
                                </template>
                                <a-col :span="6">
                                    <a-button size="small" icon="plus" type="primary" ghost style="margin: 4px 0;">添加
                                    </a-button>
                                </a-col>
                            </a-row>
                        </a-card>
                    </a-col>
                    <a-col>
                        <a-card :loading="loading" class="mb-3" title="团队">
                            <template v-for="i in 6">
                                <a-card-grid style="width: 50%;" :key="i">
                                    <a-card :bordered="false" :bodyStyle="{padding: 0}">
                                        <a-card-meta>
                                            <template slot="avatar">
                                                <a-avatar :size="21"
                                                          src="https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png"/>
                                            </template>
                                            <template slot="title">杰威尔唱片</template>
                                        </a-card-meta>
                                    </a-card>
                                </a-card-grid>
                            </template>
                        </a-card>
                    </a-col>
                </a-row>
            </a-col>
        </a-row>
    </PageView>
</template>

<script>
    import PageView from "@/layouts/PageView";
    import {mapState} from 'vuex';

    export default {
        name: "Workbench",
        inject: ['gutter'],
        components: {PageView},
        data() {
            return {
                loading: false,
            }
        },
        computed: {
            ...mapState({
                user: state => state.account.user
            })
        },
        mounted() {
            this.loading = true;
            setTimeout(() => this.loading = false, 1500);
        }
    }
</script>
