'use strict';

module.exports = function(app) {
  const Solicitud = app.models.Solicitud;
  const SOLICITUD_MOCK_AMOUNT = 107;

  function linearGenerator(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  // Arrays para rellenar nuestro objeto solicitud con valores aleatorios
  var nombre = ['Puesto de analista', 'Puesto de programadror', 'Puesto de recursos humanos', 'Puesto de ventas', 'Puesto de diseñador', 'Jefe departamento analista', 'Jefe departamento RRHH', 'Jefe departamento programacion', 'Jefe departamento diseño'];
  var descripcion = ['Intermedio', 'Candidato', 'Usuario', 'Invitado', 'Experto', 'Aprendiz', 'Solicitud', 'Servicio Tecnico'];
  var cliente = ['BBVA', 'El Corte Ingles', 'Santander', 'Media Markt'];
  var brm = ['arm1', 'arm2', 'arm3', 'arm4', 'arm5', 'arm6'];
  var adm = ['adm1', 'adm2', 'adm3', 'adm4', 'adm5', 'adm6'];
  var reqObligatorios = ['Conocimientos de java', 'Puntualidad', 'Responsabilidad'];
  var reqDeseables = ['Deseable1', 'Deseable2', 'Deseable3', 'Deseable4', 'Deseable5'];
  var consultorasContactadas = ['Tecnocom', 'IBM', 'Apple', 'Softtek', 'Indra'];
  var estado = ['abierta', 'cerradaCliente', 'cerradaIncorporacion', 'standby'];

  // Funcion que crea un objeto solicitud y lo rellena con un valor aleatorio
  function crearSolicitud(id) {
    var solicitud = {
      id: id,
      nombre: obtenerValor(nombre),
      descripcion: obtenerValor(descripcion),
      fechaRecibida: new Date(obtenerFecha()),
      // fechaRecibida: new Date(new Date().getTime() - distribucionLineal(100)),
      cliente: obtenerValor(cliente),
      brm: obtenerValor(brm),
      adm: obtenerValor(adm),
      reqObligatorios: obtenerValor(reqObligatorios),
      reqDeseables: obtenerValor(reqDeseables),
      consultorasContactadas: obtenerValor(consultorasContactadas),
      estado: obtenerValor(estado),
      fechaCierre: new Date(obtenerFecha()),
      candidatoId: linearGenerator(0, 400),
      idReqObligatorios: linearGenerator(0, 80),
      idReqDeseables: linearGenerator(0, 80),
    };
    return solicitud;
  }

  // Con este metodo obtenemos una fecha aleatoria para nuestro campo fechaRecibida
  function obtenerFecha() {
    var date = new Date();
    var dia = Math.floor(Math.random() * 31);
    var mes = Math.floor(Math.random() * 13);
    date.setDate(date.getDate() + dia);
    date.setMonth(date.getMonth() + mes);
    return date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear();
  }

  // Obtenemos un valor aleatorio
  function distribucionLineal(rango) {
    return Math.floor(Math.random() * rango);
  }

  // Rellenamos el array con nuestro valor aleatorio
  function obtenerValor(array) {
    return array[distribucionLineal(array.length)];
  }

  // Creamos un numero determinado de objeto solicitud
  function crearSolicitudes() {
    var arraySolicitudes = [];
    for (var i = 1; i <= SOLICITUD_MOCK_AMOUNT; i++) {
      arraySolicitudes.push(crearSolicitud(i));
    }
    return arraySolicitudes;
  }
  crearSolicitudes().forEach(function(elem) {
    delete elem.id;
    Solicitud.create(elem);
  });
};
