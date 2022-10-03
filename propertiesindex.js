db.createCollection("sessions");

// setelah 10 second waktu nya lewat ini akan expired
// cocok banget untuk buat yang kayak butuh expired
db.sessions.createIndex({
    createdAt : 1
},{
    expireAfterSeconds: 10
})

db.sessions.insertOne({
    _id : 1,
    session : "session 1",
    createdAt : new Date()
})

db.customers.updateMany({},{
    $set : {
        email : {
            "$concat": ["$nama","@","example.com"]
        }
    }
})

// tidak boleh sama jadi harus beda tiap element
db.sessions.createIndex({
    email : 1
},{
    unique: true
})

db.customers.updateMany({},{
    $unset: {
        email : ""
    }
})
