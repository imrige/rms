<template>
    <div class="i-radio-group">
        <slot></slot>
        <div class="i-radio-group-clear"></div>
    </div>
</template>

<script>
    import Component from '@/utils/component';

    export default {
        name: "iRadioGroup",
        props: {
            value: {
                type: [String, Number]
            }
        },
        mounted() {
            this.updateValue(this.value);

            this.$on('on-click', value => {
                if (value === this.value) return;

                this.updateValue(value);
                this.$emit('change', value);
            });
        },
        methods: {
            updateValue(value) {
                const radios = Component.findComponentsDownward(this, 'iRadio');
                if (radios.length) radios.forEach(item => item.checked = item.value === value);

                this.$emit('input', value);
            }
        },
        watch: {
            value(value) {
                this.updateValue(value);
            }
        }
    }
</script>
