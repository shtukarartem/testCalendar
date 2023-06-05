import dayjs from 'dayjs';
import { Scheduler } from 'devextreme-react';
import { Editing, Resource, View} from 'devextreme-react/scheduler';
import { OptionChangedEventInfo } from 'devextreme/core/dom_component';
import dxScheduler from 'devextreme/ui/scheduler';
import { FC, useEffect, useState } from 'react';

import { Header } from 'src/components/Header/Header';
import { Room } from 'src/components/Room/Room';
import { TooltipComponent } from 'src/components/Tooltip/TooltipComponent';
import { data, resourcesData, roomsData } from 'src/data';
import {
  handldleCheckView,
  handleAddDate,
  handleSubtractDate,
} from 'src/utils/utils';

import style from './style.module.css';

export const Calendar: FC = () => {
  const groups = ['rooms'];
  const [currentDate, setCurrentDate] = useState(dayjs(new Date(2021, 1, 2)));
  const [currentView, setCurrentView] = useState<{
    type: string;
    intervalCount?: number;
  }>({ type: 'timelineMonth' });
  const [selectedView, setSelectedView] = useState<string>(currentView.type);
  useEffect(() => {
    setCurrentView(handldleCheckView(selectedView) ?? currentView);
  }, [selectedView]); // eslint-disable-line
  return (
    <>
      <Header
        selectViewValue={selectedView}
        handleMinusButton={() => setCurrentView({...currentView, intervalCount: currentView.intervalCount ? currentView.intervalCount - 1 : 1})}
        handlePlusButton={() => setCurrentView({...currentView, intervalCount: currentView.intervalCount ? currentView.intervalCount + 1 : 1})}
        handleAddDate={() =>
          setCurrentDate(
            handleAddDate(selectedView, currentDate) ?? currentDate
          )
        }
        handleSubtractDate={() =>
          setCurrentDate(
            handleSubtractDate(selectedView, currentDate) ?? currentDate
          )
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
        views={[currentView] as any} // eslint-disable-line
        currentDate={currentDate.toDate()}
        appointmentTooltipComponent={(data) => (
          <TooltipComponent data={data.data.appointmentData} />
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
        resourceCellComponent={(data) => <Room data={data.data.data} />}
      >
        <View 
        type='timelineMonth'
        />
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
