Package.describe({
  summary: "Pager.js integrated with with Meteor, creating subpages using Knockout"
});

Package.on_use(function (api) {
  api.use('knockout-client', 'client');
  api.imply('knockout-client', 'client');
  api.use('jquery', 'client');
  api.add_files(['pagerjs/dist/pager.min.js', 'pagerjs/dist/pager.css'], 'client');
  api.add_files('main.js', 'client');
  if (api.export) {
    api.export('pager', 'client');
  }
});
