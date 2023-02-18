var http = require('http');
var fs = require('fs');
//http.createServer(function (req, res) {
  //  res.writeHead(200, {'Content-Type': 'text/html'});
  //  res.write('<h1>Putanja zahtjeva: '+req.url+'</h1>');
  //  res.end('<b>Metoda:'+req.method+'</b>')
//}).listen(8080);


fs.readFile('imenik.txt', 'utf8', (err, data) => {
    if (err) throw err;
    const parsedData = {
        imenik: data.split('\n')
      };
      fs.writeFile('imenik.json', JSON.stringify(parsedData), 'utf8', err => {
        if (err) throw err;
        console.log('File written successfully!');
      });
});