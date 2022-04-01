const express = require("express");
const http = require("http");
const createApplication = require("./app");
const router = require("./routes");

const bootstrap = async () => {
  const app = express();
  app.use(router);

  const httpServer = http.createServer(app);

  createApplication(httpServer, {
    cors: {
      origin: "*",
    },
  });
  const port = 7837;

  httpServer.listen(port, () => {
    console.log(`server listening on http://localhost:${port}`);
  });
};

bootstrap().catch((bootstrapError) => {
  console.error(bootstrapError);
});
