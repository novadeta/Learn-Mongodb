db.products.find().count()

// menghasilkan document dengan limit 2 saja yang dikembalikan
db.products.find().limit(10).skip(2)

// skip 2 document di awal
db.products.find().skip(10)

//di mongodb itu tidak ada asc dan desc
// adanya 1 untuk asc dan -1 untuk desc
// contoh dibawah namanya di sort dulu kalau nanti ada yang sama
// maka di sort sesuai category
db.products.find().sort({
    name : 1,
    category : -1 
})