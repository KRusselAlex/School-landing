import { motion } from "motion/react";
import {
  ArrowRight,
  Award,
  BookOpen,
  Heart,
  GraduationCap,
  Star,
  Users,
  DollarSign,
  Languages,
  MapPin,
  Quote,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { useLanguage } from "../contexts/LanguageContext";
import { useNavigation } from "../contexts/NavigationContext";
import { useState } from "react";

export function HomePage() {
  const { language, t } = useLanguage();
  const { navigateTo } = useNavigation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const testimonials = [
    {
      nameEn: "Mrs. Mbongo Sarah",
      nameFr: "Mme Mbongo Sarah",
      roleEn: "Parent",
      roleFr: "Parent",
      imageUrl:
        "https://images.unsplash.com/photo-1758598737529-3b326b4c8a55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJlbnQlMjBjaGlsZCUyMHNjaG9vbHxlbnwxfHx8fDE3Njg4MDIyMjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      quoteEn:
        "Complex Pascal has transformed my child's education. The bilingual program is exceptional and the teachers are truly dedicated.",
      quoteFr:
        "Complex Pascal a transformé l'éducation de mon enfant. Le programme bilingue est exceptionnel et les enseignants sont vraiment dévoués.",
    },
    {
      nameEn: "Mr. Kamga Pierre",
      nameFr: "M. Kamga Pierre",
      roleEn: "Parent",
      roleFr: "Parent",
      imageUrl:
        "https://images.unsplash.com/photo-1561065533-316e3142d586?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njg4MDIyMjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      quoteEn:
        "Our wedding reception at Complex Pascal was perfect! The venue is beautiful and the staff was incredibly professional.",
      quoteFr:
        "Notre réception de mariage à Complex Pascal était parfaite! Le lieu est magnifique et le personnel était incroyablement professionnel.",
    },
    {
      nameEn: "Mrs. Njoya Marie",
      nameFr: "Mme Njoya Marie",
      roleEn: "Parent of 2 Students",
      roleFr: "Parent de 2 Élèves",
      imageUrl:
        "https://images.unsplash.com/photo-1649920442906-3c8ef428fb6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwdGVhY2hpbmclMjBjbGFzc3Jvb218ZW58MXx8fHwxNzY4NzQ2NjEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      quoteEn:
        "Both my children are thriving here. The school's focus on individual attention and bilingual excellence is unmatched.",
      quoteFr:
        "Mes deux enfants s'épanouissent ici. L'attention portée à chaque élève et l'excellence bilingue sont inégalées.",
    },
  ];

  const faqs = [
    {
      questionEn: "What are the tuition fees?",
      questionFr: "Quels sont les frais de scolarité?",
      answerEn:
        "Our tuition fees are competitive and affordable. We offer quality bilingual education at reasonable costs. Contact us for detailed fee structure and payment plans.",
      answerFr:
        "Nos frais de scolarité sont compétitifs et abordables. Nous offrons une éducation bilingue de qualité à des coûts raisonnables. Contactez-nous pour la structure tarifaire détaillée et les plans de paiement.",
    },
    {
      questionEn: "What is the admission process?",
      questionFr: "Quel est le processus d'admission?",
      answerEn:
        "Simply contact us to schedule a visit, meet our staff, and complete the registration form. We welcome students throughout the academic year based on availability.",
      answerFr:
        "Contactez-nous simplement pour planifier une visite, rencontrer notre personnel et remplir le formulaire d'inscription. Nous accueillons les élèves tout au long de l'année académique selon les disponibilités.",
    },
    {
      questionEn: "What is the daily schedule?",
      questionFr: "Quel est l'horaire quotidien?",
      answerEn:
        "School hours are Monday-Friday, 7:00 AM - 5:00 PM. This includes classes, study periods, and extracurricular activities. We also offer supervised study sessions on Saturdays.",
      answerFr:
        "Les heures d'école sont du lundi au vendredi, de 7h00 à 17h00. Cela comprend les cours, les périodes d'étude et les activités parascolaires. Nous offrons également des sessions d'étude supervisées le samedi.",
    },
    {
      questionEn: "Do you offer transportation services?",
      questionFr: "Offrez-vous des services de transport?",
      answerEn:
        "Yes, we offer safe and reliable school bus services covering various routes. Contact us for details about routes and fees.",
      answerFr:
        "Oui, nous offrons des services de bus scolaires sûrs et fiables couvrant diverses routes. Contactez-nous pour les détails sur les itinéraires et les tarifs.",
    },
    {
      questionEn: "What languages are taught?",
      questionFr: "Quelles langues sont enseignées?",
      answerEn:
        "English and French are taught from the beginning. Secondary students also learn German and Spanish starting from Form 1 (6ème).",
      answerFr:
        "L'anglais et le français sont enseignés dès le début. Les élèves du secondaire apprennent également l'allemand et l'espagnol à partir de la Form 1 (6ème).",
    },
    {
      questionEn: "Can I book the event hall?",
      questionFr: "Puis-je réserver la salle de fête?",
      answerEn:
        "Yes! Our event hall is available for weddings, conferences, concerts, and other celebrations. Contact our events coordinator for availability and pricing.",
      answerFr:
        "Oui! Notre salle de fête est disponible pour les mariages, conférences, concerts et autres célébrations. Contactez notre coordinateur d'événements pour la disponibilité et les tarifs.",
    },
  ];

  const strengths = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1649920442906-3c8ef428fb6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwdGVhY2hpbmclMjBjbGFzc3Jvb218ZW58MXx8fHwxNzY4NzQ2NjEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      titleEn: "Experienced Teachers",
      titleFr: "Enseignants Expérimentés",
      descEn:
        "Our stable team of qualified educators brings years of expertise, ensuring personalized attention and excellent learning outcomes for every student.",
      descFr:
        "Notre équipe stable d'éducateurs qualifiés apporte des années d'expertise, garantissant une attention personnalisée et d'excellents résultats d'apprentissage pour chaque élève.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1565373086464-c8af0d586c0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzY4NzM2NTk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      titleEn: "Perfect Bilingual Education",
      titleFr: "Éducation Bilingue Parfaite",
      descEn:
        "Students become fluent in both English and French through our immersive bilingual program, opening doors to international opportunities.",
      descFr:
        "Les élèves deviennent parfaitement bilingues en anglais et français grâce à notre programme immersif, ouvrant les portes aux opportunités internationales.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1768268004463-ae9fda89041d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlpbmclMjBzY2hvb2x8ZW58MXx8fHwxNzY4Nzk3NDE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      titleEn: "Holistic Development",
      titleFr: "Développement Holistique",
      descEn:
        "Beyond academics, we nurture creativity, sports, and social skills through diverse extracurricular activities and a supportive environment.",
      descFr:
        "Au-delà des académiques, nous cultivons la créativité, le sport et les compétences sociales à travers des activités parascolaires diverses et un environnement favorable.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1647667436195-6954ef8b27e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc2ODc0NTgzOXww&ixlib=rb-4.1.0&q=80&w=1080",
      titleEn: "Prime Location",
      titleFr: "Emplacement de Choix",
      descEn:
        "Conveniently located with easy access and ample parking, Complex Pascal is the ideal choice for families seeking quality education.",
      descFr:
        "Idéalement situé avec un accès facile et un grand parking, Complex Pascal est le choix idéal pour les familles recherchant une éducation de qualité.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
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
                className="border-white bg-primary text-white hover:bg-white/10 "
              >
                {t("contactUs")}
              </Button>
            </motion.div>

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
                    <p className="text-sm text-white/80 mb-4">
                      {language === "en"
                        ? "Building strong foundations"
                        : "Construire des bases solides"}
                    </p>
                    <Button
                      variant="ghost"
                      className="text-white hover:text-white hover:bg-white/20"
                    >
                      {t("viewDetails")} <ArrowRight className="ml-2 w-4 h-4" />
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
                    <p className="text-sm text-white/80 mb-4">
                      {language === "en"
                        ? "Preparing future leaders"
                        : "Préparer les leaders de demain"}
                    </p>
                    <Button
                      variant="ghost"
                      className="text-white hover:text-white hover:bg-white/20"
                    >
                      {t("viewDetails")} <ArrowRight className="ml-2 w-4 h-4" />
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
                    <p className="text-sm text-white/80 mb-4">
                      {language === "en"
                        ? "Your perfect venue"
                        : "Votre lieu parfait"}
                    </p>
                    <Button
                      variant="ghost"
                      className="text-white hover:text-white hover:bg-white/20"
                    >
                      {t("viewDetails")} <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>

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

      {/* Motivational Quote */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-12 bg-gradient-to-r from-primary/10 to-secondary/10"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Star className="w-12 h-12 mx-auto mb-4 text-secondary" />
            <h2 className="text-3xl md:text-4xl mb-2 text-primary italic">
              "{t("invest.future")}"
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("success.begins")}
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us - Image Based */}
      <section className="py-20">
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
                ? "Visual stories that showcase our commitment to excellence"
                : "Histoires visuelles qui démontrent notre engagement envers l'excellence"}
            </p>
          </motion.div>

          <div className="space-y-16">
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <motion.div
                  className={`${index % 2 === 1 ? "md:order-2" : ""} rounded-2xl overflow-hidden shadow-2xl`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={strength.imageUrl}
                    alt={
                      language === "en" ? strength.titleEn : strength.titleFr
                    }
                    className="w-full h-96 object-cover"
                  />
                </motion.div>
                <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <motion.h3
                    className="text-3xl mb-4 text-primary"
                    initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    {language === "en" ? strength.titleEn : strength.titleFr}
                  </motion.h3>
                  <motion.p
                    className="text-lg text-muted-foreground mb-6"
                    initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    {language === "en" ? strength.descEn : strength.descFr}
                  </motion.p>
                  <Button
                    onClick={() => navigateTo("contact")}
                    className="bg-secondary hover:bg-secondary/90"
                  >
                    {t("learnMore")} <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA after strengths */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Button
              size="lg"
              onClick={() => navigateTo("about")}
              className="bg-primary hover:bg-primary/90"
            >
              {language === "en"
                ? "Learn More About Us"
                : "En Savoir Plus Sur Nous"}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">{t("testimonials.title")}</h2>
            <p className="text-lg text-muted-foreground">
              {t("testimonials.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <Card className="h-full hover:shadow-xl transition-all">
                  <CardContent className="p-8">
                    <Quote className="w-10 h-10 text-secondary mb-4" />
                    <p className="text-muted-foreground mb-6 italic">
                      "
                      {language === "en"
                        ? testimonial.quoteEn
                        : testimonial.quoteFr}
                      "
                    </p>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.imageUrl}
                        alt={
                          language === "en"
                            ? testimonial.nameEn
                            : testimonial.nameFr
                        }
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4>
                          {language === "en"
                            ? testimonial.nameEn
                            : testimonial.nameFr}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {language === "en"
                            ? testimonial.roleEn
                            : testimonial.roleFr}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-muted-foreground mb-4">
              {language === "en"
                ? "Join our growing community of successful students and satisfied parents"
                : "Rejoignez notre communauté croissante d'étudiants réussis et de parents satisfaits"}
            </p>
            <Button
              size="lg"
              onClick={() => navigateTo("contact")}
              className="bg-secondary hover:bg-secondary/90"
            >
              {t("joinUs")}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">{t("faq.title")}</h2>
            <p className="text-lg text-muted-foreground">{t("faq.subtitle")}</p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <button
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                      className="w-full p-6 text-left flex items-center justify-between"
                    >
                      <h4 className="text-lg">
                        {language === "en" ? faq.questionEn : faq.questionFr}
                      </h4>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-primary" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-primary" />
                      )}
                    </button>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6"
                      >
                        <p className="text-muted-foreground">
                          {language === "en" ? faq.answerEn : faq.answerFr}
                        </p>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-muted-foreground mb-4">
              {language === "en"
                ? "Still have questions? We're here to help!"
                : "Vous avez encore des questions? Nous sommes là pour vous aider!"}
            </p>
            <Button
              size="lg"
              onClick={() => navigateTo("contact")}
              className="bg-primary hover:bg-primary/90"
            >
              {t("contactUs")}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
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
          <p className="text-xl mb-2 text-white/95 max-w-2xl mx-auto">
            {language === "en"
              ? "Take the first step towards academic excellence. Contact us today!"
              : "Faites le premier pas vers l'excellence académique. Contactez-nous aujourd'hui!"}
          </p>
          <p className="text-lg mb-8 text-white/90 italic">
            "{t("bright.future")}"
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
              onClick={() => navigateTo("contact")}
              className="border-white bg-primary text-white hover:bg-white/10 "
            >
              {t("scheduleVisit")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigateTo("about")}
              className="border-white text-white bg-secondary hover:bg-white/10"
            >
              {language === "en" ? "Our Story" : "Notre Histoire"}
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
