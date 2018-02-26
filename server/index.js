const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
    ctx.body = 'trailer';
})

app.listen(8899);
