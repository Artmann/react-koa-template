import { promises as fs } from 'fs';
import Koa, { Context } from 'koa';
import koaLogger from 'koa-logger';
import mount from 'koa-mount';
import Router from 'koa-router';
import serve from 'koa-static';
import { join } from 'path';
import { createElement } from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../app/app';
import { corgis } from './api/corgis';

const app = new Koa();
const router = new Router();

const staticsPath = join(__dirname, '..', '..', 'dist', 'statics');
const statics = serve(staticsPath);

router.get('/api/corgis', corgis);

router.get('/*', async function(context: Context) {
  const componentMarkup = ReactDOMServer.renderToString(createElement(App));
  const template = await fs.readFile(join(staticsPath, 'index.html'),  'utf-8');

  const html = template.replace('<div id="root"></div>', `<div id="root">${ componentMarkup }</div>`);

  context.body = html;
});

app
  .use(mount('/statics', statics))
  .use(router.routes())
  .use(router.allowedMethods())
  .use(koaLogger());

export default app;
