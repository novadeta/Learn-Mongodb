db.customers.updateMany({
_id : ObjectId('6332560cf9fba77313c518e5')
},{
    $set : {
        addres : "oke"
    },
    $currentDate : {
        hehe : {
            $type : 'timestamp'
        } 
    }
}

)

db.customers.update({
    _id : {
        $not : {
            $eq : ObjectId('6332270cf9fba77313c518e5')
        }
    }
},{
    $inc: {
        count : -10
    }
})

