'use strict';

module.exports = function(app) {
  const Candidato = app.models.Candidato;
  const CANDIDATO_MOCK_AMOUNT = 400;
  console.log('app.models', app.models);

  function linearGenerator(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  // Arrays
  var nombre = ['Hector', 'Adrián', 'Dani', 'Miguel', 'Alex', 'Rodrigo', 'Marta', 'Alejandro', 'Alvaro', 'Luis'];
  var apellido = ['Martín', 'Alonso', 'Tizón', 'Espinoza', 'Monzón', 'Minguez', 'Moreno', 'Ortiz', 'Fernández'];
  var perfil = ['Analista', 'Programador', 'Diseñador'];
  var provincia = ['Madrid', 'Cáceres', 'Barcelona', 'Valencia', 'Badajoz', 'Sevilla', 'Galicia', 'Zaragoza', 'Cuenca'];
  var posicion = ['Arriba', 'Abajo', 'Pal centro', 'Pa dentro'];
  var experiencia = ['días', 'meses', 'años'];
  var disp_viajar = ['S', 'N'];
  var disp_residencia = ['S', 'N'];
  var disp_incorporacion = ['Ahora no', 'Inmediata', 'A medio plazo'];
  var expect_contractual = ['Jefe', 'CEO', 'Administrativo', 'Programador', 'Diseñador', 'Becario'];
  var feedback_sourcing = ['HB', 'FS', 'GR', 'TD'];
  var feedback_tecnico = ['DI', 'TI', 'PO', 'LA'];
  var tec_seleccion = ['Ancceloti', 'Zidane', 'Simeone'];
  var referenciado = ['Don Juan', 'Mr. Apolo'];
  var estado = ['En proceso', 'Descartado', 'Incorporación'];

  /**
   * Devuelve un candidato con campos aleatorios
   * @return {object} candidato aletorio devuelto
   */
  function candidatoAleatorio(id) {
    var candidato = {
      id: id,
      nombre: nombre[linearGenerator(0, nombre.length)],
      apellido: apellido[linearGenerator(0, apellido.length)],
      perfil: perfil[linearGenerator(0, perfil.length)],
      provincia: provincia[linearGenerator(0, provincia.length)],
      posicion: posicion[linearGenerator(0, posicion.length)],
      experiencia: linearGenerator(0, 20) + ' ' + experiencia[linearGenerator(0, experiencia.length)],
      disp_viajar: disp_viajar[linearGenerator(0, disp_viajar.length)],
      disp_residencia: disp_residencia[linearGenerator(0, disp_residencia.length)],
      disp_incorporacion: disp_incorporacion[linearGenerator(0, disp_incorporacion.length)],
      expect_contractual: expect_contractual[linearGenerator(0, expect_contractual.length)],
      expect_economica: linearGenerator(0, 4000),
      fecha_entrevista: new Date(new Date().getTime() - linearGenerator(0, 999999999999)),
      feedback_sourcing: feedback_sourcing[linearGenerator(0, feedback_sourcing.length)],
      feedback_tecnico: feedback_tecnico[linearGenerator(0, feedback_tecnico.length)],
      tec_seleccion: tec_seleccion[linearGenerator(0, tec_seleccion.length)],
      referenciado: referenciado[linearGenerator(0, referenciado.length)],
      estado: estado[linearGenerator(0, estado.length)],
      fecha_contacto: new Date(new Date().getTime() - linearGenerator(0, 999999999999)),
      fecha_actualizado: new Date(new Date().getTime() - linearGenerator(0, 999999999999)),
      listaDeRequisitoId: linearGenerator(0, 200),
    };
    return candidato;
  }

  /**
   * Genera una cantidad de candidatos pasada por parámetro
   * @param  {[type]} amount [description]
   * @return {[type]}        [description]
   */
  function generadorCandidatos(amount) {
    var array = [];
    for (var i = 0; i < amount; i++)
      array.push(candidatoAleatorio(i + 1));
    return array;
  }
  var candidatosMockList = generadorCandidatos(CANDIDATO_MOCK_AMOUNT);
  candidatosMockList.forEach(function(elem) {
    delete elem.id;
    Candidato.create(elem);
  });
};
