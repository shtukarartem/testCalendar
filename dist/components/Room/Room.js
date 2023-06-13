"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Room = void 0;
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
var _classnames = _interopRequireDefault(require("classnames"));
var _stylesModule = _interopRequireDefault(require("./styles.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var roomVariants = {
  workPlace: _stylesModule.default.workPlace,
  office: _stylesModule.default.office,
  meeting: _stylesModule.default.meeting
};
var Room = function Room(props) {
  var _props$data = props.data,
    room = _props$data.room,
    description = _props$data.description,
    type = _props$data.type;
  return React.createElement("div", null, React.createElement("div", {
    className: _stylesModule.default.room
  }, React.createElement("div", {
    className: (0, _classnames.default)(_stylesModule.default.point, roomVariants[type])
  }), React.createElement("span", null, room)), React.createElement("div", {
    className: _stylesModule.default.description
  }, description));
};
exports.Room = Room;
//# sourceMappingURL=Room.js.map