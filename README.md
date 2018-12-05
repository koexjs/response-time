# koa-response-time

[![NPM version](https://img.shields.io/npm/v/@zcorky/koa-response-time.svg?style=flat)](https://www.npmjs.com/package/@zcorky/koa-response-time)
[![Coverage Status](https://img.shields.io/coveralls/zcorky/koa-response-time.svg?style=flat)](https://coveralls.io/r/zcorky/koa-response-time)
[![Dependencies](https://david-dm.org/@zcorky/koa-response-time/status.svg)](https://david-dm.org/@zcorky/koa-response-time)
[![Build Status](https://travis-ci.com/zcorky/koa-response-time.svg?branch=master)](https://travis-ci.com/zcorky/koa-response-time)
![license](https://img.shields.io/github/license/zcorky/koa-response-time.svg)
[![issues](https://img.shields.io/github/issues/zcorky/koa-response-time.svg)](https://github.com/zcorky/koa-response-time/issues)

> response time header for Koa.

### Install

```
$ npm install @zcorky/koa-response-time
```

### Usage

```javascript
// See more in test
import * as path from 'path';
import responeTime from '@zcorky/koa-response-time';

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