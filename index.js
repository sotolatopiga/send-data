var express = require('express');
var app = express();


app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.listen(3000, function () {
    // Nội dung data cần gửi
    data = {
        title: 'A very important message',
        sender: 'Suu',
        to: 'Duong',
    }

  const url = 'http://123.16.6.225:5010/ingest-data' //IP có thể sẽ thay đổi, khi nào code stable up lên AWS sẽ có IP tĩnh

  const sendData = () => fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
          'Content-type': 'application/json; charset=UTF-8'
      }
  })
      .then(res => res.json())
      .then(console.log)

  console.log('Example app listening on port 3000!');
  const fetch = require('node-fetch')
    setInterval(sendData, 2000)
});
