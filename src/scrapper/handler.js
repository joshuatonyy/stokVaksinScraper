/* eslint-disable consistent-return */
const cheerio = require('cheerio');
const request = require('request-promise');

async function getData() {
  const result = await request.get('http://victori.semarangkota.go.id/stokVaksin');
  const $ = cheerio.load(result);
  const scrapedData = [];
  const tableHeaders = [];
  $('body > div > div > div > div > div > div > table > tbody > tr').each((index, element) => {
    if (index === 0) {
      const headers = $(element).find('th');
      $(headers).each((i, element) => {
        tableHeaders.push($(element).text().toLowerCase());
      });
      return true;
    }
    const tds = $(element).find('td');
    const row = {};
    $(tds).each((i, element) => {
      row[tableHeaders[i]] = $(element).text();
    });
    scrapedData.push(row);
  });
  console.log(scrapedData);
  return scrapedData;
}

module.exports = { getData };
