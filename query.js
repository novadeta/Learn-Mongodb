db.custommers.find({
    _id : '029349230'
})

//select * from customers where _id = '021302103' and name = 'asdasdas
db.custommers.find({
    _id : '029349230',
    name : 'okelah'
})

// akses embedded object
db.orders.find({
    "items.product_id" : 1
})