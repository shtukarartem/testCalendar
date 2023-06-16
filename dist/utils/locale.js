'use strict';

require('core-js/modules/es.object.define-property.js');
require('core-js/modules/es.object.keys.js');
require('core-js/modules/es.array.filter.js');
require('core-js/modules/es.object.get-own-property-descriptor.js');
require('core-js/modules/web.dom-collections.for-each.js');
require('core-js/modules/es.object.get-own-property-descriptors.js');
require('core-js/modules/es.object.define-properties.js');
require('core-js/modules/es.symbol.iterator.js');
require('core-js/modules/es.array.iterator.js');
require('core-js/modules/es.string.iterator.js');
require('core-js/modules/web.dom-collections.iterator.js');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.localeRu = void 0;
require('core-js/modules/es.symbol.to-primitive.js');
require('core-js/modules/es.date.to-primitive.js');
require('core-js/modules/es.symbol.js');
require('core-js/modules/es.symbol.description.js');
require('core-js/modules/es.object.to-string.js');
require('core-js/modules/es.number.constructor.js');
var _ru_RU = _interopRequireDefault(require('antd/es/time-picker/locale/ru_RU'));
var _ru_RU2 = _interopRequireDefault(require('rc-picker/lib/locale/ru_RU'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
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
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, 'string');
  return _typeof(key) === 'symbol' ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== 'object' || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || 'default');
    if (_typeof(res) !== 'object') return res;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (hint === 'string' ? String : Number)(input);
}
var localeRu = {
  lang: _objectSpread(
    {
      placeholder: 'Выберите дату',
      yearPlaceholder: 'Выберите год',
      quarterPlaceholder: 'Выберите квартал',
      monthPlaceholder: 'Выберите месяц',
      weekPlaceholder: 'Выберите неделю',
      rangePlaceholder: ['Начальная дата', 'Конечная дата'],
      rangeYearPlaceholder: ['Начальный год', 'Год окончания'],
      rangeMonthPlaceholder: ['Начальный месяц', 'Конечный месяц'],
      rangeWeekPlaceholder: ['Начальная неделя', 'Конечная неделя'],
      shortMonths: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
      ],
    },
    _ru_RU2.default
  ),
  timePickerLocale: _objectSpread({}, _ru_RU.default),
};
exports.localeRu = localeRu;
//# sourceMappingURL=locale.js.map
