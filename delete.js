const dbConnect = require('./db')
const deleteData = async () => {
    let data = await dbConnect()
    let result = await data.deleteMany({
        name : 'max 6'
    })
    if(result.deletedCount >= 1){
        console.log("Data Deleted Successfully");
    }
}

deleteData();