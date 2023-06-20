"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _IconButton = _interopRequireDefault(require("@mui/material/IconButton/IconButton"));
var _react = _interopRequireWildcard(require("react"));
var _stylesModule = _interopRequireDefault(require("./styles.module.css"));
var _IconButton2 = _interopRequireDefault(require("../../assets/images/IconButton.svg"));
var _constants = require("../../constants/constants");
var _Select = require("./../Select/Select");
var _DateSelector = require("./HeaderComponents/DateSelector/DateSelector");
var _ViewListConstants = require("./HeaderComponents/DateSelector/ViewList/ViewListConstants");
var _PinnedViews = require("./HeaderComponents/PinnedViews/PinnedViews");
var _RangeButtons = require("./HeaderComponents/RangeButtons/RangeButtons");
var _ViewButtons = require("./HeaderComponents/ViewButtons/ViewButtons");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Header = _ref => {
  let {
    selectedPlaceholder,
    selectViewValue,
    handleSubtractDate,
    handleAddDate,
    handleViewsChange,
    handleMinusButton,
    handlePlusButton,
    handleSelect
  } = _ref;
  const [isOpen, setIsOpen] = (0, _react.useState)(false);
  const [views, setViews] = (0, _react.useState)(_ViewListConstants.viewList);
  const handlePinned = i => {
    const newState = views.map((item, index) => {
      if (index === i) {
        return {
          ...item,
          isPinned: !item.isPinned
        };
      }
      return item;
    });
    setViews(newState);
  };
  return _react.default.createElement("div", {
    className: _stylesModule.default.wrapper
  }, _react.default.createElement(_RangeButtons.RangeButtons, {
    handleAddDate: handleAddDate,
    handleSubtractDate: handleSubtractDate
  }), _react.default.createElement(_ViewButtons.ViewButtons, {
    handleMinusButton: handleMinusButton,
    handlePlusButton: handlePlusButton
  }), _react.default.createElement(_DateSelector.DateSelector, {
    views: views,
    handlePinned: handlePinned,
    isOpen: isOpen,
    selectPlaceholder: selectedPlaceholder,
    onCancel: () => setIsOpen(false),
    handleOpen: () => setIsOpen(true),
    onSubmit: () => setIsOpen(false),
    handleViewClick: title => {
      setIsOpen(false);
      handleSelect(title);
    }
  }), _react.default.createElement(_PinnedViews.PinnedViews, {
    views: views,
    handleSelect: title => {
      handleSelect(title);
    }
  }), _react.default.createElement(_Select.SelectComponent, {
    sx: {
      height: '32px',
      fontSize: '0.875rem',
      marginLeft: 'auto',
      marginRight: '20px'
    },
    value: selectViewValue,
    handleChange: handleViewsChange,
    options: _constants.changeViewOptions
  }), _react.default.createElement(_IconButton.default, {
    className: _stylesModule.default.settingsIcon
  }, _react.default.createElement("img", {
    src: _IconButton2.default,
    alt: ""
  })));
};
exports.Header = Header;
//# sourceMappingURL=Header.js.map