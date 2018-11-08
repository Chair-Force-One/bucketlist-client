'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')

const store = require('../store.js')
const api = require('./api.js')
const ui = require('./ui.js')
const map = require('./map.js')

const onCreateAdventure = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  data.adventure.checked = false // Always create an adventure with false for checked status
  api.createAdventure(data)
    .then(ui.createAdventureSuccess)
    .then(showAdventures)
    .catch(ui.adventureFailure)
}

const onClickCheckbox = (id) => {
  store.adventures[id].checked = !store.adventures[id].checked
  const current = store.adventures[id]

  const updatedAdventure = {
    'adventure': {
      'priority': current.priority,
      'title': current.title,
      'place': current.place,
      'notes': current.notes,
      'checked': current.checked
    }
  }

  api.updateAdventure(updatedAdventure, id)
    .then(ui.adventureUpdateSuccess)
    .then(showAdventures)
    .catch(ui.adventureUpdateFailure)
}

const onClickEdit = (id) => {
  event.preventDefault()
  store.updateAdventureId = id
  // console.log(store.updateAdventureId)

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
      'priority': data.adventure.priority,
      'title': data.adventure.title,
      'place': data.adventure.place,
      'notes': data.adventure.notes,
      'checked': data.adventure.checked
    }
  }

  console.log(updatedAdventure)
  api.updateAdventure(updatedAdventure, store.updateAdventureId)
    .then(ui.adventureUpdateSuccess)
    .then(showAdventures)
    .catch(ui.adventureUpdateFailure)
}

const onClickDelete = (id) => {
  event.preventDefault()
  console.log(id)
  api.deleteAdventure(id)
    .then(showAdventures)
    .catch(ui.adventureDeleteFailure)
}

const onClickPlot = (id) => {
  map.centerOn(id)
}

const onClickCenter = () => {
  map.resetZoom()
}

const handleAdventures = (adventures) => {
  store.adventures = {}
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
    $(`#${adventure._id}-plot`).on('click', () => {
      onClickPlot(adventure._id)
    })

    const priority = adventure.priority === undefined ? '' : adventure.priority.toString()
    map.findPlaceLocation(adventure._id, adventure.place, priority, adventure.title)

    store.adventures[adventure._id] = adventure
  })
}

const showAdventures = () => {
  api.showAdventures()
    .then(ui.showAdventuresSuccess)
    .then(handleAdventures)
    .then(map.resetZoom)
    .catch(ui.adventureFailure)
}

module.exports = {
  onCreateAdventure,
  showAdventures,
  onClickCenter,
  onUpdateAdventure
}
