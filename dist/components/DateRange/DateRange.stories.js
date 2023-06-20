"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DateRangeComponent = void 0;
var _DateRange = require("./DateRange");
const DateRangeComponent = {
  args: {
    isError: false,
    isFullWidth: false,
    onChange: dates => console.log(dates)
  }
};
exports.DateRangeComponent = DateRangeComponent;
const DateRangeDefaultExport = {
  component: _DateRange.DateRange
};
var _default = DateRangeDefaultExport;
exports.default = _default;
//# sourceMappingURL=DateRange.stories.js.map