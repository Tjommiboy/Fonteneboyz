import { ReactNode } from "react";

export default function BookingPage({children}: {children: ReactNode}){
    return (
        <main>
            <div>
                {children}
            </div>
        </main>
    )
}