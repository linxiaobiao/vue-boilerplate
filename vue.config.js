const path = require('path')
const Mock = require('mockjs')
const projectName = process.env.BASE_URL
const VConsolePlugin = require('vconsole-webpack-plugin')

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
  },
  configureWebpack: config => {
    const buildEnv = process.env.npm_config_set_env || ''

    const tmp = {
      plugins: []
    }

    // 引入vconsole
    tmp.plugins.push(new VConsolePlugin({
      enable: buildEnv && buildEnv !== 'prd'
    }))

    return tmp
  },
}
