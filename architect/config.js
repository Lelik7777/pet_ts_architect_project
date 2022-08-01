module.exports={
    output:'src',
    replace:false,
    clean:false,
    itrStart:'{{',
    itrEnd:'}}',
    itrFileNameStart:'[',
    itrFileNameEnd:']',
    templateExt:'.txt',
    templates: {
        endpoints: {
            clean: true,
            replace: true,
            watch: ['swagger.js'],
        },
    },
}