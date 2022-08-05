module.exports = {
    aliases: {
        rs: 'react-component',
        s: 'store',
        i: 'index',
    },
    map: {
        'test': {
            test: {template: 'file', constName: 'GLOBAL_TEST', value: 100},
            file: {template: 'file2', nameObj: 'user', name1: 'bob', age: 33, job: 'programmer', teamLead: true},
        },
        'components/user': {
            User : {template: 'component', componentName: 'User'},
        },
        'components/page': {
            PageMain: {template: 'component', componentName: 'page name '},
        },
        'custom_input':{
            input:{template:'input',type:'text'}
        }
    }
}