'use strict';

module.exports = function(app) {
  const Caracteristica = app.models.Caracteristica;
  [
    {
      nombre: 'javaScript',
      tipo: 'programacion',
    },
    {
      nombre: 'java',
      tipo: 'programacion',
    },
    {
      nombre: 'ingles',
      tipo: 'idioma',
    },
    {
      nombre: 'guardias',
      tipo: 'disponibilidad',
    },
  ].map(function(elem) {
    Caracteristica.create(elem);
  });
  const Tecnologia = app.models.Tecnologia;
  const CANDIDATO_MOCK_AMOUNT = 103;
  console.log('app.models', app.models);
  function aleatorio(rango) {
    return Math.floor(Math.random() * rango);
  }
  function obtenerValor(array) {
    return array[aleatorio(array.length)];
  }
  // creacion de un objeto tecnologia
  function crearTecnologia(i) {
    return {
      id: i,
      nombre: obtenerValor(nombres),
      descripcion: obtenerValor(descripciones),
    };
  }
  var nombres = ['java', 'javaScript', 'CSS', 'HTML', 'Angular', 'XML', 'C++', 'PHP', 'Pascal', 'Ajax', 'Assembly',
    'Scheme', 'Arduino', 'Python', 'Forth', 'Swift', 'Cuda', 'Delphi', '.NET', 'Cobol', 'Visual Basic', 'WebDNA', 'Groovy',
    'Smalltalk', 'Active Server Page', 'Scratch', 'Objective-C', 'TCL'];
  var descripciones = ['Alto', 'Medio', 'Bajo'];
  var arrayTecnologias = [];
  for (var i = 1; i < 200; i++) {
    arrayTecnologias.push(crearTecnologia(i));
      // enviamos la i como id de la tecnologia creada, llena el arrayTecnologias.
  }
  arrayTecnologias.forEach(function(elem) {
    delete elem.id;
    Tecnologia.create(elem);
  });
};
