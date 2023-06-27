"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Room = void 0;
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireDefault(require("react"));
var _stylesModule = _interopRequireDefault(require("./styles.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var roomVariants = {
  'Рабочее место': _stylesModule.default.workPlace,
  Офис: _stylesModule.default.office,
  Переговорная: _stylesModule.default.meeting
};
var Room = function Room(props) {
  var _props$data = props.data,
    room = _props$data.room,
    description = _props$data.description,
    type = _props$data.type;
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