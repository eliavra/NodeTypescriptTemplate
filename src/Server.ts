import ControllerExample from "./Controller/ControllerExample"
import App from './app'
const {
    PORT,
} = process.env;

let controllerExample = new ControllerExample();

const app = new App(
    [
        controllerExample
    ],
    PORT,
  );
  
  app.listen();