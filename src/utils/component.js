export default {
    isExist(value, validValues) {
        for (let i = 0; i < validValues.length; i++) {
            if (value === validValues[i]) return true;
        }
        return false;
    },
    findComponentUpward: function (context, componentName, componentNames) {
        if (typeof componentName === 'string') {
            componentNames = [componentName];
        } else {
            componentNames = componentName;
        }

        let parent = context.$parent;
        let name = parent.$options.name;
        while (parent && (!name || componentNames.indexOf(name) < 0)) {
            parent = parent.$parent;
            if (parent) name = parent.$options.name;
        }
        return parent;
    },
    findComponentDownward: function (context, componentName) {
        const childrens = context.$children;
        let children = null;

        if (childrens.length) {
            for (const child of childrens) {
                const name = child.$options.name;
                if (name === componentName) {
                    children = child;
                    break;
                } else {
                    children = this.findComponentDownward(child, componentName);
                    if (children) break;
                }
            }
        }
        return children;
    },
    findComponentsDownward: function (context, componentName) {
        return context.$children.reduce((components, child) => {
            if (child.$options.name === componentName) components.push(child);
            const foundChildren = this.findComponentsDownward(child, componentName);
            return components.concat(foundChildren);
        }, []);
    },
    findComponentsUpward: function (context, componentName) {
        let parents = [];
        const parent = context.$parent;
        if (parent) {
            if (parent.$options.name === componentName) parents.push(parent);
            return parents.concat(this.findComponentsUpward(parent, componentName));
        } else {
            return [];
        }
    },
    findBrothersComponents: function (context, componentName, exceptMe = true) {
        let res = context.$parent.$children.filter(item => {
            return item.$options.name === componentName;
        });
        let index = res.findIndex(item => item._uid === context._uid);
        if (exceptMe) res.splice(index, 1);
        return res;
    }
}
