## Information

Since version 2.4.3 of the `mime` package, this wrapper is not needed anymore. Now you can use it directly with Angular. See [this issue](https://github.com/broofa/node-mime/issues/208).

# mime-wrapper

This is a wrapper for the [node-mime](https://github.com/broofa/node-mime) module by [broofa](https://github.com/broofa).
It allows you to use node-mime with Angular-CLI projects.

## Install

```sh
$ npm install mime-wrapper mime
```

## Usage

In Angular:
```js
import { mimeTypes } from "mime-wrapper";

mimeTypes.getType("file.png");
mimeTypes.getExtension("text/plain");
```

## Why

If you use the module node-mime in Angular-CLI Projects version 6, you will see this error:
> ERROR in ./node_modules/mime/index.js
Module not found: Error: Can't resolve './types/other' in '/www/mime-type-ng/node_modules/mime'
ERROR in ./node_modules/mime/index.js
Module not found: Error: Can't resolve './types/standard' in '/www/mime-type-ng/node_modules/mime'

In Angular-CLI projects you cannot modify the webpack config to resolve other extensions than ".js" and ".ts". This package fixes this, without the need of ```ng eject```.

## Thanks

Thanks to [pfeigl](https://github.com/pfeigl).
([issue](https://github.com/jshttp/mime-types/issues/50#issuecomment-390932678))
