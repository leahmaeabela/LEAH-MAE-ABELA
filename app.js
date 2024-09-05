var fs = require('fs');

function renderHTML(path, response) {
  fs.readFile(path, 'utf8', function(error, data) {
    if (error) {
      response.writeHead(404, { 'Content-Type': 'text/html' });
      response.write('File not found');
    } else {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write(data);
    }
    response.end();
  });
}

module.exports = {
  handleRequest: function(request, response) {
   
    var url = new URL(request.url, `http://${request.headers.host}`);
    var path = url.pathname;

    switch (path) {
      case '/':
        renderHTML('./index.html', response);
        break;
      case '/home':
        renderHTML('./home.html', response);
        break;
      default:
      
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.write(`<h1>Route ${path} not found</h1>`);
        response.write(`<p>You've entered: ${path}</p>`);
        response.end();
    }
  }
};
