<template>
    <a-tooltip>
        <template slot="title">
            <span>{{title}}</span>
        </template>
        <div class="i-radio" @click="bindClick">
            <template v-if="src">
                <div class="i-radio-img">
                    <img :src="src" alt="img"/>
                </div>
            </template>
            <template v-else>
                <div class="i-radio-panel" :style="panelStyles"></div>
            </template>

            <div class="i-radio-icon" v-show="checked" :style="iconStyles">
                <a-icon type="check"/>
            </div>
        </div>
    </a-tooltip>
</template>

<script>
    import Component from '../../mixins/component';

    export default {
        name: "iRadio",
        mixins: [Component],
        props: {
            src: {
                type: String,
                default: ''
            },
            value: {
                type: [String, Number]
            },
            title: {
                type: [String, Number]
            }
        },
        data() {
            return {
                checked: false
            }
        },
        computed: {
            panelStyles() {
                return {
                    background: this.value,
                    color: 'white'
                };
            },
            iconStyles() {
                if (this.src) return {
                    color: '#1890ff',
                    top: '17px',
                    left: '20px'
                };
                else return {
                    left: '3px',
                    top: '3px',
                    right: '3px',
                    bottom: '3px',
                    color: 'white'
                };
            }
        },
        methods: {
            bindClick() {
                let value = this.value;
                this.dispatch('iRadioGroup', 'on-click', value);
            }
        }
    }
</script>
