// Meteor package definition.
Package.describe({
  name: 'aramk:jqtree',
  version: '1.0.0',
  summary: 'jQuery tree widget',
  git: 'https://github.com/aramk/jqTree.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.use([
    'coffeescript',
    'jquery',
    'templating',
    'underscore'
    ],'client');
  api.addFiles([
    'tree.jquery.js',
    'jqtree.css',
  ], 'client');
});
