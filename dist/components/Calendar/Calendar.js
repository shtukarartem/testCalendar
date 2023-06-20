"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Calendar = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _devextremeReact = require("devextreme-react");
var _scheduler = require("devextreme-react/scheduler");
var _react = _interopRequireWildcard(require("react"));
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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const handleAppointmentAdding = e => {
  const isBusyDate = (0, _utils.checkBusyRoom)(_sefviceFormData.data, e.appointmentData.rooms, e.appointmentData.startDate, e.appointmentData.endDate);
  if (isBusyDate) {
    e.cancel = true;
    alert('Данная переговорка уже забронирована на выбранное Вами время');
  }
  console.log('// TODO here will be action for adding appointment');
};
const openCreationModal = e => {
  var _e$event;
  (_e$event = e.event) === null || _e$event === void 0 ? void 0 : _e$event.preventDefault();
  console.log('this action open CreationModal and will income from service form');
};
const openEditingModal = () => {
  console.log('metting dbl click this action income from service form');
};
const updateAppointment = () => {
  console.log('// TODO here will be action for update appointment');
};
const Calendar = _ref => {
  let {
    owners,
    rooms,
    events
  } = _ref;
  const groups = ['roomId'];
  const [selectedPlaceholder, setSelectedPlaceholder] = (0, _react.useState)((0, _dayjs.default)().locale('ru').format('DD MMMM'));
  const [currentDate, setCurrentDate] = (0, _react.useState)((0, _dayjs.default)(new Date()));
  const [currentView, setCurrentView] = (0, _react.useState)({
    type: 'timelineDay',
    intervalCount: 1
  });
  const [selectedView, setSelectedView] = (0, _react.useState)(currentView.type);
  (0, _react.useEffect)(() => {
    setSelectedView((0, _utils.handldleSelectTitle)(currentView));
  }, [currentDate, currentView]);
  const schedulerRef = (0, _react.useRef)(null);
  const scheduler = schedulerRef.current;
  (0, _react.useEffect)(() => {
    if (currentView.type === 'timelineDay' && currentView.intervalCount === 1) {
      setSelectedPlaceholder((0, _dayjs.default)(currentDate).locale('ru').format('DD MMMM YYYY'));
    } else setSelectedPlaceholder((0, _utils.handleFirstCharInUpperCase)((0, _dayjs.default)(currentDate).locale('ru').format('MMMM YYYY')));
  }, [currentDate, currentView]);
  const closeTooltip = e => {
    e.stopPropagation();
    scheduler === null || scheduler === void 0 ? void 0 : scheduler.instance.hideAppointmentTooltip();
  };
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Header.Header, {
    selectedPlaceholder: selectedPlaceholder,
    selectViewValue: selectedView,
    handleMinusButton: () => setCurrentView({
      ...currentView,
      intervalCount: currentView.intervalCount ? currentView.intervalCount - 1 : 1
    }),
    handlePlusButton: () => setCurrentView({
      ...currentView,
      intervalCount: currentView.intervalCount ? currentView.intervalCount + 1 : 1
    }),
    handleAddDate: () => {
      var _handleAddDate;
      return setCurrentDate((_handleAddDate = (0, _utils.handleAddDate)(currentView.type, currentDate)) !== null && _handleAddDate !== void 0 ? _handleAddDate : currentDate);
    },
    handleSubtractDate: () => {
      var _handleSubtractDate;
      return setCurrentDate((_handleSubtractDate = (0, _utils.handleSubtractDate)(currentView.type, currentDate)) !== null && _handleSubtractDate !== void 0 ? _handleSubtractDate : currentDate);
    },
    handleViewsChange: value => {
      var _handldleCheckView;
      return setCurrentView((_handldleCheckView = (0, _utils.handldleCheckView)(value)) !== null && _handldleCheckView !== void 0 ? _handldleCheckView : currentView);
    },
    handleSelect: icon => {
      var _data$currentData, _data$currentView;
      const data = (0, _utils.handleSelectData)(icon);
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
    appointmentTooltipComponent: data => _react.default.createElement(_TooltipComponent.TooltipComponent, {
      data: data.data.appointmentData,
      handleClose: closeTooltip
    }),
    appointmentRender: data => _react.default.createElement(_Appointment.Appointment, {
      data: data.appointmentData,
      currentDate: currentDate
    }),
    onOptionChanged: e => {
      if (e.name === 'currentView') setCurrentView(e.value);
    },
    dateCellRender: itemData => _react.default.createElement(_DateCell.DateCell, {
      data: itemData,
      currentView: currentView.type
    }),
    dropDownAppointmentComponent: data => _react.default.createElement(_MoreAppointments.MoreAppointments, {
      data: data.data
    }),
    groups: groups,
    cellDuration: 60,
    firstDayOfWeek: 0,
    startDayHour: 0,
    endDayHour: 24,
    onCellClick: openCreationModal,
    editing: true,
    onAppointmentUpdating: updateAppointment,
    onAppointmentDblClick: openEditingModal,
    appointmentCollectorComponent: data => _react.default.createElement(_MoreButton.MoreButton, {
      data: data.data
    }),
    onAppointmentAdding: handleAppointmentAdding,
    resourceCellComponent: data => _react.default.createElement(_Room.Room, {
      data: data.data.data
    })
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