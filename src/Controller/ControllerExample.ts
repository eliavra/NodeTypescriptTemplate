import * as express from 'express';

class ControllerExample{
    public router = express.Router();
    public app = express();

    constructor() {
        this.InitilizeRoutes();       
    }

    private InitilizeRoutes() {
        this.router.post("/exampleEndPoint",this.examplePostEndpoint );
        this.router.get("/exampleEndPoint",this.exampleGetEndpoint );
    }

    examplePostEndpoint  = async (request: express.Request, response: express.Response) => 
    {
        response.json();   
    }

    exampleGetEndpoint  = async (request: express.Request, response: express.Response) => 
    {
        response.json("hey");   
    }
}

export default ControllerExample