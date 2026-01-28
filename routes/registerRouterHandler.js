// const registerRouterHandler = (req, res) => {
//     res.write(`
//         <!DOCTYPE html>
//         <html>
//         <head>
//             <title>Register Page</title>
//         </head>
//         <body>
//             <h1>Registration Form</h1>

//             <form action="/username" method="POST">
//                 <div>
//                     <label for="username">Username:</label>
//                     <input 
//                         type="text" 
//                         id="username" 
//                         name="username" 
//                         placeholder="Write your username"
//                     />
//                 </div>

//                 <div>
//                     <label for="desc">Description:</label>
//                     <input 
//                         type="text" 
//                         id="desc" 
//                         name="description" 
//                         placeholder="Write your description"
//                     />
//                 </div>

//                 <div>
//                     <input type="submit" />
//                 </div>
//             </form>
//         </body>
//         </html>
//     `);

//     res.end();
// };

// export default registerRouterHandler;

const registerRouteHandler = (req,res)=>{
    res.write(`<head>
        <title>
            Register Page
        </title>
    <body>
        <h1>
            Registeration Form
        </h1>
        <div>
            <form action="/userInfo" method = "POST">
            <div>
            <label for="userName">User Name : </label>
            <input type="text" id="userName" placeholder="Write Your userName" name="userName"/>
        </div>
        <div>
            <label for="desc">Description</label>
            <input type="text" id="desc" placeholder="Write Your description" name="description"/>
        </div>
        <div>
            <input type="submit"/>
        </div>
            </form>
        </div>
    </body>
</head>
`)
return res.end();
}
export default registerRouteHandler;
