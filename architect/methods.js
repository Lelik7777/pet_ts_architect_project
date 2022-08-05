const _ = require('lodash');

const toCamelCase = (str) => _.upperFirst(_.camelCase(str));

const toKebabCase = (str) => _.kebabCase(str);

module.exports = {
    toKebabCase,
    toCamelCase,
};

