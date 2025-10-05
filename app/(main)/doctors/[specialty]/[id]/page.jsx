import { getAvailableTimeSlots, getDoctorById } from '@/actions/appointments';
import { redirect } from 'next/dist/server/api-utils';
import React from 'react'

import { DoctorProfile } from './_components/doctor-profile';

const DoctorProfilePage = async ({params}) => {
    const{id}=await params;
    try{
        const[doctorData,slotsData]=await Promise.all([
            getDoctorById(id),
            getAvailableTimeSlots(id),
        ]);
        return(
    <DoctorProfile 
                doctor={doctorData.doctor}
                availableDays={slotsData.days||[]}
    
    
                ></DoctorProfile>)
}catch(error){
    console.error("Error loading doctor profile:",error);
    redirect("/doctors");
    }
  
}

export default DoctorProfilePage