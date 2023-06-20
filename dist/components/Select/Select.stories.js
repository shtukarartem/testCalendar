"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SelectStoryComponent = void 0;
var _Select = require("./Select");
const options = [{
  title: 'Первый',
  value: '1'
}, {
  title: 'Второй',
  value: '2'
}, {
  title: 'Третий',
  value: '3'
}];
const SelectStoryComponent = {
  args: {
    value: '',
    options: options,
    handleChange: value => console.log(value),
    label: 'default'
  }
};
exports.SelectStoryComponent = SelectStoryComponent;
const SelectDefaultExport = {
  component: _Select.SelectComponent
};
var _default = SelectDefaultExport;
exports.default = _default;
//# sourceMappingURL=Select.stories.js.map