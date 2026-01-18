import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.primary': 'Primary School',
    'nav.secondary': 'Secondary School',
    'nav.eventHall': 'Event Hall',
    'nav.contact': 'Contact',
    
    // Motto
    'motto': 'Success at the end of the effort',
    
    // Common
    'learnMore': 'Learn More',
    'seeMore': 'See More',
    'contactUs': 'Contact Us',
    'bookNow': 'Book Now',
    'getStarted': 'Get Started',
    'readMore': 'Read More',
    'viewDetails': 'View Details',
    
    // Hero
    'hero.title': 'Complex Pascal',
    'hero.subtitle': 'Excellence in Bilingual Education & Premier Event Venue',
    'hero.bilingual': 'Bilingual Education • English & French',
    'hero.discoverSchools': 'Discover Our Schools',
    'hero.eventHall': 'Event Hall',
    
    // Primary
    'primary.title': 'Primary School',
    'primary.subtitle': 'Building strong foundations for lifelong learning',
    'primary.francophone': 'Francophone Section',
    'primary.anglophone': 'Anglophone Section',
    
    // Secondary
    'secondary.title': 'Secondary School',
    'secondary.subtitle': 'Excellence in education, preparing tomorrow\'s leaders',
    
    // Event Hall
    'eventHall.title': 'Event Hall',
    'eventHall.subtitle': 'A prestigious venue for your special moments',
    'eventHall.bookHall': 'Book the Hall',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with Complex Pascal',
    'contact.message': 'Contact us for more information',
    
    // Footer
    'footer.about': 'Bilingual education excellence and premier event venue in Cameroon.',
    'footer.quickLinks': 'Quick Links',
    'footer.ourSchools': 'Our Schools',
    'footer.rights': 'All rights reserved',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.primary': 'École Primaire',
    'nav.secondary': 'École Secondaire',
    'nav.eventHall': 'Salle de Fête',
    'nav.contact': 'Contact',
    
    // Motto
    'motto': 'Le succès au bout de l\'effort',
    
    // Common
    'learnMore': 'En Savoir Plus',
    'seeMore': 'Voir Plus',
    'contactUs': 'Contactez-Nous',
    'bookNow': 'Réserver Maintenant',
    'getStarted': 'Commencer',
    'readMore': 'Lire Plus',
    'viewDetails': 'Voir Détails',
    
    // Hero
    'hero.title': 'Complex Pascal',
    'hero.subtitle': 'Excellence en Éducation Bilingue & Lieu d\'Événements de Premier Ordre',
    'hero.bilingual': 'Éducation Bilingue • Anglais & Français',
    'hero.discoverSchools': 'Découvrir Nos Écoles',
    'hero.eventHall': 'Salle de Fête',
    
    // Primary
    'primary.title': 'École Primaire',
    'primary.subtitle': 'Construire des bases solides pour l\'apprentissage tout au long de la vie',
    'primary.francophone': 'Section Francophone',
    'primary.anglophone': 'Section Anglophone',
    
    // Secondary
    'secondary.title': 'École Secondaire',
    'secondary.subtitle': 'Excellence en éducation, préparant les leaders de demain',
    
    // Event Hall
    'eventHall.title': 'Salle de Fête',
    'eventHall.subtitle': 'Un lieu prestigieux pour vos moments spéciaux',
    'eventHall.bookHall': 'Réserver la Salle',
    
    // Contact
    'contact.title': 'Contactez-Nous',
    'contact.subtitle': 'Prenez contact avec Complex Pascal',
    'contact.message': 'Contactez-nous pour plus d\'informations',
    
    // Footer
    'footer.about': 'Excellence en éducation bilingue et lieu d\'événements premier au Cameroun.',
    'footer.quickLinks': 'Liens Rapides',
    'footer.ourSchools': 'Nos Écoles',
    'footer.rights': 'Tous droits réservés',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
