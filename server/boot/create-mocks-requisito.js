'use strict';

module.exports = function(app) {
  const Requisito = app.models.Requisito;
  const REQUISITO_MOCK_AMOUNT = 400;
  console.log('app.models', app.models);

  function linearGenerator(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  /**
   * Devuelve un requisito con campos aleatorios
   * @return {object} requisito aletorio devuelto
   */
  function requisitoAleatorio(id) {
    var requisito = {
      nivel: linearGenerator(0, 11),
      id: id,
      caracteristicaId: linearGenerator(0, 13),
      listaDeRequisitoId: linearGenerator(0, 400),
    };
    return requisito;
  }

  /**
   * Genera una cantidad de requisitos pasada por parámetro
   * @param  {[type]} amount [description]
   * @return {[type]}        [description]
   */
  function generadorRequisitos(amount) {
    var array = [];
    for (var i = 0; i < amount; i++)
      array.push(requisitoAleatorio(i + 1));
    return array;
  }
  var requisitosMockList = generadorRequisitos(REQUISITO_MOCK_AMOUNT);
  requisitosMockList.forEach(function(elem) {
    delete elem.id;
    Requisito.create(elem);
  });
};
