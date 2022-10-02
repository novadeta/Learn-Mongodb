db.customers.updateMany({},{
    $set: {
        ratings : [90,70,20]
    } 
})

// tentuka array mana yang di select
db.customers.updateMany({
    ratings : 90
},{
    $set : {
        "ratings.$" : 100
    }
})


db.customers.updateMany({},{
    $set : {
        "ratings.$[element]" : 100
    }
})


db.customers.updateMany({},{
    $set : {
        "ratings.$[element]" : 100
    }
})


// tolong ubah array yang mempunyai nilai 80 menjadi 100
db.customers.updateMany({},{
    $set : {
        "ratings.$[element]" : 100
    }
},{
    arrayFilters: [
        {
            element : {
                $gte : 80
            }
        }
    ]
})

db.customers.updateMany({},{
    $set : {
        "ratings.0" : 80 
    }
})

// menambah data array kalau tidak ada
db.customers.updateMany({},{
    $addToSet: {
        tags : 80
    }
})

// menambah data array meskipun sudah ada
db.customers.updateMany({},{
    $push: {
        tags : 180
    }
})
// menghapus array di awal (-1) atau akhir (1)
db.customers.updateMany({},{
    $pop : {
        ratings : -1
    }
})

// menghapus data array yang nilai lebih dari sama denga 80
db.customers.updateMany({},{
    $pull : {
        ratings : {
            $gte : 80
        }
    }
})

db.customers.updateMany({},{
    $pullAll: {
        tags : [180]
    }
})

db.customers.updateMany({},{
    $push: {
        ratings : {
            $each : [300,20,30]
        }
    }
})

// tambah data array sesuai position
db.customers.updateMany({},{
    $push: {
        ratings : {
            $each : [200],
            $position: 0
        }
    }
})

// kalau negatif berarti yang akan ditambahkan di mongodb adalah dari belakang
// kalau positif sebaliknya
db.cutomers.updateMany({},{
    $push : {
        ratings : {
            $each : [100,200,300,400,500],
            $slice : -5
        }
    }
})
// kalau -1 berarti akan desc kalau 1 berarti asc  
db.customers.updateMany({},{
    $push : {
        ratings : {
            $each : [200,300,121,2323],
            $sort : -1
        }
    }
})