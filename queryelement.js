// menampilkan data customers yang tidak ada field categorynya 
db.customers.find({
    category: {
        $exists : false
    }
})

db.customers.find({
    category : {
        $type :  "string"
    },
    price: {
        $type : ["int","long"]
    }
})

