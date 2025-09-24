import React, { useState } from "react";
import {
	Facebook,
	Instagram,
	Twitter,
	Youtube,
	ChevronLeft,
	ChevronRight,
	ChevronRightCircle,
} from "lucide-react";

const Hero = () => {
	const socialLinks = [
		{ icon: Facebook, href: "#", label: "Facebook" },
		{ icon: Youtube, href: "#", label: "YouTube" },
		{ icon: Twitter, href: "#", label: "Twitter" },
		{ icon: Instagram, href: "#", label: "Instagram" },
	];

	const images = ["https://res.cloudinary.com/dgnfshniq/image/upload/v1758743511/img1_goawuo.png", "https://res.cloudinary.com/dgnfshniq/image/upload/v1758743518/img2_cazdhz.png"];

	const [current, setCurrent] = useState(0);

	const prevSlide = () => {
		setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	};

	const nextSlide = () => {
		setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	};

	return (
		<section
			className="relative h-screen w-full bg-cover bg-center flex flex-col lg:flex-row items-center justify-between"
			style={{ backgroundImage: "url('https://res.cloudinary.com/dgnfshniq/image/upload/v1758743566/heroBgImg_kdjyhu.jpg')" }}
		>
			{/* Overlay sombre */}
			<div className="absolute inset-0 bg-gradient-to-r from-black/85 to-white/15"></div>

			{/* Bande bleue */}
			<div className="hidden md:block absolute top-0 left-0 h-full md:w-16 bg-blue-400/45 z-10"></div>

			{/* Sidebar sociale */}
			<div className="hidden md:flex absolute top-2/3 left-3 md:flex-col md:gap-4 text-white z-30">
				{socialLinks.map((social, index) => {
					const IconComponent = social.icon;
					return (
						<a
							key={index}
							href={social.href}
							aria-label={social.label}
							className="w-10 h-10 flex items-center justify-center hover:bg-white/20 rounded-full transition"
						>
							<IconComponent className="w-5 h-5" />
						</a>
					);
				})}
			</div>

			{/* Contenu texte */}
			<div className="relative z-10 mt-44 md:mt-28 lg:mt-0 text-white px-12 md:pl-14 lg:pl-36 md:max-w-3xl lg:max-w-2xl">
				<h2 className="text-3xl md:text-5xl font-bold leading-tight">
					Votre évasion <br />
					<span className="font-light">sur la Côte d'Azur !</span>
				</h2>

				<p className="mt-6 text-sm md:text-base leading-relaxed text-justify mb-8">
					Blu Azur vous invite à découvrir le charme de Saint-Raphaël, une
					destination d'exception nichée entre Cannes et Saint-Tropez. Nos
					appartements tout équipés, situés dans un domaine privé sécurisé,
					offrent un cadre verdoyant et paisible, à quelques pas de la marina de
					Santa Lucia, des plages de sable fin et du centre-ville animé. Profitez
					d'un séjour alliant confort, sérénité et élégance au cœur de la
					Riviera française !
				</p>

				<button className="flex justify-between items-center text-white gap-3 px-6 py-3 border w-full border-white rounded-full hover:bg-white/20 transition">
					Réservez dès maintenant votre séjour!
					<ChevronRightCircle size={18} />
				</button>
			</div>

			{/* Images scrollables / carousel */}
			<div className="absolute bottom-12 right-4 md:right-10 flex items-center w-[90%] md:w-auto">
				{/* Version mobile : scroll horizontal */}
				<div className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2">
					{images.map((img, index) => (
						<div
							key={index}
							className="flex-shrink-0 snap-center w-64 h-40 rounded-xl overflow-hidden shadow-lg"
						>
							<img
								src={img}
								alt={`hero-mobile-${index}`}
								className="w-full h-full object-cover"
							/>
						</div>
					))}
				</div>

				{/* Version desktop : carousel avec flèches */}
				<div className="hidden md:flex items-center relative gap-4">
					{/* Flèche gauche */}
					<button
						onClick={prevSlide}
						className="p-2 bg-white/70 hover:bg-white rounded-full shadow-md"
					>
						<ChevronLeft className="w-6 h-6 text-gray-700" />
					</button>

					{/* Images */}
					<div className="flex items-center overflow-hidden">
						{images.map((img, index) => (
						<div
							key={index}
							className={`transition-all duration-500 ease-in-out ${
							index === current
								? "w-80 h-56 scale-100"
								: "w-72 h-52 scale-90"
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
						className="p-2 bg-white/70 hover:bg-white rounded-full shadow-md"
					>
						<ChevronRight className="w-6 h-6 text-gray-700" />
					</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
