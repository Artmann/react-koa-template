import app from './app';

(function() {
  const port = process.env.PORT || '3000';

  app.listen(port, () => {
    console.log(`Listening on port ${ port }.`);
  });
})();
