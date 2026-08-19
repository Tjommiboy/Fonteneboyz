import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
<<<<<<< HEAD
      <>
        <main>
          <div className='m-auto flex justify-center'>
            <Link className='bg-gray-500 text-black text-bold' href='/Booking_tid'>Booking</Link>
          </div>
        </main>
      </>
=======
      <main>
        <div className='m-auto flex-row justify-center'>
          <div className=''>
            <h1>Velkommen til Omvising</h1>
          </div>
          <p></p>
          
          <Link className='bg-orange-300 rounded-xl text-black text-bold px-4' href='/Booking_tid'>Booking</Link>
        </div>
      </main>
>>>>>>> bdfdba5664e642d02862ce0d907362799c026e24
  );
}
