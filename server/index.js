const express=require('express');
const app=express();
const  cors=require('cors')

app.use(express.json());
app.use(cors());
const db=require("./models");

//Routers
const postRouter=require('./routes/Post');
app.use("/posts",postRouter);

db.sequelize.sync().then(()=>{
    app.listen(8082,()=>{
        console.log("server rnning on 8082");
    });
});

