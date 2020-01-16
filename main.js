const fs = require('fs');

require('./demo_http.js');

// console.log('111');
// fs.open(Buffer.from('./main.jpg'), (err, fd) => {
//   if (err) throw err;
//   // eslint-disable-next-line no-shadow
//   fs.close(fd, (err) => {
//     if (err) throw err;
//   });
//   __filename.
// });
fs.copyFile('main.jpg', 'maine2.jpg', (err) => {
  if (err) throw err;
  console.log('skopirovano');
});

fs.copyFile('ururu.json', 'uru2.json', (err) => {
  if (err) throw err;
  console.log('kopykopy=)');
});
