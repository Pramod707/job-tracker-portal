import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import FilterListIcon from '@mui/icons-material/FilterList';

const data = [
  { name: 'Backlog', completed: 10, incomplete: 15 },
  { name: 'To Do', completed: 15, incomplete: 10 },
  { name: 'In Progress', completed: 20, incomplete: 5 },
  { name: 'Done', completed: 25, incomplete: 3 },
  { name: 'In Review', completed: 30, incomplete: 2 },
];

const TaskCompletionOverTime = () => (
  <div style={{ padding: '16px', borderRadius: '12px', backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', height: '100%' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
      <div style={{ fontSize: '16px', fontWeight: '600', color: '#333' }}>Task Completion Over Time</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <FilterListIcon style={{ cursor: 'pointer', fontSize: '24px', color: '#aaa' }} />
        <span style={{ cursor: 'pointer', fontSize: '24px', color: '#aaa' }}>⋮</span>
      </div>
    </div>
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip contentStyle={{ borderRadius: '8px', borderColor: '#ddd' }} />
        <Area type="monotone" dataKey="completed" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
        <Area type="monotone" dataKey="incomplete" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default TaskCompletionOverTime;
