// db.products.insertMany([
//     {
//         name : "Logitech M235",
//         price: new NumberLong(175000),
//         category: "Laptop",
//         tags : [
//             "logitect","mouse","accessories"
//         ]
//     },
//     {
//         name : "Mousepad daxa retro",
//         price: new NumberLong(20000),
//         category: "Laptop",
//         tags : [
//             "rexus","mousepad","accessories"
//         ]
//     },
//     {
//         name : "Cooler Pad",
//         price: new NumberLong(175000),
//         category: "Computer",
//         tags : [
//             "logitect","coolerpad","fan","accessories"
//         ]
//     },
//     {
//         name : "SAMSUNG Y12",
//         price: new NumberLong(156000),
//         category: "Handphone",
//         tags : [
//             "samsung","handphone","accessories"
//         ]
//     }
// ])

// select * from products where (tags = "samsung" and tags = "logitech")
db.products.find({
    tags: {
        $all: ["mousepad","rexus"]
    }
})
//jadi yang keluar adalah document yang mempunyai field tags samsung dan acer 
// pada array


//select * from products where tags in ("samsung","logitect")
//kalau ini or samasung atau logitech
db.products.find({
    tags: {
        $elemMatch: {
            $in: ["rexus"]
        }
    }
})


// mengembalika document yang memiliki field tags sepanjang 4
db.products.find({
    tags: {
        $size : 4
    }
})

