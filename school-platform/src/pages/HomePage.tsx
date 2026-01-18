import { motion } from "motion/react";
import {
  ArrowRight,
  Award,
  BookOpen,
  Heart,
  GraduationCap,
  Star,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { useLanguage } from "../contexts/LanguageContext";
import { useNavigation } from "../contexts/NavigationContext";

export function HomePage() {
  const { language, t } = useLanguage();
  const { navigateTo } = useNavigation();

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/80 z-10"></div>
          <motion.img
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            src="https://images.unsplash.com/photo-1641683521844-700c456379bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmltYXJ5JTIwc2Nob29sJTIwY2xhc3Nyb29tJTIwY2hpbGRyZW58ZW58MXx8fHwxNzY4NzQ0NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Complex Pascal"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 z-20 relative">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              className="mb-6 inline-block"
            >
              <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                {t("hero.bilingual")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl md:text-7xl mb-6 text-white"
            >
              {t("hero.title")}
            </motion.h1>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <p className="text-xl md:text-2xl mb-4 text-white/95">
                {t("hero.subtitle")}
              </p>
              <p className="text-lg mb-2 text-white/90 italic">
                "{t("motto")}"
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Button
                size="lg"
                onClick={() => navigateTo("primary")}
                className="bg-white text-primary hover:bg-white/90"
              >
                {t("hero.discoverSchools")}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigateTo("eventHall")}
                className="bg-secondary text-white border-white hover:bg-secondary/90 hover:text-white"
              >
                {t("hero.eventHall")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigateTo("contact")}
                className="border-white bg-primary text-white hover:bg-white/10"
              >
                {t("contactUs")}
              </Button>
            </motion.div>

            {/* Quick Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                onClick={() => navigateTo("primary")}
                className="cursor-pointer"
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
                  <CardContent className="p-6 text-center">
                    <BookOpen className="w-12 h-12 mx-auto mb-3 text-white" />
                    <h3 className="text-2xl mb-2 text-white">
                      {t("nav.primary")}
                    </h3>
                    <p className="text-sm text-white/80">
                      {language === "en"
                        ? "Building strong foundations"
                        : "Construire des bases solides"}
                    </p>
                    <Button
                      variant="ghost"
                      className="mt-4 text-white hover:text-white hover:bg-white/20"
                    >
                      {t("learnMore")} <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                onClick={() => navigateTo("secondary")}
                className="cursor-pointer"
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
                  <CardContent className="p-6 text-center">
                    <GraduationCap className="w-12 h-12 mx-auto mb-3 text-white" />
                    <h3 className="text-2xl mb-2 text-white">
                      {t("nav.secondary")}
                    </h3>
                    <p className="text-sm text-white/80">
                      {language === "en"
                        ? "Preparing future leaders"
                        : "Préparer les leaders de demain"}
                    </p>
                    <Button
                      variant="ghost"
                      className="mt-4 text-white hover:text-white hover:bg-white/20"
                    >
                      {t("learnMore")} <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                onClick={() => navigateTo("eventHall")}
                className="cursor-pointer"
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
                  <CardContent className="p-6 text-center">
                    <Heart className="w-12 h-12 mx-auto mb-3 text-white" />
                    <h3 className="text-2xl mb-2 text-white">
                      {t("nav.eventHall")}
                    </h3>
                    <p className="text-sm text-white/80">
                      {language === "en"
                        ? "Your perfect venue"
                        : "Votre lieu parfait"}
                    </p>
                    <Button
                      variant="ghost"
                      className="mt-4 text-white hover:text-white hover:bg-white/20"
                    >
                      {t("seeMore")} <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
              <motion.div
                className="w-1 h-3 bg-white rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">
              {language === "en"
                ? "Why Choose Complex Pascal?"
                : "Pourquoi Choisir Complex Pascal?"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === "en"
                ? "Discover what makes us the premier choice for bilingual education"
                : "Découvrez ce qui fait de nous le premier choix pour l'éducation bilingue"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Star className="w-12 h-12" />,
                titleEn: "Excellence",
                titleFr: "Excellence",
                descEn: "Top-tier bilingual education",
                descFr: "Éducation bilingue de premier ordre",
              },
              {
                icon: <BookOpen className="w-12 h-12" />,
                titleEn: "Experienced Staff",
                titleFr: "Personnel Expérimenté",
                descEn: "Qualified and dedicated teachers",
                descFr: "Enseignants qualifiés et dévoués",
              },
              {
                icon: <Award className="w-12 h-12" />,
                titleEn: "Proven Results",
                titleFr: "Résultats Prouvés",
                descEn: "Outstanding academic achievements",
                descFr: "Réalisations académiques exceptionnelles",
              },
              {
                icon: <Heart className="w-12 h-12" />,
                titleEn: "Caring Environment",
                titleFr: "Environnement Bienveillant",
                descEn: "Student well-being is our priority",
                descFr: "Le bien-être des élèves est notre priorité",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <Card className="h-full hover:shadow-xl transition-all border-2 border-transparent hover:border-primary/20">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className="mb-4 text-primary mx-auto"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      {item.icon}
                    </motion.div>
                    <h3 className="mb-2">
                      {language === "en" ? item.titleEn : item.titleFr}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {language === "en" ? item.descEn : item.descFr}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <Award className="w-16 h-16 mx-auto mb-6" />
          </motion.div>
          <h2 className="text-4xl mb-4 text-white">
            {language === "en" ? "Ready to Join Us?" : "Prêt à Nous Rejoindre?"}
          </h2>
          <p className="text-xl mb-8 text-white/95 max-w-2xl mx-auto">
            {language === "en"
              ? "Take the first step towards academic excellence. Contact us today!"
              : "Faites le premier pas vers l'excellence académique. Contactez-nous aujourd'hui!"}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigateTo("contact")}
              className="bg-white text-primary hover:bg-white/90"
            >
              {t("contactUs")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-primary  text-white  hover:bg-white/10"
            >
              {language === "en" ? "Schedule a Visit" : "Planifier une Visite"}
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
