import dayjs from 'dayjs';
import { Scheduler } from 'devextreme-react';
import { Editing, Resource, Scrolling, View } from 'devextreme-react/scheduler';
import { OptionChangedEventInfo } from 'devextreme/core/dom_component';
import dxScheduler, { AppointmentAddingEvent, CellClickEvent } from 'devextreme/ui/scheduler';
import React, { MouseEvent, useEffect, useRef, useState } from 'react';

import style from './style.module.css';

import { data, ownersData, roomsData } from '../../sefviceFormData';
import { DateCellType } from '../../types/types';
import {
  checkBusyRoom,
  handldleCheckView,
  handldleSelectTitle,
  handleAddDate,
  handleFirstCharInUpperCase,
  handleSelectData,
  handleSubtractDate,
} from '../../utils/utils';
import { DateCell } from '../DateCell/DateCell';
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
  console.log('// TODO here will be action for adding appointment');
};

const openCreationModal = (e: CellClickEvent) => {
  e.event?.preventDefault();
  console.log('this action open CreationModal and will income from service form');
};

const openEditingModal = () => {
  console.log('metting dbl click this action income from service form');
};

const updateAppointment = () => {
  console.log('// TODO here will be action for update appointment');
};

export const Calendar: React.FC = () => {
  const groups = ['rooms'];
  const [selectedPlaceholder, setSelectedPlaceholder] = useState<string>(
    dayjs().locale('ru').format('DD MMMM')
  );
  const [currentDate, setCurrentDate] = useState(dayjs(new Date()));
  const [currentView, setCurrentView] = useState<{
    type: string;
    intervalCount: number;
  }>({ type: 'timelineDay', intervalCount: 1 });
  const [selectedView, setSelectedView] = useState<string>(currentView.type);
  useEffect(() => {
    setSelectedView(handldleSelectTitle(currentView));
  }, [currentDate, currentView]); // eslint-disable-line

  const schedulerRef = useRef<Scheduler>(null);
  const scheduler = schedulerRef.current;

  useEffect(() => {
    if (currentView.type === 'timelineDay' && currentView.intervalCount === 1) {
      setSelectedPlaceholder(dayjs(currentDate).locale('ru').format('DD MMMM YYYY'));
    } else
      setSelectedPlaceholder(
        handleFirstCharInUpperCase(dayjs(currentDate).locale('ru').format('MMMM YYYY'))
      );
  }, [currentDate, currentView]);

  const closeTooltip = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    scheduler?.instance.hideAppointmentTooltip();
  };
  return (
    <>
      <Header
        selectedPlaceholder={selectedPlaceholder}
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
          setCurrentDate(handleAddDate(currentView.type, currentDate) ?? currentDate)
        }
        handleSubtractDate={() =>
          setCurrentDate(handleSubtractDate(currentView.type, currentDate) ?? currentDate)
        }
        //handleViewsChange={(value) => setSelectedView(value)}
        handleViewsChange={(value) => setCurrentView(handldleCheckView(value) ?? currentView)}
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
        dateCellRender={(itemData: DateCellType) => (
          <DateCell data={itemData} currentView={currentView.type} />
        )}
        dropDownAppointmentComponent={(data) => <MoreAppointments data={data.data} />}
        groups={groups}
        cellDuration={60}
        firstDayOfWeek={0}
        startDayHour={0}
        endDayHour={24}
        onCellClick={openCreationModal}
        editing
        onAppointmentUpdating={updateAppointment}
        onAppointmentDblClick={openEditingModal}
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
