"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoreAppointments = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var _dayjs = _interopRequireDefault(require("dayjs"));
var _react = _interopRequireDefault(require("react"));
var _stylesModule = _interopRequireDefault(require("./styles.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var statusVariants = {
  paid: _stylesModule.default.paid,
  booked: _stylesModule.default.booked,
  overdue: _stylesModule.default.overdue
};
var MoreAppointments = function MoreAppointments(_ref) {
  var data = _ref.data;
  var text = data.text,
    status = data.status,
    startDate = data.startDate;
  var startTime = (0, _dayjs.default)(startDate).format('HH:mm');
  return _react.default.createElement("div", {
    className: _stylesModule.default.wrapper
  }, _react.default.createElement("div", {
    className: (0, _classnames.default)(_stylesModule.default.point, statusVariants[status])
  }), _react.default.createElement("span", null, startTime, " ", text));
};
exports.MoreAppointments = MoreAppointments;
//# sourceMappingURL=MoreAppointments.js.map