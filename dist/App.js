"use strict";

require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _localization = require("devextreme/localization");
var _react = _interopRequireWildcard(require("react"));
require("./App.css");
require("devextreme/dist/css/dx.light.css");
var _Calendar = require("./components/Calendar/Calendar");
var _MaterialProvider = require("./providers/MaterialProvider");
var _sefviceFormData = require("./sefviceFormData");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const App = _ref => {
  let {
    owners = _sefviceFormData.ownersData,
    rooms = _sefviceFormData.roomsData,
    events = _sefviceFormData.data,
    updateEvent,
    addEvent,
    openUpdateModal,
    openAddingModal,
    closeModal,
    OpenEventWrapper
  } = _ref;
  (0, _react.useEffect)(() => {
    (0, _localization.locale)('ru');
  }, []);
  return _react.default.createElement(_MaterialProvider.MaterialProvider, null, _react.default.createElement(_Calendar.Calendar, {
    owners: owners,
    rooms: rooms,
    events: events,
    updateEvent: updateEvent,
    addEvent: addEvent,
    openUpdateModal: openUpdateModal,
    openAddingModal: openAddingModal,
    closeModal: closeModal,
    OpenEventWrapper: OpenEventWrapper
  }));
};
var _default = App;
exports.default = _default;
//# sourceMappingURL=App.js.map