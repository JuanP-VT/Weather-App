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
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    margin: 0px;\n    padding: 0px;\n    box-sizing: border-box;\n    font-size: 1vw;\n    font-family: 'Roboto', sans-serif;\n    color: whitesmoke;\n    /* outline: white solid 1px; */\n}\n.small{\n    font-size: 0.8rem;\n}\n.big{\n    font-size: 1.4rem;\n}\nhtml { \n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center fixed; \n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n  }\n  body{\n      width: 100vw;\n      height: 100vh;\n      overflow: hidden;\n  }\n  #main{\n      width: 100%;\n      display: flex;\n      flex-direction: column ;\n  }\n  #top{\n      width: 100%;\n      height: 70vh;\n    display: flex;\n    position: relative;\n  }\n  #left{\n      display: flex;\n      flex-direction: column;\n      position: absolute;\n      left: 5px;\n      height: 100%;\n      width: 25%;\n      padding: 30px;\n      padding-top: 50px;\n\n  }\n  #currentTemp{\n    text-align: center;\n    font-size: 2.5rem;\n    margin-top: 50px;\n  }\n  #tempIcon{\n    display: flex;\n    height: 15%;\n    justify-content: center;\n    align-items: center;\n  }\n  #mainIcon{\n  transform: scale(1.5);\n  }\n  #inputDiv{\n    position: relative;\n    height: 40%;\n  }\n  #userInput{\n    position: absolute;\n    height: 100%;\n    padding: 5px;\n    width: 30%;\n    border: none;\n    color: whitesmoke;\n    outline: none;\n    border-radius: 10px;\n    margin-left: 15px;\n    width: 60%;\n    background-color: rgba(250, 245, 245, 0.5);\n  }\n  ::placeholder{\n    color: whitesmoke;\n    font-size: 0.8rem;\n  }\n  #lupa{\n    position: absolute;\n    left: 55%;\n    bottom: 10%;\n    transform: scale(0.8);\n    color: black;\n  }\n\n.button-85 {\n  margin-top: 20px;\n  transform: scale(0.6);\n  padding: 0.6em 2em;\n  border: none;\n  outline: none;\n  color: rgb(255, 255, 255);\n  background: #111;\n  cursor: pointer;\n  position: relative;\n  z-index: 0;\n  border-radius: 10px;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  transition: transform 500ms;\n}\n\n.button-85:before {\n  content: \"\";\n  background: linear-gradient(\n    45deg,\n    #ff0000,\n    #ff7300,\n    #fffb00,\n    #48ff00,\n    #00ffd5,\n    #002bff,\n    #7a00ff,\n    #ff00c8,\n    #ff0000\n  );\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  background-size: 400%;\n  z-index: -1;\n  filter: blur(5px);\n  -webkit-filter: blur(5px);\n  width: calc(100% + 4px);\n  height: calc(100% + 4px);\n  animation: glowing-button-85 20s linear infinite;\n  transition: opacity 0.3s ease-in-out;\n  border-radius: 10px;\n}\n\n@keyframes glowing-button-85 {\n  0% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 400% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n\n.button-85:after {\n  z-index: -1;\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #222;\n  left: 0;\n  top: 0;\n  border-radius: 10px;\n}\n#submit:hover{\n  transform: scale(0.65);\n}\n\n  #right{\n    position: absolute;\n    right: 5px;\n    width: 15%;\n    height: 100%;\n    padding: 30px;\n    padding-top: 50px;\n\n\n  }\n  .info{\n    display: flex;\n    padding: 10px;\n    justify-content: flex-end;\n\n\n  }\n  .infoBox{\n    display: flex;\n    flex-direction: column;\n    width: 50%;\n\n  }\n  .infoIcon{\n    display: flex;\n    width: 50%;\n    justify-content: center;\n    align-items: center;\n\n  }\n  .fa-solid{\n    transform: scale(1.8);\n  }\n  #bot{\n    padding: 30px;\n    display: flex;\n    flex-direction: column;\n    height: 30vh;\n    background-color: rgba(0, 0, 0, 0.4);\n  }\n  #dailyForecast{\n    margin-top: 25px;\n    display: flex;\n    width: 100%;\n    height: 100%;\n    justify-content: center;\n    gap: 20px;\n  }\n  .card{\n    display: flex;\n    flex-direction: column;\n    width: 10vw;\n    background-color: rgba(0, 0, 0, 0.45);\n    justify-content: center;\n    align-items: center;\n    border-radius: 10px;\n\n\n  }\n  .day{\n    margin-bottom: 20px;\n    font-weight: 800;\n  }\n\n  #dailyForecast{\n    display: flex;\n  }\n  .dailyIcon{\n    transform: scale(1.1);\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*{\n    margin: 0px;\n    padding: 0px;\n    box-sizing: border-box;\n    font-size: 1vw;\n    font-family: 'Roboto', sans-serif;\n    color: whitesmoke;\n    /* outline: white solid 1px; */\n}\n.small{\n    font-size: 0.8rem;\n}\n.big{\n    font-size: 1.4rem;\n}\nhtml { \n    background: url(./img/marc-olivier-jodoin-MJv31qXqSOU-unsplash.jpg) no-repeat center center fixed; \n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n  }\n  body{\n      width: 100vw;\n      height: 100vh;\n      overflow: hidden;\n  }\n  #main{\n      width: 100%;\n      display: flex;\n      flex-direction: column ;\n  }\n  #top{\n      width: 100%;\n      height: 70vh;\n    display: flex;\n    position: relative;\n  }\n  #left{\n      display: flex;\n      flex-direction: column;\n      position: absolute;\n      left: 5px;\n      height: 100%;\n      width: 25%;\n      padding: 30px;\n      padding-top: 50px;\n\n  }\n  #currentTemp{\n    text-align: center;\n    font-size: 2.5rem;\n    margin-top: 50px;\n  }\n  #tempIcon{\n    display: flex;\n    height: 15%;\n    justify-content: center;\n    align-items: center;\n  }\n  #mainIcon{\n  transform: scale(1.5);\n  }\n  #inputDiv{\n    position: relative;\n    height: 40%;\n  }\n  #userInput{\n    position: absolute;\n    height: 100%;\n    padding: 5px;\n    width: 30%;\n    border: none;\n    color: whitesmoke;\n    outline: none;\n    border-radius: 10px;\n    margin-left: 15px;\n    width: 60%;\n    background-color: rgba(250, 245, 245, 0.5);\n  }\n  ::placeholder{\n    color: whitesmoke;\n    font-size: 0.8rem;\n  }\n  #lupa{\n    position: absolute;\n    left: 55%;\n    bottom: 10%;\n    transform: scale(0.8);\n    color: black;\n  }\n\n.button-85 {\n  margin-top: 20px;\n  transform: scale(0.6);\n  padding: 0.6em 2em;\n  border: none;\n  outline: none;\n  color: rgb(255, 255, 255);\n  background: #111;\n  cursor: pointer;\n  position: relative;\n  z-index: 0;\n  border-radius: 10px;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  transition: transform 500ms;\n}\n\n.button-85:before {\n  content: \"\";\n  background: linear-gradient(\n    45deg,\n    #ff0000,\n    #ff7300,\n    #fffb00,\n    #48ff00,\n    #00ffd5,\n    #002bff,\n    #7a00ff,\n    #ff00c8,\n    #ff0000\n  );\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  background-size: 400%;\n  z-index: -1;\n  filter: blur(5px);\n  -webkit-filter: blur(5px);\n  width: calc(100% + 4px);\n  height: calc(100% + 4px);\n  animation: glowing-button-85 20s linear infinite;\n  transition: opacity 0.3s ease-in-out;\n  border-radius: 10px;\n}\n\n@keyframes glowing-button-85 {\n  0% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 400% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n\n.button-85:after {\n  z-index: -1;\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #222;\n  left: 0;\n  top: 0;\n  border-radius: 10px;\n}\n#submit:hover{\n  transform: scale(0.65);\n}\n\n  #right{\n    position: absolute;\n    right: 5px;\n    width: 15%;\n    height: 100%;\n    padding: 30px;\n    padding-top: 50px;\n\n\n  }\n  .info{\n    display: flex;\n    padding: 10px;\n    justify-content: flex-end;\n\n\n  }\n  .infoBox{\n    display: flex;\n    flex-direction: column;\n    width: 50%;\n\n  }\n  .infoIcon{\n    display: flex;\n    width: 50%;\n    justify-content: center;\n    align-items: center;\n\n  }\n  .fa-solid{\n    transform: scale(1.8);\n  }\n  #bot{\n    padding: 30px;\n    display: flex;\n    flex-direction: column;\n    height: 30vh;\n    background-color: rgba(0, 0, 0, 0.4);\n  }\n  #dailyForecast{\n    margin-top: 25px;\n    display: flex;\n    width: 100%;\n    height: 100%;\n    justify-content: center;\n    gap: 20px;\n  }\n  .card{\n    display: flex;\n    flex-direction: column;\n    width: 10vw;\n    background-color: rgba(0, 0, 0, 0.45);\n    justify-content: center;\n    align-items: center;\n    border-radius: 10px;\n\n\n  }\n  .day{\n    margin-bottom: 20px;\n    font-weight: 800;\n  }\n\n  #dailyForecast{\n    display: flex;\n  }\n  .dailyIcon{\n    transform: scale(1.1);\n  }"],"sourceRoot":""}]);
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
  if ($hourlyForecast.firstChild) {
    while ($hourlyForecast.firstChild) {
      $hourlyForecast.removeChild($hourlyForecast.firstChild);
    }
  }

  myForecast.forEach((item) => {
    // Clear hourly forecast screen
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7QUNyQjRDO0FBQ3ZCOztBQUVyQjtBQUNBLDBEQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTXlMaWIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL015TGliLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9NeUxpYi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vTXlMaWIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9NeUxpYi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9NeUxpYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9NeUxpYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vTXlMaWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vTXlMaWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vTXlMaWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9NeUxpYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL015TGliLy4vc3JjL2RhaWx5Rm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vTXlMaWIvLi9zcmMvZGlzcGxheURhaWx5Rm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vTXlMaWIvLi9zcmMvZGlzcGxheVdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vTXlMaWIvLi9zcmMvZ2VvQ29kZXIuanMiLCJ3ZWJwYWNrOi8vTXlMaWIvLi9zcmMvZ2V0SHVtYW5EYXRlLmpzIiwid2VicGFjazovL015TGliLy4vc3JjL2xvYWRGb3JtRXZlbnQuanMiLCJ3ZWJwYWNrOi8vTXlMaWIvLi9zcmMvbG9jYXRpb25XZWF0aGVyQVBJLmpzIiwid2VicGFjazovL015TGliLy4vc3JjL3JlcXVlc3RXZWF0aGVyLmpzIiwid2VicGFjazovL015TGliL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL015TGliL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL015TGliL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9NeUxpYi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL015TGliL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vTXlMaWIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9NeUxpYi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9NeUxpYi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9NeUxpYi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvbWFyYy1vbGl2aWVyLWpvZG9pbi1NSnYzMXFYcVNPVS11bnNwbGFzaC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXNpemU6IDF2dztcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgLyogb3V0bGluZTogd2hpdGUgc29saWQgMXB4OyAqL1xcbn1cXG4uc21hbGx7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG4uYmlne1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuaHRtbCB7IFxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB9XFxuICBib2R5e1xcbiAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICB9XFxuICAjbWFpbntcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gO1xcbiAgfVxcbiAgI3RvcHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDcwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG4gICNsZWZ0e1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbGVmdDogNXB4O1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICB3aWR0aDogMjUlO1xcbiAgICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgICAgcGFkZGluZy10b3A6IDUwcHg7XFxuXFxuICB9XFxuICAjY3VycmVudFRlbXB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICB9XFxuICAjdGVtcEljb257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTUlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gICNtYWluSWNvbntcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG4gIH1cXG4gICNpbnB1dERpdntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDQwJTtcXG4gIH1cXG4gICN1c2VySW5wdXR7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjQ1LCAyNDUsIDAuNSk7XFxuICB9XFxuICA6OnBsYWNlaG9sZGVye1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICB9XFxuICAjbHVwYXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1NSU7XFxuICAgIGJvdHRvbTogMTAlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gIH1cXG5cXG4uYnV0dG9uLTg1IHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XFxuICBwYWRkaW5nOiAwLjZlbSAyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJhY2tncm91bmQ6ICMxMTE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zO1xcbn1cXG5cXG4uYnV0dG9uLTg1OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgNDVkZWcsXFxuICAgICNmZjAwMDAsXFxuICAgICNmZjczMDAsXFxuICAgICNmZmZiMDAsXFxuICAgICM0OGZmMDAsXFxuICAgICMwMGZmZDUsXFxuICAgICMwMDJiZmYsXFxuICAgICM3YTAwZmYsXFxuICAgICNmZjAwYzgsXFxuICAgICNmZjAwMDBcXG4gICk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0ycHg7XFxuICBsZWZ0OiAtMnB4O1xcbiAgYmFja2dyb3VuZC1zaXplOiA0MDAlO1xcbiAgei1pbmRleDogLTE7XFxuICBmaWx0ZXI6IGJsdXIoNXB4KTtcXG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDVweCk7XFxuICB3aWR0aDogY2FsYygxMDAlICsgNHB4KTtcXG4gIGhlaWdodDogY2FsYygxMDAlICsgNHB4KTtcXG4gIGFuaW1hdGlvbjogZ2xvd2luZy1idXR0b24tODUgMjBzIGxpbmVhciBpbmZpbml0ZTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbkBrZXlmcmFtZXMgZ2xvd2luZy1idXR0b24tODUge1xcbiAgMCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxuICB9XFxuICA1MCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0MDAlIDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcbiAgfVxcbn1cXG5cXG4uYnV0dG9uLTg1OmFmdGVyIHtcXG4gIHotaW5kZXg6IC0xO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICMyMjI7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuI3N1Ym1pdDpob3ZlcntcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42NSk7XFxufVxcblxcbiAgI3JpZ2h0e1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiA1cHg7XFxuICAgIHdpZHRoOiAxNSU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxuXFxuXFxuICB9XFxuICAuaW5mb3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG5cXG5cXG4gIH1cXG4gIC5pbmZvQm94e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogNTAlO1xcblxcbiAgfVxcbiAgLmluZm9JY29ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIH1cXG4gIC5mYS1zb2xpZHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjgpO1xcbiAgfVxcbiAgI2JvdHtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAzMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICB9XFxuICAjZGFpbHlGb3JlY2FzdHtcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gIH1cXG4gIC5jYXJke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTB2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFxuXFxuICB9XFxuICAuZGF5e1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgfVxcblxcbiAgI2RhaWx5Rm9yZWNhc3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuICAuZGFpbHlJY29ue1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlGQUFpRztJQUNqRyw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixzQkFBc0I7RUFDeEI7RUFDQTtNQUNJLFlBQVk7TUFDWixhQUFhO01BQ2IsZ0JBQWdCO0VBQ3BCO0VBQ0E7TUFDSSxXQUFXO01BQ1gsYUFBYTtNQUNiLHVCQUF1QjtFQUMzQjtFQUNBO01BQ0ksV0FBVztNQUNYLFlBQVk7SUFDZCxhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCO0VBQ0E7TUFDSSxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsWUFBWTtNQUNaLFVBQVU7TUFDVixhQUFhO01BQ2IsaUJBQWlCOztFQUVyQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGFBQWE7SUFDYixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjtFQUNBO0VBQ0EscUJBQXFCO0VBQ3JCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztFQUNiO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsMENBQTBDO0VBQzVDO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsWUFBWTtFQUNkOztBQUVGO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1g7Ozs7Ozs7Ozs7O0dBV0M7RUFDRCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixnREFBZ0Q7RUFDaEQsb0NBQW9DO0VBQ3BDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtBQUNGOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsT0FBTztFQUNQLE1BQU07RUFDTixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4Qjs7RUFFRTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCOzs7RUFHbkI7RUFDQTtJQUNFLGFBQWE7SUFDYixhQUFhO0lBQ2IseUJBQXlCOzs7RUFHM0I7RUFDQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTs7RUFFWjtFQUNBO0lBQ0UsYUFBYTtJQUNiLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsbUJBQW1COztFQUVyQjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osb0NBQW9DO0VBQ3RDO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFNBQVM7RUFDWDtFQUNBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gscUNBQXFDO0lBQ3JDLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsbUJBQW1COzs7RUFHckI7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXNpemU6IDF2dztcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgLyogb3V0bGluZTogd2hpdGUgc29saWQgMXB4OyAqL1xcbn1cXG4uc21hbGx7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG4uYmlne1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuaHRtbCB7IFxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9pbWcvbWFyYy1vbGl2aWVyLWpvZG9pbi1NSnYzMXFYcVNPVS11bnNwbGFzaC5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB9XFxuICBib2R5e1xcbiAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICB9XFxuICAjbWFpbntcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gO1xcbiAgfVxcbiAgI3RvcHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDcwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG4gICNsZWZ0e1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbGVmdDogNXB4O1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICB3aWR0aDogMjUlO1xcbiAgICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgICAgcGFkZGluZy10b3A6IDUwcHg7XFxuXFxuICB9XFxuICAjY3VycmVudFRlbXB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICB9XFxuICAjdGVtcEljb257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTUlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gICNtYWluSWNvbntcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG4gIH1cXG4gICNpbnB1dERpdntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDQwJTtcXG4gIH1cXG4gICN1c2VySW5wdXR7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjQ1LCAyNDUsIDAuNSk7XFxuICB9XFxuICA6OnBsYWNlaG9sZGVye1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICB9XFxuICAjbHVwYXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1NSU7XFxuICAgIGJvdHRvbTogMTAlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gIH1cXG5cXG4uYnV0dG9uLTg1IHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XFxuICBwYWRkaW5nOiAwLjZlbSAyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJhY2tncm91bmQ6ICMxMTE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zO1xcbn1cXG5cXG4uYnV0dG9uLTg1OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgNDVkZWcsXFxuICAgICNmZjAwMDAsXFxuICAgICNmZjczMDAsXFxuICAgICNmZmZiMDAsXFxuICAgICM0OGZmMDAsXFxuICAgICMwMGZmZDUsXFxuICAgICMwMDJiZmYsXFxuICAgICM3YTAwZmYsXFxuICAgICNmZjAwYzgsXFxuICAgICNmZjAwMDBcXG4gICk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0ycHg7XFxuICBsZWZ0OiAtMnB4O1xcbiAgYmFja2dyb3VuZC1zaXplOiA0MDAlO1xcbiAgei1pbmRleDogLTE7XFxuICBmaWx0ZXI6IGJsdXIoNXB4KTtcXG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDVweCk7XFxuICB3aWR0aDogY2FsYygxMDAlICsgNHB4KTtcXG4gIGhlaWdodDogY2FsYygxMDAlICsgNHB4KTtcXG4gIGFuaW1hdGlvbjogZ2xvd2luZy1idXR0b24tODUgMjBzIGxpbmVhciBpbmZpbml0ZTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbkBrZXlmcmFtZXMgZ2xvd2luZy1idXR0b24tODUge1xcbiAgMCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxuICB9XFxuICA1MCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0MDAlIDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcbiAgfVxcbn1cXG5cXG4uYnV0dG9uLTg1OmFmdGVyIHtcXG4gIHotaW5kZXg6IC0xO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICMyMjI7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuI3N1Ym1pdDpob3ZlcntcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42NSk7XFxufVxcblxcbiAgI3JpZ2h0e1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiA1cHg7XFxuICAgIHdpZHRoOiAxNSU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxuXFxuXFxuICB9XFxuICAuaW5mb3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG5cXG5cXG4gIH1cXG4gIC5pbmZvQm94e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogNTAlO1xcblxcbiAgfVxcbiAgLmluZm9JY29ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIH1cXG4gIC5mYS1zb2xpZHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjgpO1xcbiAgfVxcbiAgI2JvdHtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAzMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICB9XFxuICAjZGFpbHlGb3JlY2FzdHtcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gIH1cXG4gIC5jYXJke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTB2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFxuXFxuICB9XFxuICAuZGF5e1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgfVxcblxcbiAgI2RhaWx5Rm9yZWNhc3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuICAuZGFpbHlJY29ue1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGRhaWx5Rm9yZWNhc3QocGxhY2VEYXRhKSB7XG4gIGNvbnN0IGxhdCA9IHBsYWNlRGF0YS5sYXRpdHVkZTtcbiAgY29uc3QgbG9uID0gcGxhY2VEYXRhLmxvbmdpdHVkZTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bGF0fSZsb249JHtsb259JmV4Y2x1ZGU9bWludXRlbHksaG91cmx5JnVuaXRzPW1ldHJpYyZhcHBpZD1hYjFkMTExM2I2YTYyYzgyODAxNGJiN2FjYjcyZjU1OGApO1xuICBjb25zdCBteUpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBteUpzb24uZGFpbHk7XG59XG4iLCJpbXBvcnQgZ2V0SHVtYW5EYXRlIGZyb20gJy4vZ2V0SHVtYW5EYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheURhaWx5Rm9yZWNhc3QobXlGb3JlY2FzdCkge1xuICBjb25zb2xlLmxvZyhteUZvcmVjYXN0KTtcbiAgY29uc3QgJGhvdXJseUZvcmVjYXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhaWx5Rm9yZWNhc3QnKTtcbiAgaWYgKCRob3VybHlGb3JlY2FzdC5maXJzdENoaWxkKSB7XG4gICAgd2hpbGUgKCRob3VybHlGb3JlY2FzdC5maXJzdENoaWxkKSB7XG4gICAgICAkaG91cmx5Rm9yZWNhc3QucmVtb3ZlQ2hpbGQoJGhvdXJseUZvcmVjYXN0LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxuXG4gIG15Rm9yZWNhc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIC8vIENsZWFyIGhvdXJseSBmb3JlY2FzdCBzY3JlZW5cbiAgICAvLyBDcmVhdGUgY2FyZCBmb3IgZWFjaCBpdGVtXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICAgIGNvbnN0IGRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRheS5jbGFzc0xpc3QuYWRkKCdkYXknKTtcbiAgICBjb25zdCBtYWluVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5UZW1wLmNsYXNzTGlzdC5hZGQoJ2JpZycpO1xuICAgIGNvbnN0IG1pblRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtaW5UZW1wLmNsYXNzTGlzdC5hZGQoJ3NtYWxsJyk7XG4gICAgY29uc3QgaWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGljb25EaXYuY2xhc3NMaXN0LmFkZCgnZGFpbHlJY29uJyk7XG4gICAgY2FyZC5hcHBlbmQoZGF5LCBtYWluVGVtcCwgbWluVGVtcCwgaWNvbkRpdik7XG4gICAgY29uc3QgaXRlbURhdGUgPSBnZXRIdW1hbkRhdGUoaXRlbS5kdCk7XG4gICAgY29uc29sZS5sb2coaXRlbURhdGUpO1xuICAgIGRheS50ZXh0Q29udGVudCA9IGl0ZW1EYXRlLmRheTtcbiAgICBtYWluVGVtcC50ZXh0Q29udGVudCA9IGl0ZW0udGVtcC5tYXg7XG4gICAgbWluVGVtcC50ZXh0Q29udGVudCA9IGAke2l0ZW0udGVtcC5taW59IENgO1xuICAgIGNvbnN0IGljb25SZWYgPSBpdGVtLndlYXRoZXJbMF0uaWNvbjtcbiAgICBjb25zdCBteUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBteUljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7aWNvblJlZn0ucG5nYDtcbiAgICBteUljb24uY2xhc3NMaXN0LmFkZCgnZGFpbHlJY29uJyk7XG4gICAgaWNvbkRpdi5hcHBlbmQobXlJY29uKTtcbiAgICAkaG91cmx5Rm9yZWNhc3QuYXBwZW5kKGNhcmQuY2xvbmVOb2RlKHRydWUpKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgZ2V0SHVtYW5EYXRlIGZyb20gJy4vZ2V0SHVtYW5EYXRlJztcblxuZnVuY3Rpb24gZGlzcGxheVdlYXRoZXIobXlKc29uKSB7XG4gIGNvbnNvbGUubG9nKG15SnNvbik7XG4gIC8vIFZhbGlkYXRlIGZpbGVcbiAgaWYgKG15SnNvbiA9PT0gbnVsbCB8fCBteUpzb24gPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBEaXNwbGF5IHdlYXRoZXIgdmFsdWVzXG4gIC8vIExlZnQgUGFuZWxcbiAgY29uc3QgJGNvbmRpdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb25kaXRpb24nKTtcbiAgJGNvbmRpdGlvbi50ZXh0Q29udGVudCA9IG15SnNvbi53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICBjb25zdCAkcGxhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxhY2UnKTtcbiAgJHBsYWNlLnRleHRDb250ZW50ID0gbXlKc29uLm5hbWU7XG4gIGNvbnN0IHVuaXhUaW1lID0gbXlKc29uLmR0O1xuICBjb25zdCBteURhdGUgPSBnZXRIdW1hbkRhdGUodW5peFRpbWUpO1xuICBjb25zdCAkZGF0ZU9mRmV0Y2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpO1xuICAkZGF0ZU9mRmV0Y2gudGV4dENvbnRlbnQgPSBgJHtteURhdGUuZGF5fSAke215RGF0ZS5tb250aH0gJHtteURhdGUuZGF0ZX1gO1xuICBjb25zdCAkaG91ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50SG91cicpO1xuICAkaG91ci50ZXh0Q29udGVudCA9IGAke215RGF0ZS5ob3VyfToke215RGF0ZS5taW51dGV9YDtcbiAgY29uc3QgJGN1cnJlbnRUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnRUZW1wJyk7XG4gICRjdXJyZW50VGVtcC50ZXh0Q29udGVudCA9IGAke215SnNvbi5tYWluLnRlbXB9wrBDYDtcbiAgY29uc3QgJHRlbXBJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXBJY29uJyk7XG4gIC8vIGRlbGV0ZSBpY29uIGlmICR0ZW1wSWNvbiBhbHJlYWR5IGhhcyBvbmVcbiAgaWYgKCR0ZW1wSWNvbi5maXJzdENoaWxkKSB7XG4gICAgJHRlbXBJY29uLnJlbW92ZUNoaWxkKCR0ZW1wSWNvbi5maXJzdENoaWxkKTtcbiAgfVxuICBjb25zdCBpY29uUmVmID0gbXlKc29uLndlYXRoZXJbMF0uaWNvbjtcbiAgY29uc3QgdGVtcEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgdGVtcEljb24uaWQgPSAnbWFpbkljb24nO1xuICB0ZW1wSWNvbi5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtpY29uUmVmfS5wbmdgO1xuICAkdGVtcEljb24uYXBwZW5kKHRlbXBJY29uKTtcbiAgLy8gUmlnaHQgcGFuZWxcbiAgY29uc3QgJGZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWVsc0xpa2UnKTtcbiAgJGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGAke215SnNvbi5tYWluLmZlZWxzX2xpa2V9wrBDYDtcbiAgY29uc3QgbWluVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtaW5UZW1wVmFsdWUnKTtcbiAgbWluVGVtcC50ZXh0Q29udGVudCA9IGAke215SnNvbi5tYWluLnRlbXBfbWlufcKwQ2A7XG4gIGNvbnN0IG1heFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWF4VGVtcFZhbHVlJyk7XG4gIG1heFRlbXAudGV4dENvbnRlbnQgPSBgJHtteUpzb24ubWFpbi50ZW1wX21heH3CsENgO1xuICBjb25zdCAkaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHVtaWRpdHlWYWx1ZScpO1xuICAkaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHtteUpzb24ubWFpbi5odW1pZGl0eX0lYDtcbiAgY29uc3QgJHdpbmRTcGVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5kU3BlZWRWYWx1ZScpO1xuICAkd2luZFNwZWVkLnRleHRDb250ZW50ID0gYCR7bXlKc29uLndpbmQuc3BlZWR9IEttL2hgO1xufVxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheVdlYXRoZXI7XG4iLCJhc3luYyBmdW5jdGlvbiBnZW9Db2Rlcih1c2VySW5wdXQpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke3VzZXJJbnB1dH0mbGltaXQ9NSZhcHBpZD1hYjFkMTExM2I2YTYyYzgyODAxNGJiN2FjYjcyZjU1OGApO1xuICBjb25zdCBteUpTT04gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIC8vIENoZWNrIGlmIEFQSXMgcmVzcG9uc2UgaXMgbm90IGFuIGVtcHR5IGFycmF5XG4gIGlmIChteUpTT04ubGVuZ3RoIDw9IDApIHtcbiAgICBhbGVydCgnTG9jYXRpb24gTm90IEZvdW5kJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIElmIHJlc3BvbnNlIGNvbnRhaW4gYW4gYXJyYXkgd2l0aCBtYW55IGl0ZW1zIGp1c3QgZ3JhYiB0aGUgZmlyc3Qgb25lXG4gIGNvbnN0IG15UGxhY2UgPSBteUpTT05bMF07XG4gIGNvbnN0IGxhdGl0dWRlID0gbXlQbGFjZS5sYXQ7XG4gIGNvbnN0IGxvbmdpdHVkZSA9IG15UGxhY2UubG9uO1xuICByZXR1cm4geyBsYXRpdHVkZSwgbG9uZ2l0dWRlIH07XG59XG5leHBvcnQgZGVmYXVsdCBnZW9Db2RlcjtcbiIsImZ1bmN0aW9uIGdldEh1bWFuRGF0ZSh1bml4VGltZSkge1xuICBjb25zdCBteURhdGUgPSBuZXcgRGF0ZSh1bml4VGltZSAqIDEwMDApO1xuICBsZXQgZGF5ID0gbXlEYXRlLmdldERheSgpO1xuICBpZiAoZGF5ID09PSAwKSB7XG4gICAgZGF5ID0gJ1N1bmRheSc7XG4gIH1cbiAgaWYgKGRheSA9PT0gMSkge1xuICAgIGRheSA9ICdNb25kYXknO1xuICB9XG4gIGlmIChkYXkgPT09IDIpIHtcbiAgICBkYXkgPSAnVHVlc2RheSc7XG4gIH1cbiAgaWYgKGRheSA9PT0gMykge1xuICAgIGRheSA9ICdXZWRuZXNkYXknO1xuICB9XG4gIGlmIChkYXkgPT09IDQpIHtcbiAgICBkYXkgPSAnVGh1cnNkYXknO1xuICB9XG4gIGlmIChkYXkgPT09IDUpIHtcbiAgICBkYXkgPSAnRnJpZGF5JztcbiAgfVxuICBpZiAoZGF5ID09PSA2KSB7XG4gICAgZGF5ID0gJ1NhdHVyZGF5JztcbiAgfVxuICBjb25zdCBkYXRlID0gbXlEYXRlLmdldERhdGUoKTtcbiAgbGV0IG1vbnRoID0gbXlEYXRlLmdldE1vbnRoKCk7XG4gIGlmIChtb250aCA9PT0gMCkge1xuICAgIG1vbnRoID0gJ0phbnVhcnknO1xuICB9XG4gIGlmIChtb250aCA9PT0gMSkge1xuICAgIG1vbnRoID0gJ0ZlYnJ1YXJ5JztcbiAgfVxuICBpZiAobW9udGggPT09IDIpIHtcbiAgICBtb250aCA9ICdNYXJjaCc7XG4gIH1cbiAgaWYgKG1vbnRoID09PSAzKSB7XG4gICAgbW9udGggPSAnQXByaWwnO1xuICB9XG4gIGlmIChtb250aCA9PT0gNCkge1xuICAgIG1vbnRoID0gJ01heSc7XG4gIH1cbiAgaWYgKG1vbnRoID09PSA1KSB7XG4gICAgbW9udGggPSAnSnVuZSc7XG4gIH1cbiAgaWYgKG1vbnRoID09PSA2KSB7XG4gICAgbW9udGggPSAnSnVseSc7XG4gIH1cbiAgaWYgKG1vbnRoID09PSA3KSB7XG4gICAgbW9udGggPSAnQXVndXN0JztcbiAgfVxuICBpZiAobW9udGggPT09IDgpIHtcbiAgICBtb250aCA9ICdTZXB0ZW1iZXInO1xuICB9XG4gIGlmIChtb250aCA9PT0gOSkge1xuICAgIG1vbnRoID0gJ09jdG9iZXInO1xuICB9XG4gIGlmIChtb250aCA9PT0gMTApIHtcbiAgICBtb250aCA9ICdOb3ZlbWJlcic7XG4gIH1cbiAgaWYgKG1vbnRoID09PSAxMSkge1xuICAgIG1vbnRoID0gJ0RlY2VtYmVyJztcbiAgfVxuICBjb25zdCB5ZWFyID0gbXlEYXRlLmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IGhvdXIgPSBteURhdGUuZ2V0SG91cnMoKTtcbiAgY29uc3QgbWludXRlID0gbXlEYXRlLmdldE1pbnV0ZXMoKTtcbiAgcmV0dXJuIHtcbiAgICBkYXksIGRhdGUsIG1vbnRoLCB5ZWFyLCBob3VyLCBtaW51dGUsXG4gIH07XG59XG5leHBvcnQgZGVmYXVsdCBnZXRIdW1hbkRhdGU7XG4iLCJpbXBvcnQgcmVxdWVzdFdlYXRoZXIgZnJvbSAnLi9yZXF1ZXN0V2VhdGhlcic7XG5cbmZ1bmN0aW9uIGxvYWRGb3JtRXZlbnQoKSB7XG4gIGNvbnN0IG15QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdCcpO1xuICBteUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlcXVlc3RXZWF0aGVyKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGxvYWRGb3JtRXZlbnQ7XG4iLCJhc3luYyBmdW5jdGlvbiBsb2NhdGlvbldlYXRoZXJBUEkocGxhY2VEYXRhKSB7XG4gIGNvbnN0IGxhdCA9IHBsYWNlRGF0YS5sYXRpdHVkZTtcbiAgY29uc3QgbG9uID0gcGxhY2VEYXRhLmxvbmdpdHVkZTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0fSZsb249JHtsb259JnVuaXRzPW1ldHJpYyZhcHBpZD1hYjFkMTExM2I2YTYyYzgyODAxNGJiN2FjYjcyZjU1OGApO1xuICBjb25zdCBteUpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBteUpzb247XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvY2F0aW9uV2VhdGhlckFQSTtcbiIsImltcG9ydCBkaXNwbGF5V2VhdGhlciBmcm9tICcuL2Rpc3BsYXlXZWF0aGVyJztcbmltcG9ydCBkYWlseUZvcmVjYXN0IGZyb20gJy4vZGFpbHlGb3JlY2FzdCc7XG5pbXBvcnQgZ2VvQ29kZXIgZnJvbSAnLi9nZW9Db2Rlcic7XG5pbXBvcnQgbG9jYXRpb25XZWF0aGVyQVBJIGZyb20gJy4vbG9jYXRpb25XZWF0aGVyQVBJJztcbmltcG9ydCBkaXNwbGF5RGFpbHlGb3JlY2FzdCBmcm9tICcuL2Rpc3BsYXlEYWlseUZvcmVjYXN0JztcblxuYXN5bmMgZnVuY3Rpb24gcmVxdWVzdFdlYXRoZXIoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIC8vIEdldCBVc2VyIElucHV0XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXJJbnB1dCcpO1xuICBjb25zdCB1c2VySW5wdXQgPSBpbnB1dC52YWx1ZTtcbiAgLy8gUmVxdWVzdCBhIGxhdGl0dWRlIGFuZCBhIGxvbmdpdHVkZSB0byB0aGUgZ2VvQ29kZXJBUEkgZm9yIHRoZSB1c2VyIGlucHV0XG4gIGNvbnN0IHBsYWNlRGF0YSA9IGF3YWl0IGdlb0NvZGVyKHVzZXJJbnB1dCk7XG4gIC8vIENhbGwgT3BlbldlYXRoZXIgQVBJIGZvciBsb2NhdGlvbiBpbmZvIGFuZCBkaXNwbGF5IGl0XG4gIGNvbnN0IG15SnNvbiA9IGF3YWl0IGxvY2F0aW9uV2VhdGhlckFQSShwbGFjZURhdGEpO1xuICBkaXNwbGF5V2VhdGhlcihteUpzb24pO1xuICAvLyBDYWxsIE9wZW53ZWF0aGVyIEFQSSBmb3IgbG9jYXRpb24gZm9yZWNhc3RcbiAgY29uc3QgbXlGb3JlY2FzdCA9IGF3YWl0IGRhaWx5Rm9yZWNhc3QocGxhY2VEYXRhKTtcbiAgZGlzcGxheURhaWx5Rm9yZWNhc3QobXlGb3JlY2FzdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3RXZWF0aGVyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgbG9hZEZvcm1FdmVudCBmcm9tICcuL2xvYWRGb3JtRXZlbnQnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnNvbGUubG9nKCdpbml0Jyk7XG5sb2FkRm9ybUV2ZW50KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=