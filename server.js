let http=require('http');
let serveur = http.createServer()
serveur.on('request',(request,reponce) =>{
reponce.writeHead(404)
reponce.end('LA REPONSE')
console.log('PASSER A LACTION') 
})
serveur.listen(1337) 



