'use strict';

require('core-js/modules/es.object.define-property.js');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = exports.DateRangeComponent = void 0;
var _DateRange = require('./DateRange');
var DateRangeComponent = {
  args: {
    isError: false,
    isFullWidth: false,
    onChange: function onChange(dates) {
      return console.log(dates);
    },
  },
};
exports.DateRangeComponent = DateRangeComponent;
var DateRangeDefaultExport = {
  component: _DateRange.DateRange,
};
var _default = DateRangeDefaultExport;
exports.default = _default;
//# sourceMappingURL=DateRange.stories.js.map
