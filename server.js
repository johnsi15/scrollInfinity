var express = require('express');

var app = express();

// Add headers
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//http://blog.logicalbricks.com/node/181
//http://www.digitalaholic.com/nodejs-pagination/

app.get('/api/notas/:page', function(req, res){

  const dataJson = [{
                  'title': 'Hola soy el titulo numero'+req.params.page,
                  'body': 'Hola soy el body numero'+req.params.page
                }
              ]
  // data = dataJson[req.params.page];
  return res.json(dataJson);
})

app.listen(3000, function (err){
  if (err) return console.log('Hubo un error'), process.exit(1);//Devolvemos un mensaje si existe algun error

  console.log('Escuchando en el puerto 3000');
});