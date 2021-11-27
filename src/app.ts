import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as http from 'http';

class App {
    public app: express.Application;
    public port: number;

    constructor(controllers, port) {
        this.app = express();
        this.port = Number(port);
     
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
      }

      private initializeMiddlewares() {
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(bodyParser.urlencoded({ extended: true }));
      }
     
      private initializeControllers(controllers) {
        controllers.forEach((controller) => {
          this.app.use('/', controller.router);
        });
      }

      public listen() {
        let httpServer = http.createServer(this.app).listen(process.env.PORT || this.port, () => {
        });
    
        httpServer.timeout = 3600000;
      }
    
}

export default App