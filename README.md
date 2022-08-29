# tocbase-plugin-auto-id

A [tocbase](https://github.com/ashutoshbw/tocbase) plugin for automatically generating ids of headings.

## Installing
### From CDN
In your HTML page's `<head>`, include the following alongside `tocbase` library:
```html
<script  src="https://unpkg.com/tocbase-plugin-auto-id@2.0.1/dist/cdn.umd.min.js"></script>
```

This will result in a `autoID` variable containing a function.

### Using node and bundler
To install it run in your terminal:
```
npm i tocbase-plugin-auto-id
```

Import it in your script like below if you are using ESM syntax:
```js
import autoID from "tocbase-plugin-auto-id";
```

You can also use use common js syntax:
```js
const autoID = require("tocbase-plugin-auto-id");
```

Follow your bundler's instructions for generating the output file and then load it in your HTML page through script tag to use it.

## Usage
If used, it must be used as the first plugin:

```js
tocbase({
  plugins: [autoID()]
})
```


## Options
### `separator`
Type: `String`
Default: `"-"`

This is the separator to join words of a heading.


### `lowerCase`
Type: Any value
Default: `undefined`

If it's a truthy value the resulted id is lowercased otherwise the case remains intact.
