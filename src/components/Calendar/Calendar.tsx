import dayjs from 'dayjs';
import { Scheduler } from 'devextreme-react';
import { Editing, Resource, View } from 'devextreme-react/scheduler';
import { OptionChangedEventInfo } from 'devextreme/core/dom_component';
import dxScheduler from 'devextreme/ui/scheduler';
import { FC, useState } from 'react';

import { Header } from 'src/components/Header/Header';
import { Room } from 'src/components/Room/Room';
import { TooltipComponent } from 'src/components/Tooltip/TooltipComponent';
import { views } from 'src/constants/constants';
import { data, resourcesData, roomsData } from 'src/data';
import { handleAddDate, handleSubtractDate } from 'src/utils/utils';

import style from './style.module.css';

export const Calendar: FC = () => {
  const groups = ['rooms'];
  const [currentDate, setCurrentDate] = useState(dayjs(new Date(2021, 1, 2)));
  const [currentView, setCurrentView] = useState<string>('Месяц');
  return (
    <>
      <Header
        handleAddDate={() =>
          setCurrentDate(handleAddDate(currentView, currentDate) ?? currentDate)
        }
        handleSubtractDate={() =>
          setCurrentDate(
            handleSubtractDate(currentView, currentDate) ?? currentDate
          )
        }
      />
      <button
        onClick={() => setCurrentDate(currentDate.add(7, 'day'))}
        type="button"
      >
        today
      </button>
      <Scheduler
        className={style.wrapper}
        timeZone="Europe/Moscow"
        dataSource={data}
        views={views as any} // eslint-disable-line
        defaultCurrentView="timelineMonth"
        currentDate={currentDate.toDate()}
        appointmentTooltipComponent={(data) => (
          <TooltipComponent data={data.data.appointmentData} />
        )}
        onOptionChanged={(e: OptionChangedEventInfo<dxScheduler>) => {
          if (e.name === 'currentView') setCurrentView(e.value);
        }}
        height={900}
        groups={groups}
        cellDuration={60}
        firstDayOfWeek={0}
        startDayHour={8}
        endDayHour={20}
        resourceCellComponent={(data) => <Room data={data.data.data} />}
      >
        <View />
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
          label="Rooms"
        />
        <Editing
          allowDragging={false}
          allowResizing={false}
          allowUpdating={false}
        />
      </Scheduler>
    </>
  );
};
