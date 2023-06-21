"use strict";

require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Appointment = void 0;
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.number.constructor.js");
var _classnames = _interopRequireDefault(require("classnames"));
var _dayjs = _interopRequireDefault(require("dayjs"));
var _react = _interopRequireDefault(require("react"));
var _stylesModule = _interopRequireDefault(require("./styles.module.css"));
var _Link = require("../../navigation/Link");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var statusVariants = {
  paid: _stylesModule.default.paid,
  booked: _stylesModule.default.booked,
  overdue: _stylesModule.default.overdue
};
var EmptyComponent = function EmptyComponent(_ref) {
  var children = _ref.children;
  return _react.default.createElement(_react.default.Fragment, null, children);
};
var Appointment = function Appointment(_ref2) {
  var data = _ref2.data,
    currentDate = _ref2.currentDate,
    OpenEventWrapper = _ref2.OpenEventWrapper,
    modalUrl = _ref2.modalUrl,
    linkDispatcher = _ref2.linkDispatcher;
  var client_data = data.client_data,
    startDate = data.startDate,
    endDate = data.endDate,
    status = data.status;
  var startTime = (0, _dayjs.default)(startDate).format('HH:mm');
  var endTime = (0, _dayjs.default)(endDate).format('HH:mm');
  var endDateFormat = (0, _dayjs.default)(endDate);
  var isPast = endDateFormat.isBefore(currentDate);
  var LinkWrapper = OpenEventWrapper !== null && OpenEventWrapper !== void 0 ? OpenEventWrapper : EmptyComponent;
  return _react.default.createElement(LinkWrapper, null, _react.default.createElement(_Link.Link, {
    url: modalUrl,
    dispatcher: linkDispatcher
  }, _react.default.createElement("div", {
    className: (0, _classnames.default)(_stylesModule.default.wrapper, statusVariants[status], _defineProperty({}, _stylesModule.default.past, isPast))
  }, _react.default.createElement("div", {
    className: _stylesModule.default.time
  }, startTime, "-", endTime), _react.default.createElement("div", {
    className: _stylesModule.default.owner
  }, client_data.name))));
};
exports.Appointment = Appointment;
//# sourceMappingURL=Appointment.js.map