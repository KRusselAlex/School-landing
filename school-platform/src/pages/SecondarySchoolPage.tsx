import { motion } from "motion/react";
import {
  GraduationCap,
  Globe,
  Microscope,
  Monitor,
  Calendar,
  Music,
  Languages,
  BookOpen,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import { useNavigation } from "../contexts/NavigationContext";

interface FeatureCardProps {
  icon: React.ReactNode;
  titleEn: string;
  titleFr: string;
  descriptionEn: string;
  descriptionFr: string;
  delay: number;
}

function FeatureCard({
  icon,
  titleEn,
  titleFr,
  descriptionEn,
  descriptionFr,
  delay,
}: FeatureCardProps) {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-secondary/30 bg-gradient-to-br from-white to-secondary/5">
        <CardContent className="p-8">
          <motion.div
            className="mb-6 text-secondary"
            whileHover={{ scale: 1.2, rotate: 15 }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>
          <h3 className="mb-3 text-secondary">
            {language === "en" ? titleEn : titleFr}
          </h3>
          <p className="text-muted-foreground">
            {language === "en" ? descriptionEn : descriptionFr}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function SecondarySchoolPage() {
  const { language, t } = useLanguage();
  const { navigateTo } = useNavigation();

  const features = [
    {
      icon: <GraduationCap className="w-14 h-14" />,
      titleEn: "Excellent Learning Environment",
      titleFr: "Excellent Environnement d'Apprentissage",
      descriptionEn:
        "A nurturing atmosphere that promotes academic excellence and personal growth.",
      descriptionFr:
        "Une atmosphère stimulante qui favorise l'excellence académique et l'épanouissement personnel.",
    },
    {
      icon: <Languages className="w-14 h-14" />,
      titleEn: "German & Spanish from Form 1",
      titleFr: "Allemand et Espagnol dès la 6ᵉ",
      descriptionEn:
        "Students begin learning German and Spanish from their first year of secondary school.",
      descriptionFr:
        "Les élèves commencent à apprendre l'allemand et l'espagnol dès la première année du secondaire.",
    },
    {
      icon: <Calendar className="w-14 h-14" />,
      titleEn: "Supervised Study Sessions",
      titleFr: "Sessions de Travail Supervisées",
      descriptionEn:
        "Every Saturday and during holidays, students benefit from guided study sessions.",
      descriptionFr:
        "Chaque samedi et pendant les vacances, les élèves bénéficient de sessions d'étude encadrées.",
    },
    {
      icon: <Music className="w-14 h-14" />,
      titleEn: "Event Hall for Activities",
      titleFr: "Salle de Fête pour Activités",
      descriptionEn:
        "A dedicated space for extracurricular activities, performances, and events.",
      descriptionFr:
        "Un espace dédié aux activités parascolaires, spectacles et événements.",
    },
    {
      icon: <Monitor className="w-14 h-14" />,
      titleEn: "Multimedia Room",
      titleFr: "Salle Multimédia",
      descriptionEn:
        "Modern multimedia room equipped with video projectors for interactive learning.",
      descriptionFr:
        "Salle multimédia moderne équipée de vidéoprojecteurs pour un apprentissage interactif.",
    },
    {
      icon: <Microscope className="w-14 h-14" />,
      titleEn: "Science Laboratory",
      titleFr: "Laboratoire Scientifique",
      descriptionEn:
        "Well-equipped lab for hands-on experiments and practical science education.",
      descriptionFr:
        "Laboratoire bien équipé pour des expériences pratiques et l'enseignement scientifique.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-secondary via-secondary/90 to-primary/80 text-white py-24"
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full"
          >
            <img
              src="https://images.unsplash.com/photo-1758270703156-8d6c7a781fc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWNvbmRhcnklMjBzY2hvb2wlMjBzdHVkZW50cyUyMGxlYXJuaW5nfGVufDF8fHx8MTc2ODc0NDQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Secondary School"
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
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="inline-block mb-6"
            >
              <Globe className="w-20 h-20 mx-auto" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl mb-6 text-white">
              {t("secondary.title")}
            </h1>
            <p className="text-xl mb-8 text-white/95">
              {t("secondary.subtitle")}
            </p>
            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                size="lg"
                onClick={() => navigateTo("contact")}
                className="bg-white text-secondary hover:bg-white/90"
              >
                {t("contactUs")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white text-white hover:bg-white/20"
              >
                {t("viewDetails")}
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-10 opacity-20"
        >
          <BookOpen className="w-24 h-24 text-white" />
        </motion.div>
      </motion.section>

      {/* Curriculum Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">
              {language === "en" ? "Our Curriculum" : "Notre Programme"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === "en"
                ? "Comprehensive bilingual education from Form 1 to Upper Sixth"
                : "Éducation bilingue complète de la 6ᵉ à la Terminale"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Francophone */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-secondary">
                <CardContent className="p-8">
                  <h3 className="text-2xl mb-6 text-secondary flex items-center gap-3">
                    <BookOpen className="w-8 h-8" />
                    {language === "en" ? "Francophone" : "Francophone"}
                  </h3>
                  <div className="space-y-3">
                    {["6ᵉ", "5ᵉ", "4ᵉ", "3ᵉ", "2ⁿᵈᵉ", "1ʳᵉ", "Terminale"].map(
                      (grade, index) => (
                        <motion.div
                          key={grade}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-3 p-3 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors"
                        >
                          <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white">
                            {index + 1}
                          </div>
                          <span>{grade}</span>
                        </motion.div>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Anglophone */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-primary">
                <CardContent className="p-8">
                  <h3 className="text-2xl mb-6 text-primary flex items-center gap-3">
                    <GraduationCap className="w-8 h-8" />
                    {language === "en" ? "Anglophone" : "Anglophone"}
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Form 1",
                      "Form 2",
                      "Form 3",
                      "Form 4",
                      "Form 5",
                      "Lower Sixth",
                      "Upper Sixth",
                    ].map((grade, index) => (
                      <motion.div
                        key={grade}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                      >
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                          {index + 1}
                        </div>
                        <span>{grade}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features/Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">
              {language === "en" ? "Why Choose Us" : "Pourquoi Nous Choisir"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === "en"
                ? "Excellence in secondary education with modern facilities and expert faculty"
                : "Excellence en éducation secondaire avec des installations modernes et un corps professoral expert"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Excellent Environment */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1716654716581-3c92ba53de10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc3R1ZGVudHMlMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2ODgwMzMwMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Collaborative Learning"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <GraduationCap className="w-14 h-14 text-white mb-4" />
                <h3 className="text-2xl text-white mb-3">
                  {language === "en"
                    ? "Excellent Learning Environment"
                    : "Excellent Environnement d'Apprentissage"}
                </h3>
                <p className="text-white/90">
                  {language === "en"
                    ? "A nurturing atmosphere that promotes academic excellence and personal growth."
                    : "Une atmosphère stimulante qui favorise l'excellence académique et l'épanouissement personnel."}
                </p>
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1444840535719-195841cb6e2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGNoaWxkcmVuJTIwbGVhcm5pbmclMjB0b2dldGhlcnxlbnwxfHx8fDE3Njg4MDMyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Language Learning"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <Languages className="w-14 h-14 text-white mb-4" />
                <h3 className="text-2xl text-white mb-3">
                  {language === "en"
                    ? "German & Spanish from Form 1"
                    : "Allemand et Espagnol dès la 6ᵉ"}
                </h3>
                <p className="text-white/90">
                  {language === "en"
                    ? "Students begin learning German and Spanish from their first year of secondary school."
                    : "Les élèves commencent à apprendre l'allemand et l'espagnol dès la première année du secondaire."}
                </p>
              </div>
            </motion.div>

            {/* Supervised Sessions */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1676285885390-486f6cc426a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHN0dWRlbnRzJTIwc3R1ZHlpbmd8ZW58MXx8fHwxNzY4ODAzMzAxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Studying Students"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <Calendar className="w-14 h-14 text-white mb-4" />
                <h3 className="text-2xl text-white mb-3">
                  {language === "en"
                    ? "Supervised Study Sessions"
                    : "Sessions de Travail Supervisées"}
                </h3>
                <p className="text-white/90">
                  {language === "en"
                    ? "Every Saturday and during holidays, students benefit from guided study sessions."
                    : "Chaque samedi et pendant les vacances, les élèves bénéficient de sessions d'étude encadrées."}
                </p>
              </div>
            </motion.div>

            {/* Event Hall */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1521493959102-bdd6677fdd81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc3R1ZGVudHMlMjBjbGFzc3Jvb20lMjBzbWlsaW5nfGVufDF8fHx8MTc2ODgwMzI5OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Activities"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <Music className="w-14 h-14 text-white mb-4" />
                <h3 className="text-2xl text-white mb-3">
                  {language === "en"
                    ? "Event Hall for Activities"
                    : "Salle de Fête pour Activités"}
                </h3>
                <p className="text-white/90">
                  {language === "en"
                    ? "A dedicated space for extracurricular activities, performances, and events."
                    : "Un espace dédié aux activités parascolaires, spectacles et événements."}
                </p>
              </div>
            </motion.div>

            {/* Multimedia Room */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1515302569996-e150029e73fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwa2lkcyUyMHNjaG9vbCUyMGhhcHB5fGVufDF8fHx8MTc2ODgwMzI5OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Technology"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <Monitor className="w-14 h-14 text-white mb-4" />
                <h3 className="text-2xl text-white mb-3">
                  {language === "en" ? "Multimedia Room" : "Salle Multimédia"}
                </h3>
                <p className="text-white/90">
                  {language === "en"
                    ? "Modern multimedia room equipped with video projectors for interactive learning."
                    : "Salle multimédia moderne équipée de vidéoprojecteurs pour un apprentissage interactif."}
                </p>
              </div>
            </motion.div>

            {/* Science Lab */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.75 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1617056239820-8ce90ba48193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc2Nob29sJTIwY2hpbGRyZW4lMjBvdXRkb29yfGVufDF8fHx8MTc2ODgwMzMwMnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Science Learning"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <Microscope className="w-14 h-14 text-white mb-4" />
                <h3 className="text-2xl text-white mb-3">
                  {language === "en"
                    ? "Science Laboratory"
                    : "Laboratoire Scientifique"}
                </h3>
                <p className="text-white/90">
                  {language === "en"
                    ? "Well-equipped lab for hands-on experiments and practical science education."
                    : "Laboratoire bien équipé pour des expériences pratiques et l'enseignement scientifique."}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Facilities Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-6"
          >
            <motion.div
              className="rounded-lg overflow-hidden shadow-lg relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1632217142144-f96b15d867a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsaWJyYXJ5JTIwYm9va3N8ZW58MXx8fHwxNzY4NzA2MDk1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Library"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-white">
                  <h4>
                    {language === "en"
                      ? "Modern Library"
                      : "Bibliothèque Moderne"}
                  </h4>
                  <p className="text-sm">
                    {language === "en"
                      ? "Extensive resources"
                      : "Ressources étendues"}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="rounded-lg overflow-hidden shadow-lg relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1605781645799-c9c7d820b4ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHN0dWRlbnRzfGVufDF8fHx8MTc2ODYzNzI0OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Science Lab"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-white">
                  <h4>
                    {language === "en"
                      ? "Science Laboratory"
                      : "Laboratoire Scientifique"}
                  </h4>
                  <p className="text-sm">
                    {language === "en"
                      ? "Hands-on experiments"
                      : "Expériences pratiques"}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="rounded-lg overflow-hidden shadow-lg relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1647667436195-6954ef8b27e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc2ODc0NTgzOXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="School Building"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-white">
                  <h4>
                    {language === "en" ? "Modern Campus" : "Campus Moderne"}
                  </h4>
                  <p className="text-sm">
                    {language === "en"
                      ? "World-class facilities"
                      : "Installations de classe mondiale"}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-r from-secondary to-primary text-white relative overflow-hidden"
      >
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 opacity-10"
        >
          <GraduationCap className="w-96 h-96" />
        </motion.div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl mb-6 text-white">
            {language === "en"
              ? "Join Our Academic Excellence"
              : "Rejoignez Notre Excellence Académique"}
          </h2>
          <p className="text-xl mb-8 text-white/95 max-w-2xl mx-auto">
            {language === "en"
              ? "Prepare for a bright future with our comprehensive secondary education program"
              : "Préparez-vous pour un avenir brillant avec notre programme complet d'éducation secondaire"}
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
              className="border-white bg-primary text-white hover:bg-white/10 "
            >
              {language === "en"
                ? "Download Brochure"
                : "Télécharger la Brochure"}
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
