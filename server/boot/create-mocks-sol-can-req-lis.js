'use strict';

// Devuelve un valor aleatorio entre min y max
function linearGenerator(min, max) {
  return Math.floor(Math.random() * ((max + 1) - min) + min);
}

// Obtenemos un valor aleatorio entre 0 y rango
function distribucionLineal(rango) {
  return Math.floor(Math.random() * rango);
}

// Rellenamos el array con nuestro valor aleatorio
function obtenerValor(array) {
  return array[distribucionLineal(array.length)];
}

// Devuelve un array con todas las entidades generadas
function generadorEntidad(amount, generatorObject) {
  var array = [];
  for (var i = 0; i < amount; i++)
    array.push(generatorObject(i + 1));
  return array;
}

// Arrays para rellenar nuestro objeto solicitud con valores aleatorios
var nombreS = ['Puesto de analista', 'Puesto de programadror', 'Puesto de recursos humanos', 'Puesto de ventas', 'Puesto de diseñador', 'Jefe departamento analista', 'Jefe departamento RRHH', 'Jefe departamento programacion', 'Jefe departamento diseño'];
var descripcion = ['Intermedio', 'Candidato', 'Usuario', 'Invitado', 'Experto', 'Aprendiz', 'Solicitud', 'Servicio Tecnico'];
var cliente = ['BBVA', 'El Corte Ingles', 'Santander', 'Media Markt', 'Hipercor', 'Worten', 'Teleppiza'];
var brm = ['BRM Uno', 'BRM Dos', 'BRM Tres', 'BRM Cuatro', 'BRM Cinco', 'BRM Seis'];
var adm = ['ADM Uno', 'ADM Dos', 'ADM Tres', 'ADM Cuatro', 'ADM Cinco', 'ADM Seis'];
var reqObligatorios = ['Conocimientos de java', 'Puntualidad', 'Responsabilidad'];
var reqDeseables = ['Deseable1', 'Deseable2', 'Deseable3', 'Deseable4', 'Deseable5'];
var consultorasContactadas = ['Tecnocom', 'IBM', 'Apple', 'Softtek', 'Indra'];
var estadoS = ['abierta', 'cerradaCliente', 'cerradaIncorporacion', 'standby'];

// Arrays
var nombreC = ['Hector', 'Adrián', 'Dani', 'Miguel', 'Alex', 'Rodrigo', 'Marta', 'Alejandro', 'Alvaro', 'Luis'];
var apellido = ['Martín', 'Alonso', 'Tizón', 'Espinoza', 'Monzón', 'Mínguez', 'Moreno', 'Ortiz', 'Fernández'];
var perfil = ['Analista', 'Programador', 'Diseñador'];
var provincia = ['Madrid', 'Cáceres', 'Barcelona', 'Valencia', 'Badajoz', 'Sevilla', 'Galicia', 'Zaragoza', 'Cuenca'];
var posicion = ['Programador junior', 'Progrmador', 'Progrmador senior', 'Analista junior', 'Analista', 'Analista senior', 'Diseñador junior', 'Diseñador', 'Diseñador senior'];
var experiencia = ['días', 'meses', 'años'];
var disp_viajar = ['Si', 'No'];
var disp_residencia = ['Si', 'No'];
var disp_incorporacion = ['Ahora no', 'Inmediata', 'A medio plazo'];
var expect_contractual = ['Jefe', 'CEO', 'Administrativo', 'Programador', 'Diseñador', 'Becario'];
var feedback_sourcing = ['HB', 'FS', 'GR', 'TD'];
var feedback_tecnico = ['DI', 'TI', 'PO', 'LA'];
var tec_seleccion = ['Alejandro Martin', 'Miguel Angel Perez', 'Rodrigo Sanchez', 'Daniel Martinez', 'Pablo Garcia'];
var referenciado = ['Juan Sanz', 'Roberto Rodriguez', 'Eduardo Lopez', 'Alvaro Gonzalez'];
var estadoC = ['En proceso', 'Descartado', 'Incorporación'];

module.exports = function(app) {
  const Candidato = app.models.Candidato;
  const Solicitud = app.models.Solicitud;
  const ListaDeRequisito = app.models.listaDeRequisito;
  const Requisito = app.models.Requisito;

  const CANDIDATO_MOCK_AMOUNT = 400;
  const SOLICITUD_MOCK_AMOUNT = 100;
  const REQUISITO_MOCK_AMOUNT = 400;
  const LISTAREQUISITO_MOCK_AMOUNT = SOLICITUD_MOCK_AMOUNT;

  // Devuelve un objeto requisito
  function objectoListaRequisitos(id) {
    var listaRequisito = {
      id: id,
    };
    return listaRequisito;
  }

  var ultimoNivelAsignado = 0;
  var ultimaCaracteristicaAsignada = 1;

  function generarNivel() {
    ultimoNivelAsignado++;
    if (ultimoNivelAsignado > 10) {
      ultimoNivelAsignado = 1;
      ultimaCaracteristicaAsignada++;
    }
    return ultimoNivelAsignado;
  }

  // Devuelve un objeto listaRequisito
  function objectoRequisito(id) {
    var requisito = {
      nivel: generarNivel(),
      id: id,
      caracteristicaId: ultimaCaracteristicaAsignada,
      listaDeRequisitoId: linearGenerator(0, LISTAREQUISITO_MOCK_AMOUNT),
    };
    return requisito;
  }

  // Devuelve un objeto solicitud
  function objectoSolicitud(id) {
    var solicitud = {
      id: id,
      nombre: obtenerValor(nombreS),
      descripcion: obtenerValor(descripcion),
      fechaRecibida: new Date(new Date().getTime() - linearGenerator(0, 999999999999)),
      cliente: obtenerValor(cliente),
      brm: obtenerValor(brm),
      adm: obtenerValor(adm),
      reqObligatorios: obtenerValor(reqObligatorios),
      reqDeseables: obtenerValor(reqDeseables),
      consultorasContactadas: obtenerValor(consultorasContactadas),
      estado: obtenerValor(estadoS),
      fechaCierre: new Date(new Date().getTime() - linearGenerator(0, 999999999999)),
      candidatoId: linearGenerator(0, 400),
      idReqObligatorios: linearGenerator(0, LISTAREQUISITO_MOCK_AMOUNT),
      idReqDeseables: linearGenerator(0, LISTAREQUISITO_MOCK_AMOUNT),
    };
    return solicitud;
  }

  // Devuelve un objeto cantidato
  function objectoCandidato(id) {
    var candidato = {
      id: id,
      nombre: obtenerValor(nombreC),
      apellido: obtenerValor(apellido),
      perfil: obtenerValor(perfil),
      provincia: obtenerValor(provincia),
      posicion: obtenerValor(posicion),
      experiencia: linearGenerator(0, 20) + ' ' + obtenerValor(experiencia),
      disp_viajar: obtenerValor(disp_viajar),
      disp_residencia: obtenerValor(disp_residencia),
      disp_incorporacion: obtenerValor(disp_incorporacion),
      expect_contractual: obtenerValor(expect_contractual),
      expect_economica: linearGenerator(0, 4000),
      fecha_entrevista: new Date(new Date().getTime() - linearGenerator(0, 999999999999)),
      feedback_sourcing: obtenerValor(feedback_sourcing),
      feedback_tecnico: obtenerValor(feedback_tecnico),
      tec_seleccion: obtenerValor(tec_seleccion),
      referenciado: obtenerValor(referenciado),
      estado: obtenerValor(estadoC),
      fecha_contacto: new Date(new Date().getTime() - linearGenerator(0, 999999999999)),
      fecha_actualizado: new Date(new Date().getTime() - linearGenerator(0, 999999999999)),
      listaDeRequisitoId: linearGenerator(0, LISTAREQUISITO_MOCK_AMOUNT),
    };
    return candidato;
  }

  generadorEntidad(LISTAREQUISITO_MOCK_AMOUNT, objectoListaRequisitos).forEach(function(elem) {
    delete elem.id;
    ListaDeRequisito.create(elem);
  });

  generadorEntidad(REQUISITO_MOCK_AMOUNT, objectoRequisito).forEach(function(elem) {
    delete elem.id;
    Requisito.create(elem);
  });

  generadorEntidad(SOLICITUD_MOCK_AMOUNT, objectoSolicitud).forEach(function(elem) {
    delete elem.id;
    Solicitud.create(elem);
  });

  generadorEntidad(CANDIDATO_MOCK_AMOUNT, objectoCandidato).forEach(function(elem) {
    delete elem.id;
    Candidato.create(elem);
  });
};
