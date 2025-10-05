import { useState } from "react";
import { toast } from "sonner";

const usefetch=(cb)=>{
    const[data,setdata]=useState(undefined); 
    const[loading,setloading]=useState(null);
    const[error,seterror]=useState(null);

    const fn=async(...agrs)=>{

        setloading(true);
        seterror(null);
        try{ 
            const response=await cb(...agrs);
            setdata(response);
            seterror(null);
}
        catch(error){
            seterror(error);
            toast.error(error.message);
        }
        finally{
            setloading(false);  
        }
return {data,loading,error,fn};
};
return {data,loading,error,fn,setdata}
};
export default usefetch;