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
exports.Calendar = void 0;
var _dayjs = _interopRequireDefault(require("dayjs"));
var _devextremeReact = require("devextreme-react");
var _scheduler = require("devextreme-react/scheduler");
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _styleModule = _interopRequireDefault(require("./style.module.css"));
var _sefviceFormData = require("../../sefviceFormData");
var _utils = require("../../utils/utils");
var _DateCell = require("../DateCell/DateCell");
var _Appointment = require("./../Appointment/Appointment");
var _Header = require("./../Header/Header");
var _MoreAppointments = require("./../MoreAppointments/MoreAppointments");
var _MoreButton = require("./../MoreButton/MoreButton");
var _Room = require("./../Room/Room");
var _TooltipComponent = require("./../Tooltip/TooltipComponent");
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
var handleAppointmentAdding = function handleAppointmentAdding(e, addEvent) {
  var isBusyDate = (0, _utils.checkBusyRoom)(_sefviceFormData.data, e.appointmentData.rooms, e.appointmentData.startDate, e.appointmentData.endDate);
  if (isBusyDate) {
    e.cancel = true;
    alert('Данная переговорка уже забронирована на выбранное Вами время');
  }
  console.log('// TODO here will be action for adding appointment');
  addEvent === null || addEvent === void 0 ? void 0 : addEvent();
};
var openCreationModal = function openCreationModal(e, openModal, openModalFunc) {
  var _e$event;
  (_e$event = e.event) === null || _e$event === void 0 ? void 0 : _e$event.preventDefault();
  openModalFunc === null || openModalFunc === void 0 ? void 0 : openModalFunc();
  openModal === null || openModal === void 0 ? void 0 : openModal();
};
var Calendar = function Calendar(_ref) {
  var owners = _ref.owners,
    rooms = _ref.rooms,
    events = _ref.events,
    openUpdateModal = _ref.openUpdateModal,
    updateEvent = _ref.updateEvent,
    openAddingModal = _ref.openAddingModal,
    OpenEventWrapper = _ref.OpenEventWrapper,
    modalUrl = _ref.modalUrl,
    linkDispatcher = _ref.linkDispatcher;
  var location = (0, _reactRouterDom.useLocation)();
  var navigate = (0, _reactRouterDom.useNavigate)();
  console.log('location', location);
  console.log('navigate', navigate);
  var openModalFunc = function openModalFunc() {
    navigate(modalUrl);
  };
  var groups = ['roomId'];
  var _useState = (0, _react.useState)((0, _dayjs.default)().locale('ru').format('DD MMMM')),
    _useState2 = _slicedToArray(_useState, 2),
    selectedPlaceholder = _useState2[0],
    setSelectedPlaceholder = _useState2[1];
  var _useState3 = (0, _react.useState)((0, _dayjs.default)(new Date())),
    _useState4 = _slicedToArray(_useState3, 2),
    currentDate = _useState4[0],
    setCurrentDate = _useState4[1];
  var _useState5 = (0, _react.useState)({
      type: 'timelineDay',
      intervalCount: 1
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    currentView = _useState6[0],
    setCurrentView = _useState6[1];
  var _useState7 = (0, _react.useState)(currentView.type),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedView = _useState8[0],
    setSelectedView = _useState8[1];
  (0, _react.useEffect)(function () {
    setSelectedView((0, _utils.handldleSelectTitle)(currentView));
  }, [currentDate, currentView]);
  var schedulerRef = (0, _react.useRef)(null);
  var scheduler = schedulerRef.current;
  (0, _react.useEffect)(function () {
    if (currentView.type === 'timelineDay' && currentView.intervalCount === 1) {
      setSelectedPlaceholder((0, _dayjs.default)(currentDate).locale('ru').format('DD MMMM YYYY'));
    } else setSelectedPlaceholder((0, _utils.handleFirstCharInUpperCase)((0, _dayjs.default)(currentDate).locale('ru').format('MMMM YYYY')));
  }, [currentDate, currentView]);
  var closeTooltip = function closeTooltip(e) {
    e.stopPropagation();
    scheduler === null || scheduler === void 0 ? void 0 : scheduler.instance.hideAppointmentTooltip();
  };
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Header.Header, {
    isDisabled: currentView.intervalCount === 1,
    selectedPlaceholder: selectedPlaceholder,
    selectViewValue: selectedView,
    handleMinusButton: function handleMinusButton() {
      return setCurrentView(_objectSpread(_objectSpread({}, currentView), {}, {
        intervalCount: currentView.intervalCount ? currentView.intervalCount - 1 : 1
      }));
    },
    handlePlusButton: function handlePlusButton() {
      return setCurrentView(_objectSpread(_objectSpread({}, currentView), {}, {
        intervalCount: currentView.intervalCount ? currentView.intervalCount + 1 : 1
      }));
    },
    handleAddDate: function handleAddDate() {
      var _handleAddDate;
      return setCurrentDate((_handleAddDate = (0, _utils.handleAddDate)(currentView.type, currentDate)) !== null && _handleAddDate !== void 0 ? _handleAddDate : currentDate);
    },
    handleSubtractDate: function handleSubtractDate() {
      var _handleSubtractDate;
      return setCurrentDate((_handleSubtractDate = (0, _utils.handleSubtractDate)(currentView.type, currentDate)) !== null && _handleSubtractDate !== void 0 ? _handleSubtractDate : currentDate);
    },
    handleViewsChange: function handleViewsChange(value) {
      var _handldleCheckView;
      return setCurrentView((_handldleCheckView = (0, _utils.handldleCheckView)(value)) !== null && _handldleCheckView !== void 0 ? _handldleCheckView : currentView);
    },
    handleSelect: function handleSelect(icon) {
      var _data$currentData, _data$currentView;
      var data = (0, _utils.handleSelectData)(icon);
      setCurrentDate((_data$currentData = data === null || data === void 0 ? void 0 : data.currentData) !== null && _data$currentData !== void 0 ? _data$currentData : currentDate);
      setCurrentView((_data$currentView = data === null || data === void 0 ? void 0 : data.currentView) !== null && _data$currentView !== void 0 ? _data$currentView : currentView);
    }
  }), _react.default.createElement(_devextremeReact.Scheduler, {
    currentView: currentView.type,
    className: _styleModule.default.wrapper,
    dataSource: events,
    ref: schedulerRef,
    views: [currentView],
    currentDate: currentDate.toDate(),
    appointmentTooltipComponent: function appointmentTooltipComponent(data) {
      return _react.default.createElement(_TooltipComponent.TooltipComponent, {
        data: data.data.appointmentData,
        handleClose: closeTooltip
      });
    },
    appointmentRender: function appointmentRender(data) {
      return _react.default.createElement(_Appointment.Appointment, {
        data: data.appointmentData,
        currentDate: currentDate,
        OpenEventWrapper: OpenEventWrapper,
        linkDispatcher: linkDispatcher
      });
    },
    onOptionChanged: function onOptionChanged(e) {
      if (e.name === 'currentView') setCurrentView(e.value);
    },
    dateCellRender: function dateCellRender(itemData) {
      return _react.default.createElement(_DateCell.DateCell, {
        data: itemData,
        currentView: currentView.type
      });
    },
    dropDownAppointmentComponent: function dropDownAppointmentComponent(data) {
      return _react.default.createElement(_MoreAppointments.MoreAppointments, {
        data: data.data
      });
    },
    groups: groups,
    cellDuration: 60,
    firstDayOfWeek: 1,
    startDayHour: 0,
    endDayHour: 24,
    onCellClick: function onCellClick(e) {
      return openCreationModal(e, openAddingModal, openModalFunc);
    },
    editing: true,
    onAppointmentUpdating: updateEvent,
    onAppointmentDblClick: openUpdateModal,
    appointmentCollectorComponent: function appointmentCollectorComponent(data) {
      return _react.default.createElement(_MoreButton.MoreButton, {
        data: data.data
      });
    },
    onAppointmentAdding: handleAppointmentAdding,
    onAppointmentFormOpening: function onAppointmentFormOpening(e) {
      openAddingModal && (e.cancel = true);
    },
    resourceCellComponent: function resourceCellComponent(data) {
      return _react.default.createElement(_Room.Room, {
        data: data.data.data
      });
    }
  }, _react.default.createElement(_scheduler.View, {
    type: "timelineMonth"
  }), _react.default.createElement(_scheduler.Scrolling, {
    mode: "virtual"
  }), _react.default.createElement(_scheduler.Resource, {
    fieldExpr: "ownerId",
    allowMultiple: true,
    dataSource: owners,
    label: "Owner",
    useColorAsDefault: true
  }), _react.default.createElement(_scheduler.Resource, {
    fieldExpr: "roomId",
    allowMultiple: false,
    dataSource: rooms,
    label: "Rooms"
  }), _react.default.createElement(_scheduler.Editing, {
    allowDragging: false,
    allowResizing: false,
    allowUpdating: false
  })));
};
exports.Calendar = Calendar;
//# sourceMappingURL=Calendar.js.map