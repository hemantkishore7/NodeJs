const express = require('express')
const app = express()
const fs = require('fs')
app.use(express.json())

let ts = Date.now();

let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();
let hour = date_ob.getHours();
let minute = date_ob.getMinutes();
let sec = date_ob.getSeconds();

if(!fs.existsSync('TimeStamp')){
    fs.mkdirSync('TimeStamp')
}

const timestamp = year + "-" + month + "-" + date + "/" + hour + ":" + minute + ":" + sec ;
console.log(timestamp);
fs.writeFile('TimeStamp/date-time.txt',`${timestamp}`,(err) => {
    if(err) console.log(err)
    console.log('File Created!!!')

})
app.get('/',function(req,res){
    res.json(timestamp)
})

app.listen(3001)