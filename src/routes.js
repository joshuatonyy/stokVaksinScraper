const scraperStokVaksin = require('./scrapper/stokVaksinHandler');
const scraperTotalAllDosis = require('./scrapper/totalAllDosisHandlerPupeteer');

const routes = [
  {
    method: 'GET',
    path: '/stokvaksin',
    handler: (request, h) => (
      scraperStokVaksin.getData()
    ),
  },
  {
    method: 'GET',
    path: '/vaksin',
    handler: (request, h) => (
      scraperTotalAllDosis.getDataTotal()
    ),
  },
  {
    method: 'GET',
    path: '/vaksin/dosis1',
    handler: (request, h) => (
      scraperTotalAllDosis.getDataDosis1()
    ),
  },
  {
    method: 'GET',
    path: '/vaksin/dosis1/total',
    handler: (request, h) => (
      scraperTotalAllDosis.getDataDosis1Total()
    ),
  },
  {
    method: 'GET',
    path: '/vaksin/dosis1/hariini',
    handler: (request, h) => (
      scraperTotalAllDosis.getDataDosis1HariIni()
    ),
  },
  {
    method: 'GET',
    path: '/vaksin/dosis2',
    handler: (request, h) => (
      scraperTotalAllDosis.getDataDosis2()
    ),
  },
  {
    method: 'GET',
    path: '/vaksin/dosis2/total',
    handler: (request, h) => (
      scraperTotalAllDosis.getDataDosis2Total()
    ),
  },
  {
    method: 'GET',
    path: '/vaksin/dosis2/hariini',
    handler: (request, h) => (
      scraperTotalAllDosis.getDataDosis2HariIni()
    ),
  },
  {
    method: 'GET',
    path: '/vaksin/dosis3',
    handler: (request, h) => (
      scraperTotalAllDosis.getDataDosis3()
    ),
  },
  {
    method: 'GET',
    path: '/vaksin/dosis3/total',
    handler: (request, h) => (
      scraperTotalAllDosis.getDataDosis3Total()
    ),
  },
  {
    method: 'GET',
    path: '/vaksin/dosis3/hariini',
    handler: (request, h) => (
      scraperTotalAllDosis.getDataDosis3HariIni()
    ),
  },
];

module.exports = routes;
