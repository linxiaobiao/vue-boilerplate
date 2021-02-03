const path = require('path')
const Mock = require('mockjs')
const projectName = process.env.BASE_URL

module.exports = {
  publicPath: projectName,
  outputDir: path.resolve(__dirname, 'dist'),
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/test/demo': {
        target: 'https://xxx',
        changeOrigin: true
      }
    },
    before: function (app) { // 直接用devserver这个服务进行mock
      app.get('/test/demo', function (req, res) {
        res.json(Mock.mock({ ret: 0, data: { name: 'get data' } }))
      })

      app.post('/test/demo2', function (req, res) {
        res.json(Mock.mock({ ret: 0, data: { name: 'post data' } }))
      })
    }

  }
}
