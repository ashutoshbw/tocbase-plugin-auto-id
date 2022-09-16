# tocbase-plugin-auto-id

A [tocbase](https://github.com/ashutoshbw/tocbase) plugin for automatically generating ids of headings.

## Requirements
`tocbase` version 8.3.5 or up.

## Installing
### From CDN
In your HTML page's `<head>`, include the following alongside `tocbase` library:
```html
<script  src="https://unpkg.com/tocbase-plugin-auto-id@3.0.2/dist/cdn.umd.min.js"></script>
```

This will result in a `autoId` variable containing a function.

### Using node and bundler
To install it run in your terminal:
```
npm i tocbase-plugin-auto-id
```

Import it in your script like below if you are using ESM syntax:
```js
import autoId from "tocbase-plugin-auto-id";
```

You can also use common js syntax:
```js
const autoId = require("tocbase-plugin-auto-id");
```

Follow your bundler's instructions for generating the output file and then load it in your HTML page through script tag to use it.

## Usage
If used, it must be used as the first plugin:

```js
const toc = createToc({ 
  plugins: [ autoId() ]
})
```

## Options
### `separator`
Type: `String`<br>
Default: `"-"`

This is the separator to join words of a heading.


### `lowerCase`
Type: Any value<br>
Default: `1`

If it's a truthy value the resulted id is lowercased otherwise the case remains intact.
