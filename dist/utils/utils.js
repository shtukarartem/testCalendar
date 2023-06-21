"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleSubtractDate = exports.handleSelectData = exports.handleFirstCharInUpperCase = exports.handleCorrectDateDifference = exports.handleAddDate = exports.handldleSelectTitle = exports.handldleCheckView = exports.checkBusyRoom = void 0;
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.array.slice.js");
var _dayjs = _interopRequireDefault(require("dayjs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var handleAddDate = function handleAddDate(currentView, currentDate) {
  switch (currentView) {
    case 'timelineMonth':
      return currentDate.add(1, 'month');
    case 'timelineWeek':
      return currentDate.add(1, 'week');
    case 'twoWeeks':
      return currentDate.add(2, 'week');
    case 'threeWeeks':
      return currentDate.add(1, 'week');
    case 'timelineDay':
      return currentDate.add(1, 'day');
    case 'twoDays':
      return currentDate.add(2, 'day');
    case 'threeDays':
      return currentDate.add(1, 'day');
  }
};
exports.handleAddDate = handleAddDate;
var handleSubtractDate = function handleSubtractDate(currentView, currentDate) {
  switch (currentView) {
    case 'timelineMonth':
      return currentDate.subtract(1, 'month');
    case 'timelineWeek':
      return currentDate.subtract(1, 'week');
    case 'twoWeeks':
      return currentDate.subtract(2, 'week');
    case 'threeWeeks':
      return currentDate.subtract(1, 'week');
    case 'timelineDay':
      return currentDate.subtract(1, 'day');
    case 'twoDays':
      return currentDate.subtract(2, 'day');
    case 'threeDays':
      return currentDate.subtract(1, 'day');
  }
};
exports.handleSubtractDate = handleSubtractDate;
var handldleCheckView = function handldleCheckView(selectedView) {
  switch (selectedView) {
    case 'timelineDay':
      return {
        type: 'timelineDay',
        intervalCount: 1
      };
    case 'twoDays':
      return {
        type: 'timelineDay',
        intervalCount: 2
      };
    case 'threeDays':
      return {
        type: 'timelineDay',
        intervalCount: 3
      };
    case 'timelineWeek':
      return {
        type: 'timelineWeek',
        intervalCount: 1
      };
    case 'threeWeeks':
      return {
        type: 'timelineWeek',
        intervalCount: 3
      };
    case 'twoWeeks':
      return {
        type: 'timelineWeek',
        intervalCount: 2
      };
    case 'timelineMonth':
      return {
        type: 'timelineMonth',
        intervalCount: 1
      };
  }
};
exports.handldleCheckView = handldleCheckView;
var handldleSelectTitle = function handldleSelectTitle(data) {
  if (data.type === 'timelineDay' && data.intervalCount === 1) {
    if (data.intervalCount === 1) return 'timelineDay';
    if (data.intervalCount === 2) return 'twoDays';
    if (data.intervalCount === 3) return 'threeDays';
  }
  if (data.type === 'timelineWeek') {
    if (data.intervalCount === 1) return 'timelineWeek';
    if (data.intervalCount === 2) return 'twoWeeks';
    if (data.intervalCount === 3) return 'threeWeeks';
  }
  if (data.type === 'timelineMonth' && data.intervalCount === 1) return 'timelineMonth';
  return data.type;
};
exports.handldleSelectTitle = handldleSelectTitle;
var handleCorrectDateDifference = function handleCorrectDateDifference(diff) {
  diff++;
  if (Math.abs(diff) % 100 > 10 && Math.abs(diff) % 100 < 20) {
    return "".concat(diff, " \u0434\u043D\u0435\u0439: ");
  }
  if (diff % 10 > 1 && diff % 10 < 5) {
    return "".concat(diff, " \u0434\u043D\u044F: ");
  }
  if (diff % 10 === 1) {
    return "".concat(diff, " \u0434\u0435\u043D\u044C: ");
  }
  return "".concat(diff, " \u0434\u043D\u0435\u0439: ");
};
exports.handleCorrectDateDifference = handleCorrectDateDifference;
var handleSelectData = function handleSelectData(icon) {
  switch (icon) {
    case 'Сегодня':
      return {
        currentData: (0, _dayjs.default)(),
        currentView: {
          type: 'timelineDay',
          intervalCount: 1
        }
      };
    case 'Вчера':
      return {
        currentData: (0, _dayjs.default)().subtract(1, 'day'),
        currentView: {
          type: 'timelineDay',
          intervalCount: 1
        }
      };
    case 'Завтра':
      return {
        currentData: (0, _dayjs.default)().add(1, 'day'),
        currentView: {
          type: 'timelineDay',
          intervalCount: 1
        }
      };
    case 'Последние 3 дня':
      return {
        currentData: (0, _dayjs.default)().subtract(2, 'day'),
        currentView: {
          type: 'timelineDay',
          intervalCount: 3
        }
      };
    case 'Текущая неделя':
      return {
        currentData: (0, _dayjs.default)(),
        currentView: {
          type: 'timelineWeek',
          intervalCount: 1
        }
      };
    case 'Прошлая неделя':
      return {
        currentData: (0, _dayjs.default)().subtract(1, 'week'),
        currentView: {
          type: 'timelineWeek',
          intervalCount: 1
        }
      };
    case 'Следующая неделя':
      return {
        currentData: (0, _dayjs.default)().add(1, 'week'),
        currentView: {
          type: 'timelineWeek',
          intervalCount: 1
        }
      };
    case 'Последние две недели':
      return {
        currentData: (0, _dayjs.default)().subtract(1, 'week'),
        currentView: {
          type: 'timelineWeek',
          intervalCount: 2
        }
      };
    case 'Текущий месяц':
      return {
        currentData: (0, _dayjs.default)(),
        currentView: {
          type: 'timelineMonth',
          intervalCount: 1
        }
      };
    case 'Прошлый месяц':
      return {
        currentData: (0, _dayjs.default)().subtract(1, 'month'),
        currentView: {
          type: 'timelineMonth',
          intervalCount: 1
        }
      };
    case 'Следующий месяц':
      return {
        currentData: (0, _dayjs.default)().add(1, 'month'),
        currentView: {
          type: 'timelineMonth',
          intervalCount: 1
        }
      };
  }
};
exports.handleSelectData = handleSelectData;
var isBetween = function isBetween(date, start, end) {
  return start < date && date < end;
};
var isEqualDates = function isEqualDates(date1, date2) {
  if (date1 > date2 || date1 < date2) {
    return false;
  } else {
    return true;
  }
};
var checkBusyRoom = function checkBusyRoom(bookings, roomId, startDate, endDate) {
  return bookings.some(function (item) {
    return item.roomId === roomId && (isBetween(startDate, item.startDate, item.endDate) || isBetween(endDate, item.startDate, item.endDate) || isEqualDates(startDate, item.startDate) && isEqualDates(startDate, item.startDate));
  });
};
exports.checkBusyRoom = checkBusyRoom;
var handleFirstCharInUpperCase = function handleFirstCharInUpperCase(title) {
  return title.charAt(0).toUpperCase() + title.slice(1);
};
exports.handleFirstCharInUpperCase = handleFirstCharInUpperCase;
//# sourceMappingURL=utils.js.map