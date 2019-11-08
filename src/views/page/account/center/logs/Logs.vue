<template>
    <a-table :columns="columns"></a-table>
</template>

<script>
    let columns = [
        {title: '操作名称', dataIndex: 'name'},
        {title: '方法', dataIndex: 'method'},
        {title: '路径', dataIndex: 'path'},
        {title: '耗时', dataIndex: 'time', align: 'right'},
    ];

    export default {
        name: "Logs",
        data() {
            return {
                columns
            }
        }
    }
</script>
