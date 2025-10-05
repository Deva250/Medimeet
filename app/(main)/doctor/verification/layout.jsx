import React from 'react'

import PageHeader from '@/components/page-header'
import { Stethoscope } from 'lucide-react'
export const metadata = {
  title: "Doctor Verification - BookDoc",
  description: "Verify your account as a doctor to access exclusive features and tools.",
}
const DoctorDashboardlayout = ({children}) => {
  return (
    <div className='container mx-auto px-4 py-8 '>
      <PageHeader icon={<Stethoscope/> } title={'doctor dashboard'}></PageHeader>
      {children}
    </div>
  )
}

export default DoctorDashboardlayout