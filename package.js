Package.describe({
  name: 'rova:jquery-readmore',
  summary: 'jQuery ReadMore.js',
  version: '0.0.1',
  git: 'git@github.com:roelvan/meteor-readmore.git'
});

Package.on_use(function (api, where) {
  api.add_files(['readmore.js/readmore.js'], 'client');
});
