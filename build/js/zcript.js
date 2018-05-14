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
  disableInputsForm();
  toggleMultiPopup();
  hideBigText();
  toggleOptionSelects();
  deleteItem();
  initAutoHeightTextarea();
});

$(window).on('load', function () {
  showPage();
  initDatepicker();
});

function deleteItem() {
  $('.js-delete-btn').each(function () {
    $(this).click(function (event) {
      event.preventDefault();
      $(this).parents('.js-delete-parent').remove();
    });
  });
}

function toggleOptionSelects() {
  $('.js-opt-select-parent').each(function () {
    $(this).find('.js-opt-select-coll').each(function () {
      var select = $(this).find('.js-opt-select');
      var allOptions = select[0].options;
      var button = $(this).find('.js-opt-select-btn');
      var siblingSelect = $(this).siblings().first().find('.js-opt-select');
      select.attr('size', allOptions.length);
      button.click(function (event) {
        event.preventDefault();
        for (var i = 0; i < allOptions.length; i++) {
          if (allOptions[i].selected) {
            siblingSelect.append(allOptions[i]);
            $('.js-opt-select-coll').each(function () {
              var select = $(this).find('.js-opt-select');
              var allOptions = select[0].options;
              select.attr('size', allOptions.length);
            });
          }
        }
      });
    });
  });
}

function initDatepicker() {
  if (jQuery.fn.datepicker) {
    $('.js-datepicker').datepicker({
      orientation: 'top left',
      autoclose: true
    });
  }
}

function toggleFadeMenu() {
  $('.js-user-menu').each(function () {
    var parent = $(this);
    var list = parent.find('.js-fade-menu');
    list.fadeOut();
    parent.find('.js-fade-menu-toggle').click(function (event) {
      event.stopPropagation();
      parent.toggleClass('active');
      list.fadeToggle();
    });
    $(document).click(function () {
      parent.removeClass('active');
      list.fadeOut();
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
    $('html').css({ opacity: 1 });
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

function hideBigText() {
  $('.js-text-toggler').click(function (event) {
    event.preventDefault();
    $(this).parents('.js-text-parent').toggleClass('active');
  });
}

function toggleMultiPopup() {
  $('.js-popup-parent').each(function () {
    var _this3 = this;

    var _loop = function _loop(i) {
      var popup = $(_this3).find('.js-popup-' + i);
      $(_this3).find('.js-open-popup-' + i).click(function (event) {
        event.preventDefault();
        popup.fadeIn(300).addClass('active');
      });
      popup.find('.js-close-popup').click(function () {
        popup.fadeOut(0).removeClass('active');
      });
      $(window).keyup(function (event) {
        if (event.keyCode === 27) {
          popup.fadeOut(0).removeClass('active');
        }
      });
    };

    for (var i = 1; i < 10; i++) {
      _loop(i);
    }
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

function disableInputsForm() {
  $('.js-disabled-parent').each(function () {
    var inputs = $(this).find('.js-disabled-input');
    var toggler = $(this).find('.js-disabled-toggler');
    inputs.prop('disabled', toggler.prop('checked'));
    toggler.change(function () {
      inputs.prop('disabled', $(this).prop('checked'));
    });
  });
}

function initCharts() {
  $('.js-areachart').each(function () {
    var widthParent = $(this).parents('.js-chart-parent').width();
    $(this).hide().visualize({
      type: 'area',
      width: widthParent,
      height: 250,
      lineDots: 'double',
      lineWeight: 3,
      multiHover: 5,
      appendTitle: false,
      appendKey: false
    });
  });
}

function initAutoHeightTextarea() {
  $('.js-textarea-auto').each(function () {
    var scroll = $(this).prop('scrollHeight');
    $(this).height(scroll - 18);
  });
}
