const loadGoogleMapsApi = require('load-google-maps-api')
const dotenv = require('dotenv')
const result = dotenv.config()
if (result.error) {
  throw result.error
}
console.log(result.parsed)

const initOptions = {
  key: //ADD KEY HERE
}
const initMap = (googleMaps) => {
  const map = new googleMaps.Map(document.getElementById('map'), {
    center: {
      lat: 40.7484405,
      lng: -73.9944191
    },
    zoom: 3
  })
  return map
}

const setupMap = () => {
  loadGoogleMapsApi(initOptions)
    .then(initMap)
    .then(console.log)
    .catch(console.error)
}

module.exports = {
  setupMap
}
