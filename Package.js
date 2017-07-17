Package.describe({
  name: 'port80labs:i18n',
  version: '2.0.3',
  summary: 'Lightweight, reactive, isomorphic, extendable i18n package for meteor using MongoDB',
  git: 'https://github.com/port80labs/meteor-i18n',
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
    'isobuild:compiler-plugin@1.0.0'
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
