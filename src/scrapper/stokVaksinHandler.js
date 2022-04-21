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
    let faskes;
    const data = [];
    $(tds).each((i, element) => {
      if (i > 0) {
        if (tableHeaders[i] === 'faskes') {
          faskes = $(element).text();
        } else {
          const name = tableHeaders[i];
          const qty = $(element).text();
          const s1 = { name, qty };
          data.push(s1);
        }
      }
    });
    const row = { faskes, data };
    scrapedData.push(row);
  });
  scrapedData.shift();
  console.log(scrapedData[0]);
  return scrapedData;
}

module.exports = { getData };
