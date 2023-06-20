"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateSelector = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("dayjs/locale/ru");
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _Select = _interopRequireDefault(require("@mui/material/Select"));
var _react = _interopRequireWildcard(require("react"));
var _stylesModule = _interopRequireDefault(require("./styles.module.css"));
var _Menu = require("./Menu");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const DateSelector = _ref => {
  let {
    views,
    selectPlaceholder,
    isOpen = false,
    onSubmit,
    onCancel,
    handleOpen,
    handlePinned,
    handleViewClick
  } = _ref;
  const [dates, setDates] = (0, _react.useState)(null);
  const [selectValue, setSelectValue] = (0, _react.useState)(selectPlaceholder);
  const handleDates = dates => {
    setDates(dates);
  };
  (0, _react.useEffect)(() => {
    setSelectValue(selectPlaceholder);
  }, [selectPlaceholder]);
  return _react.default.createElement("div", {
    className: _stylesModule.default.wrapper
  }, _react.default.createElement(_Select.default, {
    defaultValue: selectValue,
    autoWidth: true,
    disableUnderline: true,
    variant: "standard",
    className: _stylesModule.default.select,
    labelId: "demo-simple-select-standard-label",
    onOpen: handleOpen,
    open: isOpen,
    renderValue: () => selectValue
  }, _react.default.createElement(_MenuItem.default, {
    className: _stylesModule.default.menuItem,
    component: () => _react.default.createElement(_Menu.Menu, {
      views: views,
      onSubmit: onSubmit,
      onCancel: onCancel,
      handlePinned: handlePinned,
      handleViewClick: handleViewClick,
      dates: dates,
      handleDates: handleDates,
      isOpen: isOpen
    })
  })));
};
exports.DateSelector = DateSelector;
//# sourceMappingURL=DateSelector.js.map