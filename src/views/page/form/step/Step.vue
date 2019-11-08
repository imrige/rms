<template>
    <PageView content="将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。">
        <a-card>
            <a-steps :style="stepStyles" :current="current" class="pt-2 pb-4">
                <a-step title="填写信息">
                    <a-icon slot="icon" type="profile"/>
                </a-step>
                <a-step title="完成支付">
                    <a-icon slot="icon" type="credit-card"/>
                </a-step>
                <a-step title="等待发货">
                    <a-icon slot="icon" type="car"/>
                </a-step>
            </a-steps>

            <template v-if="current === 0 ">
                <a-form :style="formStyles" class="mt-2 mb-2">
                    <a-form-item v-bind="formLayout" label="支付金额">
                        <a-input placeholder="请输入" v-model="form.price">
                            <span slot="suffix">￥</span>
                        </a-input>
                    </a-form-item>
                    <a-form-item v-bind="formLayout" label="收货人">
                        <a-input placeholder="请输入" v-model="form.name"/>
                    </a-form-item>
                    <a-form-item v-bind="formLayout" label="收货人手机">
                        <a-input placeholder="请输入" v-model="form.phone">
                            <a-select slot="addonBefore" value="86" v-decorator="['prefix']" style="width: 70px">
                                <a-select-option value="86">+86</a-select-option>
                                <a-select-option value="87">+87</a-select-option>
                            </a-select>
                        </a-input>
                    </a-form-item>
                    <a-form-item v-bind="formLayout" label="收货地址">
                        <a-cascader :options="cascaderOptions" placeholder="请选择"/>
                    </a-form-item>
                    <a-form-item v-bind="formLayout" label="详细地址">
                        <a-textarea placeholder="请输入" :rows="4" v-model="form.detailed"/>
                    </a-form-item>
                    <a-form-item v-bind="formTailLayout">
                        <a-button class="mr-2" type="primary" @click="current++">提交</a-button>
                        <a-button class="mr-2">重置</a-button>
                    </a-form-item>
                </a-form>
            </template>

            <template v-if="current === 1 ">
                <a-form :style="formStyles">
                    <a-form-item>
                        <a-alert showIcon message="确认支付后，商家会尽快进行发货，请您耐心等待。"/>
                    </a-form-item>
                    <a-form-item v-bind="formLayout" label="收货人">
                        <span>{{form.name}}</span>
                    </a-form-item>
                    <a-form-item v-bind="formLayout" label="收货人手机">
                        <span>{{form.phone}}</span>
                    </a-form-item>
                    <a-form-item v-bind="formLayout" label="收货地址">
                        <span>{{form.address}}</span>
                    </a-form-item>
                    <a-form-item v-bind="formLayout" label="详细地址">
                        <span>{{form.detailed}}</span>
                    </a-form-item>
                    <a-form-item v-bind="formLayout" label="支付金额">
                        <h2>￥{{form.price}}</h2>
                    </a-form-item>
                    <a-form-item>
                        <a-divider/>
                    </a-form-item>
                    <a-form-item v-bind="formTailLayout">
                        <a-button class="mr-2" @click="current++" type="primary">确认支付</a-button>
                        <a-button class="mr-2" @click="current--">上一步</a-button>
                    </a-form-item>
                </a-form>
            </template>

            <template v-if="current === 2 ">
                <iResult title="等待发货" description="卖家承诺于今天之前发货">
                    <a-form :style="formStyles" style="padding: 24px; background: #fafafa;">
                        <a-form-item v-bind="formLayout" label="收货人">
                            <span>{{form.name}}</span>
                        </a-form-item>
                        <a-form-item v-bind="formLayout" label="收货人手机">
                            <span>{{form.phone}}</span>
                        </a-form-item>
                        <a-form-item v-bind="formLayout" label="收货地址">
                            <span>{{form.address}}</span>
                        </a-form-item>
                        <a-form-item v-bind="formLayout" label="详细地址">
                            <span>{{form.detailed}}</span>
                        </a-form-item>
                        <a-form-item v-bind="formLayout" label="支付金额">
                            <h2>￥{{form.price}}</h2>
                        </a-form-item>
                    </a-form>

                    <template slot="action">
                        <a-button @click="current = 0" type="primary">继续购买</a-button>
                        <a-button>查看订单</a-button>
                    </template>
                </iResult>
            </template>
        </a-card>
    </PageView>
</template>

<script>
    import PageView from "@/layouts/PageView";
    import Mixin from '../mixin';

    export default {
        name: "Step",
        mixins: [Mixin],
        components: {PageView},
        data() {
            return {
                current: 0,
                form: {
                    name: '彭于晏',
                    phone: '18667350956',
                    address: '浙江省杭州市富阳区',
                    detailed: '银湖街道银湖科创园9号楼',
                    price: 500
                }
            }
        }
    }
</script>
