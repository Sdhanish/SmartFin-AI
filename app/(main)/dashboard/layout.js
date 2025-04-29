import React, { Suspense } from 'react'
import DashboardPage from './page'
import { BarLoader } from 'react-spinners'


const DashboardLayout = () => {
  return (
    <div className='px-5'>
    
       
 
      {/* Dashboard page */}
      <Suspense fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea"/>}>
      <DashboardPage/>
      </Suspense>


    </div>
  )
}

export default DashboardLayout
