# Gutenberg Parser

> A npm module that parses gutenberg data built on [Ivan Enderlin´s](https://github.com/Hywan) project [gutenberg-parser-rs](https://github.com/Hywan/gutenberg-parser-rs/releases)

## Install

```
$ npm i @hugohammarstrom/gutenberg-parser
```

## Usage

```js
const parser = require("@hugohammarstrom/gutenberg-parser").default;

(async function() {
  const res = await parser.root(
    "<!-- wp:html --><p>HTML TEXT</p><!-- /wp:html -->"
  );
  console.log(res);
})();
```

## Related

- [gutenberg-parser-rs](https://github.com/Hywan/gutenberg-parser-rs/releases)
