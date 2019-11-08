const fs = require('fs');
const path = require('path');
const basePath = path.resolve(__dirname, '../src');

const dirName = process.argv[2];
if (!dirName) {
    console.error("Error: Filename can not be empty!");
    console.error("Example: npm run add:component Filename");
    process.exit(0);
}

const dirPath = `${basePath}/components/${dirName}`;

const vueTemplate = `<template>
    <div class="${dirName.toLowerCase()}"></div>
</template>

<script>
export default {
    name: "${dirName}",
    props:{},
    mounted(){},
}
</script>
`;

const jsTemplate = `import ${dirName} from './${dirName}';
import './style.scss';

export default ${dirName};
`;

const scssTemplate = `.${dirName.toLowerCase()}{}`;

fs.mkdirSync(dirPath);
process.chdir(dirPath);
fs.writeFileSync(`${dirPath}/${dirName}.vue`, vueTemplate);
fs.writeFileSync(`${dirPath}/index.js`, jsTemplate);
fs.writeFileSync(`${dirPath}/style.scss`, scssTemplate);

process.exit(0);
