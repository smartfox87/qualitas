'use strict';

$(function () {
  toggleAccordion();
  toggleFadeMenu();
  toggleContentBlock();
  initializeCalendar();
  closePopup();
  openPopup();
  initInputFile();
  reloadPageBtn();
  duplicateBlocks();
  checkAllItemsInTable();
});

$(window).on('load', function () {
  showPage();
});

function toggleFadeMenu() {
  $('.js-user-menu').each(function () {
    var parent = $(this);
    var list = parent.find('.js-fade-menu');
    list.fadeOut();
    parent.find('.js-fade-menu-toggle').click(function () {
      parent.toggleClass('active');
      list.fadeToggle();
    });
  });
}

function duplicateBlocks() {
  $('.js-dublicate-parent').each(function () {
    var _this = this;

    var item = $(this).find('.js-dublicate-item').last();
    var parent = $(this);
    parent.find('.js-dublicate-add').click(function (event) {
      event.preventDefault();
      var itemsCount = $(_this).find('.js-dublicate-item').length;
      var cloneRow = item.clone(true);
      cloneRow.find('.js-dublicate-item-number').text(itemsCount);
      cloneRow.fadeIn(300).insertBefore(item);
    });
    parent.find('.js-dublicate-delete').click(function (event) {
      event.preventDefault();
      var itemsCount = parent.find('.js-dublicate-item').length;
      if (itemsCount > 2) {
        $(this).parents('.js-dublicate-item').remove();
      }
    });
  });
}

function checkAllItemsInTable() {
  $('.js-check-parent').each(function () {
    var items = $(this).find('.js-check-item');
    $(this).find('.js-check-select-all-items').change(function () {
      var stateChecked = $(this).prop('checked');
      items.prop('checked', stateChecked);
    });
  });
}

//************************ main-nav **********************
function toggleAccordion() {
  $('.js-accordion').each(function () {
    var items = $(this).find('.js-accordion-item');
    var itemsNotActive = items.not('.active');
    items.find('a.active').click(function () {
      return false;
    });
    var contents = itemsNotActive.find('.js-accordion-item-content');
    contents.slideUp();
    $(this).find('.js-accordion-item-link').click(function () {
      var parent = $(this).parents('.js-accordion-item');
      var parentSiblings = parent.siblings('.js-accordion-item');
      parentSiblings.find('.js-accordion-item-content').slideUp();
      parentSiblings.removeClass('active');
      parent.find('.js-accordion-item-content').slideToggle();
      parent.toggleClass('active');
    });
  });
}

function toggleContentBlock() {
  $('.js-content-toggle').each(function () {
    var items = $(this).find('.js-content-toggle-item');
    var links = $(this).find('.js-content-toggle-link');
    $(this).find('.js-content-toggle-link').each(function (index) {
      $(this).click(function (event) {
        event.preventDefault();
        items.attr('data-active', 'false');
        links.attr('data-active', 'false');
        $(this).attr('data-active', 'true');
        items.eq(index).attr('data-active', 'true');
      });
    });
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
    events: [{
      title: 'event1',
      start: '2018-03-09'
    }, {
      title: 'event1',
      start: '2018-03-16'
    }, {
      title: 'event1',
      start: '2018-03-06'
    }, {
      title: 'event1',
      start: '2018-03-22'
    }, {
      title: 'event1',
      start: '2018-03-23'
    }, {
      title: 'event1',
      start: '2018-04-22'
    }, {
      title: 'event1',
      start: '2018-04-03'
    }, {
      title: 'event1',
      start: '2018-04-12'
    }, {
      title: 'event1',
      start: '2018-04-09'
    }]
  });
}

function showPage() {
  setTimeout(function () {
    $('html').fadeIn();
  }, 400);
}

function closePopup() {
  $('.js-popup').each(function () {
    var _this2 = this;

    $(this).find('.js-close-popup').click(function () {
      $(_this2).fadeOut(0).removeClass('active');
    });
    $(window).keyup(function (event) {
      if (event.keyCode === 27) {
        $(_this2).fadeOut(0).removeClass('active');
      }
    });
  });
}

function openPopup() {
  $('.js-popup-parent').each(function () {
    var popup = $(this).find('.js-popup');
    $(this).find('.js-open-popup').click(function (event) {
      event.preventDefault();
      popup.fadeIn(300).addClass('active');
    });
  });
}

function initInputFile() {
  $('.js-parent-file').each(function () {
    var input = $(this).find('.js-input-file');
    $(this).find('.js-button-file').click(function (event) {
      event.preventDefault();
      input.click();
    });
  });
}

function reloadPageBtn() {
  $('.js-reload-page').click(function () {
    location.reload();
  });
}
