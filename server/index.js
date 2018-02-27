const {resolve} = require('path');
const Koa = require('koa');
const app = new Koa();
const pug = require('pug');
// const {htmlTpl, ejsTpl, pugTpl} = require('./views');
const ejs = require('ejs');
const views = require('koa-views');

app.use(views(resolve(__dirname,'./views'), {
    extension: 'pug'
}))

app.use(async(ctx, next) => {
    // ctx.body = pug.render(pugTpl, {
    //     name: 'lucy',
    //     address: 'Singapore'
    // })
    await ctx.render('index',{
        name: 'Lily',
        address: 'Italy'
    })
})

app.listen(8899);
