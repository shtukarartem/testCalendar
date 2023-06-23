"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SelectStoryComponent = void 0;
var _Select = require("./Select");
var options = [{
  title: 'Первый',
  value: '1'
}, {
  title: 'Второй',
  value: '2'
}, {
  title: 'Третий',
  value: '3'
}];
var SelectStoryComponent = {
  args: {
    value: '',
    options: options,
    handleChange: function handleChange(value) {
      return console.log(value);
    },
    label: 'default'
  }
};
exports.SelectStoryComponent = SelectStoryComponent;
var SelectDefaultExport = {
  component: _Select.SelectComponent
};
var _default = SelectDefaultExport;
exports.default = _default;
//# sourceMappingURL=Select.stories.js.map