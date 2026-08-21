import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <main className="flex justify-center">
        <div className='space-y-12 w-400 p-10'>
          <div className='flex justify-center'>
            <h1 className="font-bold text-4xl">Velkommen til Omvising</h1>
          </div>
          <div>
            <p className="font-bold text-xl font-sans">
              Lurer du på om Fontenehuset Bergen kan være noe for deg? Bestill en omvisning!
            </p>
          </div>
          <div className="">
            <p className="font-serif">
              Kom gjerne på en uforpliktende omvisning på huset vårt for å se hvordan det ser ut her hos oss, hva vi driver med og hils på noen av oss som jobber her. 
              Omvisninger varer som regel 30 min og inkluderer en liten runde på huset for å se de ulike enhetene og en liten prat over en kaffekopp.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Link className='bg-orange-300 rounded-xl text-black text-bold p-4' href='/booking_tid'>Booking</Link>
          </div>
        </div>
      </main>
  );
}
