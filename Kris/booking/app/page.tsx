import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <body>
        <div className='m-auto flex justify-center'>
          <Link className='bg-gray-500 text-black text-bold' href='/Booking_tid'>Booking</Link>
        </div>
      </body>
  );
}
