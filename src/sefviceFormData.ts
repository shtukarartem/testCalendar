//import dayjs from 'dayjs';
import { BookingType } from 'src/types/types';

export const ownersData = [
  {
    owner: 'Samantha Bright',
    id: 1,
    color: '#cb6bb2',
  },
  {
    owner: 'John Heart',
    id: 2,
    color: '#56ca85',
  },
  {
    owner: 'Todd Hoffman',
    id: 3,
    color: '#1e90ff',
  },
  {
    owner: 'Sandra Johnson',
    id: 4,
    color: '#ff9747',
  },
];

export const roomsData = [
  {
    room: 'Рабочее место 1',
    description: 'Окно',
    type: 'workPlace',
    id: 1,
    color: '#1e90ff',
  },
  {
    room: 'Рабочее место 2',
    description: 'Окно, ПК',
    type: 'workPlace',
    id: 2,
    color: '#ff9747',
  },
  {
    room: 'Рабочее место 3',
    description: 'Окно',
    type: 'workPlace',
    id: 3,
    color: '#ff9747',
  },
  {
    room: 'Офис 1',
    description: '20 мест',
    type: 'office',
    id: 4,
    color: '#fff',
  },
  {
    room: 'Офис 2',
    description: '58 мест',
    type: 'office',
    id: 5,
    color: '#fff',
  },
  {
    room: 'Офис 3',
    description: '30 мест',
    type: 'office',
    id: 6,
    color: '#fff',
  },
  {
    room: 'Переговорная 1',
    description: '5 мест',
    type: 'meeting',
    id: 7,
    color: '#fff',
  },
  {
    room: 'Переговорная 2',
    description: '6 мест',
    type: 'meeting',
    id: 8,
    color: '#fff',
  },
  {
    room: 'Переговорная 3',
    description: '10 мест',
    type: 'meeting',
    id: 9,
    color: '#fff',
  },
  {
    room: 'Переговорная 4',
    description: '8 мест',
    type: 'meeting',
    id: 10,
    color: '#fff',
  },
];

export const data: BookingType[] = [
  {
    text: 'Газпром',
    ownerId: [2],
    startDate: new Date('2023-06-01T16:00:00.000'),
    endDate: new Date('2023-06-01T17:30:00.000'),
    rooms: 1,
    email: 'qweqew@qweqwe.com',
    number: '+375295976883',
    status: 'paid',
  },
  {
    text: 'Лукойл',
    ownerId: [1],
    startDate: new Date('2023-06-01T18:30:00.000'),
    endDate: new Date('2023-06-01T20:15:00.000'),
    rooms: 2,
    email: 'qweqew@qweqwe.com',
    number: '+375295976883',
    status: 'paid',
  },
  {
    text: 'Тинькофф',
    ownerId: [4],
    startDate: new Date('2023-06-01T20:15:00.000'),
    endDate: new Date('2023-06-01T23:15:00.000'),
    rooms: 4,
    email: 'qweqew@qweqwe.com',
    number: '+375295976883',
    status: 'paid',
  },
  {
    text: 'Andersen',
    ownerId: [3],
    startDate: new Date('2023-06-01T23:45:00.000'),
    endDate: new Date('2023-06-02T18:15:00.000'),
    rooms: 2,
    email: 'qweqew@qweqwe.com',
    number: '+375295976883',
    status: 'paid',
  },
  {
    text: 'Yandex',
    ownerId: [1],
    startDate: new Date('2023-06-02T15:15:00.000'),
    endDate: new Date('2023-06-02T17:45:00.000'),
    rooms: 2,
    email: 'qweqew@qweqwe.com',
    number: '+375295976883',
    status: 'paid',
  },
  {
    text: 'Exadel',
    ownerId: [2],
    startDate: new Date('2023-06-02T19:00:00.000'),
    endDate: new Date('2023-06-02T20:45:00.000'),
    rooms: 4,
    email: 'qweqew@qweqwe.com',
    number: '+375295976883',
    status: 'overdue',
  },
  {
    text: 'Epam',
    ownerId: [2],
    startDate: new Date('2023-06-03T17:00:00.000'),
    endDate: new Date('2023-06-03T18:15:00.000'),
    rooms: 2,
    email: 'qweqew@qweqwe.com',
    number: '+375295976883',
    status: 'paid',
  },
  {
    text: 'VironIT',
    ownerId: [3],
    startDate: new Date('2023-06-03T18:45:00.000'),
    endDate: new Date('2023-06-03T20:45:00.000'),
    rooms: 3,
    email: 'qweqew@qweqwe.com',
    number: '+375295976883',
    status: 'paid',
  },
  {
    text: 'T-Mobile',
    ownerId: [1],
    startDate: new Date('2023-06-05T01:00:00.000'),
    endDate: new Date('2023-06-04T16:30:00.000'),
    rooms: 1,
    email: 'qweqew@qweqwe.com',
    number: '+375295976883',
    status: 'overdue',
  },
  {
    text: 'Liddl',
    ownerId: [3],
    startDate: new Date('2023-06-05T00:15:00.000'),
    endDate: new Date('2023-06-04T15:00:00.000'),
    rooms: 2,
    email: 'qweqew@qweqwe.com',
    number: '+375295976883',
    status: 'paid',
  },
  {
    text: 'Алексей Иванов',
    ownerId: [2],
    startDate: new Date('2023-06-05T21:15:00.000'),
    endDate: new Date('2023-06-05T22:30:00.000'),
    rooms: 1,
    email: 'qweqew@qweqwe.com',
    number: '+375295976883',
    status: 'paid',
  },
  {
    text: 'Билайн',
    ownerId: [2],
    startDate: new Date('2023-06-08T21:00:00.000'),
    endDate: new Date('2023-06-09T19:00:00.000'),
    rooms: 2,
    email: 'qweqew@qweqwe.com',
    number: '+375295976883',
    status: 'paid',
  },
  {
    text: 'Recall Rebate Form',
    ownerId: [1],
    startDate: new Date('2023-06-08T19:45:00.000'),
    endDate: new Date('2023-06-08T20:15:00.000'),
    rooms: 1,
    email: 'qweqew@qweqwe.com',
    number: '+375295976883',
    status: 'paid',
  },
  {
    text: 'Create Report on Customer Feedback',
    ownerId: [4],
    startDate: new Date('2023-06-09T22:15:00.000'),
    endDate: new Date('2023-06-10T00:30:00.000'),
    rooms: 4,
    email: 'qweqew@qweqwe.com',
    number: '+375295976883',
    status: 'paid',
  },
  {
    text: 'Review Customer Feedback Report',
    ownerId: [2],
    startDate: new Date('2023-06-09T23:15:00.000'),
    endDate: new Date('2023-06-10T01:30:00.000'),
    rooms: 4,
    email: 'qweqew@qweqwe.com',
    number: '+375295976883',
    status: 'paid',
  },
  {
    text: 'Customer Feedback Report Analysis',
    ownerId: [3],
    startDate: new Date('2023-06-10T16:30:00.000'),
    endDate: new Date('2023-06-10T17:30:00.000'),
    rooms: 1,
    email: 'qweqew@qweqwe.com',
    number: '+375295976883',
    status: 'overdue',
  },
  {
    text: 'Prepare Shipping Cost Analysis Report',
    ownerId: [4],
    startDate: new Date('2023-06-10T19:30:00.000'),
    endDate: new Date('2023-06-10T20:30:00.000'),
    rooms: 1,
    email: 'qweqew@qweqwe.com',
    number: '+375295976883',
    status: 'paid',
  },
  {
    text: 'Provide Feedback on Shippers',
    ownerId: [2],
    startDate: new Date('2023-06-10T21:15:00.000'),
    endDate: new Date('2023-06-10T23:00:00.000'),
    rooms: 2,
    email: 'qweqew@qweqwe.com',
    number: '+375295976883',
    status: 'overdue',
  },
  {
    text: 'Select Preferred Shipper',
    ownerId: [1],
    startDate: new Date('2023-06-11T00:30:00.000'),
    endDate: new Date('2023-06-11T03:00:00.000'),
    rooms: 1,
    email: 'qweqew@qweqwe.com',
    number: '+375295976883',
    status: 'paid',
  },
  {
    text: 'Complete Shipper Selection Form',
    ownerId: [2],
    startDate: new Date('2023-06-11T15:30:00.000'),
    endDate: new Date('2023-06-11T17:00:00.000'),
    rooms: 2,
    email: 'qweqew@qweqwe.com',
    number: '+375295976883',
    status: 'overdue',
  },
  {
    text: 'Upgrade Server Hardware',
    ownerId: [4],
    startDate: new Date('2023-06-11T19:00:00.000'),
    endDate: new Date('2023-06-11T21:15:00.000'),
    rooms: 1,
    email: 'qweqew@qweqwe.com',
    number: '+375295976883',
    status: 'paid',
  },
  {
    text: 'Upgrade Personal Computers',
    ownerId: [3],
    startDate: new Date('2023-06-11T21:45:00.000'),
    endDate: new Date('2023-06-11T23:30:00.000'),
    rooms: 1,
    email: 'qweqew@qweqwe.com',
    number: '+375295976883',
    status: 'overdue',
  },
  {
    text: 'Upgrade Apps to Windows RT or stay with WinForms',
    ownerId: [1],
    startDate: new Date('2023-06-12T17:30:00.000'),
    endDate: new Date('2023-06-12T20:00:00.000'),
    rooms: 1,
    email: 'qweqew@qweqwe.com',
    number: '+375295976883',
    status: 'paid',
  },
  {
    text: 'Create Icons for Website',
    ownerId: [4],
    startDate: new Date('2023-06-15T18:30:00.000'),
    endDate: new Date('2023-06-15T20:15:00.000'),
    rooms: 1,
    email: 'qweqew@qweqwe.com',
    number: '+375295976883',
    status: 'overdue',
  },
  {
    text: 'Create New Product Pages',
    ownerId: [1],
    startDate: new Date('2023-06-16T16:45:00.000'),
    endDate: new Date('2023-06-16T18:45:00.000'),
    rooms: 6,
    email: 'qweqew@qweqwe.com',
    number: '+375295976883',
    status: 'paid',
  },
  {
    text: 'Approve Website Launch',
    ownerId: [3],
    startDate: new Date('2023-06-16T19:00:00.000'),
    endDate: new Date('2023-06-16T22:15:00.000'),
    rooms: 1,
    email: 'qweqew@qweqwe.com',
    number: '+375295976883',
    status: 'booked',
  },
  {
    text: 'Update Customer Shipping Profiles',
    ownerId: [3],
    startDate: new Date('2023-06-17T16:30:00.000'),
    endDate: new Date('2023-06-17T18:00:00.000'),
    rooms: 1,
    email: 'qweqew@qweqwe.com',
    number: '+375295976883',
    status: 'paid',
  },
  {
    text: 'Create New Shipping Return Labels',
    ownerId: [4],
    startDate: new Date('2023-06-17T19:45:00.000'),
    endDate: new Date('2023-06-17T21:00:00.000'),
    rooms: 5,
    email: 'qweqew@qweqwe.com',
    number: '+375295976883',
    status: 'overdue',
  },
  {
    text: 'Get Design for Shipping Return Labels',
    ownerId: [3],
    startDate: new Date('2023-06-17T22:00:00.000'),
    endDate: new Date('2023-06-17T23:30:00.000'),
    rooms: 1,
    email: 'qweqew@qweqwe.com',
    number: '+375295976883',
    status: 'paid',
  },
  {
    text: 'PSD needed for Shipping Return Labels',
    ownerId: [4],
    startDate: new Date('2023-06-18T15:30:00.000'),
    endDate: new Date('2023-06-18T16:15:00.000'),
    rooms: 2,
    email: 'qweqew@qweqwe.com',
    number: '+375295976883',
    status: 'overdue',
  },
  {
    text: 'Contact ISP and Discuss Payment Options',
    ownerId: [1],
    startDate: new Date('2023-06-18T18:30:00.000'),
    endDate: new Date('2023-06-18T23:00:00.000'),
    rooms: 3,
    email: 'qweqew@qweqwe.com',
    number: '+375295976883',
    status: 'paid',
  },
  {
    text: 'Prepare Year-End Support Summary Report',
    ownerId: [2],
    startDate: new Date('2023-06-19T00:00:00.000'),
    endDate: new Date('2023-06-19T03:00:00.000'),
    rooms: 1,
    email: 'qweqew@qweqwe.com',
    number: '+375295976883',
    status: 'booked',
  },
  {
    text: 'Review New Training Material',
    ownerId: [3],
    startDate: new Date('2023-06-19T15:00:00.000'),
    endDate: new Date('2023-06-19T16:15:00.000'),
    rooms: 2,
    email: 'qweqew@qweqwe.com',
    number: '+375295976883',
    status: 'booked',
  },
  {
    text: 'Distribute Training Material to Support Staff',
    ownerId: [2],
    startDate: new Date('2023-06-19T19:45:00.000'),
    endDate: new Date('2023-06-19T21:00:00.000'),
    rooms: 1,
    email: 'qweqew@qweqwe.com',
    number: '+375295976883',
    status: 'booked',
  },
  {
    text: 'Training Material Distribution Schedule',
    ownerId: [2],
    startDate: new Date('2023-06-19T21:15:00.000'),
    endDate: new Date('2023-06-19T23:15:00.000'),
    rooms: 1,
    email: 'qweqew@qweqwe.com',
    number: '+375295976883',
    status: 'booked',
  },
  {
    text: 'Approval on Converting to New HDMI Specification',
    ownerId: [4],
    startDate: new Date('2023-06-22T16:30:00.000'),
    endDate: new Date('2023-06-22T17:15:00.000'),
    rooms: 2,
    email: 'qweqew@qweqwe.com',
    number: '+375295976883',
    status: 'booked',
  },
  {
    text: 'Create New Spike for Automation Server',
    ownerId: [3],
    startDate: new Date('2023-06-22T17:00:00.000'),
    endDate: new Date('2023-06-22T19:30:00.000'),
    rooms: 3,
    email: 'qweqew@qweqwe.com',
    number: '+375295976883',
    status: 'paid',
  },
];
