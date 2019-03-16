import { Context, Middleware } from 'koa';

export interface Options {
  /**
   * 
   * `true` to use time in nanoseconds.
   * `false` to use time in milliseconds.
   *  Default is `false` to keep back compatible.
   */
  hrtime?: boolean;
}

/**
 * Add X-Response-Time header field.
 */
export default (options?: Options): Middleware => {
  const hrtime = options && options.hrtime;

  return async function koexResponseTime(ctx: Context, next: () => Promise<void>) {
    const start = process.hrtime();

    await next();

    const deltaHr = process.hrtime(start);
    let delta = deltaHr[0] * 1000 + deltaHr[1] / 1000000;
    if (!hrtime) {
      // truncate to milliseconds
      delta = Math.round(delta);
    }

    ctx.set('X-Response-Time', `${delta}ms`);
  };
};
