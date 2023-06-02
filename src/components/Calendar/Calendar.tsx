import { Scheduler } from 'devextreme-react';
import { Editing, Resource } from 'devextreme-react/scheduler';

import { TooltipComponent } from 'src/components/Tooltip/TooltipComponent';
import { views } from 'src/constants/constants';
import { data, resourcesData, roomsData } from 'src/data';

import style from './style.module.css';

const currentDate = new Date();

export const Calendar = () => {
  const groups = ['rooms'];
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
        fieldExpr="rooms"
        allowMultiple={false}
        dataSource={roomsData}
        label="rooms"
        valueExpr="csdcs"
      />
      <Editing
        allowDragging={false}
        allowResizing={false}
        allowUpdating={false}
      />
    </Scheduler>
  );
};
