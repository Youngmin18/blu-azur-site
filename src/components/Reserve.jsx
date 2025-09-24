import { ChevronRightCircle } from "lucide-react";

function Reserve() {
    return (
        <div id="reserve" className="relative h-auto md:h-screen bg-cover w-full bg-center" style={{backgroundImage: "url('https://res.cloudinary.com/dgnfshniq/image/upload/v1758743511/img1_goawuo.png')"}} >
            {/* Overlay sombre - claire */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#4097FF]/95 to-white/0"></div>
            <div className="relative z-10 text-white text-center px-2 py-14 md:py-72 space-y-6">
                <h3 className="text-4xl">
                    Réservations
                </h3>

                <p className="max-w-xl mx-10 md:mx-auto text-base leading-relaxed py-2">
                    <span className="font-bold">Offrez-vous un séjour inoubliable </span>  
                    dans l'un de nos appartements Blu Azur. Profitez d'un cadre exceptionnel, 
                    entre confort, détente et découvertes, au cœur de Saint-Raphaël.
                </p>

                <button className="flex mx-12 md:mx-auto items-center text-white font-semibold gap-3 px-6 py-3 bg-[#4097FF] rounded-full">
                    Réservez dès maintenant votre séjour!
                    <ChevronRightCircle size={18} />
                </button>
            </div>
        </div>

    );
}

export default Reserve;