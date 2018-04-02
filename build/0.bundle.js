webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

__webpack_require__(3);

var _download = __webpack_require__(4);

var _download2 = _interopRequireDefault(_download);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var image = document.createElement('img');
	image.src = 'http://lorempixel.com/400/200';

	document.body.appendChild(image);
};

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function () {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for (var i = 0; i < this.length; i++) {
			var item = this[i];
			if (item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "img {\r\n\tborder: 10px solid black;\r\n}\r\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ })
]);