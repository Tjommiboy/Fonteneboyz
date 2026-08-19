'use client'

import DatoForm  from '../../components/DatoForm/DatoForm'
import Link from 'next/link'
import {useRouter} from 'next/navigation'

export default function BookingTid(){
    const router = useRouter()
    return (
        <section>
            <DatoForm />
            <div className='bg-gray-150 hover:pointer flex aling-center'>
                <button className='text-bold' onClick={() => router.back()}>Tilbake</button>
            </div>
        </section>
    )
}