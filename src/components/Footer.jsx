import { Facebook, Mail, Phone } from "lucide-react";
const Footer = () => {
    const ContactLinks = [
        { icon: Mail, href: "#", label: "Email", value: "info@bluazur.com" },
        { icon: Phone, href: "#", label: "Télephone", value: "+1 555 555-5555" },
        { icon: Facebook, href: "https://www.facebook.com/vacances.BLUazur", label: "Facebook", value: "@ BLU Azur" },
    ];

    return (
        <footer className=" text-white">
            <div className="py-24 flex justify-center gap-8 md:gap-44 items-center bg-[#4097FF]">
                <img src="https://res.cloudinary.com/dgnfshniq/image/upload/v1758743560/logo_ghnmge.png" alt="logo" className="w-1/3 md:w-48 h-auto" />

                <div >
                    <h3 className="text-2xl">Contactez-nous</h3>
                    <div className="text-sm py-4 items-center">
                        {ContactLinks.map((contact, index) => {
                            const IconComponent = contact.icon;
                            return (
                                <a 
                                    key={index}
                                    href={contact.href}
                                    aria-label={contact.label}
                                    className="flex gap-3 py-2 items-center"
                            >
                                <IconComponent className="text-xl text-[#4097FF] px-1 bg-white rounded-full" />
                                {contact.value}
                            </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="text-sm flex py-6 justify-center bg-[#2161AE]">
                <p>&copy; Tous droits réservés à Blur Azur</p>
            </div>
            

        </footer>
    );
}

export default Footer;