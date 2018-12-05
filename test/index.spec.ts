import * as Koa from 'koa';
import * as request from 'supertest';
import 'should';

import responseTime from '../src';

describe('Test koa response time', () => {
  it('hrtime: false', () => {
    const app = new Koa();

    app.use(responseTime());

    return request(app.listen())
      .get('/')
      .expect('x-response-time', /^[0-9]{1,3}ms$/)
      .expect(404);
  });

  it('hrtime: true', () => {
    const app = new Koa();

    app.use(responseTime({
      hrtime: true,
    }));

    return request(app.listen())
      .get('/')
      .expect('x-response-time', /^[0-9]{1,3}.[0-9]{3,6}ms$/)
      .expect(404);
  });
});
