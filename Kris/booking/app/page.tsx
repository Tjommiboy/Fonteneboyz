import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <main className="flex justify-center">
        <div className=''>
          <div className='my-8'>
            <h1 className="font-bold text-xl">Velkommen til Omvising</h1>
          </div>
          <p>
            Her bestiller du en avtale med oss 
          </p>
          
          <div className="px-16">
            <Link className='bg-orange-300 rounded-xl text-black text-bold px-4' href='/booking_tid'>Booking</Link>
          </div>
        </div>
      </main>
  );
}
