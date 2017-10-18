var clienteModel = require('../models/clienteModel')();

module.exports = function(app){
  app.get('/contato',function(req,res){
    res.render('site/contato');
  });

  app.get('/',function(req,res){
    //console.log(clienteModel.all());
    var listaClientes = clienteModel.all();
    res.render('site/home',{clientes:listaClientes});
  });
};
