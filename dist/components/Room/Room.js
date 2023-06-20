"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Room = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireDefault(require("react"));
var _stylesModule = _interopRequireDefault(require("./styles.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const roomVariants = {
  workPlace: _stylesModule.default.workPlace,
  office: _stylesModule.default.office,
  meeting: _stylesModule.default.meeting
};
const Room = props => {
  const {
    room,
    description,
    type
  } = props.data;
  return _react.default.createElement("div", null, _react.default.createElement("div", {
    className: _stylesModule.default.room
  }, _react.default.createElement("div", {
    className: (0, _classnames.default)(_stylesModule.default.point, roomVariants[type])
  }), _react.default.createElement("span", null, room)), _react.default.createElement("div", {
    className: _stylesModule.default.description
  }, description));
};
exports.Room = Room;
//# sourceMappingURL=Room.js.map