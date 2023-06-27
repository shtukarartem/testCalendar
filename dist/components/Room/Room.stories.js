"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RoomComponent = void 0;
var _Room = require("./Room");
var RoomComponent = {
  args: {
    data: {
      room: 'Рабочее место 1',
      description: 'Окно',
      type: 'Рабочее место',
      id: 1,
      color: '#1e90ff'
    }
  }
};
exports.RoomComponent = RoomComponent;
var RoomDefaultExport = {
  component: _Room.Room
};
var _default = RoomDefaultExport;
exports.default = _default;
//# sourceMappingURL=Room.stories.js.map