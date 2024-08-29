import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import FilterListIcon from '@mui/icons-material/FilterList';

const data = [
  { name: 'Backlog', value: 20, fill: '#f94144' },
  { name: 'To Do', value: 15, fill: '#f3722c' },
  { name: 'In Progress', value: 22, fill: '#f8961e' },
  { name: 'Done', value: 7, fill: '#90be6d' },
  { name: 'In Review', value: 10, fill: '#43aa8b' },
];

const TasksByStatus = () => (
  <div style={{ padding: '16px', borderRadius: '12px', backgroundColor: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
      <div style={{ fontWeight: '600', fontSize: '16px' }}>Upcoming Tasks by Status</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <FilterListIcon style={{ cursor: 'pointer', fontSize: '24px', color: '#aaa' }} />
        <span style={{ cursor: 'pointer', fontSize: '24px', color: '#aaa' }}>⋮</span>
      </div>
    </div>
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip contentStyle={{ borderRadius: '8px', borderColor: '#ddd' }} />
        <Bar dataKey="value" radius={[10, 10, 0, 0]}>
          {data.map((entry, index) => (
            <Bar key={`bar-${index}`} dataKey="value" fill={entry.fill} radius={[10, 10, 0, 0]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default TasksByStatus;
