db.customers.find({
    _id: {
        $eq : "ade"
    }
})

// sama dengan

db.customers.find({
    _id : "ade"
})


// select * from customers where price > 1000
db.customers.find({
    price : {
        $gte : 1000,

    },
    category : {
        $in : ["drama","romance"]
    }
})


db.customers.find({
    category : {
        $eq : "scifi"
    }
})

