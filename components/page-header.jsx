import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { ArrowLeft } from 'lucide-react'

const pageHeader = (
    {
        icon,
        title,
        backlink="/",
    backlabel=" back to Home"    }
) => {
  return (
    <div className='flex flex-col justify-between gap-5 mb-8'>
        <Link href={backlink}>
        <Button 
        variant="outline"
        size="sm"
        className="mb-2 border-emerald-900/30"
        >
            <ArrowLeft className='h-4 w-4 mr-2'/>
            {backlabel}
        </Button>
        </Link>
        <div className='flex items-center gap-3'>
            {icon && (
                <div className='text-emerald-900'>
                    {React.cloneElement(icon,
                         {className: "h-12 md:h-14 w-12 md:w-14"})}
                    </div>
            )}
            <h1 className='text-4xl md:text-5xl text-emerald-700'>{title}</h1>

        </div>
        </div>

  )
}

export default pageHeader