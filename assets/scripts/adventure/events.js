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

const onClickCheckbox = (id) => {
  console.log(id)
}

const onClickEdit = (id) => {
  console.log(id)
}

const onClickDelete = (id) => {
  console.log(id)
}

const onShowAdventures = () => {
  api.showAdventures()
    .then(ui.showAdventuresSuccess)
    .then((adventures) => {
      adventures.forEach((adventure) => {
        $(`#${adventure._id}-checkbox`).on('click', () => {
          onClickCheckbox(adventure._id)
        })
        $(`#${adventure._id}-edit`).on('click', () => {
          onClickEdit(adventure._id)
        })
        $(`#${adventure._id}-delete`).on('click', () => {
          onClickDelete(adventure._id)
        })
      })
    })
    .catch(ui.adventureFailure)
}

module.exports = {
  onCreateAdventure,
  onShowAdventures
}
