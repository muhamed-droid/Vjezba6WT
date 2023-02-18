var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  const queryObject = url.parse(req.url, true).query;
  const q = queryObject.q;

  if (q) {
    const filteredLines = imenik.filter(line => line.toLowerCase().includes(q.toLowerCase()));
    res.write(`<h1>Filtered results for "${q}":</h1>`);
    filteredLines.forEach(line => {
      res.write(`<p>${line}</p>`);
    });
  } else {
    res.write('<h1>Putanja zahtjeva: '+req.url+'</h1>');
    res.write('<b>Metoda:'+req.method+'</b>');
  }
  res.end();
}).listen(8080);

const imenik = fs.readFileSync('imenik.txt', 'utf8').split('\n');


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