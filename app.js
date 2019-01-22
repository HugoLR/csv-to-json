const fs = require ('fs')
//Sprint 2

const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('JSON data in terminal');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


//Sprint 3
const csvFilePath='./customer-data.csv'
const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    // console.log(jsonObj);
    var json_Obj = JSON.stringify({data:jsonObj});

    //Sprint 4
    fs.writeFile("./file.json", json_Obj, (err) => {
      if(err) throw err;
    });

    fs.readFile("./file.json", "utf8", (err, data) => {
      if(err) throw err;
      var obj = JSON.parse(data)
      //Sprint 5
      obj.data.forEach(i => console.log(i.id))
    })

})

// Async / await usage
const jsonArray=csv().fromFile(csvFilePath);
