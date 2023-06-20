"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RangeButtonsComponent = void 0;
var _ViewList = require("./ViewList");
var _ViewListConstants = require("./ViewListConstants");
const meta = {
  component: _ViewList.ViewList
};
const RangeButtonsComponent = {
  args: {
    viewList: _ViewListConstants.viewList,
    handlePinned: index => console.log(index)
  }
};
exports.RangeButtonsComponent = RangeButtonsComponent;
var _default = meta;
exports.default = _default;
//# sourceMappingURL=ViewList.stories.js.map