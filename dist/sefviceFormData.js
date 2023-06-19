"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.roomsData = exports.ownersData = exports.data = void 0;
var ownersData = [{
  owner: 'Samantha Bright',
  id: '1'
}, {
  owner: 'John Heart',
  id: '2'
}, {
  owner: 'Todd Hoffman',
  id: '3'
}, {
  owner: 'Sandra Johnson',
  id: '4'
}];
exports.ownersData = ownersData;
var roomsData = [{
  room: 'Рабочее место 1',
  description: 'Окно',
  type: 'workPlace',
  id: '1'
}, {
  room: 'Рабочее место 2',
  description: 'Окно, ПК',
  type: 'workPlace',
  id: '2'
}, {
  room: 'Рабочее место 3',
  description: 'Окно',
  type: 'workPlace',
  id: '3'
}, {
  room: 'Офис 1',
  description: '20 мест',
  type: 'office',
  id: '4'
}, {
  room: 'Офис 2',
  description: '58 мест',
  type: 'office',
  id: '5'
}, {
  room: 'Офис 3',
  description: '30 мест',
  type: 'office',
  id: '6'
}, {
  room: 'Переговорная 1',
  description: '5 мест',
  type: 'meeting',
  id: '7'
}, {
  room: 'Переговорная 2',
  description: '6 мест',
  type: 'meeting',
  id: '8'
}, {
  room: 'Переговорная 3',
  description: '10 мест',
  type: 'meeting',
  id: '9'
}, {
  room: 'Переговорная 4',
  description: '8 мест',
  type: 'meeting',
  id: '10'
}];
exports.roomsData = roomsData;
var data = [{
  eventId: '1',
  roomId: '1',
  ownerId: '2',
  startDate: new Date('2023-06-01T16:00:00.000'),
  endDate: new Date('2023-06-01T17:30:00.000'),
  comment: 'test',
  status: 'overdue',
  client_data: {
    type: 'OAO',
    name: 'Газпром',
    email: 'qweqew@qweqwe.com',
    phone: '+375295976883'
  }
}, {
  eventId: '2',
  roomId: '2',
  ownerId: '1',
  startDate: new Date('2023-06-01T18:30:00.000'),
  endDate: new Date('2023-06-01T20:15:00.000'),
  comment: 'test',
  status: 'paid',
  client_data: {
    type: 'OAO',
    name: 'Лукойл',
    email: 'qweqew@qweqwe.com',
    phone: '+375295976883'
  }
}, {
  eventId: '3',
  roomId: '4',
  ownerId: '4',
  startDate: new Date('2023-06-01T20:15:00.000'),
  endDate: new Date('2023-06-01T23:15:00.000'),
  comment: 'test',
  status: 'paid',
  client_data: {
    email: 'qweqew@qweqwe.com',
    phone: '+375295976883',
    name: 'Тинькофф',
    type: 'OAO'
  }
}, {
  eventId: '4',
  ownerId: '3',
  roomId: '2',
  startDate: new Date('2023-06-01T23:45:00.000'),
  endDate: new Date('2023-06-02T18:15:00.000'),
  status: 'paid',
  comment: 'test',
  client_data: {
    email: 'qweqew@qweqwe.com',
    phone: '+375295976883',
    name: 'Andersen',
    type: 'ЗАО'
  }
}, {
  eventId: '5',
  roomId: '2',
  ownerId: '1',
  startDate: new Date('2023-06-02T15:15:00.000'),
  endDate: new Date('2023-06-02T17:45:00.000'),
  status: 'paid',
  comment: 'test',
  client_data: {
    name: 'Yandex',
    email: 'qweqew@qweqwe.com',
    phone: '+375295976883',
    type: 'OAO'
  }
}, {
  eventId: '6',
  roomId: '4',
  ownerId: '2',
  startDate: new Date('2023-06-02T19:00:00.000'),
  endDate: new Date('2023-06-02T20:45:00.000'),
  status: 'overdue',
  comment: 'test',
  client_data: {
    name: 'Exadel',
    email: 'qweqew@qweqwe.com',
    phone: '+375295976883',
    type: 'OAO'
  }
}, {
  eventId: '7',
  roomId: '2',
  ownerId: '2',
  startDate: new Date('2023-06-03T17:00:00.000'),
  endDate: new Date('2023-06-03T18:15:00.000'),
  status: 'paid',
  comment: 'test',
  client_data: {
    email: 'qweqew@qweqwe.com',
    phone: '+375295976883',
    name: 'Epam',
    type: 'OAO'
  }
}, {
  eventId: '8',
  roomId: '3',
  ownerId: '3',
  startDate: new Date('2023-06-03T18:45:00.000'),
  endDate: new Date('2023-06-03T20:45:00.000'),
  status: 'paid',
  comment: 'test',
  client_data: {
    name: 'VironIT',
    email: 'qweqew@qweqwe.com',
    phone: '+375295976883',
    type: 'OAO'
  }
}, {
  eventId: '9',
  roomId: '1',
  ownerId: '1',
  startDate: new Date('2023-06-05T01:00:00.000'),
  endDate: new Date('2023-06-04T16:30:00.000'),
  status: 'overdue',
  comment: 'test',
  client_data: {
    email: 'qweqew@qweqwe.com',
    phone: '+375295976883',
    name: 'T-Mobile',
    type: 'OAO'
  }
}, {
  eventId: '10',
  roomId: '2',
  ownerId: '3',
  startDate: new Date('2023-06-05T00:15:00.000'),
  endDate: new Date('2023-06-04T15:00:00.000'),
  status: 'paid',
  comment: 'test',
  client_data: {
    name: 'Liddl',
    email: 'qweqew@qweqwe.com',
    phone: '+375295976883',
    type: 'OAO'
  }
}, {
  eventId: '11',
  roomId: '1',
  ownerId: '2',
  startDate: new Date('2023-06-05T21:15:00.000'),
  endDate: new Date('2023-06-05T22:30:00.000'),
  status: 'paid',
  comment: 'test',
  client_data: {
    name: 'Алексей Иванов',
    email: 'qweqew@qweqwe.com',
    phone: '+375295976883',
    type: 'ИП'
  }
}, {
  eventId: '12',
  roomId: '2',
  ownerId: '2',
  startDate: new Date('2023-06-08T21:00:00.000'),
  endDate: new Date('2023-06-09T19:00:00.000'),
  status: 'paid',
  comment: 'test',
  client_data: {
    name: 'Билайн',
    email: 'qweqew@qweqwe.com',
    phone: '+375295976883',
    type: 'OAO'
  }
}, {
  eventId: '13',
  roomId: '1',
  ownerId: '1',
  startDate: new Date('2023-06-08T19:45:00.000'),
  endDate: new Date('2023-06-08T20:15:00.000'),
  status: 'paid',
  comment: 'test',
  client_data: {
    name: 'Recall Rebate Form',
    email: 'qweqew@qweqwe.com',
    phone: '+375295976883',
    type: 'OAO'
  }
}, {
  eventId: '14',
  roomId: '4',
  ownerId: '4',
  startDate: new Date('2023-06-09T22:15:00.000'),
  endDate: new Date('2023-06-10T00:30:00.000'),
  status: 'paid',
  comment: 'test',
  client_data: {
    name: 'Create Report on Customer Feedback',
    email: 'qweqew@qweqwe.com',
    phone: '+375295976883',
    type: 'OAO'
  }
}, {
  eventId: '15',
  roomId: '4',
  ownerId: '2',
  startDate: new Date('2023-06-09T23:15:00.000'),
  endDate: new Date('2023-06-10T01:30:00.000'),
  status: 'paid',
  comment: 'test',
  client_data: {
    name: 'Review Customer Feedback Report',
    email: 'qweqew@qweqwe.com',
    phone: '+375295976883',
    type: 'OAO'
  }
}, {
  eventId: '16',
  roomId: '1',
  ownerId: '3',
  startDate: new Date('2023-06-10T16:30:00.000'),
  endDate: new Date('2023-06-10T17:30:00.000'),
  status: 'overdue',
  comment: 'test',
  client_data: {
    name: 'Customer Feedback Report Analysis',
    email: 'qweqew@qweqwe.com',
    phone: '+375295976883',
    type: 'OAO'
  }
}, {
  eventId: '17',
  roomId: '1',
  ownerId: '4',
  startDate: new Date('2023-06-10T19:30:00.000'),
  endDate: new Date('2023-06-10T20:30:00.000'),
  status: 'paid',
  comment: 'test',
  client_data: {
    name: 'Prepare Shipping Cost Analysis Report',
    email: 'qweqew@qweqwe.com',
    phone: '+375295976883',
    type: 'OAO'
  }
}, {
  eventId: '18',
  roomId: '2',
  ownerId: '2',
  startDate: new Date('2023-06-10T21:15:00.000'),
  endDate: new Date('2023-06-10T23:00:00.000'),
  status: 'overdue',
  comment: 'test',
  client_data: {
    name: 'Provide Feedback on Shippers',
    email: 'qweqew@qweqwe.com',
    phone: '+375295976883',
    type: 'OAO'
  }
}, {
  eventId: '19',
  roomId: '1',
  ownerId: '1',
  startDate: new Date('2023-06-11T00:30:00.000'),
  endDate: new Date('2023-06-11T03:00:00.000'),
  status: 'paid',
  comment: 'test',
  client_data: {
    name: 'Select Preferred Shipper',
    email: 'qweqew@qweqwe.com',
    phone: '+375295976883',
    type: 'OAO'
  }
}, {
  eventId: '20',
  roomId: '2',
  ownerId: '2',
  startDate: new Date('2023-06-11T15:30:00.000'),
  endDate: new Date('2023-06-11T17:00:00.000'),
  status: 'overdue',
  comment: 'test',
  client_data: {
    name: 'Complete Shipper Selection Form',
    email: 'qweqew@qweqwe.com',
    phone: '+375295976883',
    type: 'OAO'
  }
}, {
  eventId: '21',
  ownerId: '4',
  roomId: '1',
  startDate: new Date('2023-06-11T19:00:00.000'),
  endDate: new Date('2023-06-11T21:15:00.000'),
  status: 'paid',
  comment: 'test',
  client_data: {
    name: 'Upgrade Server Hardware',
    email: 'qweqew@qweqwe.com',
    phone: '+375295976883',
    type: 'OAO'
  }
}, {
  eventId: '22',
  roomId: '1',
  ownerId: '3',
  startDate: new Date('2023-06-11T21:45:00.000'),
  endDate: new Date('2023-06-11T23:30:00.000'),
  status: 'overdue',
  comment: 'test',
  client_data: {
    name: 'Upgrade Personal Computers',
    email: 'qweqew@qweqwe.com',
    phone: '+375295976883',
    type: 'OAO'
  }
}, {
  eventId: '23',
  roomId: '1',
  ownerId: '1',
  startDate: new Date('2023-06-12T17:30:00.000'),
  endDate: new Date('2023-06-12T20:00:00.000'),
  status: 'paid',
  comment: 'test',
  client_data: {
    name: 'Upgrade Apps to Windows RT or stay with WinForms',
    email: 'qweqew@qweqwe.com',
    phone: '+375295976883',
    type: 'OAO'
  }
}, {
  eventId: '24',
  roomId: '1',
  ownerId: '4',
  startDate: new Date('2023-06-15T18:30:00.000'),
  endDate: new Date('2023-06-15T20:15:00.000'),
  status: 'overdue',
  comment: 'test',
  client_data: {
    name: 'Create Icons for Website',
    email: 'qweqew@qweqwe.com',
    phone: '+375295976883',
    type: 'OAO'
  }
}, {
  eventId: '25',
  roomId: '6',
  ownerId: '1',
  startDate: new Date('2023-06-16T16:45:00.000'),
  endDate: new Date('2023-06-16T18:45:00.000'),
  status: 'paid',
  comment: 'test',
  client_data: {
    name: 'Create New Product Pages',
    email: 'qweqew@qweqwe.com',
    phone: '+375295976883',
    type: 'OAO'
  }
}, {
  eventId: '26',
  roomId: '1',
  ownerId: '3',
  startDate: new Date('2023-06-16T19:00:00.000'),
  endDate: new Date('2023-06-16T22:15:00.000'),
  status: 'booked',
  comment: 'test',
  client_data: {
    name: 'Approve Website Launch',
    email: 'qweqew@qweqwe.com',
    phone: '+375295976883',
    type: 'OAO'
  }
}, {
  eventId: '27',
  roomId: '1',
  ownerId: '3',
  startDate: new Date('2023-06-17T16:30:00.000'),
  endDate: new Date('2023-06-17T18:00:00.000'),
  status: 'paid',
  comment: 'test',
  client_data: {
    name: 'Update Customer Shipping Profiles',
    email: 'qweqew@qweqwe.com',
    phone: '+375295976883',
    type: 'test'
  }
}, {
  eventId: '28',
  roomId: '5',
  ownerId: '4',
  startDate: new Date('2023-06-17T19:45:00.000'),
  endDate: new Date('2023-06-17T21:00:00.000'),
  status: 'overdue',
  comment: 'test',
  client_data: {
    name: 'Create New Shipping Return Labels',
    email: 'qweqew@qweqwe.com',
    phone: '+375295976883',
    type: 'OAO'
  }
}, {
  eventId: '29',
  roomId: '1',
  ownerId: '3',
  startDate: new Date('2023-06-17T22:00:00.000'),
  endDate: new Date('2023-06-17T23:30:00.000'),
  status: 'paid',
  comment: 'test',
  client_data: {
    name: 'Get Design for Shipping Return Labels',
    email: 'qweqew@qweqwe.com',
    phone: '+375295976883',
    type: 'OAO'
  }
}, {
  eventId: '30',
  roomId: '2',
  ownerId: '4',
  startDate: new Date('2023-06-18T15:30:00.000'),
  endDate: new Date('2023-06-18T16:15:00.000'),
  status: 'overdue',
  comment: 'test',
  client_data: {
    name: 'PSD needed for Shipping Return Labels',
    email: 'qweqew@qweqwe.com',
    phone: '+375295976883',
    type: 'OAO'
  }
}, {
  eventId: '31',
  roomId: '3',
  ownerId: '1',
  startDate: new Date('2023-06-18T18:30:00.000'),
  endDate: new Date('2023-06-18T23:00:00.000'),
  status: 'paid',
  comment: 'test',
  client_data: {
    name: 'Contact ISP and Discuss Payment Options',
    email: 'qweqew@qweqwe.com',
    phone: '+375295976883',
    type: 'OAO'
  }
}, {
  eventId: '32',
  roomId: '1',
  ownerId: '2',
  startDate: new Date('2023-06-19T00:00:00.000'),
  endDate: new Date('2023-06-19T03:00:00.000'),
  status: 'booked',
  comment: 'test',
  client_data: {
    name: 'Prepare Year-End Support Summary Report',
    email: 'qweqew@qweqwe.com',
    phone: '+375295976883',
    type: 'OAO'
  }
}, {
  eventId: '33',
  roomId: '2',
  ownerId: '3',
  startDate: new Date('2023-06-19T15:00:00.000'),
  endDate: new Date('2023-06-19T16:15:00.000'),
  comment: 'test',
  status: 'booked',
  client_data: {
    name: 'Review New Training Material',
    email: 'qweqew@qweqwe.com',
    phone: '+375295976883',
    type: 'type'
  }
}, {
  eventId: '34',
  roomId: '1',
  ownerId: '2',
  startDate: new Date('2023-06-19T19:45:00.000'),
  endDate: new Date('2023-06-19T21:00:00.000'),
  status: 'booked',
  comment: 'test',
  client_data: {
    name: 'Distribute Training Material to Support Staff',
    email: 'qweqew@qweqwe.com',
    phone: '+375295976883',
    type: 'OAO'
  }
}, {
  eventId: '35',
  roomId: '1',
  ownerId: '2',
  startDate: new Date('2023-06-19T21:15:00.000'),
  endDate: new Date('2023-06-19T23:15:00.000'),
  status: 'booked',
  comment: 'test',
  client_data: {
    name: 'Training Material Distribution Schedule',
    email: 'qweqew@qweqwe.com',
    phone: '+375295976883',
    type: 'OAO'
  }
}, {
  eventId: '36',
  roomId: '2',
  ownerId: '4',
  startDate: new Date('2023-06-22T16:30:00.000'),
  endDate: new Date('2023-06-22T17:15:00.000'),
  status: 'booked',
  comment: 'test',
  client_data: {
    name: 'Approval on Converting to New HDMI Specification',
    email: 'qweqew@qweqwe.com',
    phone: '+375295976883',
    type: 'OAO'
  }
}, {
  eventId: '37',
  roomId: '3',
  ownerId: '3',
  startDate: new Date('2023-06-22T17:00:00.000'),
  endDate: new Date('2023-06-22T19:30:00.000'),
  status: 'paid',
  comment: 'test',
  client_data: {
    name: 'Create New Spike for Automation Server',
    email: 'qweqew@qweqwe.com',
    phone: '+375295976883',
    type: 'OAO'
  }
}];
exports.data = data;
//# sourceMappingURL=sefviceFormData.js.map