'use strict'

const store = require('../store.js')
const state = require('../states.js')

const signUpSuccess = (response) => {
  $('#auth_messages').html('')
  const userHTML = (`
    <h4> New User: ${response.user.email}</h4>
    `)
  $('#auth_messages').html(userHTML)
  $('#sign-up-form').trigger('reset')
  $('#sign-up-box').hide()
  $('#sign-in-box').show()
}

const signInSuccess = (response) => {
  $('#auth_messages').html('')
  // TODO: Remove unnecessary data from output
  const userHTML = (`
    <h5>${response.user.email}<h5>
    `)
  $('#user-message').append(userHTML)
  store.user = response.user
  state.signedIn()
  $('#sign-in-form').trigger('reset')
}

const changePasswordSuccess = (response) => {
  $('#auth_messages').html('')
  const outputHTML = (`
    <h6>Password Changed!</h6>
    `)
  $('#auth_messages').append(outputHTML)
  state.signedIn()
  $('#change-password-form').trigger('reset')
}

const signOutSuccess = (response) => {
  $('#auth_messages').html(`<h5> Signed Out </h5>`)
  state.signedOut()
  // store.user = null // remove all stored data on logout
  // store.currentGame = null
}

// OPTIMIZE: Create failure functions for each possible state rather than a blanket case
const failure = (response) => {
  $('#auth_messages').html('')
  const responseHTML = (`
    <h3>ERROR: Failed to authenticate with server</h3>
    `)
  $('#auth_messages').append(responseHTML)
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  failure
}
