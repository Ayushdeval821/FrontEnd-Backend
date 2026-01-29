import fs from "fs";

const usersInfoRouteHandler=(req,res)=>{
   const userData=[];
   req.on('data',(chunk)=>{
     userData.push(chunk);
   }) 
   req.on('end',()=>{
    const parsedUserData=Buffer.concat(userData).toString();
    console.log(parsedUserData.split('&')[0].split('=')[1]);
    const fileName=parsedUserData.split('&')[0].split('=')[1];
    const upperHtml=`
    <html>
      <head>
        <title>
          Users Info Page
        </title>
      </head>
      <body>
        <h1>
          Hii , Welcome to Our Team !!!
        </h1>
        <div style="display:flex">
    `  
    let middleHtml=``;
    const lowerHtml=`
          </div>
      </body>
    </html>
    `
    fs.writeFileSync(`./Users/${fileName}.txt`,parsedUserData);
    const files=fs.readdirSync("./Users");
    console.log(files);
    files.map((file)=>{
        const fileData=fs.readFileSync(`./Users/${file}`,"utf8");
        console.log(fileData);
        middleHtml=middleHtml+`
        <div style="margin:10px; padding:10px; border:2px solid black; border-radius:5px;width:500px; background-color:grey">
        <h1>
        ${fileData.split('&')[0].split('=')[1]}
        </h1>
        <p>
        ${fileData.split('&')[1].split('=')[1]}
        </p>
        </div>
        `
    });
    res.write(upperHtml+middleHtml+lowerHtml);
    return res.end();
   })
}

export default usersInfoRouteHandler;