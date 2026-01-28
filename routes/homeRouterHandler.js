// import homeRouteHandler from "./routes/homeRouteHandler.js"
//     const routerHandler = (req,res)=>{

//        res.write(`
//         <html>
//             <head>
//                 <title>Home Page</title>
//                 <h1> hii ,welcome</h1>
//             </head>
//             <body>
//             <h1>
//                 <a href="/register">Go to Register Page</a>
//                  </h1>
//             </body>
//         </html>
        
//        `)
//         }
        

//     export default homeRouteHandler;
    
const homeRouteHandler = (req,res)=>{
     res.write(
            `
            <html>
            <head>
            <title>
            Home Page
            </title>
            <body>
            <h1>
            Hii , welcome to our project !!!
            </h1>
            <a href="/register">Click here to register yourself ......</a>
            </body>
            </html>

            `
        )
        return res.end()
}
export default homeRouteHandler;

