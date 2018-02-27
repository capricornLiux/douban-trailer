const Koa = require('koa');
const app = new Koa();
const pug = require('pug');
const {htmlTpl, ejsTpl, pugTpl} = require('./views');
const ejs = require('ejs');

app.use(async(ctx, next) => {
    ctx.type = 'text/html; charset=utf-8';
    // ctx.body = normal; ctx.body = ejs.render(ejsTpl, {     name: 'lance',
    // address: 'China' })
    ctx.body = pug.render(pugTpl, {
        name: 'lucy',
        address: 'Singapore'
    })
})

app.listen(8899);
