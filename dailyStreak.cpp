import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './dailystreak.css'
const DailyStreak: React.FC<{ percentage: number }> = ({ percentage }) => {
    return (
        <div className='daily-streak-container'>
            <svg width="0" height="0">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f00" />
                        <stop offset="50%" stopColor="blue" />
                        <stop offset="100%" stopColor="violet" />
                    </linearGradient>
                </defs>
            </svg>

            <div className="top-container">
                <div className='title'>Daily Streak</div>
                <CircularProgressbar
                    value={percentage}
                    className='circular-progress'
                    text={`${percentage} days`}
                    styles={buildStyles({
                        textColor: '#000', 
                        pathColor: 'url(#gradient)', 
                        trailColor: '#d6d6d6',
                    })}
                />
            </div>
            <div className="bottom-container">
                <button className='complete-goal-button box'>
                     <p>Go!</p>
                     <p>Complete Today Goal</p>
                </button>
            </div>
        </div>
    );
};


export default DailyStreak;
