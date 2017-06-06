'use strict';

// Devuelve un valor aleatorio entre min y max
function linearGenerator(min, max) {
  return Math.floor(Math.random() * ((max + 1) - min) + min);
}

// Obtenemos un valor aleatorio entre 0 y rango
function distribucionLineal(rango) {
  return Math.floor(Math.random() * rango);
}

// Devuelve true si encuentra un elemento dentro de array
function elemInArray(elem, array) {
  for (var i = 0; i < array.length; i++)
    if (elem == array[i])
      return true;
  return false;
}

var arrayCaracteristicas = [];

function generarCaracteristicaUnica() {
  var caracteristica;
  do {
    caracteristica = linearGenerator(0, 12);
  }
  while (elemInArray(caracteristica, arrayCaracteristicas));
  arrayCaracteristicas.push(caracteristica);
  return caracteristica;
}

function resetVariable() {
  arrayCaracteristicas = [];
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
// Devuelve un array con todas las entidades generadas
function generadorEntidadRequisito(amount, generatorObject, idList) {
  var array = [];
  for (var i = 0; i < amount; i++)
    array.push(generatorObject(idList));
  return array;
}

// Arrays para rellenar nuestro objeto solicitud con valores aleatorios
var nombreS = ['Adrian', 'Hector', 'Dani', 'Miguel', 'Alex', 'Rodri', 'Marta', 'Alejandro', 'Alvaro'];
var descripcion = ['descripcion1', 'descripcion2', 'descripcion3', 'descripcion4', 'descripcion5', 'descripcion6', 'descripcion7', 'descripcion8', 'descripcion9'];
var cliente = ['BBVA', 'El Corte Ingles', 'Clientazo'];
var brm = ['arm1', 'arm2', 'arm3', 'arm4', 'arm5', 'arm6'];
var adm = ['adm1', 'adm2', 'adm3', 'adm4', 'adm5', 'adm6'];
var reqObligatorios = ['Conocimientos de java', 'Puntualidad', 'Responsabilidad'];
var reqDeseables = ['Deseable1', 'Deseable2', 'Deseable3', 'Deseable4', 'Deseable5'];
var consultorasContactadas = ['Consultora1', 'Consultora2', 'Consultora3', 'Consultora4', 'Consultora5'];
var estadoS = ['abierta', 'cerradaCliente', 'cerradaIncorporacion', 'standby'];

// Arrays
var nombreC = ['Hector', 'Adrián', 'Dani', 'Miguel', 'Alex', 'Rodrigo', 'Marta', 'Alejandro', 'Alvaro', 'Luis'];
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
var estadoC = ['En proceso', 'Descartado', 'Incorporación'];

module.exports = function(app) {
  const Candidato = app.models.Candidato;
  const Solicitud = app.models.Solicitud;
  const ListaDeRequisito = app.models.listaDeRequisito;
  const Requisito = app.models.Requisito;

  const CANDIDATO_MOCK_AMOUNT = 400;
  const SOLICITUD_MOCK_AMOUNT = 100;
  const LISTAREQUISITO_MOCK_AMOUNT = SOLICITUD_MOCK_AMOUNT;

  // Devuelve un objeto requisito
  function objectoListaRequisitos(id) {
    var listaRequisito = {
      id: id,
    };

    generadorEntidadRequisito(linearGenerator(1, 4), objectoRequisito, id).forEach(function(elem) {
      delete elem.id;
      Requisito.create(elem);
    });

    resetVariable();
    return listaRequisito;
  }

  // Devuelve un objeto listaRequisito
  function objectoRequisito(id) {
    var requisito = {
      nivel: linearGenerator(0, 10),
      id: id,
      caracteristicaId: generarCaracteristicaUnica(),
      listaDeRequisitoId: id,
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

  generadorEntidad(SOLICITUD_MOCK_AMOUNT, objectoSolicitud).forEach(function(elem) {
    delete elem.id;
    Solicitud.create(elem);
  });

  generadorEntidad(CANDIDATO_MOCK_AMOUNT, objectoCandidato).forEach(function(elem) {
    delete elem.id;
    Candidato.create(elem);
  });
};
