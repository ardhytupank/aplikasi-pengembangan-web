var http = require('http');
//create a server object:
http.createServer((req, res) => {
  res.write('<p>Pengembangan Aplikasi Aplikasi Web dengan Nodejs</p>');
  //write a response to the client
  res.end(); //end the response
}).listen(8000, () => {
  console.log('Server is running on port 8000')
}); //the server object listens on port 8000