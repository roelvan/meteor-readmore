Package.describe({
  name: 'rova:jquery-readmore',
  summary: 'A smooth, lightweight jQuery plugin for collapsing and expanding long blocks of text with "Read more" and "Close" links.',
  version: '0.0.1',
  git: 'git@github.com:roelvan/meteor-readmore.git'
});

Package.on_use(function (api, where) {
  api.add_files(['readmore.js/readmore.js'], 'client');
});
