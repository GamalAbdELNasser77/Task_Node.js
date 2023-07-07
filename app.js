//task1
const express=require("express");
const morgan = require("morgan");
const teacherRoute = require("./routes/teacherRoute");
const childRouter=require("./routes/childRouter")
const classRouter =require("./routes/classRouter")
const server = express();
server.use(morgan('dev'));

server.listen(process.env.PORT||8080,()=>{
    console.log("I am listening ... ");
    
});
//first MW
server.use((request, response, next) => {
    console.log(request.url, request.method);
    next();
})

//************************** rout***********************

server.use(teacherRoute);
server.use(childRouter);
server.use(classRouter)




///*******************************
//**Not Found  MW
server.use((request, response, next) => {
    response.status(404).json({ message: "not found" });
})
//***Error MW
server.use((error, request, response,next) => {
    response.status(500).json({ message: "error: "+error });
})

////////////////







