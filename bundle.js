var MyLib;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/marc-olivier-jodoin-MJv31qXqSOU-unsplash.jpg */ "./src/img/marc-olivier-jodoin-MJv31qXqSOU-unsplash.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    margin: 0px;\n    padding: 0px;\n    box-sizing: border-box;\n    font-size: 1vw;\n    font-family: 'Roboto', sans-serif;\n    color: whitesmoke;\n    /* outline: white solid 1px; */\n}\n.small{\n    font-size: 0.8rem;\n}\n.big{\n    font-size: 1.4rem;\n}\nhtml { \n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center fixed; \n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n  }\n  body{\n      width: 100vw;\n      height: 100vh;\n      overflow: hidden;\n  }\n  #main{\n      width: 100%;\n      display: flex;\n      flex-direction: column ;\n  }\n  #top{\n      width: 100%;\n      height: 70vh;\n    display: flex;\n    position: relative;\n  }\n  #left{\n      display: flex;\n      flex-direction: column;\n      position: absolute;\n      left: 5px;\n      height: 100%;\n      width: 25%;\n      padding: 30px;\n      padding-top: 50px;\n\n  }\n  #currentTemp{\n    text-align: center;\n    font-size: 2.5rem;\n    margin-top: 50px;\n  }\n  #tempIcon{\n    display: flex;\n    height: 15%;\n    justify-content: center;\n    align-items: center;\n  }\n  #mainIcon{\n  transform: scale(2);\n  }\n  #inputDiv{\n    position: relative;\n  }\n  #userInput{\n    padding: 5px;\n    width: 30%;\n\n    border: none;\n    color: whitesmoke;\n    outline: none;\n    border-radius: 10px;\n    margin-left: 15px;\n    width: 60%;\n    background-color: rgba(250, 245, 245, 0.5);\n    margin-bottom: 15px;\n  }\n  ::placeholder{\n    color: whitesmoke;\n    font-size: 0.8rem;\n  }\n  #lupa{\n    position: absolute;\n    left: 55%;\n    top: 20%;\n    transform: scale(0.8);\n    color: black;\n  }\n\n.button-85 {\n  transform: scale(0.6);\n  padding: 0.6em 2em;\n  border: none;\n  outline: none;\n  color: rgb(255, 255, 255);\n  background: #111;\n  cursor: pointer;\n  position: relative;\n  z-index: 0;\n  border-radius: 10px;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  transition: transform 500ms;\n}\n\n.button-85:before {\n  content: \"\";\n  background: linear-gradient(\n    45deg,\n    #ff0000,\n    #ff7300,\n    #fffb00,\n    #48ff00,\n    #00ffd5,\n    #002bff,\n    #7a00ff,\n    #ff00c8,\n    #ff0000\n  );\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  background-size: 400%;\n  z-index: -1;\n  filter: blur(5px);\n  -webkit-filter: blur(5px);\n  width: calc(100% + 4px);\n  height: calc(100% + 4px);\n  animation: glowing-button-85 20s linear infinite;\n  transition: opacity 0.3s ease-in-out;\n  border-radius: 10px;\n}\n\n@keyframes glowing-button-85 {\n  0% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 400% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n\n.button-85:after {\n  z-index: -1;\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #222;\n  left: 0;\n  top: 0;\n  border-radius: 10px;\n}\n#submit:hover{\n  transform: scale(0.65);\n}\n\n  #right{\n    position: absolute;\n    right: 5px;\n    width: 15%;\n    height: 100%;\n    padding: 30px;\n    padding-top: 50px;\n\n\n  }\n  .info{\n    display: flex;\n    padding: 10px;\n    justify-content: flex-end;\n\n\n  }\n  .infoBox{\n    display: flex;\n    flex-direction: column;\n    width: 50%;\n\n  }\n  .infoIcon{\n    display: flex;\n    width: 50%;\n    justify-content: center;\n    align-items: center;\n\n  }\n  .fa-solid{\n    transform: scale(1.8);\n  }\n  #bot{\n    padding: 30px;\n    display: flex;\n    flex-direction: column;\n    height: 30vh;\n    background-color: rgba(0, 0, 0, 0.4);\n  }\n  #dailyForecast{\n    margin-top: 25px;\n    display: flex;\n    width: 100%;\n    height: 100%;\n    justify-content: center;\n    gap: 20px;\n  }\n  .card{\n    display: flex;\n    flex-direction: column;\n    width: 10vw;\n    background-color: rgba(0, 0, 0, 0.45);\n    justify-content: center;\n    align-items: center;\n    border-radius: 10px;\n\n\n  }\n  .day{\n    margin-bottom: 20px;\n    font-weight: 800;\n  }\n\n  #dailyForecast{\n    display: flex;\n  }\n  .dailyIcon{\n    transform: scale(1.1);\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,cAAc;IACd,iCAAiC;IACjC,iBAAiB;IACjB,8BAA8B;AAClC;AACA;IACI,iBAAiB;AACrB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,iFAAiG;IACjG,8BAA8B;IAC9B,2BAA2B;IAC3B,yBAAyB;IACzB,sBAAsB;EACxB;EACA;MACI,YAAY;MACZ,aAAa;MACb,gBAAgB;EACpB;EACA;MACI,WAAW;MACX,aAAa;MACb,uBAAuB;EAC3B;EACA;MACI,WAAW;MACX,YAAY;IACd,aAAa;IACb,kBAAkB;EACpB;EACA;MACI,aAAa;MACb,sBAAsB;MACtB,kBAAkB;MAClB,SAAS;MACT,YAAY;MACZ,UAAU;MACV,aAAa;MACb,iBAAiB;;EAErB;EACA;IACE,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;EAClB;EACA;IACE,aAAa;IACb,WAAW;IACX,uBAAuB;IACvB,mBAAmB;EACrB;EACA;EACA,mBAAmB;EACnB;EACA;IACE,kBAAkB;EACpB;EACA;IACE,YAAY;IACZ,UAAU;;IAEV,YAAY;IACZ,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,UAAU;IACV,0CAA0C;IAC1C,mBAAmB;EACrB;EACA;IACE,iBAAiB;IACjB,iBAAiB;EACnB;EACA;IACE,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,qBAAqB;IACrB,YAAY;EACd;;AAEF;EACE,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,UAAU;EACV,mBAAmB;EACnB,iBAAiB;EACjB,yBAAyB;EACzB,0BAA0B;EAC1B,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX;;;;;;;;;;;GAWC;EACD,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,qBAAqB;EACrB,WAAW;EACX,iBAAiB;EACjB,yBAAyB;EACzB,uBAAuB;EACvB,wBAAwB;EACxB,gDAAgD;EAChD,oCAAoC;EACpC,mBAAmB;AACrB;;AAEA;EACE;IACE,wBAAwB;EAC1B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,wBAAwB;EAC1B;AACF;;AAEA;EACE,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,OAAO;EACP,MAAM;EACN,mBAAmB;AACrB;AACA;EACE,sBAAsB;AACxB;;EAEE;IACE,kBAAkB;IAClB,UAAU;IACV,UAAU;IACV,YAAY;IACZ,aAAa;IACb,iBAAiB;;;EAGnB;EACA;IACE,aAAa;IACb,aAAa;IACb,yBAAyB;;;EAG3B;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,UAAU;;EAEZ;EACA;IACE,aAAa;IACb,UAAU;IACV,uBAAuB;IACvB,mBAAmB;;EAErB;EACA;IACE,qBAAqB;EACvB;EACA;IACE,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,oCAAoC;EACtC;EACA;IACE,gBAAgB;IAChB,aAAa;IACb,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,SAAS;EACX;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,qCAAqC;IACrC,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;;;EAGrB;EACA;IACE,mBAAmB;IACnB,gBAAgB;EAClB;;EAEA;IACE,aAAa;EACf;EACA;IACE,qBAAqB;EACvB","sourcesContent":["*{\n    margin: 0px;\n    padding: 0px;\n    box-sizing: border-box;\n    font-size: 1vw;\n    font-family: 'Roboto', sans-serif;\n    color: whitesmoke;\n    /* outline: white solid 1px; */\n}\n.small{\n    font-size: 0.8rem;\n}\n.big{\n    font-size: 1.4rem;\n}\nhtml { \n    background: url(./img/marc-olivier-jodoin-MJv31qXqSOU-unsplash.jpg) no-repeat center center fixed; \n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n  }\n  body{\n      width: 100vw;\n      height: 100vh;\n      overflow: hidden;\n  }\n  #main{\n      width: 100%;\n      display: flex;\n      flex-direction: column ;\n  }\n  #top{\n      width: 100%;\n      height: 70vh;\n    display: flex;\n    position: relative;\n  }\n  #left{\n      display: flex;\n      flex-direction: column;\n      position: absolute;\n      left: 5px;\n      height: 100%;\n      width: 25%;\n      padding: 30px;\n      padding-top: 50px;\n\n  }\n  #currentTemp{\n    text-align: center;\n    font-size: 2.5rem;\n    margin-top: 50px;\n  }\n  #tempIcon{\n    display: flex;\n    height: 15%;\n    justify-content: center;\n    align-items: center;\n  }\n  #mainIcon{\n  transform: scale(2);\n  }\n  #inputDiv{\n    position: relative;\n  }\n  #userInput{\n    padding: 5px;\n    width: 30%;\n\n    border: none;\n    color: whitesmoke;\n    outline: none;\n    border-radius: 10px;\n    margin-left: 15px;\n    width: 60%;\n    background-color: rgba(250, 245, 245, 0.5);\n    margin-bottom: 15px;\n  }\n  ::placeholder{\n    color: whitesmoke;\n    font-size: 0.8rem;\n  }\n  #lupa{\n    position: absolute;\n    left: 55%;\n    top: 20%;\n    transform: scale(0.8);\n    color: black;\n  }\n\n.button-85 {\n  transform: scale(0.6);\n  padding: 0.6em 2em;\n  border: none;\n  outline: none;\n  color: rgb(255, 255, 255);\n  background: #111;\n  cursor: pointer;\n  position: relative;\n  z-index: 0;\n  border-radius: 10px;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  transition: transform 500ms;\n}\n\n.button-85:before {\n  content: \"\";\n  background: linear-gradient(\n    45deg,\n    #ff0000,\n    #ff7300,\n    #fffb00,\n    #48ff00,\n    #00ffd5,\n    #002bff,\n    #7a00ff,\n    #ff00c8,\n    #ff0000\n  );\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  background-size: 400%;\n  z-index: -1;\n  filter: blur(5px);\n  -webkit-filter: blur(5px);\n  width: calc(100% + 4px);\n  height: calc(100% + 4px);\n  animation: glowing-button-85 20s linear infinite;\n  transition: opacity 0.3s ease-in-out;\n  border-radius: 10px;\n}\n\n@keyframes glowing-button-85 {\n  0% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 400% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n\n.button-85:after {\n  z-index: -1;\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #222;\n  left: 0;\n  top: 0;\n  border-radius: 10px;\n}\n#submit:hover{\n  transform: scale(0.65);\n}\n\n  #right{\n    position: absolute;\n    right: 5px;\n    width: 15%;\n    height: 100%;\n    padding: 30px;\n    padding-top: 50px;\n\n\n  }\n  .info{\n    display: flex;\n    padding: 10px;\n    justify-content: flex-end;\n\n\n  }\n  .infoBox{\n    display: flex;\n    flex-direction: column;\n    width: 50%;\n\n  }\n  .infoIcon{\n    display: flex;\n    width: 50%;\n    justify-content: center;\n    align-items: center;\n\n  }\n  .fa-solid{\n    transform: scale(1.8);\n  }\n  #bot{\n    padding: 30px;\n    display: flex;\n    flex-direction: column;\n    height: 30vh;\n    background-color: rgba(0, 0, 0, 0.4);\n  }\n  #dailyForecast{\n    margin-top: 25px;\n    display: flex;\n    width: 100%;\n    height: 100%;\n    justify-content: center;\n    gap: 20px;\n  }\n  .card{\n    display: flex;\n    flex-direction: column;\n    width: 10vw;\n    background-color: rgba(0, 0, 0, 0.45);\n    justify-content: center;\n    align-items: center;\n    border-radius: 10px;\n\n\n  }\n  .day{\n    margin-bottom: 20px;\n    font-weight: 800;\n  }\n\n  #dailyForecast{\n    display: flex;\n  }\n  .dailyIcon{\n    transform: scale(1.1);\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dailyForecast.js":
/*!******************************!*\
  !*** ./src/dailyForecast.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dailyForecast)
/* harmony export */ });
async function dailyForecast(placeData) {
  const lat = placeData.latitude;
  const lon = placeData.longitude;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=metric&appid=ab1d1113b6a62c828014bb7acb72f558`);
  const myJson = await response.json();
  return myJson.daily;
}


/***/ }),

/***/ "./src/displayDailyForecast.js":
/*!*************************************!*\
  !*** ./src/displayDailyForecast.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayDailyForecast)
/* harmony export */ });
/* harmony import */ var _getHumanDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getHumanDate */ "./src/getHumanDate.js");


function displayDailyForecast(myForecast) {
  console.log(myForecast);
  const $hourlyForecast = document.querySelector('#dailyForecast');
  myForecast.forEach((item) => {
    // Create card for each item
    const card = document.createElement('div');
    card.classList.add('card');
    const day = document.createElement('div');
    day.classList.add('day');
    const mainTemp = document.createElement('div');
    mainTemp.classList.add('big');
    const minTemp = document.createElement('div');
    minTemp.classList.add('small');
    const iconDiv = document.createElement('div');
    iconDiv.classList.add('dailyIcon');
    card.append(day, mainTemp, minTemp, iconDiv);
    const itemDate = (0,_getHumanDate__WEBPACK_IMPORTED_MODULE_0__["default"])(item.dt);
    console.log(itemDate);
    day.textContent = itemDate.day;
    mainTemp.textContent = item.temp.max;
    minTemp.textContent = `${item.temp.min} C`;
    const iconRef = item.weather[0].icon;
    const myIcon = new Image();
    myIcon.src = `http://openweathermap.org/img/wn/${iconRef}.png`;
    myIcon.classList.add('dailyIcon');
    iconDiv.append(myIcon);
    $hourlyForecast.append(card.cloneNode(true));
  });
}


/***/ }),

/***/ "./src/displayWeather.js":
/*!*******************************!*\
  !*** ./src/displayWeather.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getHumanDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getHumanDate */ "./src/getHumanDate.js");


function displayWeather(myJson) {
  console.log(myJson);
  // Validate file
  if (myJson === null || myJson === undefined) {
    return;
  }
  // Display weather values
  // Left Panel
  const $condition = document.querySelector('#condition');
  $condition.textContent = myJson.weather[0].description;
  const $place = document.querySelector('#place');
  $place.textContent = myJson.name;
  const unixTime = myJson.dt;
  const myDate = (0,_getHumanDate__WEBPACK_IMPORTED_MODULE_0__["default"])(unixTime);
  const $dateOfFetch = document.querySelector('#date');
  $dateOfFetch.textContent = `${myDate.day} ${myDate.month} ${myDate.date}`;
  const $hour = document.querySelector('#currentHour');
  $hour.textContent = `${myDate.hour}:${myDate.minute}`;
  const $currentTemp = document.querySelector('#currentTemp');
  $currentTemp.textContent = `${myJson.main.temp}°C`;
  const $tempIcon = document.querySelector('#tempIcon');
  // delete icon if $tempIcon already has one
  if ($tempIcon.firstChild) {
    $tempIcon.removeChild($tempIcon.firstChild);
  }
  const iconRef = myJson.weather[0].icon;
  const tempIcon = new Image();
  tempIcon.id = 'mainIcon';
  tempIcon.src = `http://openweathermap.org/img/wn/${iconRef}.png`;
  $tempIcon.append(tempIcon);
  // Right panel
  const $feelsLike = document.querySelector('#feelsLike');
  $feelsLike.textContent = `${myJson.main.feels_like}°C`;
  const minTemp = document.querySelector('#minTempValue');
  minTemp.textContent = `${myJson.main.temp_min}°C`;
  const maxTemp = document.querySelector('#maxTempValue');
  maxTemp.textContent = `${myJson.main.temp_max}°C`;
  const $humidity = document.querySelector('#humidityValue');
  $humidity.textContent = `${myJson.main.humidity}%`;
  const $windSpeed = document.querySelector('#windSpeedValue');
  $windSpeed.textContent = `${myJson.wind.speed} Km/h`;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayWeather);


/***/ }),

/***/ "./src/geoCoder.js":
/*!*************************!*\
  !*** ./src/geoCoder.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function geoCoder(userInput) {
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${userInput}&limit=5&appid=ab1d1113b6a62c828014bb7acb72f558`);
  const myJSON = await response.json();
  // Check if APIs response is not an empty array
  if (myJSON.length <= 0) {
    alert('Location Not Found');
    return false;
  }
  // If response contain an array with many items just grab the first one
  const myPlace = myJSON[0];
  const latitude = myPlace.lat;
  const longitude = myPlace.lon;
  return { latitude, longitude };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (geoCoder);


/***/ }),

/***/ "./src/getHumanDate.js":
/*!*****************************!*\
  !*** ./src/getHumanDate.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getHumanDate(unixTime) {
  const myDate = new Date(unixTime * 1000);
  let day = myDate.getDay();
  if (day === 0) {
    day = 'Sunday';
  }
  if (day === 1) {
    day = 'Monday';
  }
  if (day === 2) {
    day = 'Tuesday';
  }
  if (day === 3) {
    day = 'Wednesday';
  }
  if (day === 4) {
    day = 'Thursday';
  }
  if (day === 5) {
    day = 'Friday';
  }
  if (day === 6) {
    day = 'Saturday';
  }
  const date = myDate.getDate();
  let month = myDate.getMonth();
  if (month === 0) {
    month = 'January';
  }
  if (month === 1) {
    month = 'February';
  }
  if (month === 2) {
    month = 'March';
  }
  if (month === 3) {
    month = 'April';
  }
  if (month === 4) {
    month = 'May';
  }
  if (month === 5) {
    month = 'June';
  }
  if (month === 6) {
    month = 'July';
  }
  if (month === 7) {
    month = 'August';
  }
  if (month === 8) {
    month = 'September';
  }
  if (month === 9) {
    month = 'October';
  }
  if (month === 10) {
    month = 'November';
  }
  if (month === 11) {
    month = 'December';
  }
  const year = myDate.getFullYear();
  const hour = myDate.getHours();
  const minute = myDate.getMinutes();
  return {
    day, date, month, year, hour, minute,
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getHumanDate);


/***/ }),

/***/ "./src/loadFormEvent.js":
/*!******************************!*\
  !*** ./src/loadFormEvent.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _requestWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requestWeather */ "./src/requestWeather.js");


function loadFormEvent() {
  const myBtn = document.querySelector('#submit');
  myBtn.addEventListener('click', _requestWeather__WEBPACK_IMPORTED_MODULE_0__["default"]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadFormEvent);


/***/ }),

/***/ "./src/locationWeatherAPI.js":
/*!***********************************!*\
  !*** ./src/locationWeatherAPI.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function locationWeatherAPI(placeData) {
  const lat = placeData.latitude;
  const lon = placeData.longitude;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=ab1d1113b6a62c828014bb7acb72f558`);
  const myJson = await response.json();
  return myJson;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locationWeatherAPI);


/***/ }),

/***/ "./src/requestWeather.js":
/*!*******************************!*\
  !*** ./src/requestWeather.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _displayWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayWeather */ "./src/displayWeather.js");
/* harmony import */ var _dailyForecast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dailyForecast */ "./src/dailyForecast.js");
/* harmony import */ var _geoCoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geoCoder */ "./src/geoCoder.js");
/* harmony import */ var _locationWeatherAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locationWeatherAPI */ "./src/locationWeatherAPI.js");
/* harmony import */ var _displayDailyForecast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayDailyForecast */ "./src/displayDailyForecast.js");






async function requestWeather(e) {
  e.preventDefault();
  // Get User Input
  const input = document.querySelector('#userInput');
  const userInput = input.value;
  // Request a latitude and a longitude to the geoCoderAPI for the user input
  const placeData = await (0,_geoCoder__WEBPACK_IMPORTED_MODULE_2__["default"])(userInput);
  // Call OpenWeather API for location info and display it
  const myJson = await (0,_locationWeatherAPI__WEBPACK_IMPORTED_MODULE_3__["default"])(placeData);
  (0,_displayWeather__WEBPACK_IMPORTED_MODULE_0__["default"])(myJson);
  // Call Openweather API for location forecast
  const myForecast = await (0,_dailyForecast__WEBPACK_IMPORTED_MODULE_1__["default"])(placeData);
  (0,_displayDailyForecast__WEBPACK_IMPORTED_MODULE_4__["default"])(myForecast);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (requestWeather);


/***/ }),

/***/ "./src/img/marc-olivier-jodoin-MJv31qXqSOU-unsplash.jpg":
/*!**************************************************************!*\
  !*** ./src/img/marc-olivier-jodoin-MJv31qXqSOU-unsplash.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "94812b1c88303fd36cb1.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadFormEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadFormEvent */ "./src/loadFormEvent.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



console.log('init');
(0,_loadFormEvent__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

MyLib = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7O0FDckI0QztBQUN2Qjs7QUFFckI7QUFDQSwwREFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL015TGliLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9NeUxpYi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vTXlMaWIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL015TGliLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vTXlMaWIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vTXlMaWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vTXlMaWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL015TGliLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL015TGliLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL015TGliLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vTXlMaWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9NeUxpYi8uL3NyYy9kYWlseUZvcmVjYXN0LmpzIiwid2VicGFjazovL015TGliLy4vc3JjL2Rpc3BsYXlEYWlseUZvcmVjYXN0LmpzIiwid2VicGFjazovL015TGliLy4vc3JjL2Rpc3BsYXlXZWF0aGVyLmpzIiwid2VicGFjazovL015TGliLy4vc3JjL2dlb0NvZGVyLmpzIiwid2VicGFjazovL015TGliLy4vc3JjL2dldEh1bWFuRGF0ZS5qcyIsIndlYnBhY2s6Ly9NeUxpYi8uL3NyYy9sb2FkRm9ybUV2ZW50LmpzIiwid2VicGFjazovL015TGliLy4vc3JjL2xvY2F0aW9uV2VhdGhlckFQSS5qcyIsIndlYnBhY2s6Ly9NeUxpYi8uL3NyYy9yZXF1ZXN0V2VhdGhlci5qcyIsIndlYnBhY2s6Ly9NeUxpYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9NeUxpYi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9NeUxpYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vTXlMaWIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9NeUxpYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL015TGliL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vTXlMaWIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vTXlMaWIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vTXlMaWIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL21hcmMtb2xpdmllci1qb2RvaW4tTUp2MzFxWHFTT1UtdW5zcGxhc2guanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1zaXplOiAxdnc7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgIC8qIG91dGxpbmU6IHdoaXRlIHNvbGlkIDFweDsgKi9cXG59XFxuLnNtYWxse1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuLmJpZ3tcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcbmh0bWwgeyBcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgfVxcbiAgYm9keXtcXG4gICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgfVxcbiAgI21haW57XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uIDtcXG4gIH1cXG4gICN0b3B7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiA3MHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuICAjbGVmdHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGxlZnQ6IDVweDtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgd2lkdGg6IDI1JTtcXG4gICAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcblxcbiAgfVxcbiAgI2N1cnJlbnRUZW1we1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgfVxcbiAgI3RlbXBJY29ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDE1JTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAjbWFpbkljb257XFxuICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xcbiAgfVxcbiAgI2lucHV0RGl2e1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuICAjdXNlcklucHV0e1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiAzMCU7XFxuXFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjQ1LCAyNDUsIDAuNSk7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICB9XFxuICA6OnBsYWNlaG9sZGVye1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICB9XFxuICAjbHVwYXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1NSU7XFxuICAgIHRvcDogMjAlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gIH1cXG5cXG4uYnV0dG9uLTg1IHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcXG4gIHBhZGRpbmc6IDAuNmVtIDJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgYmFja2dyb3VuZDogIzExMTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDA7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXM7XFxufVxcblxcbi5idXR0b24tODU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICA0NWRlZyxcXG4gICAgI2ZmMDAwMCxcXG4gICAgI2ZmNzMwMCxcXG4gICAgI2ZmZmIwMCxcXG4gICAgIzQ4ZmYwMCxcXG4gICAgIzAwZmZkNSxcXG4gICAgIzAwMmJmZixcXG4gICAgIzdhMDBmZixcXG4gICAgI2ZmMDBjOCxcXG4gICAgI2ZmMDAwMFxcbiAgKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTJweDtcXG4gIGxlZnQ6IC0ycHg7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDQwMCU7XFxuICB6LWluZGV4OiAtMTtcXG4gIGZpbHRlcjogYmx1cig1cHgpO1xcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA0cHgpO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgKyA0cHgpO1xcbiAgYW5pbWF0aW9uOiBnbG93aW5nLWJ1dHRvbi04NSAyMHMgbGluZWFyIGluZmluaXRlO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuQGtleWZyYW1lcyBnbG93aW5nLWJ1dHRvbi04NSB7XFxuICAwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQwMCUgMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxuICB9XFxufVxcblxcbi5idXR0b24tODU6YWZ0ZXIge1xcbiAgei1pbmRleDogLTE7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogIzIyMjtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4jc3VibWl0OmhvdmVye1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjY1KTtcXG59XFxuXFxuICAjcmlnaHR7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDVweDtcXG4gICAgd2lkdGg6IDE1JTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXG5cXG5cXG4gIH1cXG4gIC5pbmZve1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcblxcblxcbiAgfVxcbiAgLmluZm9Cb3h7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA1MCU7XFxuXFxuICB9XFxuICAuaW5mb0ljb257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgfVxcbiAgLmZhLXNvbGlke1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuOCk7XFxuICB9XFxuICAjYm90e1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDMwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIH1cXG4gICNkYWlseUZvcmVjYXN0e1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgfVxcbiAgLmNhcmR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG5cXG5cXG4gIH1cXG4gIC5kYXl7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICB9XFxuXFxuICAjZGFpbHlGb3JlY2FzdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG4gIC5kYWlseUljb257XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNY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QUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gscUNBQXFDO0lBQ3JDLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsbUJBQW1COzs7RUFHckI7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXNpemU6IDF2dztcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgLyogb3V0bGluZTogd2hpdGUgc29saWQgMXB4OyAqL1xcbn1cXG4uc21hbGx7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG4uYmlne1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuaHRtbCB7IFxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9pbWcvbWFyYy1vbGl2aWVyLWpvZG9pbi1NSnYzMXFYcVNPVS11bnNwbGFzaC5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB9XFxuICBib2R5e1xcbiAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICB9XFxuICAjbWFpbntcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gO1xcbiAgfVxcbiAgI3RvcHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDcwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG4gICNsZWZ0e1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbGVmdDogNXB4O1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICB3aWR0aDogMjUlO1xcbiAgICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgICAgcGFkZGluZy10b3A6IDUwcHg7XFxuXFxuICB9XFxuICAjY3VycmVudFRlbXB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICB9XFxuICAjdGVtcEljb257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTUlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gICNtYWluSWNvbntcXG4gIHRyYW5zZm9ybTogc2NhbGUoMik7XFxuICB9XFxuICAjaW5wdXREaXZ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG4gICN1c2VySW5wdXR7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgd2lkdGg6IDMwJTtcXG5cXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyNDUsIDI0NSwgMC41KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIH1cXG4gIDo6cGxhY2Vob2xkZXJ7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gIH1cXG4gICNsdXBhe1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDU1JTtcXG4gICAgdG9wOiAyMCU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgfVxcblxcbi5idXR0b24tODUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xcbiAgcGFkZGluZzogMC42ZW0gMmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBiYWNrZ3JvdW5kOiAjMTExO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcztcXG59XFxuXFxuLmJ1dHRvbi04NTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDQ1ZGVnLFxcbiAgICAjZmYwMDAwLFxcbiAgICAjZmY3MzAwLFxcbiAgICAjZmZmYjAwLFxcbiAgICAjNDhmZjAwLFxcbiAgICAjMDBmZmQ1LFxcbiAgICAjMDAyYmZmLFxcbiAgICAjN2EwMGZmLFxcbiAgICAjZmYwMGM4LFxcbiAgICAjZmYwMDAwXFxuICApO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMnB4O1xcbiAgbGVmdDogLTJweDtcXG4gIGJhY2tncm91bmQtc2l6ZTogNDAwJTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgZmlsdGVyOiBibHVyKDVweCk7XFxuICAtd2Via2l0LWZpbHRlcjogYmx1cig1cHgpO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDRweCk7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSArIDRweCk7XFxuICBhbmltYXRpb246IGdsb3dpbmctYnV0dG9uLTg1IDIwcyBsaW5lYXIgaW5maW5pdGU7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdsb3dpbmctYnV0dG9uLTg1IHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDAwJSAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXG4gIH1cXG59XFxuXFxuLmJ1dHRvbi04NTphZnRlciB7XFxuICB6LWluZGV4OiAtMTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjMjIyO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbiNzdWJtaXQ6aG92ZXJ7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNjUpO1xcbn1cXG5cXG4gICNyaWdodHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogNXB4O1xcbiAgICB3aWR0aDogMTUlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcblxcblxcbiAgfVxcbiAgLmluZm97XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuXFxuXFxuICB9XFxuICAuaW5mb0JveHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDUwJTtcXG5cXG4gIH1cXG4gIC5pbmZvSWNvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICB9XFxuICAuZmEtc29saWR7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS44KTtcXG4gIH1cXG4gICNib3R7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMzB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgfVxcbiAgI2RhaWx5Rm9yZWNhc3R7XFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICB9XFxuICAuY2FyZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcblxcbiAgfVxcbiAgLmRheXtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIH1cXG5cXG4gICNkYWlseUZvcmVjYXN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbiAgLmRhaWx5SWNvbntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBkYWlseUZvcmVjYXN0KHBsYWNlRGF0YSkge1xuICBjb25zdCBsYXQgPSBwbGFjZURhdGEubGF0aXR1ZGU7XG4gIGNvbnN0IGxvbiA9IHBsYWNlRGF0YS5sb25naXR1ZGU7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZleGNsdWRlPW1pbnV0ZWx5LGhvdXJseSZ1bml0cz1tZXRyaWMmYXBwaWQ9YWIxZDExMTNiNmE2MmM4MjgwMTRiYjdhY2I3MmY1NThgKTtcbiAgY29uc3QgbXlKc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gbXlKc29uLmRhaWx5O1xufVxuIiwiaW1wb3J0IGdldEh1bWFuRGF0ZSBmcm9tICcuL2dldEh1bWFuRGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlEYWlseUZvcmVjYXN0KG15Rm9yZWNhc3QpIHtcbiAgY29uc29sZS5sb2cobXlGb3JlY2FzdCk7XG4gIGNvbnN0ICRob3VybHlGb3JlY2FzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYWlseUZvcmVjYXN0Jyk7XG4gIG15Rm9yZWNhc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIC8vIENyZWF0ZSBjYXJkIGZvciBlYWNoIGl0ZW1cbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG4gICAgY29uc3QgZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGF5LmNsYXNzTGlzdC5hZGQoJ2RheScpO1xuICAgIGNvbnN0IG1haW5UZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpblRlbXAuY2xhc3NMaXN0LmFkZCgnYmlnJyk7XG4gICAgY29uc3QgbWluVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1pblRlbXAuY2xhc3NMaXN0LmFkZCgnc21hbGwnKTtcbiAgICBjb25zdCBpY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaWNvbkRpdi5jbGFzc0xpc3QuYWRkKCdkYWlseUljb24nKTtcbiAgICBjYXJkLmFwcGVuZChkYXksIG1haW5UZW1wLCBtaW5UZW1wLCBpY29uRGl2KTtcbiAgICBjb25zdCBpdGVtRGF0ZSA9IGdldEh1bWFuRGF0ZShpdGVtLmR0KTtcbiAgICBjb25zb2xlLmxvZyhpdGVtRGF0ZSk7XG4gICAgZGF5LnRleHRDb250ZW50ID0gaXRlbURhdGUuZGF5O1xuICAgIG1haW5UZW1wLnRleHRDb250ZW50ID0gaXRlbS50ZW1wLm1heDtcbiAgICBtaW5UZW1wLnRleHRDb250ZW50ID0gYCR7aXRlbS50ZW1wLm1pbn0gQ2A7XG4gICAgY29uc3QgaWNvblJlZiA9IGl0ZW0ud2VhdGhlclswXS5pY29uO1xuICAgIGNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIG15SWNvbi5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtpY29uUmVmfS5wbmdgO1xuICAgIG15SWNvbi5jbGFzc0xpc3QuYWRkKCdkYWlseUljb24nKTtcbiAgICBpY29uRGl2LmFwcGVuZChteUljb24pO1xuICAgICRob3VybHlGb3JlY2FzdC5hcHBlbmQoY2FyZC5jbG9uZU5vZGUodHJ1ZSkpO1xuICB9KTtcbn1cbiIsImltcG9ydCBnZXRIdW1hbkRhdGUgZnJvbSAnLi9nZXRIdW1hbkRhdGUnO1xuXG5mdW5jdGlvbiBkaXNwbGF5V2VhdGhlcihteUpzb24pIHtcbiAgY29uc29sZS5sb2cobXlKc29uKTtcbiAgLy8gVmFsaWRhdGUgZmlsZVxuICBpZiAobXlKc29uID09PSBudWxsIHx8IG15SnNvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIERpc3BsYXkgd2VhdGhlciB2YWx1ZXNcbiAgLy8gTGVmdCBQYW5lbFxuICBjb25zdCAkY29uZGl0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbmRpdGlvbicpO1xuICAkY29uZGl0aW9uLnRleHRDb250ZW50ID0gbXlKc29uLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gIGNvbnN0ICRwbGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGFjZScpO1xuICAkcGxhY2UudGV4dENvbnRlbnQgPSBteUpzb24ubmFtZTtcbiAgY29uc3QgdW5peFRpbWUgPSBteUpzb24uZHQ7XG4gIGNvbnN0IG15RGF0ZSA9IGdldEh1bWFuRGF0ZSh1bml4VGltZSk7XG4gIGNvbnN0ICRkYXRlT2ZGZXRjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJyk7XG4gICRkYXRlT2ZGZXRjaC50ZXh0Q29udGVudCA9IGAke215RGF0ZS5kYXl9ICR7bXlEYXRlLm1vbnRofSAke215RGF0ZS5kYXRlfWA7XG4gIGNvbnN0ICRob3VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnRIb3VyJyk7XG4gICRob3VyLnRleHRDb250ZW50ID0gYCR7bXlEYXRlLmhvdXJ9OiR7bXlEYXRlLm1pbnV0ZX1gO1xuICBjb25zdCAkY3VycmVudFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudFRlbXAnKTtcbiAgJGN1cnJlbnRUZW1wLnRleHRDb250ZW50ID0gYCR7bXlKc29uLm1haW4udGVtcH3CsENgO1xuICBjb25zdCAkdGVtcEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcEljb24nKTtcbiAgLy8gZGVsZXRlIGljb24gaWYgJHRlbXBJY29uIGFscmVhZHkgaGFzIG9uZVxuICBpZiAoJHRlbXBJY29uLmZpcnN0Q2hpbGQpIHtcbiAgICAkdGVtcEljb24ucmVtb3ZlQ2hpbGQoJHRlbXBJY29uLmZpcnN0Q2hpbGQpO1xuICB9XG4gIGNvbnN0IGljb25SZWYgPSBteUpzb24ud2VhdGhlclswXS5pY29uO1xuICBjb25zdCB0ZW1wSWNvbiA9IG5ldyBJbWFnZSgpO1xuICB0ZW1wSWNvbi5pZCA9ICdtYWluSWNvbic7XG4gIHRlbXBJY29uLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2ljb25SZWZ9LnBuZ2A7XG4gICR0ZW1wSWNvbi5hcHBlbmQodGVtcEljb24pO1xuICAvLyBSaWdodCBwYW5lbFxuICBjb25zdCAkZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlZWxzTGlrZScpO1xuICAkZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYCR7bXlKc29uLm1haW4uZmVlbHNfbGlrZX3CsENgO1xuICBjb25zdCBtaW5UZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21pblRlbXBWYWx1ZScpO1xuICBtaW5UZW1wLnRleHRDb250ZW50ID0gYCR7bXlKc29uLm1haW4udGVtcF9taW59wrBDYDtcbiAgY29uc3QgbWF4VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXhUZW1wVmFsdWUnKTtcbiAgbWF4VGVtcC50ZXh0Q29udGVudCA9IGAke215SnNvbi5tYWluLnRlbXBfbWF4fcKwQ2A7XG4gIGNvbnN0ICRodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1pZGl0eVZhbHVlJyk7XG4gICRodW1pZGl0eS50ZXh0Q29udGVudCA9IGAke215SnNvbi5tYWluLmh1bWlkaXR5fSVgO1xuICBjb25zdCAkd2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmRTcGVlZFZhbHVlJyk7XG4gICR3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgJHtteUpzb24ud2luZC5zcGVlZH0gS20vaGA7XG59XG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5V2VhdGhlcjtcbiIsImFzeW5jIGZ1bmN0aW9uIGdlb0NvZGVyKHVzZXJJbnB1dCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7dXNlcklucHV0fSZsaW1pdD01JmFwcGlkPWFiMWQxMTEzYjZhNjJjODI4MDE0YmI3YWNiNzJmNTU4YCk7XG4gIGNvbnN0IG15SlNPTiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgLy8gQ2hlY2sgaWYgQVBJcyByZXNwb25zZSBpcyBub3QgYW4gZW1wdHkgYXJyYXlcbiAgaWYgKG15SlNPTi5sZW5ndGggPD0gMCkge1xuICAgIGFsZXJ0KCdMb2NhdGlvbiBOb3QgRm91bmQnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gSWYgcmVzcG9uc2UgY29udGFpbiBhbiBhcnJheSB3aXRoIG1hbnkgaXRlbXMganVzdCBncmFiIHRoZSBmaXJzdCBvbmVcbiAgY29uc3QgbXlQbGFjZSA9IG15SlNPTlswXTtcbiAgY29uc3QgbGF0aXR1ZGUgPSBteVBsYWNlLmxhdDtcbiAgY29uc3QgbG9uZ2l0dWRlID0gbXlQbGFjZS5sb247XG4gIHJldHVybiB7IGxhdGl0dWRlLCBsb25naXR1ZGUgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IGdlb0NvZGVyO1xuIiwiZnVuY3Rpb24gZ2V0SHVtYW5EYXRlKHVuaXhUaW1lKSB7XG4gIGNvbnN0IG15RGF0ZSA9IG5ldyBEYXRlKHVuaXhUaW1lICogMTAwMCk7XG4gIGxldCBkYXkgPSBteURhdGUuZ2V0RGF5KCk7XG4gIGlmIChkYXkgPT09IDApIHtcbiAgICBkYXkgPSAnU3VuZGF5JztcbiAgfVxuICBpZiAoZGF5ID09PSAxKSB7XG4gICAgZGF5ID0gJ01vbmRheSc7XG4gIH1cbiAgaWYgKGRheSA9PT0gMikge1xuICAgIGRheSA9ICdUdWVzZGF5JztcbiAgfVxuICBpZiAoZGF5ID09PSAzKSB7XG4gICAgZGF5ID0gJ1dlZG5lc2RheSc7XG4gIH1cbiAgaWYgKGRheSA9PT0gNCkge1xuICAgIGRheSA9ICdUaHVyc2RheSc7XG4gIH1cbiAgaWYgKGRheSA9PT0gNSkge1xuICAgIGRheSA9ICdGcmlkYXknO1xuICB9XG4gIGlmIChkYXkgPT09IDYpIHtcbiAgICBkYXkgPSAnU2F0dXJkYXknO1xuICB9XG4gIGNvbnN0IGRhdGUgPSBteURhdGUuZ2V0RGF0ZSgpO1xuICBsZXQgbW9udGggPSBteURhdGUuZ2V0TW9udGgoKTtcbiAgaWYgKG1vbnRoID09PSAwKSB7XG4gICAgbW9udGggPSAnSmFudWFyeSc7XG4gIH1cbiAgaWYgKG1vbnRoID09PSAxKSB7XG4gICAgbW9udGggPSAnRmVicnVhcnknO1xuICB9XG4gIGlmIChtb250aCA9PT0gMikge1xuICAgIG1vbnRoID0gJ01hcmNoJztcbiAgfVxuICBpZiAobW9udGggPT09IDMpIHtcbiAgICBtb250aCA9ICdBcHJpbCc7XG4gIH1cbiAgaWYgKG1vbnRoID09PSA0KSB7XG4gICAgbW9udGggPSAnTWF5JztcbiAgfVxuICBpZiAobW9udGggPT09IDUpIHtcbiAgICBtb250aCA9ICdKdW5lJztcbiAgfVxuICBpZiAobW9udGggPT09IDYpIHtcbiAgICBtb250aCA9ICdKdWx5JztcbiAgfVxuICBpZiAobW9udGggPT09IDcpIHtcbiAgICBtb250aCA9ICdBdWd1c3QnO1xuICB9XG4gIGlmIChtb250aCA9PT0gOCkge1xuICAgIG1vbnRoID0gJ1NlcHRlbWJlcic7XG4gIH1cbiAgaWYgKG1vbnRoID09PSA5KSB7XG4gICAgbW9udGggPSAnT2N0b2Jlcic7XG4gIH1cbiAgaWYgKG1vbnRoID09PSAxMCkge1xuICAgIG1vbnRoID0gJ05vdmVtYmVyJztcbiAgfVxuICBpZiAobW9udGggPT09IDExKSB7XG4gICAgbW9udGggPSAnRGVjZW1iZXInO1xuICB9XG4gIGNvbnN0IHllYXIgPSBteURhdGUuZ2V0RnVsbFllYXIoKTtcbiAgY29uc3QgaG91ciA9IG15RGF0ZS5nZXRIb3VycygpO1xuICBjb25zdCBtaW51dGUgPSBteURhdGUuZ2V0TWludXRlcygpO1xuICByZXR1cm4ge1xuICAgIGRheSwgZGF0ZSwgbW9udGgsIHllYXIsIGhvdXIsIG1pbnV0ZSxcbiAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IGdldEh1bWFuRGF0ZTtcbiIsImltcG9ydCByZXF1ZXN0V2VhdGhlciBmcm9tICcuL3JlcXVlc3RXZWF0aGVyJztcblxuZnVuY3Rpb24gbG9hZEZvcm1FdmVudCgpIHtcbiAgY29uc3QgbXlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0Jyk7XG4gIG15QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVxdWVzdFdlYXRoZXIpO1xufVxuZXhwb3J0IGRlZmF1bHQgbG9hZEZvcm1FdmVudDtcbiIsImFzeW5jIGZ1bmN0aW9uIGxvY2F0aW9uV2VhdGhlckFQSShwbGFjZURhdGEpIHtcbiAgY29uc3QgbGF0ID0gcGxhY2VEYXRhLmxhdGl0dWRlO1xuICBjb25zdCBsb24gPSBwbGFjZURhdGEubG9uZ2l0dWRlO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mdW5pdHM9bWV0cmljJmFwcGlkPWFiMWQxMTEzYjZhNjJjODI4MDE0YmI3YWNiNzJmNTU4YCk7XG4gIGNvbnN0IG15SnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIG15SnNvbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9jYXRpb25XZWF0aGVyQVBJO1xuIiwiaW1wb3J0IGRpc3BsYXlXZWF0aGVyIGZyb20gJy4vZGlzcGxheVdlYXRoZXInO1xuaW1wb3J0IGRhaWx5Rm9yZWNhc3QgZnJvbSAnLi9kYWlseUZvcmVjYXN0JztcbmltcG9ydCBnZW9Db2RlciBmcm9tICcuL2dlb0NvZGVyJztcbmltcG9ydCBsb2NhdGlvbldlYXRoZXJBUEkgZnJvbSAnLi9sb2NhdGlvbldlYXRoZXJBUEknO1xuaW1wb3J0IGRpc3BsYXlEYWlseUZvcmVjYXN0IGZyb20gJy4vZGlzcGxheURhaWx5Rm9yZWNhc3QnO1xuXG5hc3luYyBmdW5jdGlvbiByZXF1ZXN0V2VhdGhlcihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgLy8gR2V0IFVzZXIgSW5wdXRcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlcklucHV0Jyk7XG4gIGNvbnN0IHVzZXJJbnB1dCA9IGlucHV0LnZhbHVlO1xuICAvLyBSZXF1ZXN0IGEgbGF0aXR1ZGUgYW5kIGEgbG9uZ2l0dWRlIHRvIHRoZSBnZW9Db2RlckFQSSBmb3IgdGhlIHVzZXIgaW5wdXRcbiAgY29uc3QgcGxhY2VEYXRhID0gYXdhaXQgZ2VvQ29kZXIodXNlcklucHV0KTtcbiAgLy8gQ2FsbCBPcGVuV2VhdGhlciBBUEkgZm9yIGxvY2F0aW9uIGluZm8gYW5kIGRpc3BsYXkgaXRcbiAgY29uc3QgbXlKc29uID0gYXdhaXQgbG9jYXRpb25XZWF0aGVyQVBJKHBsYWNlRGF0YSk7XG4gIGRpc3BsYXlXZWF0aGVyKG15SnNvbik7XG4gIC8vIENhbGwgT3BlbndlYXRoZXIgQVBJIGZvciBsb2NhdGlvbiBmb3JlY2FzdFxuICBjb25zdCBteUZvcmVjYXN0ID0gYXdhaXQgZGFpbHlGb3JlY2FzdChwbGFjZURhdGEpO1xuICBkaXNwbGF5RGFpbHlGb3JlY2FzdChteUZvcmVjYXN0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdFdlYXRoZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBsb2FkRm9ybUV2ZW50IGZyb20gJy4vbG9hZEZvcm1FdmVudCc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc29sZS5sb2coJ2luaXQnKTtcbmxvYWRGb3JtRXZlbnQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==