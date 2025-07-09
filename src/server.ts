import app from "./app";

// load server
let server;
const port = 5000;

// bootstrap server
const bootstrap = async () => {
  server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};
// call bootstrap
bootstrap();
