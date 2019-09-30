const Router = require('koa-router')
const fs =require('fs')
const router = new Router()
router.get('/', async (ctx, next) => {
    var htmlFile = await (new Promise(function(resolve, reject){
        fs.readFile('../static.index.html', (err, data) => {
            if (err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    }))
    ctx.type = 'html';
    ctx.body = htmlFile;
    await next()
})

router.get('/home', async (ctx, next) => {
    var htmlFile = await (new Promise(function(resolve, reject){
        fs.readFile('./static/index.html', (err, data) => {
            if (err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    }))
    ctx.type = 'html';
    ctx.body = htmlFile;
    await next()
})
router.get('/company', async (ctx, next) => {
    var htmlFile = await (new Promise(function(resolve, reject){
        fs.readFile('./static/company.html', (err, data) => {
            if (err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    }))
    ctx.type = 'html';
    ctx.body = htmlFile;
    await next()
})
router.get('/development', async (ctx, next) => {
    var htmlFile = await (new Promise(function(resolve, reject){
        fs.readFile('./static/development.html', (err, data) => {
            if (err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    }))
    ctx.type = 'html';
    ctx.body = htmlFile;
    await next()
})
router.get('/honor', async (ctx, next) => {
    var htmlFile = await (new Promise(function(resolve, reject){
        fs.readFile('./static/honor.html', (err, data) => {
            if (err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    }))
    ctx.type = 'html';
    ctx.body = htmlFile;
    await next()
})
router.get('/profile', async (ctx, next) => {
    var htmlFile = await (new Promise(function(resolve, reject){
        fs.readFile('./static/profile.html', (err, data) => {
            if (err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    }))
    ctx.type = 'html';
    ctx.body = htmlFile;
    await next()
})
router.get('/target', async (ctx, next) => {
    var htmlFile = await (new Promise(function(resolve, reject){
        fs.readFile('./static/target.html', (err, data) => {
            if (err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    }))
    ctx.type = 'html';
    ctx.body = htmlFile;
    await next()
})
router.get('/factory', async (ctx, next) => {
    var htmlFile = await (new Promise(function(resolve, reject){
        fs.readFile('./static/factory.html', (err, data) => {
            if (err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    }))
    ctx.type = 'html';
    ctx.body = htmlFile;
    await next()
})
router.get('/factory/anhui', async (ctx, next) => {
    var htmlFile = await (new Promise(function(resolve, reject){
        fs.readFile('./static/anhui.html', (err, data) => {
            if (err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    }))
    ctx.type = 'html';
    ctx.body = htmlFile;
    await next()
})
router.get('/factory/beijing', async (ctx, next) => {
    var htmlFile = await (new Promise(function(resolve, reject){
        fs.readFile('./static/beijing.html', (err, data) => {
            if (err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    }))
    ctx.type = 'html';
    ctx.body = htmlFile;
    await next()
})
router.get('/factory/chongqing', async (ctx, next) => {
    var htmlFile = await (new Promise(function(resolve, reject){
        fs.readFile('./static/chongqing.html', (err, data) => {
            if (err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    }))
    ctx.type = 'html';
    ctx.body = htmlFile;
    await next()
})
router.get('/factory/fujian', async (ctx, next) => {
    var htmlFile = await (new Promise(function(resolve, reject){
        fs.readFile('./static/fujian.html', (err, data) => {
            if (err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    }))
    ctx.type = 'html';
    ctx.body = htmlFile;
    await next()
})
router.get('/factory/jiangsu', async (ctx, next) => {
    var htmlFile = await (new Promise(function(resolve, reject){
        fs.readFile('./static/jiangsu.html', (err, data) => {
            if (err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    }))
    ctx.type = 'html';
    ctx.body = htmlFile;
    await next()
})
router.get('/factory/sichuan', async (ctx, next) => {
    var htmlFile = await (new Promise(function(resolve, reject){
        fs.readFile('./static/sichuan.html', (err, data) => {
            if (err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    }))
    ctx.type = 'html';
    ctx.body = htmlFile;
    await next()
})
router.get('/news', async (ctx, next) => {
    var htmlFile = await (new Promise(function(resolve, reject){
        fs.readFile('./static/news.html', (err, data) => {
            if (err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    }))
    ctx.type = 'html';
    ctx.body = htmlFile;
    await next()
})
router.get('/partner', async (ctx, next) => {
    var htmlFile = await (new Promise(function(resolve, reject){
        fs.readFile('./static/partner.html', (err, data) => {
            if (err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    }))
    ctx.type = 'html';
    ctx.body = htmlFile;
    await next()
})
router.get('/cooperation', async (ctx, next) => {
    var htmlFile = await (new Promise(function(resolve, reject){
        fs.readFile('./static/cooperation.html', (err, data) => {
            if (err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    }))
    ctx.type = 'html';
    ctx.body = htmlFile;
    await next()
})
router.get('/join', async (ctx, next) => {
    var htmlFile = await (new Promise(function(resolve, reject){
        fs.readFile('./static/join.html', (err, data) => {
            if (err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    }))
    ctx.type = 'html';
    ctx.body = htmlFile;
    await next()
})
router.get('/news/:id', async (ctx, next) => {
    var htmlFile = await (new Promise(function(resolve, reject){
        fs.readFile('./static/detail.html', (err, data) => {
            if (err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    }))
    ctx.type = 'html';
    ctx.body = htmlFile;
    await next()
})
module.exports = router