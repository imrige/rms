export default {
    data() {
        return {
            form: this.$form.createForm(this),
            rules: {
                username: [
                    'username',
                    {
                        rules: [
                            {required: true, message: '账号不能为空'}
                        ],
                        validateTrigger: ['blur']
                    }
                ],
                password: [
                    'password',
                    {
                        rules: [
                            {required: true, message: '密码不能为空'},
                            {min: 3, max: 12, message: '密码长度不能小于3位，大于16位'}
                        ],
                        validateTrigger: ['blur']
                    }
                ],
                remember: [
                    'remember',
                    {
                        valuePropName: 'checked',
                        initialValue: true
                    }
                ]
            }
        }
    },
    computed: {
        formStyles() {
            return {
                maxWidth: '365px',
                margin: '0 auto'
            }
        }
    }
}
