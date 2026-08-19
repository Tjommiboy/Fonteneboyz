import Image from 'next/image'
import DatoForm  from '../../components/DatoForm/DatoForm'
import Link from 'next/link'

export default function BookingTid(){
    return (
        <section>
            <DatoForm />
            <Link href=>Tilbake</Link>
        </section>
    )
}