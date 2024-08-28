import React from 'react';
import StatsBar from '../Home/StatsBar';
import TasksByStatus from './TasksByStatus';
import TasksByProject from './TasksByProject';
import TaskByAssignee from './TaskByAssignee';
import TaskCompletionOverTime from './TaskCompletionOverTime';

const Analytics = () => (
  <div style={{ padding: '24px' }}>
    <div style={{ marginBottom: '24px' }}>
      <StatsBar />
    </div>
    <div style={{ 
      display: 'grid', 
      gap: '24px', 
      gridTemplateColumns: 'repeat(2, 1fr)', 
      gridTemplateRows: 'repeat(2, 1fr)', 
      padding: '24px', 
      backgroundColor: '#ffffff', 
      borderRadius: '12px', 
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' 
    }}>
      <div>
        <TasksByStatus />
      </div>
      <div>
        <TasksByProject />
      </div>
      <div>
        <TaskByAssignee />
      </div>
      <div>
        <TaskCompletionOverTime />
      </div>
    </div>
  </div>
);

export default Analytics;
