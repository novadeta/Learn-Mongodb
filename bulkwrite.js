db.customers.bulkWrite([
    {
        insertOne: {
            document : {
                nama : "asdasdasd"
            }
        }
    },{
        updateMany: [
            {
                _id : 'asdasdasd',
            },{
                $set : {
                    nama : nama
                }
            }
        ]
    }
])