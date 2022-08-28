# tocbase-plugin-auto-id

A [tocbase](https://github.com/ashutoshbw/tocbase) plugin for automatically generating ids of headings.

## Usage

If used, it must be used as the first plugin:

```html>
<script type="module">
import {tocbase} from "https://unpkg.com/tocbase@latest/dist/cdn.es.min.js";
import autoID from "https://unpkg.com/tocbase-plugin-auto-id@latest/dist/cdn.es.min.js"

tocbase({
  plugins: [autoID()]
})
</script>
```
