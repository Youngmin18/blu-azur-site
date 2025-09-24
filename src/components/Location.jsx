import { ChevronRightCircle } from "lucide-react";

function Location() {
    return (
        <section
            id="location"
            className="relative flex flex-col md:grid md:grid-cols-2 gap-8 min-h-screen bg-cover bg-center px-12 md:px-14 xl:px-32 py-16"
            style={{ backgroundImage: "url('https://res.cloudinary.com/dgnfshniq/image/upload/v1758746338/img1_jfm4ke.png')" }}
        >
            {/* Texte */}
            <div className="max-w-xl text-gray-800 space-y-6 self-center">
                <h3 className="text-3xl md:text-4xl leading-snug font-semibold text-center md:text-start">
                    Où se trouve Blu Azur à  <br />
                    <span className="font-bold">Saint-Raphaël ?</span>
                </h3>

                <p className="text-base leading-relaxed text-justify">
                    Blu Azur est idéalement situé entre Saint-Tropez et Cannes, 
                    au cœur de l'une des plus belles stations balnéaires de France. Nos appartements se trouvent dans un domaine privé sécurisé, 
                    entouré de verdure, à quelques minutes à pied de la plage sablonneuse de Santa Lucia et de la marina. Proche du centre-ville 
                    de Saint-Raphaël, la résidence permet un accès facile aux boutiques, restaurants et animations locales. Une station d'arrêt 
                    d'autobus est située à la sortie du site, facilitant les déplacements, 
                    et une boulangerie à proximité vous offre du pain frais chaque matin pour bien commencer la journée.
                </p>

                <button className="flex items-center justify-center w-full md:w-1/2 gap-3 px-6 py-3 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition mx-auto md:mx-0">
                    Comment s'y rendre ?
                    <ChevronRightCircle size={18} />
                </button>
            </div>

            {/* Image */}
            <div className="relative flex justify-center items-center">
                <div
                    className="mt-6 md:mt-4 md:-mr-28 bg-cover rounded-xl w-[320px] h-[400px] md:w-[400px] md:h-[505px]"
                    style={{ backgroundImage: "url('https://res.cloudinary.com/dgnfshniq/image/upload/v1758743551/img3_mvlmcj.png')" }}
                >
                    {/* Images décoratives */}
                    <img
                        src="https://res.cloudinary.com/dgnfshniq/image/upload/v1758743552/img4_qp0t7j.png"
                        alt="map"
                        className="relative -top-12 right-8 md:-top-16 md:right-10 w-16 md:w-20"
                    />
                    <img
                        src="https://res.cloudinary.com/dgnfshniq/image/upload/v1758743554/location_qo10fp.png"
                        alt="position"
                        className="relative top-[87px] left-[237px] md:top-28 md:left-[300px] w-8 md:w-10"
                    />
                </div>
            </div>
        </section>
    );
}

export default Location;
