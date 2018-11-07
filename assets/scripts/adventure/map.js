const loadGoogleMapsApi = require('load-google-maps-api')

const store = require('./../store.js')

const initOptions = {
  key: //PLACE KEY HERE
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

// const addMarker = (position, title) => {
//   const marker = new google.maps.Marker({
//     position: position,
//     map: store.map,
//     title: title
//   })
//   store.markers.push(marker)
// }

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
  // addMarker
}
