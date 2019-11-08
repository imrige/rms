import {message} from 'ant-design-vue/es';

let lessNodeAppended;
// const hideMessage = message.loading("更新主题中...", 0);

function build(value) {
    if (!window.less) return;

    setTimeout(() => {
        window.less.modifyVars({
            '@primary-color': value
        }).then(() => hideMessage()).catch(e => {
            console.log(e);
            message.error('Failed to update theme');
            hideMessage();
        })
    })
}

export default {
    update(value) {
        if (!value) return;
    }
}
