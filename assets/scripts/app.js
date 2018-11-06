'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')

$(() => {
  addEventListeners()
  setDefaultState()
})

const addEventListeners = () => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
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
}
const setDefaultState = () => {
  $('#authenticated-buttons').hide()
  $('#sign-in-box').hide()
  $('#sign-up-box').hide()
  $('#change-password-box').hide()
}
