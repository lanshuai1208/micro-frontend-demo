module.exports = {
    title: '微前端',
    description: '用于微前端技术的学习验证',
    configureWebpack: {
        resolve: {
            alias: {
                '@public': './public'
            }
        }
    }
}