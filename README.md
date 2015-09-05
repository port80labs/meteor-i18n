# meteor-i18n - 0.0.5 - alpha
Lightweight, reactive, isomorphic, extendable i18n package for meteor using MongoDB

## Usage

_server_

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

_client_

By default the client can't add translations. You can simply set up allow/deny rules on the database.

```js
i18n.setDefaultLanguage('en')
i18n.loadAll(function () {
  i18n.setLanguage('it')
  i18n.get('Hello Dolly')
  // -> 'Ciao Dolly'
  i18n.get('Hello Dolly', 'de')
})
```

```html
<p>{{ i18nget "Hello Dolly" }}</p>
```

The name of the default-helper is kind of clunky. So I'd add the following helper:

```js
Template.registerHelper('_', i18n.get)
```

## API
### i18n.add(translations, callback) - _common_
Adds a translation to the DB. Translations can be an object or an array of objects.

### i18n.get(key[, languageKey]) - _common_
Returns a translation for either the passed language or the current one.

### i18n.getAll(key) - _common_
Returns an object with all translations with the key.

### i18n.setDefaultLanguage(language) - _common_
Sets a default language.

### i18n.addLanguage(key, name) - _common_
Adds a new language.

### i18n.setLanguage(language) - _common_
Sets the current language.

### i18n.getLanguage() - _common_
Returns the current language. Falls back to the default language and the first language added

### i18n.listLanguage() - _common_
Returns an array of all added languages in the following format:
```js
{
  key: key,
  name: val
}
```

### i18n.loadSpecific(language, callback) - _client_
Loads translations for a specific language on the client and the calls the `callback`.

### i18n.loadSpecific(callback) - _client_
Loads all translation on the client and calls the callback function.

### i18n.db
The Mongo DB.

### Helper: i18nget - _common_
An interface to `i18n.get`.

### Helper: i18nList - _common_
An interface to `i18n.listLang`.

# TODO
* smarter publish functions
* read JSON files
