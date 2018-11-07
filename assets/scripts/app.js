'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')
const adventureEvents = require('./adventure/events.js')
const mapsFunctions = require('./adventure/map.js')

$(() => {
  addEventListeners()
  setDefaultState()
  mapsFunctions.setupMap()
})

const addEventListeners = () => {
  $('#show-markers-button').on('click', () => {
    mapsFunctions.codeAddress('200 Portland Street', 'A', 'Title')
  })

  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)

  $('#add-adventure-form').on('submit', adventureEvents.onCreateAdventure)
  $('#get-adventures-button').on('click', adventureEvents.onShowAdventures)

  // update adventure event handlers
  $('#update-adventure-form').on('submit', adventureEvents.onUpdateAdventure)
  $('#cancel-update-button').on('click', () => {
    $('#update-adventure-box').hide()
    $('#update-adventure-form').trigger('reset')
  })
  $('#show-sign-in-button').on('click', () => {
    $('#sign-in-box').show()
  })
  $('#cancel-sign-in-button').on('click', () => {
    $('#sign-in-box').hide()
    $('#sign-in-form').trigger('reset')
  })

  $('#show-sign-up-button').on('click', () => {
    $('#sign-up-box').show()
  })
  $('#cancel-sign-up-button').on('click', () => {
    $('#sign-up-box').hide()
    $('#sign-up-form').trigger('reset')
  })
  $('#show-ch-pwd-button').on('click', () => {
    $('#change-password-box').show()
  })
  $('#cancel-ch-pwd-button').on('click', () => {
    $('#change-password-box').hide()
    $('#change-password-form').trigger('reset')
  })

  $('#show-create-button').on('click', () => {
    $('#add-adventure-box').show()
  })
  $('#cancel-create-button').on('click', () => {
    $('#add-adventure-box').hide()
    $('#add-adventure-form').trigger('reset')
  })
}
const setDefaultState = () => {
  $('#authenticated-buttons').hide()
  $('#sign-in-box').hide()
  $('#sign-up-box').hide()
  $('#change-password-box').hide()
  $('#adventure-control-buttons').hide()
  $('#add-adventure-box').hide()
  $('#update-adventure-box').hide()
  $('#map').hide()
}
