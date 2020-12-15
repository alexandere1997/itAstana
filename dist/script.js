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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moduls_calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduls/calc */ "./src/js/moduls/calc.js");

Object(_moduls_calc__WEBPACK_IMPORTED_MODULE_0__["default"])();

/***/ }),

/***/ "./src/js/moduls/calc.js":
/*!*******************************!*\
  !*** ./src/js/moduls/calc.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let calc = () => {
  let calc__result = document.querySelector(".calc__result h3");
  let calc__checkbox = document.querySelectorAll(".calc__custom .calc__checkbox");
  let countResult = 0;
  let calc__item_chek = document.querySelectorAll(".calc__item .calc__ceck .calc__checkbox");
  let calc__wrapper__range = document.querySelectorAll(".calc__wrapper .calc__range");
  let calc__number = document.querySelectorAll(".calc__number");
  let calc__modification__range = document.querySelector(".calc__modification .calc__mod .calc__range");
  let calc__number_bold = document.querySelector(".calc__number_bold");
  let calc__information_range = document.querySelectorAll(".calc__information .calc__range");
  let calc__information_check = document.querySelectorAll(".calc__information .calc__checkbox");
  let calc__numbers = document.querySelectorAll(".calc__numbers span");
  let calc__list_btn = document.querySelector(".calc__list img");
  let calc__estimate = document.querySelector(".calc__estimate");
  let calc__radiobox = document.querySelectorAll(".calc__radiobox");
  let calc__ceck_range = document.querySelectorAll(".calc__ceck_range .calc__checkbox");
  calc__checkbox.forEach(item => {
    item.addEventListener("click", () => {
      if (item.checked == true) {
        countResult = countResult + Number(item.value);
        calc__result.innerHTML = `${countResult} тг`;
      } else {
        if (countResult > 0) {
          countResult = countResult - Number(item.value);
          calc__result.innerHTML = `${countResult} тг`;
        } else {
          return;
        }
      }
    });
  });
  calc__item_chek.forEach(item => {
    item.addEventListener("click", () => {
      if (item.checked == true) {
        countResult = countResult + Number(item.value);
        calc__result.innerHTML = `${countResult} тг`;
      } else {
        if (countResult > 0) {
          countResult = countResult - Number(item.value);
          calc__result.innerHTML = `${countResult} тг`;
        } else {
          return;
        }
      }
    });
  });
  calc__wrapper__range.forEach((item, ind1) => {
    calc__number.forEach((count, ind2) => {
      item.addEventListener("input", () => {
        if (ind1 == ind2) {
          count.innerHTML = Number(item.value);
        }
      });
    });
    calc__ceck_range.forEach((count, ind2) => {
      count.addEventListener("click", () => {
        if (ind1 == ind2 && count.checked) {
          item.classList.remove("calc__range_active");
          item.removeAttribute("disabled");
        } else if (ind1 == ind2 && count.checked == false) {
          item.classList.add("calc__range_active");
          item.setAttribute("disabled", "disabled");
        }
      });
    });
  });
  calc__information_range.forEach((item, ind1) => {
    calc__numbers.forEach((count, ind2) => {
      item.addEventListener("input", () => {
        if (ind1 == ind2) {
          count.innerHTML = Number(item.value);
        }
      });
    });
    calc__information_check.forEach((count, ind2) => {
      count.addEventListener("click", () => {
        if (ind1 == ind2 && count.checked) {
          item.classList.remove("calc__range_active");
          item.removeAttribute("disabled");
        } else if (ind1 == ind2 && count.checked == false) {
          item.classList.add("calc__range_active");
          item.setAttribute("disabled", "disabled");
        }
      });
    });
  });
  let valueOld = 0;
  calc__modification__range.addEventListener("mousedown", () => {
    valueOld = Number(calc__modification__range.value);
  });
  calc__modification__range.addEventListener("input", e => {
    calc__number_bold.innerHTML = Number(calc__modification__range.value);
    let valueNew = Number(calc__modification__range.value);
    console.log(calc__modification__range.value);
    let countValue = calc__modification__range.dataset.value * calc__modification__range.value;
    console.log(countValue);

    if (valueNew > valueOld) {
      countResult = countValue;
      calc__result.innerHTML = `${countResult} тг`;
    } else if (valueNew < valueOld) {
      if (countResult > 0) {
        countResult = countValue;
        calc__result.innerHTML = `${countResult} тг`;
      } else {
        return;
      }
    }
  });
  calc__list_btn.addEventListener("click", () => {
    calc__list_btn.classList.toggle("active__btn");
    calc__estimate.classList.toggle("acive__block");
  });
  calc__radiobox[0].addEventListener("click", () => {
    calc__radiobox[0].setAttribute("checked", "checked");
    calc__radiobox[1].removeAttribute("checked");

    if (calc__radiobox[0].checked == true) {
      countResult = countResult + Number(calc__radiobox[0].value);
      calc__result.innerHTML = `${countResult} тг`;
    } else if (calc__radiobox[1].hasAttribute("checked") == false) {
      if (countResult > 0) {
        countResult = countResult - Number(calc__radiobox[1].value);
        calc__result.innerHTML = `${countResult} тг`;
      } else {
        return;
      }
    }
  });
  calc__radiobox[1].addEventListener("click", () => {
    calc__radiobox[1].setAttribute("checked", "checked");
    calc__radiobox[0].removeAttribute("checked");

    if (calc__radiobox[1].checked == true) {
      countResult = countResult + Number(calc__radiobox[1].value);
      calc__result.innerHTML = `${countResult} тг`;
    } else if (calc__radiobox[0].hasAttribute("checked") == false) {
      if (countResult > 0) {
        countResult = countResult - Number(calc__radiobox[0].value);
        calc__result.innerHTML = `${countResult} тг`;
      } else {
        return;
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map