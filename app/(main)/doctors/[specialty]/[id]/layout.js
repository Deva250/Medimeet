import { getDoctorById } from '@/actions/appointments'
import { redirect } from 'next/dist/server/api-utils';
import React from 'react'
import PageHeader from '@/components/page-header';
export async function generateMetadata({params}) {
   const{id}= await params;
   const{doctor}=await getDoctorById(id);
   return{
    title:`Dr.${doctor.name}-medimeet`,
    description:`book an appoinment with dr .${doctor.name},${doctor.specialty} specialist with${doctor.experience}years of experience`
   }
}
const DoctorProfileLayout =async ({children,params}) => {
     const{id}= await params;
   const{doctor}=await getDoctorById(id);
   if(!doctor)redirect("/doctor");
  return (
    <div className='container mx-auto '>
    <PageHeader title={"Dr."+doctor.name}
    backlink={`/doctor/${doctor.specialty}`}
    backlabel={`back to ${doctor.specialty}`}>

    </PageHeader>
    {children}
    </div>
  )
}

export default DoctorProfileLayout