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

const genres=sequelize.define(
    'genres',
    {
        gen_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true
        },
        gen_title:{
            type:DataTypes.STRING,
        }
    }
)
genres.sync({force :true}).then(()=>{
    console.log('genres table created');
 }).catch((error)=>{
    console.log('genres table didnot created because'+error);
 });

const director=sequelize.define(
    'director',
    {
        dir_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true
        },
        dir_fname:{
            type:DataTypes.STRING,
        },
        dir_lname:{
            type:DataTypes.STRING
        }
    }
) 
director.sync({force :true}).then(()=>{
    console.log('director table created');
 }).catch((error)=>{
    console.log('director table didnot created because'+error);
 });

const movie=sequelize.define(
    'movie',
    {
        mov_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true
        },
        mov_title:{
            type:DataTypes.STRING
        },
        mov_year:{
            type:DataTypes.INTEGER
        },
        mov_time:{
            type:DataTypes.INTEGER
        },
        mov_lang:{
            type:DataTypes.STRING,
            allowNull:false
        },
        mov_dt_rel:{
            type:DataTypes.DATE
        },
        mov_rel_country:{
            type:DataTypes.STRING
        }
    
    }
)
movie.sync({force :true}).then(()=>{
    console.log('movie table created');
 }).catch((error)=>{
    console.log('movie table didnot created because'+error);
 });

const movie_genres=sequelize.define(
    'movie_genres',
    {
        mov_id:{
            type:DataTypes.INTEGER,
            references: {
                model:movie,
                key:'mov_id'
            }
           
        },
        gen_id:{
            type:DataTypes.INTEGER,
            references:{
                model:genres,
                key:'gen_id'
            }
        }
    }
)
movie_genres.sync({force :true}).then(()=>{
    console.log('movie_genres table created');
 }).catch((error)=>{
    console.log('movie_genres table didnot created because'+error);
 });

const movie_direction=sequelize.define(
    'movie_direction',
    {
        dir_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            references:{
                model:director,
                key:'dir_id'
            }
        },
        mov_id:{
            type:DataTypes.INTEGER,
            references:{
                model:movie,
                key:'mov_id'
            }
        }
    }
)
movie_direction.sync({force :true}).then(()=>{
    console.log('movie_direction table created');
 }).catch((error)=>{
    console.log('movie_direction table didnot created because'+error);
 });

const reviewer=sequelize.define(
    'reviewer',
    {
        rev_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true
        },
        rev_name:{
            type:DataTypes.STRING
        }
    }
)
reviewer.sync({force :true}).then(()=>{
    console.log('reviewer table created');
 }).catch((error)=>{
    console.log('reviewer table didnot created because'+error);
 });

const rating=sequelize.define(
    'rating',
    {
        mov_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            references:{
                model:movie,
                key:'mov_id'
            }
        },
        rev_id:{
            type:DataTypes.INTEGER,
            references:{
                model:reviewer,
                key:'rev_id'
            }
        },
        rev_stars:{
            type:DataTypes.INTEGER
        },
    }
)
rating.sync({force :true}).then(()=>{
    console.log('rating table created');
 }).catch((error)=>{
    console.log('rating table didnot created because'+error);
 });

const movie_cast=sequelize.define(
    'movie_cast',
    {
        act_id:{
            type:DataTypes.INTEGER,
            references:{
                model:actor,
                key:'act_id'
            }
        },
        mov_id:{
            type:DataTypes.INTEGER,
            references:{
                model:movie,
                key:'mov_id'
            }
        },
        role:{
            type:DataTypes.STRING
        }
    }
)
movie_cast.sync({force :true}).then(()=>{
    console.log('movie_cast table created');
 }).catch((error)=>{
    console.log('movie_cast table didnot created because'+error);
 });

