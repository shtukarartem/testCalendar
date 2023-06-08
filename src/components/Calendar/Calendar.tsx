import dayjs from 'dayjs';
import { Scheduler } from 'devextreme-react';
import { Editing, Resource, View } from 'devextreme-react/scheduler';
import { OptionChangedEventInfo } from 'devextreme/core/dom_component';
import dxScheduler, { CellClickEvent } from 'devextreme/ui/scheduler';
import { FC, MouseEvent, useEffect, useRef, useState } from 'react';

import { Appointment } from 'src/components/Appointment/Appointment';
import { Header } from 'src/components/Header/Header';
import { Room } from 'src/components/Room/Room';
import { TooltipComponent } from 'src/components/Tooltip/TooltipComponent';
import { data, ownersData, roomsData } from 'src/sefviceFormData';
import { handldleCheckView, handleAddDate, handleSubtractDate } from 'src/utils/utils';

import style from './style.module.css';

const createMeeting = (e: CellClickEvent) => {
  e.event?.preventDefault();
  console.log('this action income from service form');
};

const editMeeting = () => {
  console.log('metting dbl click this action income from service form');
};

export const Calendar: FC = () => {
  const groups = ['rooms'];
  const [currentDate, setCurrentDate] = useState(dayjs(new Date()));
  const [currentView, setCurrentView] = useState<{
    type: string;
    intervalCount?: number;
  }>({ type: 'timelineMonth' });
  const [selectedView, setSelectedView] = useState<string>(currentView.type);
  useEffect(() => {
    setCurrentView(handldleCheckView(selectedView) ?? currentView);
  }, [selectedView]); // eslint-disable-line

  const schedulerRef = useRef<Scheduler>(null);
  const scheduler = schedulerRef.current;

  const closeTooltip = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    scheduler?.instance.hideAppointmentTooltip();
  };

  return (
    <>
      <Header
        selectViewValue={selectedView}
        handleMinusButton={() =>
          setCurrentView({
            ...currentView,
            intervalCount: currentView.intervalCount ? currentView.intervalCount - 1 : 1,
          })
        }
        handlePlusButton={() =>
          setCurrentView({
            ...currentView,
            intervalCount: currentView.intervalCount ? currentView.intervalCount + 1 : 1,
          })
        }
        handleAddDate={() =>
          setCurrentDate(handleAddDate(selectedView, currentDate) ?? currentDate)
        }
        handleSubtractDate={() =>
          setCurrentDate(handleSubtractDate(selectedView, currentDate) ?? currentDate)
        }
        handleViewsChange={(value) => setSelectedView(value)}
      />
      <button onClick={() => setCurrentDate(dayjs())} type="button">
        today
      </button>
      <Scheduler
        currentView={currentView.type as any} // eslint-disable-line
        className={style.wrapper}
        timeZone="Europe/Moscow"
        dataSource={data}
        ref={schedulerRef}
        views={[currentView] as any} // eslint-disable-line
        currentDate={currentDate.toDate()}
        appointmentTooltipComponent={(data) => (
          <TooltipComponent data={data.data.appointmentData} handleClose={closeTooltip} />
        )}
        appointmentRender={(data) => (
          <Appointment data={data.appointmentData} currentDate={currentDate} />
        )}
        onOptionChanged={(e: OptionChangedEventInfo<dxScheduler>) => {
          if (e.name === 'currentView') setCurrentView(e.value);
          console.log(currentDate);
        }}
        height={900}
        groups={groups}
        cellDuration={60}
        firstDayOfWeek={0}
        startDayHour={8}
        endDayHour={20}
        onCellClick={createMeeting}
        onAppointmentDblClick={editMeeting}
        // TODO uncomment later. need for cancel default popul creation
        // onAppointmentFormOpening={(e: AppointmentFormOpeningEvent) => {
        //   e.cancel = true;
        // }}
        resourceCellComponent={(data) => <Room data={data.data.data} />}
        // TODO uncomment later. need for pass action from ServiceForm
        // onAppointmentClick={() => {
        //   console.log('onAppointmentClick');
        // }}
      >
        <View type="timelineMonth" />
        <Resource
          fieldExpr="ownerId"
          allowMultiple={true}
          dataSource={ownersData}
          label="Owner"
          useColorAsDefault={true}
        />
        <Resource fieldExpr="rooms" allowMultiple={false} dataSource={roomsData} label="Rooms" />
        <Editing allowDragging={false} allowResizing={false} allowUpdating={false} />
      </Scheduler>
    </>
  );
};
