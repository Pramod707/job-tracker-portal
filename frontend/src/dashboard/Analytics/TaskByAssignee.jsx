import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, defs, linearGradient, stop } from 'recharts';
import FilterListIcon from '@mui/icons-material/FilterList';

const data = [
  { name: 'John Doe', value: 20 },
  { name: 'Jane Smith', value: 15 },
  { name: 'Sam Doe', value: 22 },
  { name: 'Rick Roe', value: 7 },
  { name: 'Ivy White', value: 10 },
];

const renderCustomLabel = (props) => {
  const { x, y, width, value } = props;
  const cx = x + width / 2;

  return (
    <g>
      <circle cx={cx} cy={y - 10} r={10} fill="#8884d8" />
      <text x={cx} y={y - 5} textAnchor="middle" fill="#fff" fontSize={12}>{value}</text>
    </g>
  );
};

const TaskByAssignee = () => (
  <div style={{ padding: '16px', borderRadius: '12px', backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', height: '100%' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
      <div style={{ fontSize: '16px', fontWeight: '600', color: '#333' }}>Tasks by Assignee</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <FilterListIcon style={{ cursor: 'pointer', fontSize: '24px', color: '#aaa' }} />
        <span style={{ cursor: 'pointer', fontSize: '24px', color: '#aaa' }}>⋮</span>
      </div>
    </div>
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0.3}/>
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.3}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip contentStyle={{ borderRadius: '8px', borderColor: '#ddd' }} />
        <Bar dataKey="value" fill="url(#colorUv)" radius={[10, 10, 0, 0]} barSize={20} label={renderCustomLabel}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill="url(#colorUv)" />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default TaskByAssignee;
