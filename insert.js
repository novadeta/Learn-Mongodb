 


db.customers.insertMany([
    {
        nama : 'adddddd',
        addres : 'kalocm',
        price : new NumberLong(2111)
// default dari number adalah tipe data double 
// kalau mau tipedatanya int maka gunakan new NumberInt
    },
    {
        nama : 'adddddd',
        addres : 'kalocm'
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