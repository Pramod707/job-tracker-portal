import React from 'react';
import DataTable from 'react-data-table-component';

// Sample data
const data = [
  {
    id: 1,
    opportunityName: 'Data Scientist at Microsoft',
    company: 'Microsoft',
    companyLogo: 'M',
    addedBy: 'Placements',
    addedByInitials: 'JB',
    dueDate: 'Jan 23 2024',
    dueTime: '',
    status: 'In Review',
    statusColor: 'bg-green-200 text-green-800',
  },
  {
    id: 2,
    opportunityName: 'SWE at Microsoft',
    company: 'Microsoft',
    companyLogo: 'S',
    addedBy: 'Ace Academy',
    addedByInitials: 'JB',
    dueDate: 'Jan 25 2024',
    dueTime: '19:00',
    status: 'In Progress',
    statusColor: 'bg-yellow-200 text-yellow-800',
  },
  {
    id: 3,
    opportunityName: 'UX Designer at Google',
    company: 'Google',
    companyLogo: 'G',
    addedBy: '',
    addedByInitials: 'S',
    dueDate: 'Jan 25 2024',
    dueTime: '',
    status: 'Done',
    statusColor: 'bg-teal-200 text-teal-800',
  },
];

// Columns
const columns = [
  {
    name: '',
    cell: () => <input type="checkbox" className="form-checkbox" />,
    width: '50px',
  },
  {
    name: 'Opportunity Name',
    selector: row => row.opportunityName,
    sortable: true,
    cell: row => (
      <div className="flex items-center space-x-2">
        <input type="checkbox" />
        <div>{row.opportunityName}</div>
      </div>
    ),
  },
  {
    name: 'Company',
    selector: row => row.company,
    sortable: true,
    cell: row => (
      <div className="flex items-center space-x-2">
        <span className="font-semibold rounded-full px-2 py-1 text-white bg-gray-400">
          {row.companyLogo}
        </span>
        <span>{row.company}</span>
      </div>
    ),
  },
  {
    name: 'Added By',
    selector: row => row.addedBy,
    sortable: true,
    cell: row => (
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
          {row.addedByInitials}
        </div>
        <span>{row.addedBy}</span>
      </div>
    ),
  },
  {
    name: 'Due Date',
    selector: row => row.dueDate,
    sortable: true,
    cell: row => (
      <div className="text-gray-500">
        {row.dueDate} {row.dueTime && `, ${row.dueTime}`}
      </div>
    ),
  },
  {
    name: 'Status',
    selector: row => row.status,
    sortable: true,
    cell: row => (
      <span
        className={`px-2 py-1 text-xs font-semibold rounded-full ${row.statusColor}`}
      >
        {row.status}
      </span>
    ),
  },
];

function JobsTable() {
  return (
    <DataTable
    
      columns={columns}
      data={data}
      customStyles={{
        header: {
          style: {
            minHeight: '56px',
            borderTop: 'none',
          },
        },
        rows: {
          style: {
            minHeight: '72px',
            borderBottom: '1px solid #E2E8F0',
          },
        },
        headCells: {
          style: {
            paddingLeft: '16px',
            paddingRight: '16px',
            backgroundColor: '#F9FAFB',
          },
        },
        cells: {
          style: {
            paddingLeft: '16px',
            paddingRight: '16px',
          },
        },
      }}
      pagination
      highlightOnHover
      striped
    />
  );
}

export default JobsTable;
