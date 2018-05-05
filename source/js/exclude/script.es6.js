$(function () {
  toggleAccordion()
  toggleFadeMenu()
  toggleContentBlock()
  initializeCalendar()
  closePopup()
  openPopup()
  initInputFile()
  reloadPageBtn()
  duplicateBlocks()
  checkAllItemsInTable()
  disableInputsForm()
  toggleMultiPopup()
  hideBigText()
})

$(window).on('load', function () {
  showPage()
})

function toggleFadeMenu() {
  $('.js-user-menu').each(function () {
    const parent = $(this)
    const list = parent.find('.js-fade-menu')
    list.fadeOut()
    parent.find('.js-fade-menu-toggle').click(function (event) {
      event.stopPropagation()
      parent.toggleClass('active')
      list.fadeToggle()
    })
    $(document).click(function () {
      parent.removeClass('active')
      list.fadeOut()
    })
  })
}

function duplicateBlocks() {
  $('.js-dublicate-parent').each(function () {
    const item = $(this).find('.js-dublicate-item').last()
    const parent = $(this)
    parent.find('.js-dublicate-add').click((event) => {
      event.preventDefault()
      const itemsCount = $(this).find('.js-dublicate-item').length
      const cloneRow = item.clone(true)
      cloneRow.find('.js-dublicate-item-number').text(itemsCount)
      cloneRow.fadeIn(300).insertBefore(item)
    })
    parent.find('.js-dublicate-delete').click(function (event) {
      event.preventDefault()
      const itemsCount = parent.find('.js-dublicate-item').length
      if (itemsCount > 2) {
        $(this).parents('.js-dublicate-item').remove()
      }
    })
  })
}

function checkAllItemsInTable() {
  $('.js-check-parent').each(function () {
    const items = $(this).find('.js-check-item')
    $(this).find('.js-check-select-all-items').change(function () {
      const stateChecked = $(this).prop('checked')
      items.prop('checked', stateChecked)
    })
  })
}

//************************ main-nav **********************
function toggleAccordion() {
  $('.js-accordion').each(function () {
    const items = $(this).find('.js-accordion-item')
    const itemsNotActive = items.not('.active')
    items.find('a.active').click(() => false)
    const contents = itemsNotActive.find('.js-accordion-item-content')
    contents.slideUp()
    $(this).find('.js-accordion-item-link').click(function () {
      const parent = $(this).parents('.js-accordion-item')
      const parentSiblings = parent.siblings('.js-accordion-item')
      parentSiblings.find('.js-accordion-item-content').slideUp();
      parentSiblings.removeClass('active');
      parent.find('.js-accordion-item-content').slideToggle();
      parent.toggleClass('active');
    });
  });
}

function toggleContentBlock() {
  $('.js-content-toggle').each(function () {
    const items = $(this).find('.js-content-toggle-item')
    const links = $(this).find('.js-content-toggle-link')
    $(this).find('.js-content-toggle-link').each(function (index) {
      $(this).click(function (event) {
        event.preventDefault();
        items.attr('data-active', 'false')
        links.attr('data-active', 'false')
        $(this).attr('data-active', 'true')
        items.eq(index).attr('data-active', 'true')
      });
    })
  });
}

function initializeCalendar() {
  $('#calendar').fullCalendar({
    fixedWeekCount: false,
    showNonCurrentDates: false,
    header: {
      left: 'title',
      center: '',
      right: 'today,month,agendaWeek,agendaDay,prev,next'
    },
    events: [
      {
        title: 'event1',
        start: '2018-03-09'
      },
      {
        title: 'event1',
        start: '2018-03-16'
      },
      {
        title: 'event1',
        start: '2018-03-06'
      },
      {
        title: 'event1',
        start: '2018-03-22'
      },
      {
        title: 'event1',
        start: '2018-03-23'
      },
      {
        title: 'event1',
        start: '2018-04-22'
      },
      {
        title: 'event1',
        start: '2018-04-03'
      },
      {
        title: 'event1',
        start: '2018-04-12'
      },
      {
        title: 'event1',
        start: '2018-04-09'
      },
    ],
  })
}

function showPage() {
  setTimeout(function () {
    $('html').css({opacity: 1})
  }, 400)
}

function closePopup() {
  $('.js-popup').each(function () {
    $(this).find('.js-close-popup').click(() => {
      $(this).fadeOut(0).removeClass('active')
    })
    $(window).keyup((event) => {
      if (event.keyCode === 27) {
        $(this).fadeOut(0).removeClass('active')
      }
    })
  })
}

function openPopup() {
  $('.js-popup-parent').each(function () {
    const popup = $(this).find('.js-popup')
    $(this).find('.js-open-popup').click(function (event) {
      event.preventDefault()
      popup.fadeIn(300).addClass('active')
    })
  })
}

function hideBigText() {
  $('.js-text-toggler').click(function (event) {
    event.preventDefault()
    $(this).parents('.js-text-parent').toggleClass('active')
  })
}

function toggleMultiPopup() {
  $('.js-popup-parent').each(function () {
    for (let i = 1; i < 10; i++) {
      const popup = $(this).find(`.js-popup-${i}`)
      $(this).find(`.js-open-popup-${i}`).click(function (event) {
        event.preventDefault()
        popup.fadeIn(300).addClass('active')
      })
      popup.find('.js-close-popup').click(() => {
        popup.fadeOut(0).removeClass('active')
      })
      $(window).keyup((event) => {
        if (event.keyCode === 27) {
          popup.fadeOut(0).removeClass('active')
        }
      })

    }
  })
}

function initInputFile() {
  $('.js-parent-file').each(function () {
    const input = $(this).find('.js-input-file')
    $(this).find('.js-button-file').click(function (event) {
      event.preventDefault()
      input.click()
    })
  })
}

function reloadPageBtn() {
  $('.js-reload-page').click(function () {
    location.reload()
  })
}

function disableInputsForm() {
  $('.js-disabled-parent').each(function () {
    const inputs = $(this).find('.js-disabled-input')
    const toggler = $(this).find('.js-disabled-toggler')
    inputs.prop('disabled', toggler.prop('checked'))
    toggler.change(function () {
      inputs.prop('disabled', $(this).prop('checked'))
    })
  })
}

function initCharts() {
  $('.js-areachart').each(function () {
    const widthParent = $(this).parents('.js-chart-parent').width();
    $(this).hide().visualize({
      type: 'area',
      width: widthParent,
      height: 250,
      lineDots: 'double',
      lineWeight: 3,
      multiHover: 5,
      appendTitle: false,
      appendKey: false
    })
  })
}