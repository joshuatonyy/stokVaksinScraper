/* eslint-disable max-len */
/* eslint-disable consistent-return */
const puppeteer = require('puppeteer');

async function getDataTotal() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage();
  await page.goto('http://victori.semarangkota.go.id/dashboardNew', { waitUntil: 'networkidle0' });
  const totalPelayananVaksinasi = await page.$eval('span[id="total_penerima_vaksin"]', (el) => el.innerText);
  const totalPelayananTerlaksana = await page.$eval('span[id="total_terlaksana"]', (el) => el.innerText);
  const totalPelayananMendaftar = await page.$eval('span[id="total_belum"]', (el) => el.innerText);
  const totalPelayananDitunda = await page.$eval('span[id="total_batal"]', (el) => el.innerText);
  const totalPelayananReschedule = await page.$eval('span[id="total_reschedule"]', (el) => el.innerText);
  const scrapedData = {
    totalPelayananVaksinasi, totalPelayananTerlaksana, totalPelayananMendaftar, totalPelayananDitunda, totalPelayananReschedule,
  };
  await browser.close();
  return scrapedData;
}

async function getDataDosis1Total() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://victori.semarangkota.go.id/dashboardNew', { waitUntil: 'networkidle0' });
  const totalPelayananVaksinasiDosis1 = await page.$eval('span[id="penerima_vaksin"]', (el) => el.innerText);
  const totalPelayananTerlaksanaDosis1 = await page.$eval('span[id="terlaksana"]', (el) => el.innerText);
  const totalPelayananMendaftarDosis1 = await page.$eval('span[id="belum_terlaksana"]', (el) => el.innerText);
  const totalPelayananDitundaDosis1 = await page.$eval('span[id="batal"]', (el) => el.innerText);
  const totalPelayananRescheduleDosis1 = await page.$eval('span[id="reschedule"]', (el) => el.innerText);
  const scrapedData = {
    totalPelayananVaksinasiDosis1, totalPelayananTerlaksanaDosis1, totalPelayananMendaftarDosis1, totalPelayananDitundaDosis1, totalPelayananRescheduleDosis1,
  };
  await browser.close();
  return scrapedData;
}

async function getDataDosis1HariIni() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://victori.semarangkota.go.id/dashboardNew', { waitUntil: 'networkidle0' });
  const hariIniPelayananVaksinasiDosis1 = await page.$eval('span[id="penerima_vaksin_hariini"]', (el) => el.innerText);
  const hariIniPelayananTerlaksanaDosis1 = await page.$eval('span[id="terlaksana_hariini"]', (el) => el.innerText);
  const hariIniPelayananMendaftarDosis1 = await page.$eval('span[id="belum_terlaksana_hariini"]', (el) => el.innerText);
  const hariIniPelayananDitundaDosis1 = await page.$eval('span[id="batal_hariini"]', (el) => el.innerText);
  const hariIniPelayananRescheduleDosis1 = await page.$eval('span[id="reschedule_hariini"]', (el) => el.innerText);
  const scrapedData = {
    hariIniPelayananVaksinasiDosis1, hariIniPelayananTerlaksanaDosis1, hariIniPelayananMendaftarDosis1, hariIniPelayananDitundaDosis1, hariIniPelayananRescheduleDosis1,
  };
  await browser.close();
  return scrapedData;
}

async function getDataDosis2Total() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://victori.semarangkota.go.id/dashboardNew', { waitUntil: 'networkidle0' });
  const totalPelayananVaksinasiDosis2 = await page.$eval('span[id="penerima_vaksin_2"]', (el) => el.innerText);
  const totalPelayananTerlaksanaDosis2 = await page.$eval('span[id="terlaksana_2"]', (el) => el.innerText);
  const totalPelayananMendaftarDosis2 = await page.$eval('span[id="belum_terlaksana_2"]', (el) => el.innerText);
  const totalPelayananDitundaDosis2 = await page.$eval('span[id="batal_2"]', (el) => el.innerText);
  const totalPelayananRescheduleDosis2 = await page.$eval('span[id="reschedule_2"]', (el) => el.innerText);
  const scrapedData = {
    totalPelayananVaksinasiDosis2, totalPelayananTerlaksanaDosis2, totalPelayananMendaftarDosis2, totalPelayananDitundaDosis2, totalPelayananRescheduleDosis2,
  };
  await browser.close();
  return scrapedData;
}

async function getDataDosis2HariIni() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://victori.semarangkota.go.id/dashboardNew', { waitUntil: 'networkidle0' });
  const hariIniPelayananVaksinasiDosis2 = await page.$eval('span[id="penerima_vaksin_kedua_hariini"]', (el) => el.innerText);
  const hariIniPelayananTerlaksanaDosis2 = await page.$eval('span[id="terlaksana_kedua_hariini"]', (el) => el.innerText);
  const hariIniPelayananMendaftarDosis2 = await page.$eval('span[id="belum_terlaksana_kedua_hariini"]', (el) => el.innerText);
  const hariIniPelayananDitundaDosis2 = await page.$eval('span[id="batal_kedua_hariini"]', (el) => el.innerText);
  const hariIniPelayananRescheduleDosis2 = await page.$eval('span[id="reschedule_kedua_hariini"]', (el) => el.innerText);
  const scrapedData = {
    hariIniPelayananVaksinasiDosis2, hariIniPelayananTerlaksanaDosis2, hariIniPelayananMendaftarDosis2, hariIniPelayananDitundaDosis2, hariIniPelayananRescheduleDosis2,
  };
  await browser.close();
  return scrapedData;
}

async function getDataDosis3Total() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://victori.semarangkota.go.id/dashboardNew', { waitUntil: 'networkidle0' });
  const totalPelayananVaksinasiDosis3 = await page.$eval('span[id="penerima_vaksin3"]', (el) => el.innerText);
  const totalPelayananTerlaksanaDosis3 = await page.$eval('span[id="terlaksana3"]', (el) => el.innerText);
  const totalPelayananMendaftarDosis3 = await page.$eval('span[id="belum_terlaksana3"]', (el) => el.innerText);
  const totalPelayananDitundaDosis3 = await page.$eval('span[id="batal3"]', (el) => el.innerText);
  const totalPelayananRescheduleDosis3 = await page.$eval('span[id="reschedule3"]', (el) => el.innerText);
  const scrapedData = {
    totalPelayananVaksinasiDosis3, totalPelayananTerlaksanaDosis3, totalPelayananMendaftarDosis3, totalPelayananDitundaDosis3, totalPelayananRescheduleDosis3,
  };
  await browser.close();
  return scrapedData;
}

async function getDataDosis3HariIni() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://victori.semarangkota.go.id/dashboardNew', { waitUntil: 'networkidle0' });
  const hariIniPelayananVaksinasiDosis3 = await page.$eval('span[id="total_penerima_vaksin3hariini"]', (el) => el.innerText);
  const hariIniPelayananTerlaksanaDosis3 = await page.$eval('span[id="terlaksana3hariini"]', (el) => el.innerText);
  const hariIniPelayananMendaftarDosis3 = await page.$eval('span[id="belum_terlaksana3hariini"]', (el) => el.innerText);
  const hariIniPelayananDitundaDosis3 = await page.$eval('span[id="batal3hariini"]', (el) => el.innerText);
  const hariIniPelayananRescheduleDosis3 = await page.$eval('span[id="reschedule3hariini"]', (el) => el.innerText);
  const scrapedData = {
    hariIniPelayananVaksinasiDosis3, hariIniPelayananTerlaksanaDosis3, hariIniPelayananMendaftarDosis3, hariIniPelayananDitundaDosis3, hariIniPelayananRescheduleDosis3,
  };
  await browser.close();
  return scrapedData;
}

async function getDataDosis1() {
  const totalDosis1 = await getDataDosis1Total();
  const hariIniDosis1 = await getDataDosis1HariIni();
  return [totalDosis1, hariIniDosis1];
}
async function getDataDosis2() {
  const totalDosis2 = await getDataDosis2Total();
  const hariIniDosis2 = await getDataDosis2HariIni();
  return [totalDosis2, hariIniDosis2];
}
async function getDataDosis3() {
  const totalDosis3 = await getDataDosis3Total();
  const hariIniDosis3 = await getDataDosis3HariIni();
  return [totalDosis3, hariIniDosis3];
}

module.exports = {
  getDataTotal, getDataDosis1Total, getDataDosis1HariIni, getDataDosis2Total, getDataDosis2HariIni, getDataDosis3Total, getDataDosis3HariIni, getDataDosis1, getDataDosis2, getDataDosis3,
};
