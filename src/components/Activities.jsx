import { ChevronRightCircle } from "lucide-react";

const Activities = () => {
    const activitie1 = [
        { 
        image: "https://res.cloudinary.com/dgnfshniq/image/upload/v1758745238/img4_uujagz.png",
        nom: "Un patrimoine culturel\n d'exception", 
        description: "De Picasso à Cocteau, la Côte d'Azur a toujours été une terre d'inspiration pour les artistes. Musées, galeries et sites historiques jalonnent la région, offrant un voyage au cœur de l'art et de l'histoire entre Saint-Raphaël, Antibes et Saint-Paul-de-Vence.", 
        lien: "Le Festival de Cannes, Carnaval de Nice, Fête du Citron" 
        },
        { 
        image: "https://res.cloudinary.com/dgnfshniq/image/upload/v1758743495/img5_mmzsqx.png",
        nom: "Le sport au rythme de la Méditerranée", 
        description: "Du légendaire Grand Prix de Monaco aux défis de l'Ironman, en passant par le Marathon des Alpes-Maritimes, la région vibre au rythme des grands événements sportifs. Cyclisme sur la Route des Crêtes, golf sur des parcours prestigieux et voile lors des Régates de Saint-Tropez complètent ce décor idéal pour les amateurs de sport et d'adrénaline.", 
        lien: "Grand prix de Monaco, Ironman France - Nice, Marathon des Alpes-Maritimes, Régates de Saint-Tropez" 
        }
    ];

    const activitie2 = [
        { 
        image: "https://res.cloudinary.com/dgnfshniq/image/upload/v1758743477/img6_zagaal.png",
        nom: "Une destination gourmande et authentique", 
        description: "Les marchés provençaux dévoilent des saveurs du terroir, entre fromages affinés, huile d'olive et spécialités méditerranéennes. Vignerons passionnés et restaurants raffinés offrent une expérience gastronomique où tradition et créativité se rencontrent dans un cadre enchanteur.", 
        lien: "Consulter la liste des meilleurs restaurants" 
        },
        { 
        image: "https://res.cloudinary.com/dgnfshniq/image/upload/v1758743481/img7_q8ztgn.png",
        nom: "Des expériences inoubliables \nen famille", 
        description: "Entre villages pittoresques, marchés publics animés et escapades sur la route du littoral, Saint-Raphaël propose un cadre idéal pour partager des moments inoubliables. La diversité des activités en plein air fait de la région une destination prisée par les amateurs de découvertes et d'aventures en famille.", 
        },
        { 
        image: "https://res.cloudinary.com/dgnfshniq/image/upload/v1758743600/img8_i6rieo.png",
        nom: "L'évasion en pleine nature", 
        description: "Le Massif de l'Estérel déploie ses roches rouges entre ciel et mer, offrant des panoramas spectaculaires. Randonnées, balades côtières et sentiers sauvages permettent de s'imprégner d'un environnement préservé, idéal pour une parenthèse hors du temps. A voir : Grand Canyon du Verdon", 
        lien: "Consulter la liste des sentiers pédestres" 
        }
    ];

    return (
        <section id="activities">
            {/* Section présentation */}
            <div
                className="relative grid md:grid-cols-2 min-h-screen bg-cover bg-center px-12 md:px-16 xl:pl-32 py-16"
                style={{ backgroundImage: "url('https://res.cloudinary.com/dgnfshniq/image/upload/v1758746393/img1_zebomn.png')" }}
            >
                {/* Image */}
                <div
                    className="hidden md:block bg-cover rounded-xl w-[400px] h-[505px]"
                    style={{ backgroundImage: "url('https://res.cloudinary.com/dgnfshniq/image/upload/v1758746343/img2_nrwzfc.png')" }}
                ></div>

                {/* Texte */}
                <div className="max-w-xl text-white space-y-6 self-center">
                    <h3 className="text-3xl md:text-4xl text-center md:text-right">
                        Un point de départ idéal
                        <br />
                        <span className="font-semibold">pour découvrir la Côte d'Azur !</span>
                    </h3>

                    <p className="text-base leading-relaxed text-justify">
                        Entre mer et montagne, Saint-Raphaël est une destination idéale pour les amateurs de plein air et de découvertes. 
                        Randonnées dans le Massif de l'Estérel, sports nautiques sur les eaux cristallines de la Méditerranée, 
                        balades en bateau vers les îles de Lérins ou encore golf et cyclisme sur des parcours panoramiques, 
                        chaque journée offre son lot d'aventures. Entre marchés provençaux, villages perchés et animations locales, 
                        l'art de vivre azuréen se dévoile à chaque instant, faisant de Saint-Raphaël un lieu vibrant et inoubliable.
                    </p>
                </div>
            </div>
            
            {/* Section destination */}
            <div
                className="relative w-full bg-cover bg-center px-4 md:px-28 py-20"
                style={{ backgroundImage: "url('https://res.cloudinary.com/dgnfshniq/image/upload/v1758746556/img3_bs4g8v.png')" }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/10"></div>

                {/* ACTIVITIE 1 : slider sur mobile / grid sur desktop */}
                <div className="relative z-10">
                    <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 md:overflow-visible md:gap-6">
                        {activitie1.map((activite, index) => (
                            <div
                                key={index}
                                className="w-80 md:w-auto h-80 md:h-full md:min-w-0 bg-cover shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 rounded-[40px] flex-shrink-0 snap-center"
                                style={{ backgroundImage: `url('${activite.image}')` }}
                            >
                                <div className="mt-12 pt-24 px-12 pb-6 space-y-4 text-white">
                                    <h3 className="text-xl md:text-2xl font-bold  whitespace-pre-line ">{activite.nom}</h3>
                                    
                                    <p className="hidden md:block leading-relaxed text-justify">
                                        {activite.description}
                                    </p>

                                    {activite.lien && (
                                        <p className="text-sm">
                                            <span className="font-semibold">À voir :</span>{" "}
                                            <span className="text-blue-400 underline">{activite.lien}</span>
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ACTIVITIE 2 : slider sur mobile / grid sur desktop */}
                <div className="relative z-10 mt-12">
                    <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 xl:grid-cols-3 md:overflow-visible md:gap-6">
                        {activitie2.map((activite, index) => (
                            <div
                                key={index}
                                className="w-80 md:w-auto h-80 md:h-full md:min-w-0 bg-cover shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 rounded-[44px] flex-shrink-0 snap-center"
                                style={{ backgroundImage: `url('${activite.image}')` }}
                            > 
                                <div className=" mt-28 pt-4 md:pt-24 px-12 pb-12 text-white space-y-4">
                                    <h3 className="text-xl md:text-2xl font-bold text-center md:text-start whitespace-pre-line">{activite.nom}</h3>
                                    <p className="hidden md:block leading-relaxed text-justify">{activite.description}</p>
                                    {activite.lien && (
                                        <a
                                            href="#"
                                            className="flex items-center gap-2 px-5 py-2 text-blue-400 border border-[#4097FF] rounded-full text-sm font-medium hover:bg-blue-500 transition"
                                        >
                                            {activite.lien}
                                            <ChevronRightCircle size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Activities;
