const loadGoogleMapsApi = require('load-google-maps-api')
const store = require('./../store.js')
const config = require('./../config.js')

const getKey = () => {
  return $.ajax({
    url: config.apiUrl + '/maps',
    method: 'GET'
  })
}

const loadMapAPI = (options) => {
  return loadGoogleMapsApi(options)
    .then((response) => {
      console.log('initial', response)
      return response
    })
}

const initMapObject = (googleMaps) => {
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
  const initOptions = {}
  getKey()
    .then((response) => {
      console.log('GET KEY RESPONSE: ', response.key)
      return response
    })
    .then((response) => { initOptions.key = response.key })
    .then(() => { return loadMapAPI(initOptions) })
    .then((googleMaps) => {
      store.googleMaps = googleMaps // Store the initalized API Object
      return googleMaps
    })
    .then(initMapObject) // Needs googleMaps Object created by loadMapAPI()
    .then((map) => { // Store the map returned by initMapObject
      store.map = map
    })
    .catch(console.error)
}

module.exports = {
  setupMap
  // addMarker
}
