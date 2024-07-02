// import { hostname } from "os";

const  {Sequelize}=require('sequelize');

const sequelize=new Sequelize('movies','anusha','anu@123',
    {hostname:'localhost',dialect:'postgres'})

sequelize.authenticate().then(()=>{
    console.log('Connection successful');
}).catch((error)=>{
    console.log('Connection failed'+error);
})
