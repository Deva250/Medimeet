import React from 'react'
import PageHeader from '@/components/page-header';
import { redirect } from 'next/navigation';
import { getDoctorsBySpecialty } from '@/actions/doctors-listing';
import DoctorCard from '@/components/doctor-card';
const Specialtypage = async({params}) => {
    const{specialty}=await params;
    if(!specialty){
      redirect("/doctors")
    }
    const{doctors,error}=await getDoctorsBySpecialty(specialty);
    if(error){
      console.error("Error fetching doctors:",doctors)
    }
  return (
    <div className='space-y-5'>
    <PageHeader title={specialty.split("%20").join("")}
    backlink='doctors'
    backlabel='All specialities'>
</PageHeader>
{doctors&&doctors.length>0?(
  <div className='grid grid-cols-1 md:grid-cols-2'>
    {doctors.map(doctor=>(
      <DoctorCard key={doctor.id}doctor={doctor}/>
    ))}
  </div>

):(
<div className='text-center py-12'>
  <h3 className='text-xl font-medium text-white mb-2'>
    No doctors avialable 
  </h3>
  <p className='text-muted-foreground'>
  There are currently no verified doctors in this specialities.please check back later 
  </p>
</div>
)}
    </div>
  )
}

export default Specialtypage