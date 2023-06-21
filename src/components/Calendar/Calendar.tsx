import dayjs from 'dayjs';
import { Scheduler } from 'devextreme-react';
import { Editing, Resource, Scrolling, View } from 'devextreme-react/scheduler';
import { OptionChangedEventInfo } from 'devextreme/core/dom_component';
import dxScheduler, {
  AppointmentAddingEvent,
  AppointmentFormOpeningEvent,
  CellClickEvent,
} from 'devextreme/ui/scheduler';
import React, { MouseEvent, useEffect, useRef, useState } from 'react';

import style from './style.module.css';

import { data } from '../../sefviceFormData';
import { BookingType, DateCellType, OwnerType, RoomComponentType } from '../../types/types';
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

type Props = {
  owners?: OwnerType[];
  rooms?: RoomComponentType[];
  events?: BookingType[];
  updateEvent?: () => void;
  addEvent?: () => void;
  openUpdateModal?: () => void;
  openAddingModal?: () => void;
  closeModal?: () => void;
  OpenEventWrapper?: React.ComponentType<any>;
};

const handleAppointmentAdding = (e: AppointmentAddingEvent, addEvent?: () => void) => {
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
  addEvent?.();
};

const openCreationModal = (e: CellClickEvent, openModal?: () => void) => {
  e.event?.preventDefault();
  console.log('this action open CreationModal and will income from service form');
  openModal?.();
};

export const Calendar: React.FC<Props> = ({
  owners,
  rooms,
  events,
  openUpdateModal,
  updateEvent,
  openAddingModal,
  OpenEventWrapper,
}) => {
  const groups = ['roomId'];
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
        isDisabled={currentView.intervalCount === 1}
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
        dataSource={events}
        ref={schedulerRef}
        views={[currentView] as any} // eslint-disable-line
        currentDate={currentDate.toDate()}
        appointmentTooltipComponent={(data) => (
          <TooltipComponent data={data.data.appointmentData} handleClose={closeTooltip} />
        )}
        appointmentRender={(data) => (
          <Appointment
            data={data.appointmentData}
            currentDate={currentDate}
            OpenEventWrapper={OpenEventWrapper}
          />
        )}
        onOptionChanged={(e: OptionChangedEventInfo<dxScheduler>) => {
          if (e.name === 'currentView') setCurrentView(e.value);
        }}
        //height={900}
        dateCellRender={(itemData: DateCellType) => (
          <DateCell data={itemData} currentView={currentView.type} />
        )}
        dropDownAppointmentComponent={(data) => <MoreAppointments data={data.data} />}
        groups={groups}
        cellDuration={60}
        firstDayOfWeek={1}
        startDayHour={0}
        endDayHour={24}
        onCellClick={(e: CellClickEvent) => openCreationModal(e, openAddingModal)}
        editing
        onAppointmentUpdating={updateEvent}
        onAppointmentDblClick={openUpdateModal}
        appointmentCollectorComponent={(data) => <MoreButton data={data.data} />}
        onAppointmentAdding={handleAppointmentAdding}
        // TODO uncomment later. need for cancel default popul creation
        onAppointmentFormOpening={(e: AppointmentFormOpeningEvent) => {
          openAddingModal && (e.cancel = true);
        }}
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
          dataSource={owners}
          label="Owner"
          useColorAsDefault={true}
        />
        <Resource fieldExpr="roomId" allowMultiple={false} dataSource={rooms} label="Rooms" />
        <Editing allowDragging={false} allowResizing={false} allowUpdating={false} />
      </Scheduler>
    </>
  );
};
