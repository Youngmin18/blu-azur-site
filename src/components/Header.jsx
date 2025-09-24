import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: "À propos", href: "#about" },
        { label: "Localisation", href: "#location" },
        { label: "Activités", href: "#activities" },
    ];

    return (
        <nav className="absolute top-0 left-0 right-0 z-30 h-20">
            <div className="container mx-auto px-6 md:pl-16 md:pr-8">
                <div className="flex items-center justify-between h-20 border-b border-white/20">
                    {/* Logo */}
                    <div className="flex-shrink-0 w-28 md:w-32">
                        <img src="https://res.cloudinary.com/dgnfshniq/image/upload/v1758743560/logo_ghnmge.png" alt="logo" className="w-full h-auto" />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8 text-white/90 font-medium">
                        {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="hover:text-white transition-colors"
                        >
                            {item.label}
                        </a>
                        ))}

                        <a
                        href="#reserve"
                        className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
                        >
                        Réservé
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white hover:bg-white/10 p-2 rounded-md"
                        >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden mt-2">
                        <div className="px-4 py-3 space-y-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                            {navItems.map((item, index) => (
                                <a
                                key={index}
                                href={item.href}
                                className="block px-3 py-2 text-white/90 hover:text-white rounded-md transition"
                                onClick={() => setIsOpen(false)}
                                >
                                {item.label}
                                </a>
                            ))}

                            {/* Réservé visible en mobile aussi */}
                            <a
                                href="#reserve"
                                className="block px-3 py-2 bg-blue-500 text-white text-center rounded-lg hover:bg-blue-600 transition"
                                onClick={() => setIsOpen(false)}
                            >
                                Réservé
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Header;
