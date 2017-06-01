'use strict';

module.exports = function(app) {
  const ListaDeRequisito = app.models.listaDeRequisito;
  const LISTAREQUISITO_MOCK_AMOUNT = 400;
  console.log('app.models', app.models);

  /**
   * Devuelve un listaRequisito con campos aleatorios
   * @return {object} listaRequisito aletorio devuelto
   */
  function listaRequisitoAleatorio(id) {
    var listaRequisito = {
      id: id,
    };
    return listaRequisito;
  }

  /**
   * Genera una cantidad de listaRequisitos pasada por parámetro
   * @param  {[type]} amount [description]
   * @return {[type]}        [description]
   */
  function generadorListaDeRequisitos(amount) {
    var array = [];
    for (var i = 0; i < amount; i++)
      array.push(listaRequisitoAleatorio(i + 1));
    return array;
  }

  var listaRequisitosMockList = generadorListaDeRequisitos(LISTAREQUISITO_MOCK_AMOUNT);
  listaRequisitosMockList.forEach(function(elem) {
    delete elem.id;
    ListaDeRequisito.create(elem);
  });
};
