//
const handle = require('../templates/helpers/index.handlebars')
const handle2 = require('../templates/helpers/index2.handlebars')

// const handle2 = require('../templates/helpers/index2.handlebars')
const store = require('../store.js')
// const events = require('./events.js')

const failure = function (FailureResponse) {
  $('.upload-message-box').show(100)
  $('.upload-message-box').html('Upload failed, Try Again')
  $('.upload-message-box').removeClass('success-message')
  $('.upload-message-box').addClass('error-message')
  setTimeout(function () {
    $('.upload-message-box').fadeOut(200).empty(200)
  }, 2500)
}

const idFailure = function (FailureResponse) {
  $('.upload-message-box').show(100)
  $('.upload-message-box').html('This ID does not exist')
  $('.upload-message-box').removeClass('success-message')
  $('.upload-message-box').addClass('error-message')
  setTimeout(function () {
    $('.upload-message-box').fadeOut(200).empty(200)
  }, 2500)
}

const uploadSuccess = function (signUpResponse) {
  $('.upload-message-box').show(100)
  $('.upload-message-box').html(`Image Successfully Uploaded`)
  $('.upload-message-box').removeClass('error-message')
  $('.upload-message-box').addClass('success-message')
  setTimeout(function () {
    $('.upload-message-box').fadeOut(200).empty(200)
  }, 2500)
}

const getImageIdSuccess = function (imageSuccess) {
  store.imageid = imageSuccess.image.id
  // console.log(store.imageid)
  $('.upload-message-box').show(100)
  $('.item-wall').html(`<img src="${imageSuccess.image.url}">`)
  $('.upload-message-box').removeClass('error-message')
  $('.upload-message-box').addClass('success-message')
}

const getAllItemsSuccess = function (getItemSuccess) {
  $('.item-wall').empty()
  if (getItemSuccess.items.length === 0) {
    $('.upload-message-box').show(100)
    $('.upload-message-box').html(`Your Account Has No Items`)
    $('.upload-message-box').addClass('error-message')
    $('.upload-message-box').removeClass('success-message')
    setTimeout(function () {
      $('.upload-message-box').fadeOut(200).empty(200)
    }, 3000)
  } else {
    const index = handle({ items: getItemSuccess.items })
    $('.item-wall').html(index)
    getItemSuccess.items.forEach(function (x) {
      if (x.completed === false) {
        console.log(x)
        $('.blah-' + x._id).removeClass('strike')
      }
    })
  }
}

const completedItemCross = function (completeSuccess) {
  if (completeSuccess.item.completed === true) {
    const index2 = handle({ item: completeSuccess.item })
    $('.item-wall').html(index2)
    $('.blah').addClass('strike')
  }
}

// const deleteImageIdSuccess = function (deleteImageSuccess) {
//   $('.upload-message-box').show(100)
//   $('.upload-message-box').html(`Image Successfully Deleted`)
//   $('.upload-message-box').removeClass('error-message')
//   $('.upload-message-box').addClass('success-message')
//   setTimeout(function () {
//     $('.upload-message-box').fadeOut(200).empty(200)
//   }, 2500)
// }

module.exports = {
  failure,
  idFailure,
  uploadSuccess,
  getImageIdSuccess,
  getAllItemsSuccess,
  completedItemCross
  // deleteImageIdSuccess
}
