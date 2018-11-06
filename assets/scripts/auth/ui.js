'use strict'

const store = require('../store.js')

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
}

const changePasswordSuccess = (response) => {
  $('#user-message').html('')
  const outputHTML = (`
    <h6>Password Changed!</h6>
    `)
  $('#user-message').html(outputHTML)
  $('#change-password-form').trigger('reset')
}

const signOutSuccess = (response) => {
  $('#user-message').html(`<h5> Signed Out </h5>`)
  // store.user = null // remove all stored data on logout
  // store.currentGame = null
  $('#unauthenticated-buttons').show()
  $('#authenticated-buttons').hide()
  $('#ch-pwd-box').hide()
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
