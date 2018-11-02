const mongoose = require('mongoose');


const watch_schema=mongoose.Schema({
    cinema_name : {
        type : String,
        required : true

    },
    movie_name : {
        type : String,
        required : true

    },
    rating2 : {
        type : Number,
        required : true

    }
});

//define schema here
const user_schema=mongoose.Schema({

    id : {
        type : Number ,
        required : true

    },
    name : {
        type : String,
        required : true

    },
    password : {
        type : String,
        required : true

    },
    email: {
        type : String,
        required : true

    },
    city : {
        type : Number,
        required : true

    },
    watchhist:[
        watch_schema
    ]

    
});

const usersdb = module.exports = mongoose.model('usersdb',user_schema); 