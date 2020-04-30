/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import "./import/modules";
$(document).ready(function () {
  $('.slider__list').slick({
    infinite: true,
    fade: true,
    prevArrow: '<button class="arrow-prev arrow-prev--main-nav"><span class="icon-prev"></span></button>',
    nextArrow: '<button class="arrow-next arrow-next--main-nav"><span class="icon-next"></span></button>',
    asNavFor: '.pagination__list'
  });
  $('.pagination__list').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.slider__list'
  });
  $('.surf__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="arrow-prev arrow-prev--surf"><span class="icon-prev"></span></button>',
    nextArrow: '<button class="arrow-next arrow-next--surf"><span class="icon-next"></span></button>',
    asNavFor: '.surf__map-slider'
  });
  $('.surf__map-slider').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.surf__slider',
    focusOnSelect: true
  });
  $('<div class="quantity__nav"><div class="quantity__button quantity__down"></div><div class="quantity__button quantity__up"></div></div>').insertAfter('.quantity input');
  $('.quantity').each(function () {
    var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity__up'),
        btnDown = spinner.find('.quantity__down'),
        min = input.attr('min'),
        max = input.attr('max');
    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      var newVal;

      if (oldValue >= max) {
        newVal = oldValue;
      } else {
        newVal = oldValue + 1;
      }

      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      var newVal;

      if (oldValue <= min) {
        newVal = oldValue;
      } else {
        newVal = oldValue - 1;
      }

      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });
  $('.quantity__button').on('click', function () {
    var summ = $('.night').val() * $('.summ').data('night') + ($('.guest').val() - 1) * $('.summ').data('guest');
    $('.summ').html('$' + summ);
  });
  var summ = $('.night').val() * $('.summ').data('night') + ($('.guest').val() - 1) * $('.summ').data('guest');
  $('.summ').html('$' + summ);
  $('.features__slider--travel').slick({
    infinite: true,
    fade: true,
    prevArrow: '<button class="arrow-prev arrow-prev--travel"><span class="icon-prev"></span></button>',
    nextArrow: '<button class="arrow-next arrow-next--travel"><span class="icon-next"></span></button>'
  });
  $('.features__slider--sleep').slick({
    infinite: true,
    fade: true,
    prevArrow: '<button class="arrow-prev arrow-prev--sleep"><span class="icon-prev"></span></button>',
    nextArrow: '<button class="arrow-next arrow-next--sleep"><span class="icon-next"></span></button>'
  });
  $('.shop__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<button class="arrow-prev arrow-prev--shop"><span class="icon-prev"></span></button>',
    nextArrow: '<button class="arrow-next arrow-next--shop"><span class="icon-next"></span></button>'
  });
  $('.shop__img-features-btn').click(function () {
    if ($(this).hasClass('plus')) {
      $(this).removeClass('plus').addClass('minus');
    } else {
      $(this).addClass('plus').removeClass('minus');
    }
  });
  new WOW().init();
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map