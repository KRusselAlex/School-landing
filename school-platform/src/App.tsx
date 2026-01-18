import { LanguageProvider } from './contexts/LanguageContext';
import { NavigationProvider, useNavigation } from './contexts/NavigationContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomePage } from './pages/HomePage';
import { PrimarySchoolPage } from './pages/PrimarySchoolPage';
import { SecondarySchoolPage } from './pages/SecondarySchoolPage';
import { EventHallPage } from './pages/EventHallPage';
import { ContactPage } from './pages/ContactPage';
import { Toaster } from './components/ui/sonner';

function AppContent() {
  const { currentPage } = useNavigation();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'primary':
        return <PrimarySchoolPage />;
      case 'secondary':
        return <SecondarySchoolPage />;
      case 'eventHall':
        return <EventHallPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </LanguageProvider>
  );
}