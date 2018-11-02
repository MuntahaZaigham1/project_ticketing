const mongoose = require('mongoose');

//define schema here
var time_schema=mongoose.Schema({
time1:{
type:Date,
required: true

},
date1:{
    type:Date,
    required:true
},
reservedS:
{
    type:Number,
    required:true
}
});
var movie_schema=mongoose.Schema({

    _movieid: {
        type: Number
        },
    title : {
        type : String,
        required : true

    },
    genre : {
        type : String,
        required : true

    },
    language : {
        type : String,
        required : true

    },
    rating1: {
        type : Number,
        required : true

    },
    image : {
        data : Buffer,
        contentType : String
       

    },
    description1 : {
       
        contentType : String,
        //required : true 
       

    },
    timeS:[time_schema]

    

    
});

var cin_schema=mongoose.Schema({

    id : {
        type : Number ,
        required : true

    },
    name : {
        type : String,
        required : true

    },
    location : {
        type : String,
        required : true

    },
    capacity : {
        type : Number,
        required : true

    },
    reserved : {
        type : Number,
        required : true

    },
    
    goldPrice: {
        type : Number,
        required : true

    },
    silverPrice: {
        type : Number,
        required : true

    },
    rating : {
        type : Number,
        required : true

    },
    image : {
        data : Buffer,
        contentType : String
       

    },
    description : {
       
        contentType : String,
        //required : true 
       

    },
    movList:
    [movie_schema]


    
});

 var showtimedb=mongoose.model('showtimedb',cin_schema); 

 var show1=new showtimedb
 (
     {
         id:1,
         name:'hhd',
         location:'dn',
         capacity:2,
         reserved:3,
         goldPrice:34,
         silverPrice:34,
         rating:3,
         description:'dfsfs',
        movList:
        [
            
               {
                 _movieid:1,
                title:'the nun',
                genre:'horror',
                language:'english',
                rating1:2,
                description1:'dsdsdff',
                timeS:
                [
                    {
                    time1:'11:30am',
                    date1:'31-oct-18',
                    reservedS:1

                    },
                    {
                        time1:'11:36am',
                    date1:'1-oct-18',
                    reservedS:1
                    }

                ]
               },
               {
                _movieid:1,
               title:'the nun',
               genre:'horror',
               language:'english',
               rating1:2,
               description1:'dsdsdff',
               timeS:
                [
                    {
                    time1:'11:30am',
                    date1:'3-oct-18',
                    reservedS:1

                    },
                    {
                        time1:'11:36am',
                    date1:'21-oct-18',
                    reservedS:1
                    }

                ]
              }



        
        ]
         
         

     }

 )
 mongoose.model('show1',cin_schema);