import DatoForm  from '../../components/DatoForm/DatoForm'
<<<<<<< HEAD
import Link from 'next/link'
=======
import {useRouter} from 'next/navigation'
>>>>>>> bdfdba5664e642d02862ce0d907362799c026e24

export default function BookingTid(){
    const router = useRouter()
    return (
        <section>
            <DatoForm />
<<<<<<< HEAD
            <Link href=>Tilbake</Link>
=======
            <button onClick={router.back}></button>
>>>>>>> bdfdba5664e642d02862ce0d907362799c026e24
        </section>
    )
}