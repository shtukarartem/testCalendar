"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var App = function App(_ref) {
  var _ref$owners = _ref.owners,
    owners = _ref$owners === void 0 ? _sefviceFormData.ownersData : _ref$owners,
    _ref$rooms = _ref.rooms,
    rooms = _ref$rooms === void 0 ? _sefviceFormData.roomsData : _ref$rooms,
    _ref$events = _ref.events,
    events = _ref$events === void 0 ? _sefviceFormData.data : _ref$events,
    updateEvent = _ref.updateEvent,
    addEvent = _ref.addEvent,
    openUpdateModal = _ref.openUpdateModal,
    openAddingModal = _ref.openAddingModal,
    closeModal = _ref.closeModal,
    OpenEventWrapper = _ref.OpenEventWrapper,
    modalUrl = _ref.modalUrl,
    linkDispatcher = _ref.linkDispatcher;
  (0, _react.useEffect)(function () {
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
    OpenEventWrapper: OpenEventWrapper,
    modalUrl: modalUrl,
    linkDispatcher: linkDispatcher
  }));
};
var _default = App;
exports.default = _default;
//# sourceMappingURL=App.js.map