import { Context, Next } from 'koa';

export async function corgis(context: Context, next: Next): Promise<void> {
  context.body = {
    corgis: [
      { id: 1, image: 'OIejsKL.jpg', text: 'Meet Rio, my newest coworker.' },
      { id: 2, image: 'jgeckmc2iig41.jpg', text: 'Bliss!' },
      { id: 3, image: 'k9i7YLN.jpg', text: 'Hello I am table.' },
      { id: 4, image: 'rgoksw8lvqj01.jpg', text: 'Corgi Five-O.' },
      { id: 5, image: 'cdgz8cwgovez.jpg', text: 'Most boopable snout ever.' },
      { id: 6, image: 'arx75ms6gec01.jpg', text: 'Pretzel found two tennis balls under the couch.' }
    ]
  };
}
