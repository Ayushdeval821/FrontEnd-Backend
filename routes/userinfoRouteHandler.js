// // import fs from 'fs';

// // const usersInfoRouteHandler=(req,res)=>{
// //     // console.log("Hii");
// //     const userData=[];
// //     req.on("data",(chunk)=>
// //     {
// //         userData.push(chunk)
// //     })
// //     req.on('end',()=>{
// //         const parsedUserData = Buffer.concat(userData).toString();
// //         console.log(parsedUserData);
// //         // res.write(parsedUserData);
// //         // return res.end();

// //         console.log(parsedUserData.split("&")[0].split('=')[1]);
// //         const fileName = parsedUserData.split('&')[0].split('=')[1];
// //         fs.writeFileSync(`./Users/${fileName}.txt`,parsedUserData);
// //         const files = fs.readdirSync("./Users");
// //         console.log(fileData);
// //         files.map((files))=>{
// //             const fileData=fs.readFileSync(`./Users/${files}`,"utf8");
// //             console.log(fileData);
// //         };


// //     });


// // export default usersInfoRouteHandler;


// // import fs from 'fs';

// // const usersInfoRouteHandler=(req,res)=>{
// //     // console.log("Hii");
// //     const userData=[];
// //     req.on("data",(chunk)=>
// //     {
// //         userData.push(chunk)
// //     })
// //     req.on('end',()=>{
// //         const parsedUserData = Buffer.concat(userData).toString();
// //         console.log(parsedUserData);
// //         // res.write(parsedUserData);
// //         // return res.end();

// //         console.log(parsedUserData.split("&")[0].split('=')[1]);
// //         const fileName = parsedUserData.split('&')[0].split('=')[1];
// //         fs.writeFileSync(`./Users/${fileName}.txt`,parsedUserData);
// //         const files = fs.readdirSync("./Users");
// //         console.log(fileData);
// //         files.map((files))=>{
// //             const fileData=fs.readFileSync(`./Users/${files}`,"utf8");
// //             console.log(fileData);
// //         };


// //     })
// // }

// // export default usersInfoRouteHandler;

// import fs from 'fs';
// const usersInfoRouteHandler = (req, res) =>
// {
//    const userdata =[];
//     req.on('data', (chunk) =>
//     {
//         userdata.push(chunk);
//     })
//     req.on('end', () =>
//     {
//         const parsedData = Buffer.concat(userdata).toString();
//         console.log(parsedData.split('&')[0].split('=')[1]);
//         const fileName = parsedData.split('&')[0].split('=')[1];
//         fs.writeFileSync(`./Users/${fileName}.txt`, parsedData);
//         const file = fs.readdirSync('./Users','utf-8');
//         console.log(file);
//         file.map((files)=>{
//             const filedata = fs.readFileSync(`./Users/${files}`, 'utf-8');
//             console.log(filedata);
//         })
//     })
// };

// export default usersInfoRouteHandler;

// import fs from 'fs';

// const usersInfoRouteHandler=(req,res)=>{
//     // console.log("Hii");
//     const userData=[];
//     req.on("data",(chunk)=>
//     {
//         userData.push(chunk)
//     })
//     req.on('end',()=>{
//         const parsedUserData = Buffer.concat(userData).toString();
//         console.log(parsedUserData);
//         // res.write(parsedUserData);
//         // return res.end();

//         console.log(parsedUserData.split("&")[0].split('=')[1]);
//         const fileName = parsedUserData.split('&')[0].split('=')[1];
//         fs.writeFileSync(`./Users/${fileName}.txt`,parsedUserData);
//         const files = fs.readdirSync("./Users");
//         console.log(fileData);
//         files.map((files))=>{
//             const fileData=fs.readFileSync(`./Users/${files}`,"utf8");
//             console.log(fileData);
//         };


//     })
// }

// export default usersInfoRouteHandler;

import fs from 'fs';
const usersInfoRouteHandler = (req, res) =>
{
   const userdata =[];
    req.on('data', (chunk) =>
    {
        userdata.push(chunk);
    })
    req.on('end', () =>
    {
        const parsedData = Buffer.concat(userdata).toString();
        console.log(parsedData.split('&')[0].split('=')[1]);
        const fileName = parsedData.split('&')[0].split('=')[1];
        fs.writeFileSync(`./Users/${fileName}.txt`, parsedData);
        const file = fs.readdirSync('./Users','utf-8');
        console.log(file);
        file.map((files)=>{
            const filedata = fs.readFileSync(`./Users/${files}`, 'utf-8');
            console.log(filedata);
        })
    })
};

export default usersInfoRouteHandler;