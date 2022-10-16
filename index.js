const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'files');
const filePath = `${dirPath}/apple.txt`;
// fs.writeFileSync(filePath, 'this is a simple file')
// fs.readFile(filePath,'utf8',(err, item)=>{
//     console.log(item);
// })
// fs.appendFile(filePath, ' for fruits RKRAJ',(err)=>{
//     if(!err) console.log("file is updated");
// })
// fs.rename(filePath, `${dirPath}/fruits.txt`,(err)=>{
//     if(!err) console.log("file name is updates");
// })
fs.unlinkSync(`${dirPath}/fruits.txt`);