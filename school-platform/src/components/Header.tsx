import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigation } from '../contexts/NavigationContext';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const { navigateTo } = useNavigation();

  const handleNavigation = (page: 'home' | 'primary' | 'secondary' | 'eventHall' | 'contact') => {
    navigateTo(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavigation('home')}>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">CP</span>
              </div>
              <div>
                <h1 className="text-xl text-primary leading-tight">Complex Pascal</h1>
                <p className="text-xs text-muted-foreground italic">{t('motto')}</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => handleNavigation('home')}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => handleNavigation('primary')}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('nav.primary')}
            </button>
            <button
              onClick={() => handleNavigation('secondary')}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('nav.secondary')}
            </button>
            <button
              onClick={() => handleNavigation('eventHall')}
              className="text-foreground hover:text-secondary transition-colors"
            >
              {t('nav.eventHall')}
            </button>
            <LanguageSwitcher />
            <Button
              onClick={() => handleNavigation('contact')}
              className="bg-secondary hover:bg-secondary/90"
            >
              {t('nav.contact')}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => handleNavigation('home')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => handleNavigation('primary')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                {t('nav.primary')}
              </button>
              <button
                onClick={() => handleNavigation('secondary')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                {t('nav.secondary')}
              </button>
              <button
                onClick={() => handleNavigation('eventHall')}
                className="text-left text-foreground hover:text-secondary transition-colors py-2"
              >
                {t('nav.eventHall')}
              </button>
              <div className="py-2">
                <LanguageSwitcher />
              </div>
              <Button
                onClick={() => handleNavigation('contact')}
                className="bg-secondary hover:bg-secondary/90 w-full"
              >
                {t('nav.contact')}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}