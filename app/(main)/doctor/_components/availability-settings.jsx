"use client"
import { setAvailabilitySlots } from '@/actions/doctor'
import usefetch from '@/hooks/use-fetch'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Card,CardDescription,CardTitle ,CardContent,CardHeader} from '@/components/ui/card'
import { Clock, Loader, Loader2, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
import { format } from 'date-fns'

const AvailabilitySettings = ({slots}) => {
const [showForm, setShowForm] = useState(false);
const{loading,fn:sumbitSlots,data}=usefetch(setAvailabilitySlots);
 const {register,handleSubmit,formState:{errors}}= useForm({
   defaultValues:{
    startTime:"",
    endtime:"",
   }

  });
  function createLocalFromTime(_timeStr) {
    const[hours,minutes]=_timeStr.split(":").map(Number)
    const now = new Date();
    const date = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      hours,
      minutes,

  ); 
return date;
    
  }
  const onsubmit=async(data)=>{
    if(loading)return;
    const formData=new FormData();
    const startData=createLocalFromTime(data.startTime);
    const endData=createLocalFromTime(data.endTime);
    if(startData>=endData){
      toast.error("End time must be after start time " );
      return;
    }
    formData.append("startTime",startData.toISOString());
    formData.append("endTime",endData.toISOString());
    await sumbitSlots(formData);

  };
  useEffect(()=>{
    if(data&&data?.success){
      setShowForm(false);
      toast.success("Availabilty slots update successfully ");
    }
  },[data] );
  const formatTimeString=(dateString)=>{
    try{
      return format(new Date(dateString),"h:mm a");
    }catch(e){
      return"Invaild time"
    }
  };
  return (
     <Card className="border-emerald-900/20">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-white flex items-center">
          <Clock className="h-5 w-5 mr-2 text-emerald-400" />
          Availability Settings
        </CardTitle>
        <CardDescription>
          Set your daily availability for patient appointments
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!showForm?(<>

      <div className='mb-6'>
          <h3 className='text-lg font-medium text-white mb-3 '>
            Current Availability
          </h3>
          {slots.length==0? (<p className='text-muted-foreground'>
            you haven&apos;t set any availability slot yet.add your availability to start accepting </p>)
            :(
            <div>{slots.map((slot)=>{
              return(

              <div key={slot.id} 
              className="flex items-center p-3 rounded-md bg-muted/20 border border-emerald-900/20">
                <div className='bg-emerald-900/20 p-2 rounded-full mr-3'>
                <Clock className='h-4 w-4 text-emerald-400'/></div>
              
                  <p className='text-white font-medium'>
                  {formatTimeString(slot.startTime)}-{""}{formatTimeString(slot.endTime)}
                  </p>
               
              </div>
              );
            })}</div>)
            }
      </div>



      
         <Button onClick={()=> setShowForm(true)}
          className="w-full bg-emerald-600 hover:bg-emerald-700">
          <Plus className='h-4 w-4  mr-2'/>
            set availability time 
         </Button>
        
        
        </>):(<form className='space-y-4 border border-emerald-900/20 rounded-mb p-4' 
        onSubmit={handleSubmit(onsubmit)}>
        <h3 className='text-lg font-medium text-white mb-2'> set daily availability</h3>
        <div className='grid grid-col-1 sm:grid-cols-2'>
          <div className='space-y-2'>
            <Label htmlFor="startTime">Start Time</Label>
                <Input
                  id="startTime"
                  type="time"
                  {...register("startTime", {
                    required: "Start time is required",
                  })}
                  className="bg-background border-emerald-900/20"
                />
                {errors.startTime && (
                  <p className="text-sm font-medium text-red-500">
                    {errors.startTime.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="endTime">End Time</Label>
                <Input
                  id="endTime"
                  type="time"
                  {...register("endTime", { required: "End time is required" })}
                  className="bg-background border-emerald-900/20"
                />
                {errors.endtime && (
                  <p className="text-sm font-medium text-red-500">
                    {errors.endtime.message}
                  </p>
                )}
              </div>
            </div>

        <div className='flex justify-center-end space-x-3 pt-2'>
          <Button type="button"
          variant="outline"
          onClick={()=>setShowForm(false)}
          disabled={loading}
          className="border-emerald-900/30">Cancel</Button>
          <Button type="sumbit"
          disabled={loading}
          className="bg-emerald-600 hover:bg-emerald-700"
          >{loading?(<>
          <Loader2 className='mr-2 h-4 w-4 animate-spin'/>
          saving...
          </>):(
"Save Availability"
          )}</Button>
        </div>
        </form>)}
      </CardContent>
      </Card>
  )
}

export default AvailabilitySettings