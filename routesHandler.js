// import routerHandler from "./routes/homeRouterHandler.js";
// import userinfoRouteHandler from "./routes/userinfoRouteHandler.js";
// import registerRouterHandler from "./routes/registerRouterHandler.js";  
// const routeHandler = (req, res) => {
//     if (req.url=="/") {
//         routerHandler(req, res);
//     }
//     if(req.url=="/register"){
//         registerRouterHandler(req, res);
//     }
//     if(req.url=="/userinfo" && req.method=="POST"){
//         userinfoRouteHandler(req, res);
//     }
// }
// export default routeHandler;

import homeRouteHandler from "./routes/homeRouterHandler.js";
import registerRouteHandler from "./routes/registerRouterHandler.js";
import usersInfoRouteHandler from "./routes/userInfoRouteHandler.js";

const routeHandler =(req,res)=>{
    if (req.url=="/"){
       homeRouteHandler(req,res);
    }
    if(req.url=="/register"){
        registerRouteHandler(req,res);
    }
    if(req.url=="/userInfo" && req.method=='POST'){
        usersInfoRouteHandler(req,res);
    }
}

export default routeHandler;