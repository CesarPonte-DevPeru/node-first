const http = require('http');
const port = 3000;

console.log('message');

http.createServer((request, response) => {
    
    //console.log(request);
    
    //Enviar un JSON
    /*
    response.writeHead(200, {'Content-Type': 'application/json'});    
    const user = {
        id : 9999,
        name : 'César',
        lastn : 'Ponte',
        birth : 'f24/05/72'
    };
    response.write(JSON.stringify(user));
    */

    //Enviar un CSV
    response.setHeader('Content-Disposition','attachment; filename=equipos.csv');
    response.writeHead(200, {'Content-Type': 'application/csv'});
    response.write('id;name\n1;Sporting Cristal\n2;Univ San Martin\n3;Sport Boys\n4;Deportivo Municipal\n5;UTC');
    response.end();

}).listen(port);

