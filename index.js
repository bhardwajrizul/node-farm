// CORE MODULES
const fs =require('fs');
const http =require('http');
const url =require('url');

// CUSTOM MODULES
const replaceTemplate = require(`${__dirname}/modules/replaceTemplate.js`)



///////////////////////////////////////////////////////
// SERVER
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataJSON = JSON.parse(data);

const tempoverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempcard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempproduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');

const cardHTML = dataJSON.map(el => replaceTemplate(tempcard, el)).join('');
const overviewHTML = tempoverview.replace(/{%CARDS%}/g, cardHTML);

const server = http.createServer((req, res) => {
    const {query, pathname} = url.parse(req.url, true);


    if (pathname == "/" || pathname == "/overview") {
        res.writeHead(200, {'Content-type' : 'text/html'})
        res.end(overviewHTML);


    } else if (pathname == '/product') {
        res.writeHead(200, {'Content-type' : 'text/html'});
        const product = dataJSON[query.id];
        const output = replaceTemplate(tempproduct, product);
        res.end(output);
    }
});

server.listen(process.env.PORT || 8000, '0.0.0.0', () => {
    console.log("Server Started!");
});


