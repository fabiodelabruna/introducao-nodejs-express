var clienteController = require('../controllers/clienteController');

module.exports = function(app) {

  app.get('/',function(request, response) {
    clienteController.index(request, response);
  });

  app.post('/',function(request, response) {
    clienteController.save(request, response);
  });

  app.get('/detalhe/:id',function(request, response) {
    clienteController.show(request, response);
  });

}
