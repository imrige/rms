<template>
    <div class="i-loading-bar" :style="styles" v-show="show">
        <div :class="innerClasses" :style="innerStyles"></div>
    </div>
</template>

<script>
    export default {
        name: "iLoadingBar",
        props: {
            color: {
                type: String,
                default: 'primary'
            },
            failedColor: {
                type: String,
                default: 'error'
            },
            height: {
                type: [String, Number],
                default: 2
            }
        },
        data() {
            return {
                percent: 0,
                status: "success",
                show: false
            }
        },
        computed: {
            innerClasses() {
                return [
                    `i-loading-bar-inner`,
                    {
                        [`i-loading-bar-inner-color-primary`]: this.color === 'primary' && this.status === 'success',
                        [`i-loading-bar-inner-failed-color-error`]: this.failedColor === 'error' && this.status === 'error'
                    }
                ]
            },
            styles() {
                return {
                    height: `${this.height}px`
                }
            },
            innerStyles() {
                let style = {
                    width: `${this.percent}%`,
                    height: `${this.height}px`
                };

                if (this.color !== 'primary' && this.status === 'success') {
                    style.backgroundColor = this.color;
                }

                if (this.failedColor !== 'error' && this.status === 'error') {
                    style.backgroundColor = this.failedColor;
                }

                return style;
            }
        }
    }
</script>
