const req = require.context('.', true, /\.(\/[^/]+)*\/index\.jsx$/);

req.keys().forEach(key => {
  const componentName = key.replace(/^.+\/([^/]+)\/index\.jsx/, '$1');

  Object.keys(req(key)).forEach(item => {
    if (item === 'default') {
      module.exports[componentName] = req(key)[item];
    } else {
      module.exports[item] = req(key)[item];
    }
  });
});