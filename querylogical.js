
// selecet * from ecommerce where category in ('drama) and price >= 1000
// jika categorynya drama dan price nya itu lebih dari sama dengan 1000 maka tampilkan
db.ecommerce.find({
    $and: [
        {
            category : {
                $eq : "drama"
            }
        },
        {
            price : {
                $gte : 1000
            }
        }
    ]
})

db.customers.find({
    category: {
        $not : {
            $eq: "drama"
        }
    }
})

db.customers.find({
    $and : [
        {
            price : {
                $gte : 1000,
                $lte : 2000
            }
        },
        {
            category : {
                $ne : 'drama'
            }
        }
    ]
})