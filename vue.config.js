module.exports = {
    css: {
      loaderOptions: {
        less: {
          modifyVars: {
            'primary-color': '#fff',
            '@link-color': '#000000', // 链接色
            '@text-color': '#000000', // 主文本色
            '@btn-primary-color': '#312CD1',
            '@btn-border-radius-base':'0',
            '@btn-height-base': '50px',
            '@padding-md': '31px'
            // 'link-color': '#1DA57A',
            // 'border-radius-base': '2px',
          },
          javascriptEnabled: true
        }
      }
    }
  }