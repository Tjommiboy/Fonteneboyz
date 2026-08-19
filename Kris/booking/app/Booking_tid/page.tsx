import DatoForm  from '../../components/DatoForm/DatoForm'
import Link from 'next/link'
import {useRouter} from 'next/navigation'

export default function BookingTid(){
    const router = useRouter()
    return (
        <section>
            <DatoForm />
            <Link href=''>Tilbake</Link>
            <button onClick={router.back}></button>
        </section>
    )
}