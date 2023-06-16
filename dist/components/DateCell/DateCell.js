'use strict';

require('core-js/modules/es.object.define-property.js');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.DateCell = void 0;
var _dayjs = _interopRequireDefault(require('dayjs'));
var _react = _interopRequireDefault(require('react'));
var _stylesModule = _interopRequireDefault(require('./styles.module.css'));
var _utils = require('../../utils/utils');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var DateCell = function DateCell(_ref) {
  var data = _ref.data,
    currentView = _ref.currentView;
  return _react.default.createElement(
    _react.default.Fragment,
    null,
    currentView === 'timelineMonth'
      ? _react.default.createElement(
          'div',
          {
            className: _stylesModule.default.wrapper,
          },
          _react.default.createElement(
            'div',
            null,
            (0, _utils.handleFirstCharInUpperCase)(
              (0, _dayjs.default)(data.date).locale('ru').format('dd')
            )
          ),
          _react.default.createElement('div', null, (0, _dayjs.default)(data.date).format('DD'))
        )
      : _react.default.createElement('div', null, ' ', data.text, ' ')
  );
};
exports.DateCell = DateCell;
//# sourceMappingURL=DateCell.js.map
