<template>
    <div class="i-tag-group">
        <template v-if="showAll">
            <a-checkable-tag class="i-tag-group-item" :checked="checkAll" @change="bindClickAll">全部</a-checkable-tag>
        </template>
        <a-checkable-tag class="i-tag-group-item"
                         v-for="tag in tags"
                         :key="tag"
                         :checked="selectedTags.indexOf(tag) > -1"
                         @change="bindClickChange($event,tag)">
            {{tag}}
        </a-checkable-tag>
    </div>
</template>

<script>
    export default {
        name: "iTagGroup",
        props: {
            showAll: {
                type: Boolean,
                default: true
            },
            tags: {
                type: Array,
                required: true,
                default() {
                    return []
                }
            },
            defaultSelectedTags: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                checkAll: false,
                selectedTags: this.defaultSelectedTags
            }
        },
        mounted() {
            this.defaultCheckAll(this.defaultSelectedTags);
        },
        methods: {
            defaultCheckAll(defaultSelectedTags) {
                if (defaultSelectedTags.length === 0) this.checkAll = true;
            },
            bindClickAll() {
                const checkAll = this.checkAll;
                this.selectedTags = [];
                this.checkAll = !checkAll;

                this.$emit('change', this.selectedTags);
            },
            bindClickChange(checked, tag) {
                const {selectedTags} = this;
                this.selectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);

                this.checkAll = this.selectedTags.length === this.tags.length;

                this.$emit('change', this.selectedTags);
            }
        },
        watch: {
            defaultSelectedTags(value) {
                this.defaultSelectedTags(value);
                this.selectedTags = value;
            }
        }
    }
</script>
