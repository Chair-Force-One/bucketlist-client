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
      lat: 0,
      lng: 0
    },
    zoom: 2
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
      store.markers = [] // no markers on map yet
    })
    .catch(console.error)
}

const dropMarker = (location, label) => {
  const marker = new store.googleMaps.Marker({
    position: location,
    map: store.map,
    label: label
  })
  store.markers.push(marker)
}

const findPlaceLocation = (place, label, title) => {
  const geocoder = new store.googleMaps.Geocoder()
  geocoder.geocode({ 'address': place }, (results, status) => {
    if (status === 'OK') {
      // map.setCenter(results[0].geometry.location);
      dropMarker(results[0].geometry.location, label, title)
    } else {
      console.log('Geocode was not successful for the following reason: ' + status)
    }
  })
}

module.exports = {
  setupMap,
  dropMarker,
  findPlaceLocation
  // addMarker
}
