import './dashboard.css';
import DashboardOptions from './DashboardOptions';
import DailyStreak from './DailyStreak';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './options-components/Profile';
import HabitList from './options-components/HabitList';
import AchievementsAndAwards from './options-components/AchievementsAndAwards';
const DashBoard = () => {
  return (
    <div className='dashboard-container'>
      <div className="flex  h-12 header justify-center font-semibold text-center text-4xl">DASHBOARD</div>
      <div className="flex inner-container w-full">
        <div className="flex-row inner-left w-1/4 overflow-y-auto hide-scrollbar items-center justify-center m-1">
           <DailyStreak percentage={90} />
           <DashboardOptions/>
        </div>
        <div className="flex w-3/4 overflow-y-auto hide-scrollbar inner-right  m-1">
        <Routes>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/habit-list" element={<HabitList/>}/>
              <Route path="/achievements-and-rewards" element={<AchievementsAndAwards/>}/>

        </Routes>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
