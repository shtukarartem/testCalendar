"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Appointment = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var _dayjs = _interopRequireDefault(require("dayjs"));
var _react = _interopRequireDefault(require("react"));
var _stylesModule = _interopRequireDefault(require("./styles.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const statusVariants = {
  paid: _stylesModule.default.paid,
  booked: _stylesModule.default.booked,
  overdue: _stylesModule.default.overdue
};
const EmptyComponent = _ref => {
  let {
    children
  } = _ref;
  return _react.default.createElement(_react.default.Fragment, null, children);
};
const Appointment = _ref2 => {
  let {
    data,
    currentDate,
    OpenEventWrapper
  } = _ref2;
  const {
    client_data,
    startDate,
    endDate,
    status
  } = data;
  const startTime = (0, _dayjs.default)(startDate).format('HH:mm');
  const endTime = (0, _dayjs.default)(endDate).format('HH:mm');
  const endDateFormat = (0, _dayjs.default)(endDate);
  const isPast = endDateFormat.isBefore(currentDate);
  const LinkWrapper = OpenEventWrapper !== null && OpenEventWrapper !== void 0 ? OpenEventWrapper : EmptyComponent;
  return _react.default.createElement(LinkWrapper, null, _react.default.createElement("div", {
    className: (0, _classnames.default)(_stylesModule.default.wrapper, statusVariants[status], {
      [_stylesModule.default.past]: isPast
    })
  }, _react.default.createElement("div", {
    className: _stylesModule.default.time
  }, startTime, "-", endTime), _react.default.createElement("div", {
    className: _stylesModule.default.owner
  }, client_data.name)));
};
exports.Appointment = Appointment;
//# sourceMappingURL=Appointment.js.map