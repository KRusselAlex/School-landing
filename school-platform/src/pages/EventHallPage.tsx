import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Music, Briefcase, PartyPopper, Calendar, Users, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigation } from '../contexts/NavigationContext';

const carouselImages = [
  {
    url: "https://images.unsplash.com/photo-1763553113332-800519753e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZXZlbnQlMjBoYWxsJTIwd2VkZGluZ3xlbnwxfHx8fDE3Njg3NDQ0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    titleEn: "Elegant Event Space",
    titleFr: "Espace Événementiel Élégant"
  },
  {
    url: "https://images.unsplash.com/photo-1763231575952-98244918f99b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYmFucXVldCUyMGhhbGx8ZW58MXx8fHwxNzY4NzQ1OTc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    titleEn: "Banquet Setup",
    titleFr: "Configuration Banquet"
  },
  {
    url: "https://images.unsplash.com/photo-1613067532651-7075a620c900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwdmVudWV8ZW58MXx8fHwxNzY4NzQ1OTc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    titleEn: "Wedding Reception",
    titleFr: "Réception de Mariage"
  },
  {
    url: "https://images.unsplash.com/photo-1768508951405-10e83c4a2872?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcm9vbSUyMHNldHVwfGVufDF8fHx8MTc2ODc0NTk3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    titleEn: "Conference Setup",
    titleFr: "Configuration Conférence"
  }
];

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { language } = useLanguage();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <img
            src={carouselImages[currentIndex].url}
            alt={language === 'en' ? carouselImages[currentIndex].titleEn : carouselImages[currentIndex].titleFr}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <h3 className="text-white text-2xl">
              {language === 'en' ? carouselImages[currentIndex].titleEn : carouselImages[currentIndex].titleFr}
            </h3>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function EventHallPage() {
  const { language, t } = useLanguage();
  const { navigateTo } = useNavigation();

  const eventTypes = [
    {
      icon: <Heart className="w-10 h-10" />,
      titleEn: "Weddings",
      titleFr: "Mariages",
      descEn: "Create unforgettable memories",
      descFr: "Créez des souvenirs inoubliables"
    },
    {
      icon: <Music className="w-10 h-10" />,
      titleEn: "Concerts",
      titleFr: "Concerts",
      descEn: "Professional sound & lighting",
      descFr: "Son et éclairage professionnels"
    },
    {
      icon: <Users className="w-10 h-10" />,
      titleEn: "Shows & Performances",
      titleFr: "Spectacles",
      descEn: "Stage for your talents",
      descFr: "Scène pour vos talents"
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      titleEn: "Conferences",
      titleFr: "Conférences",
      descEn: "Professional business events",
      descFr: "Événements professionnels"
    },
    {
      icon: <Calendar className="w-10 h-10" />,
      titleEn: "Meetings",
      titleFr: "Réunions",
      descEn: "Corporate gatherings",
      descFr: "Rassemblements d'entreprise"
    },
    {
      icon: <PartyPopper className="w-10 h-10" />,
      titleEn: "Celebrations",
      titleFr: "Célébrations",
      descEn: "Birthdays & baptisms",
      descFr: "Anniversaires et baptêmes"
    }
  ];

  const features = [
    { en: "Spacious hall with flexible seating arrangements", fr: "Grande salle avec sièges modulables" },
    { en: "Professional audio-visual equipment", fr: "Équipement audiovisuel professionnel" },
    { en: "State-of-the-art sound system", fr: "Système de son de pointe" },
    { en: "Modern lighting system", fr: "Système d'éclairage moderne" },
    { en: "Catering services available", fr: "Services de restauration disponibles" },
    { en: "Ample parking space", fr: "Grand espace de stationnement" },
    { en: "Air-conditioned comfort", fr: "Climatisation" },
    { en: "Stage and podium", fr: "Scène et podium" },
    { en: "Customizable decoration", fr: "Décoration personnalisable" },
    { en: "Professional event coordination", fr: "Coordination d'événements professionnelle" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-secondary via-secondary/90 to-primary text-white py-24"
      >
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1763553113332-800519753e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZXZlbnQlMjBoYWxsJTIwd2VkZGluZ3xlbnwxfHx8fDE3Njg3NDQ0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Event Hall"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl mb-6 text-white">
              {t('eventHall.title')}
            </h1>
            <p className="text-xl mb-8 text-white/95">
              {t('eventHall.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => navigateTo('contact')}
                className="bg-white text-secondary hover:bg-white/90"
              >
                {t('eventHall.bookHall')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white text-white hover:bg-white/20"
              >
                {t('viewDetails')}
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Carousel Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4">
              {language === 'en' ? 'Our Venue' : 'Notre Lieu'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Explore our beautiful event space through our gallery'
                : 'Explorez notre bel espace événementiel à travers notre galerie'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ImageCarousel />
          </motion.div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4">
              {language === 'en' ? 'Events We Host' : 'Événements Que Nous Accueillons'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {eventTypes.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              >
                <Card className="h-full hover:shadow-lg transition-all">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className="mb-3 text-secondary mx-auto"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {event.icon}
                    </motion.div>
                    <h4 className="mb-1">
                      {language === 'en' ? event.titleEn : event.titleFr}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {language === 'en' ? event.descEn : event.descFr}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Capacity */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl mb-6 text-secondary">
                    {language === 'en' ? 'Facilities & Amenities' : 'Installations et Commodités'}
                  </h3>
                  <div className="space-y-3">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">
                          {language === 'en' ? feature.en : feature.fr}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Capacity */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Card className="bg-gradient-to-br from-primary to-primary/80 text-white">
                <CardContent className="p-8">
                  <Users className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl mb-2 text-white">
                    {language === 'en' ? 'Capacity' : 'Capacité'}
                  </h3>
                  <p className="text-4xl mb-2 text-white">500+</p>
                  <p className="text-white/90">
                    {language === 'en' ? 'Guests' : 'Invités'}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-secondary to-secondary/80 text-white">
                <CardContent className="p-8">
                  <Calendar className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl mb-4 text-white">
                    {language === 'en' ? 'Book Now' : 'Réservez Maintenant'}
                  </h3>
                  <p className="mb-6 text-white/90">
                    {language === 'en' 
                      ? 'Contact us to check availability and book your event'
                      : 'Contactez-nous pour vérifier la disponibilité et réserver votre événement'}
                  </p>
                  <Button
                    onClick={() => navigateTo('contact')}
                    className="bg-white text-secondary hover:bg-white/90 w-full"
                  >
                    {t('contactUs')}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-r from-primary to-secondary text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl mb-6 text-white">
            {language === 'en' ? 'Make Your Event Memorable' : 'Rendez Votre Événement Mémorable'}
          </h2>
          <p className="text-xl mb-8 text-white/95 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Book Complex Pascal Event Hall for your next celebration or gathering'
              : 'Réservez la Salle de Fête Complex Pascal pour votre prochaine célébration ou rassemblement'}
          </p>
          <Button
            size="lg"
            onClick={() => navigateTo('contact')}
            className="bg-white text-primary hover:bg-white/90"
          >
            {t('eventHall.bookHall')}
          </Button>
        </div>
      </motion.section>
    </div>
  );
}
