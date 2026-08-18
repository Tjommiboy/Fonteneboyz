import DatoForm  from '../../components/DatoForm/DatoForm'
import {useRouter} from 'next/navigation'

export default function BookingTid(){
    const router = useRouter()
    return (
        <section>
            <DatoForm />
            <button onClick={router.back}></button>
        </section>
    )
}