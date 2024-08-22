import React from 'react'
import ActionBar from "./ActionBar"
import JobsTable from "./JobsTable"

const JobTracking = () => {
  return (
    <div>
      <ActionBar />
      <div className='py-[1rem]'>
        <JobsTable />
      </div>
    </div>
  )
}

export default JobTracking