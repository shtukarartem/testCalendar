'use strict';

function _typeof(obj) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
  );
}
require('core-js/modules/es.symbol.js');
require('core-js/modules/es.symbol.description.js');
require('core-js/modules/es.object.to-string.js');
require('core-js/modules/es.symbol.iterator.js');
require('core-js/modules/es.array.iterator.js');
require('core-js/modules/es.string.iterator.js');
require('core-js/modules/web.dom-collections.iterator.js');
require('core-js/modules/es.array.slice.js');
require('core-js/modules/es.regexp.to-string.js');
require('core-js/modules/es.array.from.js');
require('core-js/modules/es.regexp.exec.js');
require('core-js/modules/es.regexp.test.js');
require('core-js/modules/es.weak-map.js');
require('core-js/modules/es.object.define-property.js');
require('core-js/modules/es.object.get-own-property-descriptor.js');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.DateSelector = void 0;
require('dayjs/locale/ru');
var _material = require('@mui/material');
var _MenuItem = _interopRequireDefault(require('@mui/material/MenuItem'));
var _Select = _interopRequireDefault(require('@mui/material/Select'));
var _antd = require('antd');
var _dayjs = _interopRequireDefault(require('dayjs'));
var _react = _interopRequireWildcard(require('react'));
var _stylesModule = _interopRequireDefault(require('./styles.module.css'));
var _utils = require('../../../../utils/utils');
var _DateRange = require('./../../../DateRange/DateRange');
var _ViewList = require('./ViewList/ViewList');
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (_typeof(obj) !== 'object' && typeof obj !== 'function')) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i =
    null == arr
      ? null
      : ('undefined' != typeof Symbol && arr[Symbol.iterator]) || arr['@@iterator'];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else
        for (
          ;
          !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i);
          _n = !0
        );
    } catch (err) {
      (_d = !0), (_e = err);
    } finally {
      try {
        if (!_n && null != _i.return && ((_r = _i.return()), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
var DateSelector = function DateSelector(_ref) {
  var views = _ref.views,
    selectPlaceholder = _ref.selectPlaceholder,
    _ref$isOpen = _ref.isOpen,
    isOpen = _ref$isOpen === void 0 ? false : _ref$isOpen,
    onSubmit = _ref.onSubmit,
    onCancel = _ref.onCancel,
    handleOpen = _ref.handleOpen,
    handlePinned = _ref.handlePinned,
    handleViewClick = _ref.handleViewClick;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    dates = _useState2[0],
    setDates = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    selectValue = _useState4[0],
    setSelectValue = _useState4[1];
  var handleDates = function handleDates(dates) {
    setDates(dates);
  };
  (0, _react.useEffect)(function () {
    setSelectValue('');
  }, []);
  return _react.default.createElement(
    'div',
    {
      className: _stylesModule.default.wrapper,
    },
    _react.default.createElement(
      _material.FormControl,
      {
        className: _stylesModule.default.formControl,
        variant: 'standard',
      },
      _react.default.createElement(
        _material.InputLabel,
        {
          className: _stylesModule.default.inputLabel,
          id: 'demo-simple-select-label',
        },
        selectPlaceholder
      ),
      _react.default.createElement(
        _Select.default,
        {
          disableUnderline: true,
          variant: 'standard',
          className: _stylesModule.default.select,
          labelId: 'demo-simple-select-standard-label',
          onOpen: handleOpen,
          open: isOpen,
          label: 'Age',
          value: selectValue,
        },
        _react.default.createElement(
          _MenuItem.default,
          {
            className: _stylesModule.default.menuItem,
          },
          _react.default.createElement(
            'div',
            {
              className: _stylesModule.default.items,
            },
            _react.default.createElement(
              'div',
              {
                className: _stylesModule.default.views,
              },
              _react.default.createElement(_ViewList.ViewList, {
                handleClick: handleViewClick,
                viewList: views,
                handlePinned: handlePinned,
              }),
              _react.default.createElement(
                'div',
                {
                  className: _stylesModule.default.switchContainer,
                },
                _react.default.createElement(
                  'div',
                  {
                    className: _stylesModule.default.switchText,
                  },
                  '\u0412\u044B\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u043D\u0438'
                ),
                _react.default.createElement(_antd.Switch, {
                  className: _stylesModule.default.switch,
                  size: 'small',
                })
              )
            ),
            _react.default.createElement(
              'div',
              {
                className: _stylesModule.default.dateRange,
              },
              _react.default.createElement(_DateRange.DateRange, {
                isOpen: isOpen,
                isFullWidth: true,
                isError: false,
                onChange: handleDates,
              }),
              _react.default.createElement(
                'div',
                {
                  className: _stylesModule.default.dateRangeFooter,
                },
                dates &&
                  _react.default.createElement(
                    'div',
                    {
                      className: _stylesModule.default.daysCounter,
                    },
                    ' ',
                    _react.default.createElement(
                      'div',
                      {
                        className: _stylesModule.default.counter,
                      },
                      (0, _utils.handleCorrectDateDifference)(
                        (0, _dayjs.default)(dates[1]).diff((0, _dayjs.default)(dates[0]), 'd')
                      )
                    ),
                    _react.default.createElement(
                      'div',
                      {
                        className: _stylesModule.default.range,
                      },
                      'c ',
                      (0, _dayjs.default)(dates[0]).locale('ru').format('DD MMMM'),
                      ' \u043F\u043E',
                      ' ',
                      (0, _dayjs.default)(dates[1]).locale('ru').format('DD MMMM')
                    )
                  ),
                _react.default.createElement(
                  'div',
                  {
                    className: _stylesModule.default.buttons,
                  },
                  _react.default.createElement(
                    _antd.Button,
                    {
                      onClick: onCancel,
                      className: _stylesModule.default.selectButton,
                    },
                    '\u041E\u0442\u043C\u0435\u043D\u0430'
                  ),
                  _react.default.createElement(
                    _antd.Button,
                    {
                      onClick: onSubmit,
                      className: _stylesModule.default.selectButton,
                    },
                    '\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C'
                  )
                )
              )
            )
          )
        )
      )
    )
  );
};
exports.DateSelector = DateSelector;
//# sourceMappingURL=DateSelector.js.map
