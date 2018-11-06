'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')

const api = require('./api.js')
const ui = require('./ui.js')

const onCreateAdventure = (event) => {
  event.preventDefault()
  console.log(event)
  const data = getFormFields(event.target)
  // console.log(data)
  data.adventure.checked = false // Always create an adventure with false for checked status
  api.createAdventure(data)
    .then(ui.createAdventureSuccess)
    .catch(ui.adventureFailure)
}

const onShowAdventures = () => {
  api.showAdventures()
    .then(ui.showAdventuresSuccess)
    .catch(ui.adventureFailure)
}

module.exports = {
  onCreateAdventure,
  onShowAdventures
}
