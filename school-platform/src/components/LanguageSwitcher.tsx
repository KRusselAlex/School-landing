import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-muted/50 rounded-full p-1">
      <Globe className="w-4 h-4 text-muted-foreground ml-2" />
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-full transition-all ${
          language === 'en'
            ? 'bg-primary text-white'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('fr')}
        className={`px-3 py-1 rounded-full transition-all ${
          language === 'fr'
            ? 'bg-primary text-white'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        FR
      </button>
    </div>
  );
}
