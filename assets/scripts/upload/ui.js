//
const handle = require('../templates/helpers/index.handlebars')
const store = require('../store.js')

const failure = function (FailureResponse) {
  $('.upload-message-box').show(100)
  $('.upload-message-box').html('Failed, Try Again')
  $('.upload-message-box').removeClass('success-message')
  $('.upload-message-box').addClass('error-message')
  setTimeout(function () {
    $('.upload-message-box').fadeOut(200).empty(200)
  }, 3000)
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
  $('.upload-message-box').html(`Item Successfully Added`)
  $('.upload-message-box').removeClass('error-message')
  $('.upload-message-box').addClass('success-message')
  setTimeout(function () {
    $('.upload-message-box').fadeOut(200).empty(200)
  }, 3000)
}

const deleteSuccess = function (deleteResponse) {
  $('.upload-message-box').show(100)
  $('.upload-message-box').html(`Item Successfully Deleted`)
  $('.upload-message-box').removeClass('error-message')
  $('.upload-message-box').addClass('success-message')
  setTimeout(function () {
    $('.upload-message-box').fadeOut(200).empty(200)
  }, 3000)
}

// const getImageIdSuccess = function (imageSuccess) {
//   store.imageid = imageSuccess.image.id
//   // console.log(store.imageid)
//   $('.upload-message-box').show(100)
//   $('.item-wall').html(`<img src="${imageSuccess.image.url}">`)
//   $('.upload-message-box').removeClass('error-message')
//   $('.upload-message-box').addClass('success-message')
// }

const getAllItemsSuccess = function (getItemSuccess) {
  // console.log(getItemSuccess)
  // getItemSuccess.items.forEach((x) => {
  //   debugger
  //   console.log(x.owner)
  // })
  // console.log(store.user)
  $('.item-wall').empty()
  if (getItemSuccess.items.length === 0) {
    $('.upload-message-box').show(100)
    $('.upload-message-box').html(`Your Account Has No More Dreams`)
    $('.upload-message-box').addClass('error-message')
    $('.upload-message-box').removeClass('success-message')
    setTimeout(function () {
      $('.upload-message-box').fadeOut(200).empty(200)
    }, 5000)
  } else {
    const index = handle({ items: getItemSuccess.items })
    $('.item-wall').html(index)
    getItemSuccess.items.forEach(function (x) {
      if (x.completed === false) {
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

module.exports = {
  failure,
  idFailure,
  uploadSuccess,
  deleteSuccess,
  getAllItemsSuccess,
  completedItemCross
}
