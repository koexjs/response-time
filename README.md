# response-time

[![NPM version](https://img.shields.io/npm/v/@koex/response-time.svg?style=flat)](https://www.npmjs.com/package/@koex/response-time)
[![Coverage Status](https://img.shields.io/coveralls/koexjs/response-time.svg?style=flat)](https://coveralls.io/r/koexjs/response-time)
[![Dependencies](https://img.shields.io/david/koexjs/response-time.svg)](https://github.com/koexjs/response-time)
[![Build Status](https://travis-ci.com/koexjs/response-time.svg?branch=master)](https://travis-ci.com/koexjs/response-time)
![license](https://img.shields.io/github/license/koexjs/response-time.svg)
[![issues](https://img.shields.io/github/issues/koexjs/response-time.svg)](https://github.com/koexjs/response-time/issues)

> response time for koa extend.

### Install

```
$ npm install @koex/response-time
```

### Usage

```javascript
// See more in test
import * as path from 'path';
import responeTime from '@koex/response-time';

import * as Koa from 'koa';
const app = new Koa();

app.use(responeTime());

app.use(ctx => {
  ctx.body = 'hello, world!';
});

app.listen(8000, '0.0.0.0', () => {
  console.log('koa server start at port: 8000');
});
```

### Related
* [koa-response-time](https://github.com/koajs/response-time)