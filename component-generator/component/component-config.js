var Config = {
    get: (name) => {
        return {
            filename: `${name}-config.js`,
            content: `
import Boot from './${name.toLowerCase()}-boot.js';

export default {
    template: \`${name.toLowerCase()}-component.html\`,
    style: \`${name.toLowerCase()}-component.css\`,
    tag: \'${name.toLowerCase()}-component\',
    isShadowDom: false,
    shadowMode: 'open',
    binder: 'data',
    boot: Boot
}`
        }
    }
}

module.exports = Config;