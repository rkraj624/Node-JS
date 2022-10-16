const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017'
const database = 'e-comm'
const client = new MongoClient(url)
// for handling promises we use Async & await
async function getData(){
    let result = await client.connect();
    let db = result.db(database)
    return db.collection('products')
    // let collection = db.collection('products')
    // let data = await collection.find({}).toArray()
    // console.log(data); 

}

// other then async & await we can handel promises by .then
// handling promises using {then}
// getData().then((res) => {
//     res.find().toArray().then((data) => {
//         console.warn(data);
//     })
// })

module.exports = getData;