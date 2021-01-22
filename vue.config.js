module.exports = {
  configureWebpack:{
    resolve: {
      //extension: ['js', 'vue', 'css'],
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}