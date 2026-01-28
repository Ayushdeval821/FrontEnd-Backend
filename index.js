// import http from 'http';
// import routeHandler from './routesHandler.js';

// const server = http.createServer(
//     (req, res) => {
//         routeHandler(req, res );
//     }
// )
// server.listen(4000);

//  import http from 'http';
// import routeHandler from './routesHandler.js';

// const server = http.createServer((req, res) => {
//     routeHandler(req, res);
// });

// server.listen(4000, () => {
//     console.log("Server running on port 4000");
// });

import http from "http";
import routeHandler from "./routesHandler.js";
const server = http.createServer(
    (req,res)=>{
        routeHandler(req,res);
    }
)

server.listen(4000);

     