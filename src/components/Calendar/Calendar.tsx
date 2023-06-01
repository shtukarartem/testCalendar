import { Scheduler } from 'devextreme-react';
import { Editing, Resource } from 'devextreme-react/scheduler';

import { views } from 'src/constants/constants';

import style from './style.module.css';

import { data, priorityData, resourcesData } from '../../data';
import { TooltipComponent } from '../Tooltip/TooltipComponent';

const currentDate = new Date();

export const Calendar = () => {
  const groups = ['priority'];
  return (
    <Scheduler
      className={style.wrapper}
      timeZone="Europe/Moscow"
      dataSource={data}
      views={views as any} // eslint-disable-line
      defaultCurrentView="timelineMonth"
      defaultCurrentDate={currentDate}
      appointmentTooltipComponent={(data) => (
        <TooltipComponent data={data.data.appointmentData} />
      )}
      // onAppointmentFormOpening={(e: AppointmentFormOpeningEvent) => console.log()}
      // onAppointmentClick={() => false}
      height={900}
      groups={groups}
      cellDuration={60}
      firstDayOfWeek={0}
      startDayHour={8}
      endDayHour={20}
    >
      <Resource
        fieldExpr="ownerId"
        allowMultiple={true}
        dataSource={resourcesData}
        label="Owner"
        useColorAsDefault={true}
      />
      <Resource
        fieldExpr="priority"
        allowMultiple={false}
        dataSource={priorityData}
        label="Priority"
      />

      <Editing
        allowDragging={false}
        allowResizing={false}
        allowUpdating={false}
      />
    </Scheduler>
  );
};
