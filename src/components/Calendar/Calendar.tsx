import dayjs from 'dayjs';
import { Scheduler } from 'devextreme-react';
import { Editing, Resource } from 'devextreme-react/scheduler';
import { OptionChangedEventInfo } from 'devextreme/core/dom_component';
import dxScheduler from 'devextreme/ui/scheduler';
import { FC, useEffect, useState } from 'react';

import { Header } from 'src/components/Header/Header';
import { TooltipComponent } from 'src/components/Tooltip/TooltipComponent';
import { data, priorityData, resourcesData } from 'src/data';
import {
  handldleCheckView,
  handleAddDate,
  handleSubtractDate,
} from 'src/utils/utils';

import style from './style.module.css';

export const Calendar: FC = () => {
  const groups = ['priority'];
  const [currentDate, setCurrentDate] = useState(dayjs(new Date(2021, 1, 2)));
  const [currentView, setCurrentView] = useState<{
    type: string;
    intervalCount?: number;
  }>({ type: 'timelineMonth' });
  const [selectedView, setSelectedView] = useState<string>(currentView.type);
  useEffect(() => {
    setCurrentView(handldleCheckView(selectedView) ?? currentView);
  }, [selectedView]);
  return (
    <>
      <Header
        selectViewValue={selectedView}
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
        currentView={currentView.type as any}
        className={style.wrapper}
        timeZone="Europe/Moscow"
        dataSource={data}
        views={[currentView] as any} // eslint-disable-line
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
    </>
  );
};
