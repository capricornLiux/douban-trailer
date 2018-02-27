const Koa = require('koa');
const app = new Koa();
const { htmlTpl, ejsTpl } = require('./views');
const ejs = require('ejs');

app.use(async (ctx, next) => {
    ctx.type = 'text/html; charset=utf-8';
    // ctx.body = normal;
    ctx.body = ejs.render(ejsTpl, {
        name: 'lance',
        address: 'China'
    })
})

app.listen(8899);
