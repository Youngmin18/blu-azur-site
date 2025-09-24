import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const About = () => {
	const images = [
		"https://res.cloudinary.com/dgnfshniq/image/upload/v1758743370/img1_scxfsg.png",
		"https://res.cloudinary.com/dgnfshniq/image/upload/v1758743364/img2_xtdezv.png",
	];

	const skeleton = [
		{ src: "https://res.cloudinary.com/dgnfshniq/image/upload/v1758743374/img4_w4g0sb.png", description: "Sports nautiques, plongée, voile" },
		{ src: "https://res.cloudinary.com/dgnfshniq/image/upload/v1758743573/img5_iuvodg.png", description: "Randonnées et vélo dans l'Estérel" },
		{ src: "https://res.cloudinary.com/dgnfshniq/image/upload/v1758743406/img6_oavnuc.png", description: "Casino et vie nocturne animée" },
		{ src: "https://res.cloudinary.com/dgnfshniq/image/upload/v1758744014/img7_iuja5v.png", description: "Villages perchés et marchés provençaux" },
		{ src: "https://res.cloudinary.com/dgnfshniq/image/upload/v1758744020/img8_t342pw.png", description: "Un paradis pour les golfeurs" },
		{ src: "https://res.cloudinary.com/dgnfshniq/image/upload/v1758743420/img9_qd4p2p.png", description: "Montagne et vélo de route" },
	];

	const [current, setCurrent] = useState(0);

	const prevSlide = () => {
		setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	};

	const nextSlide = () => {
		setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	};

	return (
		<section id="about">
			{/* Section présentation */}
			<div className="bg-white flex flex-col lg:flex-row items-center justify-between px-12 lg:px-28 py-16 md:py-28 gap-12">
				{/* Texte */}
				<div className="max-w-xl text-gray-800 space-y-6">
					<h3 className="text-3xl md:text-4xl leading-snug font-semibold">
						Le confort et la sérénité d'un <br />
						<span className="font-bold">appartement privé</span>
					</h3>

					<p className="text-base leading-relaxed text-justify">
						Blu Azur vous propose des appartements élégants et spacieux,
						conçus pour accueillir de 2 à 6 personnes. Offrant un cadre
						confortable et moderne, ils sont parfaits pour une escapade
						détente ou un séjour prolongé.
					</p>

					<div className="space-y-3 text-sm text-gray-700">
						<h3 className="text-2xl text-gray-900">Les inclusions :</h3>

						<ul className="list-disc list-inside items-center text-justify"> 
							<li className="marker:text-blue-500 marker:text-xl">Stationnement privé</li> 
							<li className="marker:text-blue-500 marker:text-xl">Piscine extérieure avec chaises longues</li> 
							<li className="marker:text-blue-500 marker:text-xl">Linge de lit et serviettes</li> 
							<li className="marker:text-blue-500 marker:text-xl">Télévision, téléphone et Wi-Fi (accès au salon)</li> 
							<li className="marker:text-blue-500 marker:text-xl">Réfrigérateur, cuisinière, lave-vaisselle, vaisselle</li> 
							<li className="marker:text-blue-500 marker:text-xl">Kit bébé: comprend un lit parapluie avec un vrai matelas et une chaise haute</li> 
							<li className="marker:text-blue-500 marker:text-xl">
								Autres commodités en prêt à la réception: jeux de société, livres, raquettes et balles de ping-pong, sèche-cheveux, 
								fer et planche à repasser, adaptateur pour les prises étrangères et cache-prises pour les enfants.
							</li> 
						</ul>
					</div>
				</div>

				{/* Carousel / Slider */}
				<div className="relative w-full flex justify-center">
					{/* --- Mobile Slider --- */}
					<div className="flex md:hidden gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide w-full">
						{images.map((img, index) => (
						<div
							key={index}
							className="flex-shrink-0 snap-center w-72 h-96 rounded-xl overflow-hidden shadow-lg"
						>
							<img
							src={img}
							alt={`carousel-${index}`}
							className="w-full h-full object-cover"
							/>
						</div>
						))}
					</div>

					{/* --- Desktop Carousel --- */}
					<div className="hidden md:flex relative items-center">
						{/* Flèche gauche */}
						<button
							onClick={prevSlide}
							className="absolute -left-8 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow-md"
							>
							<ChevronLeft className="w-8 h-8 text-gray-700" />
						</button>

						<div className="flex items-center overflow-hidden">
							{images.map((img, index) => (
								<div
								key={index}
								className={`transition-all duration-500 ease-in-out mx-2 ${
									index === current
									? "w-72 h-96 scale-100 opacity-100"
									: "w-64 h-80 scale-95 opacity-70"
								} rounded-xl overflow-hidden shadow-lg`}
								>
								<img
									src={img}
									alt={`carousel-${index}`}
									className="w-full h-full object-cover"
								/>
								</div>
							))}
						</div>

						{/* Flèche droite */}
						<button
							onClick={nextSlide}
							className="absolute -right-8 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow-md"
						>
							<ChevronRight className="w-8 h-8 text-gray-700" />
						</button>
					</div>
				</div>
			</div>

			{/* Section destination */}
			<div
				className="min-h-screen bg-cover bg-center relative"
				style={{ backgroundImage: "url('https://res.cloudinary.com/dgnfshniq/image/upload/v1758741412/img3_wnfubh.png')" }}
			>
				<div className="relative text-white text-justify lg:text-center py-20 space-y-10 px-12">
					<h3 className="text-3xl md:text-4xl leading-snug text-center font-semibold">
						Saint Raphaël, l'endroit parfait pour <br />
						<span className="font-bold">vivre la Côte d'Azur</span>
					</h3>

					<p className="max-w-3xl mx-auto text-base leading-relaxed pb-8">
						Avec ses plages dorées, ses 300 jours de soleil et ses calanques sauvages,
						Saint-Raphaël est une destination de rêve. Entre mer turquoise et rochers rouges
						de l'Estérel, elle offre un cadre idyllique pour la détente et l'aventure.
					</p>

					{/* Icônes d’activités */}
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
						{skeleton.map((item, index) => (
							<div
								key={index}
								className="flex flex-col items-center text-center space-y-3"
							>
								<div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
									<img src={item.src} alt="" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
								</div>
								
								<p className="text-sm">{item.description}</p>
							</div>
						))}
					</div>

					<p className="max-w-3xl mx-auto text-base leading-relaxed pt-8">
						Flânez sur la Promenade des Bains, explorez les criques secrètes
						ou partez en mer depuis son port de plaisance. Saint-Raphaël,
						c'est la Côte d'Azur dans toute sa splendeur !
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
