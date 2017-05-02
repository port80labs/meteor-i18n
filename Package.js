Package.describe({
  name: 'port80labs:i18n',
  version: '2.0.0',
  summary: 'Lightweight, reactive, isomorphic, extendable i18n package for meteor using MongoDB'
})

Package.onUse(function(api) {
  api.export('i18n')
  api.versionsFrom('METEOR@1.2')
  api.use([
    'underscore',
    'ecmascript',
    'promise',
    'reactive-dict',
    'mongo',
    'templating',
    'tracker',
    'isobuild:compiler-plugin'
  ])
  api.addFiles([
    'i18n.lib.js',
    'i18n.js'
  ])
})

Package.registerBuildPlugin({
  name: 'i18n.json',
  sources: ['i18n.build.js']
})
