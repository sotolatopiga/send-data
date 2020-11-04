var express = require('express');
var app = express();


app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.listen(3000, function () {

    data = {
        title: 'A very important message',
        from: 'Suu',
        to: 'Duong',
    }

  const sendData = () => fetch('http://123.16.6.225:5010/ingest-data', {
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
