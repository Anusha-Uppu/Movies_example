// import { hostname } from "os";

const  {Sequelize, DataTypes}=require('sequelize');

const sequelize=new Sequelize('movies','anusha','anu@123',
    {hostname:'localhost',dialect:'postgres'})

sequelize.authenticate().then(()=>{
    console.log('Connection successful');
}).catch((error)=>{
    console.log('Connection failed'+error);
})

const actor=sequelize.define(
    'actor',
    {
        act_id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true
        },
        act_fname:{
            type:DataTypes.STRING
        },
        act_lname:{
            type:DataTypes.STRING,
        },
        act_gender:{
            type: DataTypes.STRING
        }
    }
)
 actor.sync({force :true}).then(()=>{
    console.log('actor table created');
 }).catch((error)=>{
    console.log('actor table didnot created because'+error);
 });

