# React + Koa Template

This template hooks you up with everything you need to build an React SPA with a Koa backend.

## Quick Start

Create your own repository from this template our clone it as is.

Install the dependecies

```sh
yarn
```

Run the application

```sh
yarn dev
```

Then visit http://localhost:3000/ to see it in action.

## The application

### Styling

Make your application shine with [Tailwind CSS](https://tailwindcss.com/), a utility-first CSS framework for
rapidly building custom designs.

Tailwind works great with a component based approach such as React and makes it easy for people of different levels of CSS knowledge to create beatiful pages.

```ts
export default function CorgiCard({ image, text }: CorgiCardProps): ReactElement {
  return (
    <div className="bg-white border-gray-400 mb-8 mx-4 p-4">
      <img src={ `/images/${ image }`} className="block border-gray-400 h-64 mb-4 object-cover w-48" />

      <div className="w-48">
        <p className="break-normal px-4 text-sm text-center text-gray-700">
          { text }
        </p>
      </div>
    </div>
  );
}
```

Tailwind CSS is built using PostCSS and that's setup to use within the project. Tailwind can be customized using the configuration file `src/app/tailwind.js`.

You might have noticed that the CSS bundle is gigantic in size. This is because TailwindCSS generates a ton of different classes you can use. In production, PurgeCSS is scanning your components and removes unused styles. For this to work correctly, don't use string cocatenation to build your class names. [Learn more.](https://tailwindcss.com/docs/controlling-file-size/)

## Testing

TBD

## Linting

TBD

## Deploy

The whole application can be built with the command

```sh
yarn build
```

Once it has been built, you can start it with

```sh
yarn start
```

The server will listen to port 3000 default it can be overriden by setting the environment variable `PORT`.
