module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'rc-shimmer',
      externals: {
        react: 'React'
      }
    }
  }
}
