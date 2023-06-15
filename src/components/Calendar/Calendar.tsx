import dayjs from 'dayjs';
import { Scheduler } from 'devextreme-react';
import { Editing, Resource, Scrolling, View } from 'devextreme-react/scheduler';
import { OptionChangedEventInfo } from 'devextreme/core/dom_component';
import dxScheduler, { AppointmentAddingEvent, CellClickEvent } from 'devextreme/ui/scheduler';
import React, { MouseEvent, useEffect, useRef, useState } from 'react';

import style from './style.module.css';

import { data, ownersData, roomsData } from '../../sefviceFormData';
import {
  checkBusyRoom,
  handldleCheckView,
  handleAddDate,
  handleSelectData,
  handleSubtractDate,
} from '../../utils/utils';
import { Appointment } from './../Appointment/Appointment';
import { Header } from './../Header/Header';
import { MoreAppointments } from './../MoreAppointments/MoreAppointments';
import { MoreButton } from './../MoreButton/MoreButton';
import { Room } from './../Room/Room';
import { TooltipComponent } from './../Tooltip/TooltipComponent';

const handleAppointmentAdding = (e: AppointmentAddingEvent) => {
  const isBusyDate = checkBusyRoom(
    data,
    e.appointmentData.rooms,
    e.appointmentData.startDate as Date,
    e.appointmentData.endDate as Date
  );
  if (isBusyDate) {
    e.cancel = true;
    alert('Данная переговорка уже забронирована на выбранное Вами время');
  }
};

const createMeeting = (e: CellClickEvent) => {
  e.event?.preventDefault();
  console.log('this action income from service form');
};

const editMeeting = () => {
  console.log('metting dbl click this action income from service form');
};

export const Calendar: React.FC = () => {
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
        selectPlaceholder="sdssd"
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
        handleSelect={(icon: string) => {
          const data = handleSelectData(icon);
          setCurrentDate(data?.currentData ?? currentDate);
          setCurrentView(data?.currentView ?? currentView);
        }}
      />
      <Scheduler
        currentView={currentView.type as any} // eslint-disable-line
        className={style.wrapper}
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
        }}
        height={900}
        dropDownAppointmentComponent={(data) => <MoreAppointments data={data.data} />}
        groups={groups}
        cellDuration={60}
        firstDayOfWeek={0}
        startDayHour={0}
        endDayHour={24}
        onCellClick={createMeeting}
        onAppointmentDblClick={editMeeting}
        appointmentCollectorComponent={(data) => <MoreButton data={data.data} />}
        onAppointmentAdding={handleAppointmentAdding}
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
        <Scrolling mode="virtual" />
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
