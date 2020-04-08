const proxy = [{
    context: '/',
    target: 'https://girardi.blumenau.ufsc.br/api/list.php',
    pathRewrite: {
        '^/': ''
    }
}];
module.exports = proxy;