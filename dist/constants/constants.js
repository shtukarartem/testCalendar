"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.views = exports.changeViewOptions = void 0;
var views = [{
  name: 'День',
  type: 'timelineDay'
}, {
  name: 'Неделя',
  type: 'timelineWeek'
}, {
  name: 'Месяц',
  type: 'timelineMonth'
}];
exports.views = views;
var changeViewOptions = [{
  title: 'День',
  value: 'timelineDay'
}, {
  title: 'Два дня',
  value: 'twoDays'
}, {
  title: 'Три дня',
  value: 'threeDays'
}, {
  title: 'Неделя',
  value: 'timelineWeek'
}, {
  title: 'Две недели',
  value: 'twoWeeks'
}, {
  title: 'Три недели',
  value: 'threeWeeks'
}, {
  title: 'Месяц',
  value: 'timelineMonth'
}];
exports.changeViewOptions = changeViewOptions;
//# sourceMappingURL=constants.js.map