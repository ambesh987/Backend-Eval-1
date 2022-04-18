const express = require('express');
const app = express();

//logger as a global and with time description
app.use((request,response,next)=>{
    let time= new Date();
    console.log(time+" "+request.url);
    next();
});
//check permission function for libraries and author
const checkPermission = (request,next) => {
    if (request.params.id == "lib1" || request.params.id == "author1") {
      request.status = true;
    } else {
      request.status = false;
    }
    next();
  };
//route: /books
app.get('/books', (request,response)=>{
    console.log("we are inside books");

    response.status(200).json({
        route:request.url,
    });
});
//route: /libraries
app.get("/libraries", checkPermission, (request, response) => {
    console.log("we are inside libraries");
    response.status(200).json({
      route: request.url,
      permission: request.status,
    });
  });
//route: /libraries/:id
  app.get("/libraries/:id", checkPermission, (request, response) => {
    console.log("we are inside libraries id");
    response.status(200).json({
      route: request.url,
      permission: request.status,
    });
  });


//route: /authors
app.get('/authors',checkPermission,(request,response)=>{
    console.log("we are inside authors");
    response.status(200).json({
        route:request.url,
        permission:request.status,
    });
});

//route: /authors/:id
app.get('/authors/:id',checkPermission,(request,response)=>{
    console.log("we are inside authors id");
    response.status(200).json({
        route:request.url,
        permission:request.status,
    });
});

module.exports = app;