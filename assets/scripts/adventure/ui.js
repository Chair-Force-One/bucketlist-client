'use strict'

const store = require('../store.js')
const adventuresTemplate = require('../templates/adventures.handlebars')

const createAdventureSuccess = (response) => {
  $('#user-messages').html('')
  const output = (`
    <h4> Created! </h4>
    `)
  $('#user-message').html(output)
  $('#add-adventure-form').trigger('reset')
  console.log(response) // TODO: Remove console.log from production
}

const showAdventuresSuccess = (response) => {
  const adventuresHTML = adventuresTemplate({adventures: response.adventures})
  $('#show-adventures-section').html(adventuresHTML)
  console.log(response.adventures)
  return response.adventures
}

const adventureUpdateSuccess = (response) => {
  const output = (`
    <h3>Update Adventure Success</h3>
    `)
  $('#user-message').html(output)
  $('#update-adventure-form').trigger('reset')
  $('#update-adventure-box').hide()
}

const adventureFailure = (response) => {
  $('#user-message').html('')
  const output = (`
    <h3>ERROR: Failed to Adventure</h3>
    `)
  $('#user-message').html(output)
}

const adventureDeleteFailure = (response) => {
  $('#user-message').html('')
  const output = (`
    <h3>ERROR: Failed to delete Adventure</h3>
    `)
  $('#user-message').html(output)
}

const adventureUpdateFailure = (response) => {
  const output = (`
    <h3>ERROR: Failed to update Adventure</h3>
    `)
  $('#user-message').html(output)
  $('#update-adventure-box').trigger('reset')
}

// console.log($('span[button id="'adventure._id-edit'"]')

module.exports = {
  createAdventureSuccess,
  showAdventuresSuccess,
  adventureFailure,
  adventureDeleteFailure,
  adventureUpdateFailure,
  adventureUpdateSuccess
}
