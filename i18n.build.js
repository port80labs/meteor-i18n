'use strict';

Plugin.registerCompiler({
  extensions: ['i18n.json'],
  filenames: []
}, () => new TranslationImport);

class TranslationImport {
  processFilesForTarget(files) {
    files.forEach((file) => {
      const params = [
        file.getContentsAsString(),
      ]
      if (file.getBasename().split('.i18n.json')[0].split('.')[1] !== undefined) {
        params.push(`'${file.getBasename().split('.i18n.json')[0].split('.')[1]}'`)
      }

      file.addJavaScript({
        path: `${file.getPathInPackage()}.js`,
        data: [
          'if(Meteor.isServer) i18n.add(',
          params.join(','),
          ')',
        ].join('')
      })
    });
  }
}
