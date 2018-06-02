# mime-wrapper

This is a wrapper for the node-mime module by broofa.
It allows you to use node-mime with Angular-CLI projects.

## Install

```sh
$ npm install mime-wrapper mime
```

## Usage

In Angular:
```js
import { mimeTypes } from "mime-wrapper";

mimeTypes.lookup("file.png");
```

## Why

If you use the module node-mime in Angular-CLI Projects version 6, you will see this error:
> ERROR in ./node_modules/mime/index.js
Module not found: Error: Can't resolve './types/other' in '/www/mime-type-ng/node_modules/mime'
ERROR in ./node_modules/mime/index.js
Module not found: Error: Can't resolve './types/standard' in '/www/mime-type-ng/node_modules/mime'

In Angular-CLI projects you cannot modify the webpack config to resolve other extensions than ".js" and ".ts". This package fixes this, without the need of ```ng eject```.