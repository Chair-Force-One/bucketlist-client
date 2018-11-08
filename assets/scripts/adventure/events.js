'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')

const store = require('../store.js')
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

const onClickCheckbox = function (id) {
//  event.preventDefault()
  console.log(id)
  api.indexAdventures(id)
    .then(onChangeCheckBoxState)
    .catch(ui.adventureUpdateFailure)
}

const onChangeCheckBoxState = function (response) {
  store.adventure = response
  // still do not understand how checked is already changed.
  console.log(store.adventure.adventure)
  console.log('in onChangebox')
  store.adventure.adventure.checked = !store.adventure.adventure.checked
  console.log(store.adventure.adventure)
}

const onClickEdit = (id) => {
  event.preventDefault()
  store.updateAdventureId = id
  console.log(store.updateAdventureId)

  $('#update-adventure-box').show()

// current adventure being updated
}

const onUpdateAdventure = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)

  // current adventure being updated
  //  console.log(store.updateid)
  const updatedAdventure = {
    'adventure': {
      'title': data.adventure.title,
      'place': data.adventure.place,
      'notes': data.adventure.notes,
      'checked': data.adventure.checked = false
    }
  }
  console.log(updatedAdventure)
  api.updatedAdventure(updatedAdventure)
    .then(ui.adventureUpdateSuccess)
    .then(() => onShowAdventures(event))
    .catch(ui.adventureUpdateFailure)
}

const onClickDelete = (id) => {
  event.preventDefault()
  console.log(id)
  api.deleteAdventure(id)
    .then(() => onShowAdventures(event))
    .catch(ui.adventureDeleteFailure)
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
  onShowAdventures,
  onUpdateAdventure
}
