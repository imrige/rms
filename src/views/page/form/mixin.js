let span = 5;

export default {
    name: "Basic",
    data() {
        return {
            formLayout: {
                labelCol: {span: span},
                wrapperCol: {span: 24 - span}
            },
            formTailLayout: {
                labelCol: {span: span},
                wrapperCol: {span: 24 - span, offset: span}
            },
            cascaderOptions: [
                {
                    value: 'zhejiang',
                    label: '浙江省',
                    children: [
                        {
                            value: 'hangzhou',
                            label: '杭州市',
                            children: [
                                {label: '西湖区', value: 'xihu'},
                                {label: '富阳区', value: 'fuyang'},
                            ],
                        },
                    ],
                },
                {
                    value: 'jiangsu',
                    label: '江苏省',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京市',
                            children: [
                                {value: 'xuanwu', label: '玄武区'},
                            ],
                        },
                    ],
                },
            ]
        }
    },
    computed: {
        formStyles() {
            return {
                maxWidth: '600px',
                margin: '0 auto'
            }
        },
        stepStyles() {
            return {
                maxWidth: '800px',
                margin: '24px auto'
            }
        },
        descriptionStyles() {
            return {
                maxWidth: '400px',
                margin: '24px auto'
            }
        }
    }
}
