# meteor-i18n - 0.0.5 - alpha
Lightweight, reactive, isomorphic, extendable i18n package for meteor using MongoDB

## Usage

```js
i18n.setDefaultLanguage('en')
i18n.addLanguage('de', 'Deutsch')
i18n.add({
  en: 'Hello Dolly',
  de: 'Hallo Dolly',
  it: 'Ciao Dolly'
})
i18n.setLanguage('en')
i18n.getLanguage()
// -> en
i18n.setLanguage('it')
i18n.get('Hello Dolly')
// -> 'Ciao Dolly'
i18n.get('Hello Dolly', 'de')
// -> 'Hallo Dolly'
```

```html
<p>{{ i18nget "Hello Dolly" }}</p>
```

The name of the default-helper is kind of clunky. So I'd add the following helper:

```js
Template.registerHelper('_', i18n.get)
```

## API
### i18n.add(translations, callback)
Adds a translation to the DB. Translations can be an object or an array of objects.

### i18n.get(key[, languageKey])
Returns a translation for either the passed language or the current one.

### i18n.getAll(key)
Returns an object with all translations with the key.

### i18n.setDefaultLanguage(language)
Sets a default language.

### i18n.addLanguage(key, name)
Adds a new language.

### i18n.setLanguage(language)
Sets the current language.

### i18n.getLanguage()
Returns the current language. Falls back to the default language and the first language added

### i18n.listLanguage()
Returns an array of all added languages in the following format:
```js
{
  key: key,
  name: val
}
```

### i18n.updateTranslations()
This package stores all Translations in the database. `i18n` initializes, `i18n.updateTranslations` is called, which takes all data inside the DB and adds it to a reactive dictionary. The translations are stored inside of that object with the default language's translation. So when you call `get`, the data is retrieved from that dictionary using the first argument as a key. This function is mainly meant for internal use.

### Helper: i18nget
An interface to `i18n.get`.

### Helper: i18nList
An interface to `i18n.listLang`.

# TODO
* smarter publish functions
* read JSON files
