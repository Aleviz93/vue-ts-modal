module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  devServer: {
    proxy: {
      '/api/': {
        target: 'https://admingateway.cgorod.pw/',
        secure: false
      }
    },
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/styles/variables.scss";`
      }
    }
  }
};
