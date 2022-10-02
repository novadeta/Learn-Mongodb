db.customers.updateOne(
    {}, //filter
    {}, // update
    {} //option
)

db.customers.replaceOne(
    {}, //filter
    {}, // replacement
    {} //option
)

db.customers.updateOne(
    {
    _id : '6332560cf9fba77313c518e5'
    },{
        $set : {
            addres :  "semarang"
        }
    }
)

db.customers.updateOne(
    {
        _id : ObjectId('6332560cf9fba77313c518e5')
    },
    {
        $unset: {nama : ""}
    }
)

 