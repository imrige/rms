export default {
    props: {
        value: {
            type: Boolean,
            default: false
        }
    },
    methods:{
        bindClickClose() {
            this.$emit('input', false);
        }
    }
}
