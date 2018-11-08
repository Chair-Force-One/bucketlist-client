'use strict'

const store = require('../store.js')
const map = require('../adventure/map.js')

const signUpSuccess = (response) => {
  $('#user-messages').html('')
  const userHTML = (`
    <h4> New User: ${response.user.email}</h4>
    `)
  $('#user-message').html(userHTML)
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = (response) => {
  $('#user-message').html('')
  // TODO: Remove unnecessary data from output
  const userHTML = (`
    <h5>${response.user.email}<h5>
    `)
  $('#user-message').html(userHTML)
  store.user = response.user
  $('#sign-in-form').trigger('reset')
  $('#sign-in-box').hide()
  $('#sign-up-box').hide()
  $('#unauthenticated-buttons').hide()
  $('#authenticated-buttons').show()
  $('#adventure-control-buttons').show()
  $('#map').show()
}

const changePasswordSuccess = (response) => {
  $('#user-message').html('')
  const outputHTML = (`
    <h6>Password Changed!</h6>
    `)
  $('#user-message').html(outputHTML)
  $('#change-password-box').hide()
  $('#change-password-form').trigger('reset')
}

const signOutSuccess = (response) => {
  $('#user-message').html(`<h5> Signed Out </h5>`)
  $('#unauthenticated-buttons').show()
  $('#authenticated-buttons').hide()
  $('#change-password-box').hide()
  $('#map').hide()
  $('#show-adventures-section').html('')
  $('#adventure-control-buttons').hide()
  $('#change-password-form').trigger('reset')
  $('#update-adventure-form').trigger('reset')
  $('#add-adventure-form').trigger('reset')
  map.deleteAllMarkers()
  store.user = null // remove all stored data on logout
  store.adventures = {}
}

// OPTIMIZE: Create failure functions for each possible state rather than a blanket case
const failure = (response) => {
  $('#user-message').html('')
  const responseHTML = (`
    <h3>ERROR: Failed to authenticate with server</h3>
    `)
  $('#user-message').html(responseHTML)
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  failure
}
