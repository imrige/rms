module.exports = {
    devServer: {
        port: 8000,
        proxy: 'http://localhost:9000'
    },
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    'primary-color': '#1DA57A',
                    'link-color': '#1DA57A',
                    'border-radius-base': '2px',
                },
                javascriptEnabled: true
            }
        }
    }
};
