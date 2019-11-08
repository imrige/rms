export default {
    data() {
        return {
            pagination: {
                position: 'bottom',
                showQuickJumper: true,
                showSizeChanger: true,
                showTotal: total => `共 ${total} 条`,
            },
            selectedRowKeys: [],
            tags: ['Movies', 'Books', 'Music', 'Sports'],
            checkedTags: [],
            selectedAll: false
        }
    },
    methods: {
        onSelectChange(selectedRowKeys) {
            console.log('selectedRowKeys changed: ', selectedRowKeys);
            this.selectedRowKeys = selectedRowKeys;
        },
        bindClickChangeTag(tag, checked) {
            const {checkedTags} = this;
            const nextSelectedTags = checked ? [...checkedTags, tag] : checkedTags.filter(t => t !== tag);
            console.log('You are interested in: ', nextSelectedTags);
            this.checkedTags = nextSelectedTags;
        }
    }
}
