Hi, this is an API that works as Semarang City's Vaccination Tracker <br>
This API is hosted at: https://data-vaksin-semarang-scraper.herokuapp.com/ <br><br>
Routes are:
- /stokvaksin = list of available vaccines types in Semarang's vaccination centers
- /vaksin = shows tracking of all vaccination done in Semarang
- /vaksin/dosis1 = shows tracking of all 1st dose vaccination done in Semarang and 1st dose vaccination done today
- /vaksin/dosis1/total = shows tracking of all 1st dose vaccination done in Semarang
- /vaksin/dosis1/hariini = shows tracking of 1st dose vaccination done today in Semarang
- /vaksin/dosis2 = shows tracking of all 2nd dose vaccination done in Semarang and 2nd dose vaccination done today
- /vaksin/dosis2/total = shows tracking of all 2nd dose vaccination done in Semarang
- /vaksin/dosis2/hariini = shows tracking of 2nd dose vaccination done today in Semarang
- /vaksin/dosis3 = shows tracking of all 3rd dose vaccination done in Semarang and 3rd dose vaccination done today
- /vaksin/dosis3/total = shows tracking of all 3rd dose vaccination done in Semarang
- /vaksin/dosis3/hariini = shows tracking of 3rd dose vaccination done today in Semarang

**Because the data loads late at the sites I have to use puppeteer and wait the data to fully loaded, so expect a bit of delay in /vaksin and its subdomains**<br>
**LOGS: I just found an internal server error sometimes for the /vaksin routes. For now, I suspect that this is a problem from the hosting part with Puppeteer.**


These data are scraped from the Semarang Vaccination Website : http://victori.semarangkota.go.id/
-joshuatonyy
