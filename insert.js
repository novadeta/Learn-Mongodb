 


db.customers.insertMany([
    {
        nama : 'adddddd',
        addres : 'kalocm',
        price : new NumberLong(2111)
    },
    {
        nama : 'laok',
        addres : 'kalocm',
        price : 3000,
        category : 'scifi'
    },
    {
        nama : 'koko',
        addres : 'kalocm',
        price : 2500,
        category : 'comedy'
    },
    {
        nama : 'addd',
        addres : 'kalocm',
        price : 2000,
        category : 'horror'
    }
])

// Insert Document embedded

db.orders.insetOne({
    nama : 'koka',
    phone : [
        {
            region : 'id',
            number : '02920983293'
        },
        {
            region : 'us',
            number : '02920983293'
        }
    ]
})