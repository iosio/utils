module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'utils',
      externals: {
        react: 'React'
      }
    }
  }
}
