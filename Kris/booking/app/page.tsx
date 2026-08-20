import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <main className="flex justify-center">
        <div className=''>
          <div className='mb-5'>
            <h1>Velkommen til Omvising</h1>
          </div>
          <p></p>
          
          <Link className='bg-orange-300 rounded-xl text-black text-bold px-4' href='/booking_tid'>Booking</Link>
        </div>
      </main>
  );
}
