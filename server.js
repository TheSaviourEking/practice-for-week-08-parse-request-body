const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// Your code here
const http = require('http');

server = http.createServer((req, res) => {
    console.log(req.method, req.url);
});

const PORT = 5000;
server.listen(PORT, () => console.log('Successfully started the server on port', PORT));

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
