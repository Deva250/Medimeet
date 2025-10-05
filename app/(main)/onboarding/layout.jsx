import React from 'react'  
import { getCurrentUser } from '@/actions/onboarding';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Onboarding - BookDoc',
  description: 'Complete your profile to get started with BookDoc',
}

const Onboardinglayout = async ({ children }) => {
    const user = await getCurrentUser();
    if (user.role === "PATIENT") {
        redirect('/doctors');
    }
    else if (user.role === "DOCTOR") {
        if (user.verificationStatus === "VERIFIED") {
            redirect('/doctor');
        } else {
            redirect("/doctor/verification");
        }
    } else if (user.role === "ADMIN") {
        redirect('/admin');
    }
    return (
        <div className='container mx-auto px-4 py-12'>
            <div className='max-w-3xl mx-auto'>
                <div className='text-center mb-10'>
                    <h1 className='text-3xl md:text-4xl font-bold text-emerald-900 mb-2 '>
                        Welcome to medimeet
                    </h1>
                    <p className='text-muted-foreground text-lg'>Let's get started by completing your profile </p>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Onboardinglayout