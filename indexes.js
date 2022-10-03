db.customers.createIndex({
    category : 1
})

// ambil semua indexes di product collection
db.customers.getIndexes()


//debugging query optimization
db.customers.find({
    name: "drama"
}).explain();
db.customers.find({}).sort({
    category: 1
}).explain()


db.customers.createIndex({
    tags: 1,
    price: 1
})

db.customers.find({
    stock: 10,
    tags: "popular"
})