const http = require('http');
const fs = require('fs');

// https://img1.ak.crunchyroll.com/i/spire2/f4ca1a545a471a9ce6e43eef8e8d72541539734102_main.jpg
let count = 0;
http.createServer((req, res) => {
  // res.writeHead(200, { 'Content-Type': 'text/html' });
  // res.write('hello, mira!=)');
  // res.write('<img src = "https://img1.ak.crunchyroll.com/i/spire2/f4ca1a545a471a9ce6e43eef8e8d72541539734102_main.jpg">');
  
  res.writeHead(200, { 'Content-Type': 'image/jpeg' });
  const imgPath = 'C:/Users/Boom/Desktop/NODE2/main.jpg';
  fs.readFile(imgPath, (err, data) => {
    if (err) console.log(err);

    res.write(data);
    res.end();
  });

  // res.write('hello, mira!=)');
  // res.write('<img src = "https://img1.ak.crunchyroll.com/i/spire2/f4ca1a545a471a9ce6e43eef8e8d72541539734102_main.jpg">');
  // res.end();
  count += 1;
  console.log(count);
}).listen(5000);
