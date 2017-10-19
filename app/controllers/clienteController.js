var clienteModel = require('../models/clienteModel')();

module.exports.index = function(request, response) {
  clienteModel.all(function(error, result) {
    response.render('site/home', { clientes: result, errors: {}, dados: {} });
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

  // validações
  request.assert('nome', 'Preencha o Nome').notEmpty();
  request.assert('nome', 'Nome deve ter entre 3 e 20 caracteres').len(3, 20);
  request.assert('email', 'Preencha o E-mail').notEmpty();
  request.assert('email', 'Preencha com um e-mail válido').isEmail();

  var validationErrors = request.validationErrors();

  if (validationErrors) {
    clienteModel.all(function(error, result) {
      response.render('site/home', { clientes: result, errors: validationErrors, dados: data });
    });
    return;
  }

  clienteModel.save(data, function(error, result) {
    if (error) {
      console.log('Erro ao adicionar o cliente!');
    }
    response.redirect('/');
  });
}
