const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// Your code here
const http = require('http');

server = http.createServer((req, res) => {
    console.log(req.method, req.url, /*req*/);
    let reqBody = '';
    req.on("data", (chunk) => {
	reqBody += chunk;
    });
    
    req.on("end", () => {
	// your code for parsing the request body string into an object...
	if (reqBody) {
	    req.body = parseBody(reqBody);
	}

	sendFormPage(req, res); // needs to be called even if the request doesn't have a body
    });
});

const PORT = 5000;
server.listen(PORT, () => console.log('Successfully started the server on port', PORT));

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
