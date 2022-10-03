db.customers.createIndex({
    "customFields.$**"  : 1
})

db.customers.insertMany([
    {
        id: "budi",
        full_name: "budi",
        customFields: {
            hobby: "nyanyi",
            university: "cuy university"
        }
    },
    {
        id: "budi",
        full_name: "budi",
        customFields: {
            ipk: 3.5,
            university: "univ balo"
        }
    },
    {
        id: "budi",
        full_name: "budi",
        customFields: {
            favorit: "apel",
            school: "smp"
        }
    }
])

db.customers.find({
    "customFields.ipk": 3.5
}).explain()
db.customers.find({
    "customFields.university" :  "univ"
}).explain()