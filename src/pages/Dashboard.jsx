 import React, {useState} from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer,Tooltip,Legend } from 'recharts';

function Dashboard(){
    const data = [
    { name: 'Jan', joiners: 0, old: 0 },
    { name: 'Feb', joiners: 13, old: 7 },
    { name: 'Mar', joiners: 10, old: 9 },
    { name: 'Apr', joiners: 13, old: 9 },
    { name: 'May', joiners: 29, old: 17 },
    { name: 'Jun', joiners: 82, old: 34 },
       ];
  const [showLastMonth, setShowLastMonth] = useState(false);
  const currentJoiners = data[data.length - 1].joiners;
  const lastMonthJoiners = data[data.length - 2].joiners;
  const toggleSummary = () => {
  setShowLastMonth((prev) => !prev);
  };
    return(
     <div className="dashboard">
      <div className="dashboard-card">
        <div className="card-left">
        < h2 style={{ marginBottom: '4px' }}>Dashboard</h2>
         <p className="otext">Overview of last month</p>
         <div className="spacer-sm" />
          <div className="spacer" />
          <div className="spacer" />
          <p className="earning-title">
          {showLastMonth ? 'Last Month Summary' : 'Current Month Earning'}
          </p>
          <h1 className="earning-number">
          {showLastMonth ? lastMonthJoiners : currentJoiners}
          </h1>
          <p className="joiners-text">New Joiners</p>
          <button className="summary-button" onClick={toggleSummary}>{showLastMonth ? 'Current Month Summary' : 'Last Month Summary'}</button>
        </div>
       <div className="card-right">
  <div className="chart-container">
    <div className="chart-header">
      <div className="time-filters">
        <span className="filter">Daily</span>
        <span className="filter">Weekly</span>
        <span className="filter">Monthly</span>
        <span className="filter">Yearly</span>
      </div>
      <div className="custom-legend">
        <span className="legend-item">
          <span className="color-dot orange" /> New
        </span>
        <span className="legend-item">
          <span className="color-dot purple" /> Old
        </span>
      </div>
    </div>

    <div className="chart-placeholder">
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}
        margin={{ top: 35, right: 40, left: 40, bottom: 0 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="joiners"
            stroke="#F97316"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="old"
            stroke="#8B5CF6"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
</div>

      </div>
    </div>
    )
}
export default Dashboard