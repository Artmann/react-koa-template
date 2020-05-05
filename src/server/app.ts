import Koa from 'koa';
import koaLogger from 'koa-logger';
import Router from 'koa-router';
import serve from 'koa-static';
import { join } from 'path';

import { corgis } from './api/corgis';

const app = new Koa();
const router = new Router();

router.get('/api/corgis', corgis);

app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(serve(join(__dirname, '..', '..', 'dist', 'app')))
  .use(koaLogger());

export default app;
