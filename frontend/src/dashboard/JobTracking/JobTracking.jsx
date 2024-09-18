import React, { useState } from 'react'
import ActionBar from "./ActionBar"
import JobsTable from "./JobsTable"
import Kanban from "./Kanban"
const JobTracking = () => {
  const [view, setView] = useState('Table');
  return (
    <div>
      <ActionBar setView={setView} />
      <div className='py-[1rem]'>
        {view === 'Table' && <JobsTable />}
        {view === 'Kanban' && <Kanban />}
      </div>
    </div>
  )
}

export default JobTracking