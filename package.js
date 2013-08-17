Package.describe({
  summary: "Knockout Pager"
});

Package.on_use(function (api) {
  api.use('knockout-client', 'client');
  api.imply('knockout-client', 'client');
  api.use('jquery', 'client');
  api.add_files(['lib/pager.js', 'lib/pager.css'], 'client');
  if (api.export) {
    api.export('pager', 'client');
  }
});
