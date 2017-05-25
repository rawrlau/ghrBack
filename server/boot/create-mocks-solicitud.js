'use strict';

module.exports = function(app) {
  const Solicitud = app.models.Solicitud;
  const SOLICITUD_MOCK_AMOUNT = 107;

// Arrays para rellenar nuestro objeto solicitud con valores aleatorios
  var nombre = ['Adrian', 'Hector', 'Dani', 'Miguel', 'Alex', 'Rodri', 'Marta', 'Alejandro', 'Alvaro'];
  var descripcion = ['descripcion1', 'descripcion2', 'descripcion3', 'descripcion4', 'descripcion5', 'descripcion6', 'descripcion7', 'descripcion8', 'descripcion9'];
  var cliente = ['BBVA', 'El Corte Ingles', 'Clientazo'];
  var brm = ['arm1', 'arm2', 'arm3', 'arm4', 'arm5', 'arm6'];
  var adm = ['adm1', 'adm2', 'adm3', 'adm4', 'adm5', 'adm6'];
  var perfil = ['programador', 'Senior Java', 'Analista', 'Senior JavaScript', 'Experto en C'];
  var reqObligatorios = ['Conocimientos de java', 'Puntualidad', 'Responsabilidad'];
  var reqDeseables = ['Deseable1', 'Deseable2', 'Deseable3', 'Deseable4', 'Deseable5'];
  var viajar = ['S', 'N'];
  var guardias = ['S', 'N'];
  var ingles = ['Bajo', 'Medio', 'Alto'];
  var consultorasContactadas = ['Consultora1', 'Consultora2', 'Consultora3', 'Consultora4', 'Consultora5'];
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
      perfil: obtenerValor(perfil),
      ingles: obtenerValor(ingles),
      viajar: obtenerValor(viajar),
      guardias: obtenerValor(guardias),
      consultorasContactadas: obtenerValor(consultorasContactadas),
      estado: obtenerValor(estado),
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
