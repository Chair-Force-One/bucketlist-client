const loadGoogleMapsApi = require('load-google-maps-api')
const store = ('./../../store.js')

const initOptions = {
  key: 'AIzaSyCwyN8WOioGkLhjSerpMlRBR03dmdVOjvo'
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

const addMarker = (location) => {

}

const setupMap = () => {
  loadGoogleMapsApi(initOptions)
    .then(initMap)
    .then((map) => {
      store.map = map
    })
    .then(console.log)
    .catch(console.error)
}

module.exports = {
  setupMap,
  addMarker
}
