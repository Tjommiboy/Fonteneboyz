'use client'

import DatoForm  from '@/components/DatoForm/DatoForm'
import {useRouter} from 'next/navigation'

export default function BookingTid(){
    const router = useRouter()
    return (
        <section className='flex-row justify-center items-center space-y-10 mt-10'>
            <div className=''>
                <div className='mx-auto w-full'>
                    <DatoForm />
                </div>
            </div>
            <div className='flex justify-center'>
                <button className='font-bold rounded-md cursor-pointer bg-slate-200' onClick={() => router.back()}>Tilbake</button>
            </div>
        </section>
    )
}