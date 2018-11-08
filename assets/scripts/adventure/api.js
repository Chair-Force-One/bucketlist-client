'use strict'

const store = require('../store.js')
const config = require('../config.js')

const createAdventure = (data) => {
  return $.ajax({
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    url: config.apiUrl + '/adventures',
    method: 'POST',
    data: data
  })
}

const showAdventures = (data) => {
  return $.ajax({
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    url: config.apiUrl + '/adventures',
    method: 'GET'
  })
}

const updateAdventure = (updatedAdventure, id) => {
  // const updateId = store.updateid
  // // console.log(store.updateid)
  return $.ajax({
    url: config.apiUrl + '/adventures/' + id,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: updatedAdventure
  })
}

const deleteAdventure = function (id) {
  return $.ajax({
    url: config.apiUrl + '/adventures/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}
module.exports = {
  createAdventure,
  showAdventures,
  deleteAdventure,
  updateAdventure
}
