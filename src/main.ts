import express from "express";
import * as dotenv from "dotenv";
import exampleRouter from "./routes/exampleRoutes";

dotenv.config();
class Bootstrap {
  public readonly app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());

    this.loadRoutes();
  }

  listen(port: string) {
    this.app.listen(port, () => {
      console.log(`The api project is running at the port: ${port}`);
    });
  }

  loadRoutes() {
    this.app.route("/").get((req, res) => {
      res.send({
        version: "1.0.0",
      });
    });

    this.app.use("/", exampleRouter);
  }
}

export default new Bootstrap();
