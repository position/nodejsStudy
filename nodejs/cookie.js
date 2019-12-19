var http = require('http');
var cookie = require('cookie');
http.createServer(function(request, response){
    var cookies = request.headers.cookie && cookie.parse(request.headers.cookie);
    response.writeHead(200, {
        'Set-Cookie' : [
            'yummy_cookie=choco', 
            'tasty_cookie=strawberry',
            `Permanent=cookies; Max-Age=${60 * 60 * 24 * 30}`,
            'Secure=true; Secure',
            'HttpOnly=httpOnly; HttpOnly',
            'Path=path; Path=/cookie'
        ]
    });
    response.end('Cookie!!');

}).listen(3001);