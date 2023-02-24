import React from 'react'
import Clipboard from '../components/Clipboard'
import LineItem from '../components/LineItem'

const DAYS_OF_THE_WEEK = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday'
]
// todo: replace this with real data from external source
const SCHOOL_WORK = [1, 2, 3, 4, 5, 6, 7, 8]
const RESPONSIBILITIES = [1, 2, 3, 4, 5, 6, 7, 8]

const WeeklyScheduleAndResponsibilities = () => {
  return (
    <div className={'container mx-auto'}>
      <h1>Homeschool</h1>
      <h2>Schedule</h2>
      <div className={'columns-5 gap-2'}>
        {DAYS_OF_THE_WEEK.map((day) => (
          <div key={day} className={'w-full'}>
            <Clipboard title={day}>Content</Clipboard>
          </div>
        ))}
      </div>
      <h3 className={'text-center'}>Daily</h3>
      <div className={'grid grid-cols-2 gap-2'}>
        <div className={'w-full'}>
          <Clipboard title="School Work">
            {SCHOOL_WORK.map((activity) => (
              <div key={activity} className={'border-b-2 border-b-gray-200'}>
                <LineItem>{activity}</LineItem>
              </div>
            ))}
          </Clipboard>
        </div>
        <div className={'w-full'}>
          <Clipboard title="Responsibilities">
            {RESPONSIBILITIES.map((activity) => (
              <div key={activity} className={'border-b-2 border-b-gray-200'}>
                <LineItem>{activity}</LineItem>
              </div>
            ))}
          </Clipboard>
        </div>
      </div>
    </div>
  )
}

export default WeeklyScheduleAndResponsibilities
