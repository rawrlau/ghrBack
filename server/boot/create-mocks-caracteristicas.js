'use strict';
module.exports = function(app) {
  const Caracteristica = app.models.Caracteristica;
  [{
    nombre: 'JavaScript',
    tipo: 'programacion',
  },
  {
    nombre: 'Java',
    tipo: 'programacion',
  },
  {
    nombre: 'Ingles',
    tipo: 'idioma',
  },
  {
    nombre: 'Guardias',
    tipo: 'disponibilidad',
  },
  {
    nombre: 'Frances',
    tipo: 'idioma',
  },
  {
    nombre: 'Aleman',
    tipo: 'idioma',
  },
  {
    nombre: 'Portugues',
    tipo: 'idioma',
  },
  {
    nombre: 'Angular 1',
    tipo: 'programacion',
  },
  {
    nombre: 'Angular 2',
    tipo: 'programacion',
  },
  {
    nombre: 'React',
    tipo: 'programacion',
  },
  {
    nombre: 'Polymer',
    tipo: 'programacion',
  },
  {
    nombre: 'HTML',
    tipo: 'maquetacion',
  },
  {
    nombre: 'CSS',
    tipo: 'maquetacion',
  },
  {
    nombre: 'Python',
    tipo: 'programacion',
  },
  {
    nombre: 'Viajar',
    tipo: 'disponibilidad',
  },
  {
    nombre: 'C',
    tipo: 'programacion',
  },
  {
    nombre: 'C++',
    tipo: 'programacion',
  },
  {
    nombre: 'Objective-C',
    tipo: 'programacion',
  },
  {
    nombre: 'C#',
    tipo: 'programacion',
  },
  {
    nombre: 'PHP',
    tipo: 'programacion',
  },
  {
    nombre: 'Visual Basic',
    tipo: 'programacion',
  },
  {
    nombre: 'Ruby',
    tipo: 'programacion',
  },
  {
    nombre: 'Perl',
    tipo: 'programacion',
  },
  {
    nombre: 'Bash',
    tipo: 'programacion',
  },
  {
    nombre: 'Lisp',
    tipo: 'programacion',
  },
  {
    nombre: 'Pascal',
    tipo: 'programacion',
  },
  {
    nombre: 'Delphi',
    tipo: 'programacion',
  },
  {
    nombre: '.NET',
    tipo: 'programacion',
  },
  {
    nombre: 'SQL',
    tipo: 'base de datos',
  },
  {
    nombre: 'Lua',
    tipo: 'programacion',
  },
  {
    nombre: 'Assembly',
    tipo: 'programacion',
  },
  {
    nombre: 'Node',
    tipo: 'programacion',
  },
  {
    nombre: 'Bootstrap',
    tipo: 'maquetacion',
  },
  {
    nombre: 'Sass',
    tipo: 'maquetacion',
  },
  {
    nombre: 'Less',
    tipo: 'maquetacion',
  },
  {
    nombre: 'Stylus',
    tipo: 'maquetacion',
  },
  {
    nombre: 'Oracle',
    tipo: 'base de datos',
  },
  {
    nombre: 'MySQL',
    tipo: 'base de datos',
  },
  {
    nombre: 'Android',
    tipo: 'programacion',
  },
  {
    nombre: 'iOS',
    tipo: 'programacion',
  },
  ].map(function(elem) {
    Caracteristica.create(elem);
  });
};
