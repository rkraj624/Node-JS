const dbConnect = require('./db')
const updateData = async () =>{
    let data = await dbConnect();
    let result = await data.update(
        { name:'max 5'},
        {
            $set:{name:'Iphone 13', price:1000}
        }
    )
    console.log(result);
}
updateData();