"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.test.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/es.object.get-own-property-descriptors.js");
require("core-js/modules/es.object.define-properties.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;
require("core-js/modules/es.array.map.js");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _react = _interopRequireWildcard(require("react"));
var _stylesModule = _interopRequireDefault(require("./styles.module.css"));
var _constants = require("../../constants/constants");
var _utils = require("../../utils/utils");
var _Select = require("./../Select/Select");
var _DateSelector = require("./HeaderComponents/DateSelector/DateSelector");
var _ViewListConstants = require("./HeaderComponents/DateSelector/ViewList/ViewListConstants");
var _PinnedViews = require("./HeaderComponents/PinnedViews/PinnedViews");
var _RangeButtons = require("./HeaderComponents/RangeButtons/RangeButtons");
var _ViewButtons = require("./HeaderComponents/ViewButtons/ViewButtons");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Header = function Header(_ref) {
  var selectViewValue = _ref.selectViewValue,
    handleSubtractDate = _ref.handleSubtractDate,
    handleAddDate = _ref.handleAddDate,
    handleViewsChange = _ref.handleViewsChange,
    handleMinusButton = _ref.handleMinusButton,
    handlePlusButton = _ref.handlePlusButton,
    _handleSelect = _ref.handleSelect;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(_ViewListConstants.viewList),
    _useState4 = _slicedToArray(_useState3, 2),
    views = _useState4[0],
    setViews = _useState4[1];
  var _useState5 = (0, _react.useState)((0, _utils.handleFirstCharInUpperCase)((0, _dayjs.default)().locale('ru').format('MMMM'))),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedPlaceholder = _useState6[0],
    setSelectedPlaceholder = _useState6[1];
  var handlePinned = function handlePinned(i) {
    var newState = views.map(function (item, index) {
      if (index === i) {
        return _objectSpread(_objectSpread({}, item), {}, {
          isPinned: !item.isPinned
        });
      }
      return item;
    });
    setViews(newState);
  };
  return _react.default.createElement("div", {
    className: _stylesModule.default.wrapper
  }, _react.default.createElement(_RangeButtons.RangeButtons, {
    handleAddDate: handleAddDate,
    handleSubtractDate: handleSubtractDate
  }), _react.default.createElement(_ViewButtons.ViewButtons, {
    handleMinusButton: handleMinusButton,
    handlePlusButton: handlePlusButton
  }), _react.default.createElement(_DateSelector.DateSelector, {
    views: views,
    handlePinned: handlePinned,
    isOpen: isOpen,
    selectPlaceholder: selectedPlaceholder,
    onCancel: function onCancel() {
      return setIsOpen(false);
    },
    handleOpen: function handleOpen() {
      return setIsOpen(true);
    },
    onSubmit: function onSubmit() {
      return setIsOpen(false);
    },
    handleViewClick: function handleViewClick(title) {
      setIsOpen(false);
      _handleSelect(title);
      setSelectedPlaceholder((0, _utils.handleSelectedPlaceholder)(title));
    }
  }), _react.default.createElement(_PinnedViews.PinnedViews, {
    views: views,
    handleSelect: function handleSelect(title) {
      _handleSelect(title);
      setSelectedPlaceholder((0, _utils.handleSelectedPlaceholder)(title));
    }
  }), _react.default.createElement(_Select.SelectComponent, {
    sx: {
      height: '32px',
      fontSize: '0.875rem',
      marginLeft: 'auto',
      marginRight: '20px'
    },
    value: selectViewValue,
    label: "asdsadasdasd",
    handleChange: handleViewsChange,
    options: _constants.changeViewOptions
  }));
};
exports.Header = Header;
//# sourceMappingURL=Header.js.map