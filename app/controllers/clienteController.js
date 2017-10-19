var clienteModel = require('../models/clienteModel')();

module.exports.index = function(request, response) {
  clienteModel.all(function(error, result) {
    response.render('site/home', { clientes: result });
  });
}

module.exports.show = function(request, response) {
  clienteModel.find(request.params.id, function(error, result) {
    if (result[0] && !error) {
      response.render('site/detalhe', { cliente: result[0] });
    } else {
      console.log('Esse cliente não existe!');
      response.redirect('/');
    }
  });
}

module.exports.save = function(request, response) {
  var data = request.body;
  clienteModel.save(data, function(error, result) {
    if (error) {
      console.log('Erro ao adicionar o cliente!');
    }
    response.redirect('/');
  });
}
