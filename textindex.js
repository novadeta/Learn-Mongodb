// weights itu digunakan untuk pencarian yang mana akan didahulukan
// jadi document yang paling bakal nongol itu yang paling berat
db.customers.createIndex({
    nama : "text",
    category: "text",
    tags: "text"
},{
    weights: {
        nama : 10,
        category: 5,
        tags: 1
    }
})

// ada kata lia or laptop
db.customers.find({
    $text: {
        $search: "lia addd"
    }
})
// text dengan lia addd buka or ini 
db.customers.find({
    $text: {
        $search : "lia",
        $search: '"lia addd"'
    }
})

// kalau ada - di depannya maka artinya cari lia dengan tidak addd
db.customers.find({
    $text: {
        $search : "lia",
        $search: "lia -addd"
    }
})

