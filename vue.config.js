const DEV_PATH = "/";
const PROD_PATH = "/rms";

function isProduct() {
    return process.env.NODE_ENV === 'production';
}

module.exports = {
    publicPath: isProduct() ? PROD_PATH : DEV_PATH,
    devServer: {
        port: 8000,
        proxy: 'http://localhost:9000'
    }
};
