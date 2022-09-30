db.collection.find({
    //query
},{
    field1: 1,
    field2: 2
})

//select _id,category from products
db.products.find({
    price : {
        $gte : 165000
    }
},{
    category : 1
})

// select _id,name,category,tags[first] from products where tags in ("samsung,accessories") 
db.products.find({
    tags : {
        $elemMatch : {
            $in : ["accessories","samsung"]  
        }
    },
},
{
    name : 1,
    category : 1,
    price : 1,
    "tags.$" : 1
})

//select _id,name,category,price,tags(in ("samsung,logitecth")) from products
db.products.find({},{
    name : 1,
    category : 1,
    tags: {
        $elemMatch :{
            $in : ["samsung","logitect"]
        }
    }
})

// select *,score from products where $search like "monitor"
db.products.find({
    $text: {
        $search: "monitor"
    }
},{
    score: {
        $meta: "textscore"
    }
})

// slice 2 di awal
db.products.find({},{
    tags: {
        $slice : 2      
    }
})

//slice 2 di akhir
db.products.find({},{
    tags: {
        $slice : -2      
    }
})

db.products.find({},
    {
        tags : {
            $slice: [0,2]
        }
    })