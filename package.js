Package.describe({
  name: 'jquery-readmore',
  summary: 'A smooth, lightweight jQuery plugin for collapsing and expanding long blocks of text with "Read more" and "Close" links.'
});

Package.on_use(function (api, where) {
  api.add_files(['readmore.js/readmore.js'], 'client');
});