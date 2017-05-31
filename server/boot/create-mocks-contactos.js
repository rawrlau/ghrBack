'use strict';

module.exports = function(app) {
  const Contacto = app.models.Contacto;
  const CONTACTO_MOCK_AMOUNT = 400;
  console.log('app.models', app.models);

  function linearGenerator(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  // Arrays
  var tipo = ['Teléfono', 'Correo', 'Facebook', 'LinkedIn', 'Twitter'];
  var usuarios = ['martin89', 'alonso32', 'tizón_15', 'espinoza45', 'monzooon', 'minguez_32', 'moreno.00', 'ortiz1', '_fernandez'];
  var correos = ['gmail.com', 'outlook.es', 'hootmail.com', 'oll.ru', 'outlook.es', 'google.com'];
  var tipoContactoGenerado;

  /**
   * Devuelve un contacto con campos aleatorios
   * @return {object} contacto aletorio devuelto
   */
  function contactoAleatorio(id) {
    var contacto = {
      id: id,
      idCandidato: id,
      tipo: generarTipo(),
      valor: generarContactoCondicioanal(),
    };
    return contacto;
  }

  function generarTipo() {
    return tipoContactoGenerado = tipo[linearGenerator(0, tipo.length)];
  }

  function generarContactoCondicioanal() {
    if (tipoContactoGenerado == 'Teléfono')
      return 600000000 + linearGenerator(0, 99999999);
    else if (tipoContactoGenerado == 'Correo')
      return usuarios[linearGenerator(0, usuarios.length)] + '@' + correos[linearGenerator(0, correos.length)];
    else
      return usuarios[linearGenerator(0, usuarios.length)];
  }

  /**
   * Genera una cantidad de contactos pasada por parámetro
   * @param  {[type]} amount [description]
   * @return {[type]}        [description]
   */
  function generadorContactos(amount) {
    var array = [];
    for (var i = 0; i < amount; i++) {
      for (var j = 0; j < linearGenerator(1, 4); j++) {
        array.push(contactoAleatorio(i + 1));
      }
    }
    return array;
  }
  var contactosMockList = generadorContactos(CONTACTO_MOCK_AMOUNT);
  contactosMockList.forEach(function(elem) {
    delete elem.id;
    Contacto.create(elem);
  });
};
