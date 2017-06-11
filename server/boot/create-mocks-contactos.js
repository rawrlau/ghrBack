'use strict';

module.exports = function(app) {
  const Contacto = app.models.Contacto;
  const CONTACTO_MOCK_AMOUNT = 400;
  console.log('app.models', app.models);

  function linearGenerator(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  // Arrays
  var usuarios = ['martin89', 'alonso32', 'tizón_15', 'espinoza45', 'monzooon', 'minguez_32', 'moreno.00', 'ortiz1', '_fernandez'];
  var correos = ['gmail.com', 'outlook.es', 'hootmail.com', 'oll.ru', 'outlook.es', 'google.com'];
  var tipo = ['Teléfono', 'Correo', 'Facebook', 'LinkedIn', 'Twitter'];
  var ultimoContactoGenerado = null;

  function resetVariables() {
    tipo = ['Teléfono', 'Correo', 'Facebook', 'LinkedIn', 'Twitter'];
    ultimoContactoGenerado = null;
  }
  resetVariables();

  /**
   * Devuelve un contacto con campos aleatorios
   * @return {object} contacto aletorio devuelto
   */
  function contactoAleatorio(id) {
    var contacto = {
      id: id,
      candidatoId: id,
      tipo: generarTipo(),
      valor: generarContactoCondicioanal(),
    };
    return contacto;
  }

  function generarTipo() {
    ultimoContactoGenerado = tipo[linearGenerator(0, tipo.length)];
    for (var i = 0; i < tipo.length; i++) {
      if (tipo[i] == ultimoContactoGenerado) {
        tipo.splice(i, 1);
      }
    }
    return ultimoContactoGenerado;
  }

  function generarContactoCondicioanal() {
    if (ultimoContactoGenerado == 'Teléfono')
      return 600000000 + linearGenerator(0, 99999999);
    else if (ultimoContactoGenerado == 'Correo')
      return usuarios[linearGenerator(0, usuarios.length)] + '@' + correos[linearGenerator(0, correos.length)];
    else if (ultimoContactoGenerado == 'Facebook')
      return 'https://www.facebook.com/' + usuarios[linearGenerator(0, usuarios.length)];
    else if (ultimoContactoGenerado == 'LinkedIn')
      return 'https://www.linkedin.com/in/' + usuarios[linearGenerator(0, usuarios.length)];
    else if (ultimoContactoGenerado == 'Twitter')
      return 'https://twitter.com/' + usuarios[linearGenerator(0, usuarios.length)];
  }

  /**
   * Genera una cantidad de contactos pasada por parámetro
   * @param  {[type]} amount [description]
   * @return {[type]}        [description]
   */
  function generadorContactos(amount) {
    var array = [];
    for (var i = 0; i < amount; i++) {
      var limiteContactos = linearGenerator(1, 5);
      for (var j = 0; j < limiteContactos; j++) {
        array.push(contactoAleatorio(i + 1));
      }
      resetVariables();
    }
    return array;
  }
  var contactosMockList = generadorContactos(CONTACTO_MOCK_AMOUNT);
  contactosMockList.forEach(function(elem) {
    delete elem.id;
    Contacto.create(elem);
  });
};
