import 'devextreme/dist/css/dx.light.css';
import Scheduler, {Resource} from 'devextreme-react/scheduler';
import { data, priorityData, resourcesData } from './data';
import style from './style.module.css';
const views = ['timelineDay', 'timelineWeek', 'timelineMonth'];

const groups = ['priority'];
const currentDate = new Date(2021, 1, 2);
function App() {
  return (
      <Scheduler
        className={style.wrapper}
        timeZone="America/Los_Angeles"
        dataSource={data}
        views={views as any}
        defaultCurrentView="timelineMonth"
        defaultCurrentDate={currentDate}
        height={900}
        groups={groups}
        cellDuration={60}
        firstDayOfWeek={0}
        startDayHour={8}
        endDayHour={20}>
        <Resource
          fieldExpr="ownerId"
          allowMultiple={true}
          dataSource={resourcesData}
          label="Owner"
          useColorAsDefault={ true }
        />
        <Resource
          fieldExpr="priority"
          allowMultiple={false}
          dataSource={priorityData}
          label="Priority"
        />
      </Scheduler>
  );
}

export default App;
