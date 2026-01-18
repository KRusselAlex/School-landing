import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function WhatsAppButton() {
  const { language } = useLanguage();
  
  const handleWhatsAppClick = () => {
    // Replace with the actual WhatsApp number for Complex Pascal
    const phoneNumber = "237XXXXXXXXX"; // Format: country code + number (no + or spaces)
    const message = encodeURIComponent(
      language === 'en' 
        ? "Hello, I would like more information about Complex Pascal." 
        : "Bonjour, je souhaite obtenir plus d'informations sur Complex Pascal."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg z-50 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="ml-3 mr-2 max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
        {language === 'en' ? 'Contact Us' : 'Contactez-nous'}
      </span>
    </button>
  );
}