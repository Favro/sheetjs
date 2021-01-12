Package.describe({
  name: 'favro:xlsx',
  summary: "Wrapper around npm package sheetjs",
  version: "1.0.0",
});

Package.onUse(function(api) {
  api.addFiles('xlsx.mini.js', "client");
  api.export('XLSX');
});
