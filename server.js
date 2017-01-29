var express = require('express');

var app = express();

// var bodyParser = require('body-parser');

app.use('*', function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "X-Requested-With");
   next();
});


app.get('/api/notas/:page', function(req, res){

  const dataJson = [{
                  'title': 'Hola soy el titulo numero'+req.params.page,
                  'body': 'Hola soy el body numero'+req.params.page
                }
              ]
  res.send(dataJson);
})

app.listen(3000, function (err){
  if (err) return console.log('Hubo un error'), process.exit(1);//Devolvemos un mensaje si existe algun error

  console.log('Escuchando en el puerto 3000');
});