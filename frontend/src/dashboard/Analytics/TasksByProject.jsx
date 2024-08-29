import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import FilterListIcon from '@mui/icons-material/FilterList';

const data = [
  { name: 'Project A', complete: 12, incomplete: 8 },
  { name: 'Project B', complete: 8, incomplete: 10 },
  { name: 'Project C', complete: 7, incomplete: 13 },
  { name: 'Project D', complete: 10, incomplete: 4 },
  { name: 'Project E', complete: 11, incomplete: 6 },
];

const TasksByProject = () => (
  <div style={{ padding: '16px', borderRadius: '12px', backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', height: '100%' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
      <div style={{ fontSize: '16px', fontWeight: '600', color: '#333' }}>Tasks by Project</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <FilterListIcon style={{ cursor: 'pointer', fontSize: '24px', color: '#aaa' }} />
        <span style={{ cursor: 'pointer', fontSize: '24px', color: '#aaa' }}>⋮</span>
      </div>
    </div>
    <ResponsiveContainer width="100%" height="80%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip contentStyle={{ borderRadius: '8px', borderColor: '#ddd' }} />
        <Bar dataKey="complete" stackId="a" fill="#1e3a8a" barSize={20} /> {/* Dark blue for completed tasks */}
        <Bar dataKey="incomplete" stackId="a" fill="#93c5fd" barSize={20} /> {/* Light blue for incomplete tasks */}
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default TasksByProject;
