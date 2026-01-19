import { useLanguage } from '../contexts/LanguageContext';
import { useNavigation } from '../contexts/NavigationContext';
import { Award } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { language, t } = useLanguage();
  const { navigateTo } = useNavigation();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Motto Banner */}
        <div className="text-center mb-12 pb-8 border-b border-gray-700">
          <Award className="w-12 h-12 mx-auto mb-4 text-secondary" />
          <h3 className="text-2xl mb-2 italic text-secondary">
            "{t('motto')}"
          </h3>
          <p className="text-gray-400">Complex Pascal</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="mb-4">Complex Pascal</h4>
            <p className="text-sm text-gray-400">
              {t('footer.about')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button onClick={() => navigateTo('home')} className="hover:text-white transition-colors">
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-white transition-colors">
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('primary')} className="hover:text-white transition-colors">
                  {t('nav.primary')}
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('secondary')} className="hover:text-white transition-colors">
                  {t('nav.secondary')}
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('eventHall')} className="hover:text-white transition-colors">
                  {t('nav.eventHall')}
                </button>
              </li>
            </ul>
          </div>

          {/* Schools */}
          <div>
            <h4 className="mb-4">{t('footer.ourSchools')}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>{language === 'en' ? 'Primary School (Grades 1-6)' : 'École Primaire (Classes 1-6)'}</li>
              <li>{language === 'en' ? 'Secondary School (Grades 7-12)' : 'École Secondaire (Classes 7-12)'}</li>
              <li>{language === 'en' ? 'Event Hall' : 'Salle de Fête'}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4">{t('nav.contact')}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>{language === 'en' ? 'Phone' : 'Téléphone'}: +237 XXX XXX XXX</li>
              <li>Email: info@complexpascal.com</li>
              <li>{language === 'en' ? 'Events' : 'Événements'}: events@complexpascal.com</li>
              <li>{language === 'en' ? 'Mon-Fri: 7:00 AM - 5:00 PM' : 'Lun-Ven: 7h00 - 17h00'}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} Complex Pascal. {t('footer.rights')}.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                {language === 'en' ? 'Privacy Policy' : 'Politique de Confidentialité'}
              </a>
              <a href="#" className="hover:text-white transition-colors">
                {language === 'en' ? 'Terms of Service' : 'Conditions d\'Utilisation'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}