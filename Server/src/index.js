const http = require("http")

http.createServer((request,response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*');
    if(request.url() === "/rickandmorty/character"){
        const queEsFind = data()
    }
}).listen(3001,"localhost")