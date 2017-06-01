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
    {
      nombre: 'frances',
      tipo: 'idioma',
    },
    {
      nombre: 'aleman',
      tipo: 'idioma',
    },
    {
      nombre: 'portugues',
      tipo: 'idioma',
    },
    {
      nombre: 'angular',
      tipo: 'programacion',
    },
    {
      nombre: 'html',
      tipo: 'maquetacion',
    },
    {
      nombre: 'css',
      tipo: 'maquetacion',
    },
    {
      nombre: 'python',
      tipo: 'programacion',
    },
    {
      nombre: 'viajar',
      tipo: 'disponibilidad',
    },
  ].map(function(elem) {
    Caracteristica.create(elem);
  });
};
