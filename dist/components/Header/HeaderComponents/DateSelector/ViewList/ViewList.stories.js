'use strict';

require('core-js/modules/es.object.define-property.js');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = exports.RangeButtonsComponent = void 0;
var _ViewList = require('./ViewList');
var _ViewListConstants = require('./ViewListConstants');
var meta = {
  component: _ViewList.ViewList,
};
var RangeButtonsComponent = {
  args: {
    viewList: _ViewListConstants.viewList,
    handlePinned: function handlePinned(index) {
      return console.log(index);
    },
  },
};
exports.RangeButtonsComponent = RangeButtonsComponent;
var _default = meta;
exports.default = _default;
//# sourceMappingURL=ViewList.stories.js.map
