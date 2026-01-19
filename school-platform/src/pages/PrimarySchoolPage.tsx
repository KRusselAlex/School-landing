import { motion } from "motion/react";
import {
  BookOpen,
  Users,
  Award,
  MapPin,
  DollarSign,
  Languages,
  Star,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import { useNavigation } from "../contexts/NavigationContext";

interface HighlightCardProps {
  icon: React.ReactNode;
  titleEn: string;
  titleFr: string;
  descriptionEn: string;
  descriptionFr: string;
  delay: number;
}

function HighlightCard({
  icon,
  titleEn,
  titleFr,
  descriptionEn,
  descriptionFr,
  delay,
}: HighlightCardProps) {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
    >
      <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-primary/20">
        <CardContent className="p-6">
          <motion.div
            className="mb-4 text-primary"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            {icon}
          </motion.div>
          <h3 className="mb-2 text-primary">
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

export function PrimarySchoolPage() {
  const { language, t } = useLanguage();
  const { navigateTo } = useNavigation();

  const highlights = [
    {
      icon: <Users className="w-12 h-12" />,
      titleEn: "Stable & Experienced Staff",
      titleFr: "Personnel Stable et Expérimenté",
      descriptionEn:
        "Our dedicated teachers bring years of expertise to create a nurturing learning environment.",
      descriptionFr:
        "Nos enseignants dévoués apportent des années d'expertise pour créer un environnement d'apprentissage stimulant.",
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      titleEn: "Affordable Tuition Fees",
      titleFr: "Frais de Scolarité Abordables",
      descriptionEn:
        "Quality education at reasonable costs, making excellence accessible to all families.",
      descriptionFr:
        "Une éducation de qualité à des coûts raisonnables, rendant l'excellence accessible à toutes les familles.",
    },
    {
      icon: <Languages className="w-12 h-12" />,
      titleEn: "Perfectly Bilingual Students",
      titleFr: "Élèves Parfaitement Bilingues",
      descriptionEn:
        "Students achieve fluency in both English and French through our immersive program.",
      descriptionFr:
        "Les élèves atteignent la maîtrise de l'anglais et du français grâce à notre programme immersif.",
    },
    {
      icon: <Star className="w-12 h-12" />,
      titleEn: "Attentive Administration",
      titleFr: "Administration Attentive",
      descriptionEn:
        "We maintain open communication with parents and prioritize student well-being.",
      descriptionFr:
        "Nous maintenons une communication ouverte avec les parents et priorisons le bien-être des élèves.",
    },
    {
      icon: <Award className="w-12 h-12" />,
      titleEn: "Top Schools in the Region",
      titleFr: "Parmi les Meilleures Écoles",
      descriptionEn:
        "Recognized as one of the leading educational institutions in the area.",
      descriptionFr:
        "Reconnue comme l'une des principales institutions éducatives de la région.",
    },
    {
      icon: <MapPin className="w-12 h-12" />,
      titleEn: "Easy Access Location",
      titleFr: "Emplacement Facile d'Accès",
      descriptionEn:
        "Conveniently located with excellent transportation links for families.",
      descriptionFr:
        "Idéalement situé avec d'excellentes liaisons de transport pour les familles.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-primary to-primary/80 text-white py-20"
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full"
          >
            <img
              src="https://images.unsplash.com/photo-1641683521844-700c456379bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmltYXJ5JTIwc2Nob29sJTIwY2xhc3Nyb29tJTIwY2hpbGRyZW58ZW58MXx8fHwxNzY4NzQ0NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Primary School"
              className="w-full h-full object-cover opacity-20"
            />
          </motion.div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl mb-6 text-white">
              {t("primary.title")}
            </h1>
            <p className="text-xl mb-8 text-white/95">
              {t("primary.subtitle")}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => navigateTo("contact")}
                className="bg-secondary hover:bg-secondary/90"
              >
                {t("contactUs")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white text-white hover:bg-white/20"
              >
                {t("learnMore")}
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Sections Overview */}
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
              {language === "en" ? "Our Sections" : "Nos Sections"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === "en"
                ? "We offer comprehensive education in both Francophone and Anglophone sections"
                : "Nous offrons une éducation complète dans les sections francophone et anglophone"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Francophone Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <BookOpen className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl mb-4 text-primary">
                      {t("primary.francophone")}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Crèche</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>PS (Petite Section)</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>MS (Moyenne Section)</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>GS (Grande Section)</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>SIL - CM2</span>
                    </div>
                  </div>
                  <Button
                    className="w-full mt-6 bg-primary hover:bg-primary/90"
                    onClick={() => navigateTo("contact")}
                  >
                    {t("learnMore")}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Anglophone Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                      <BookOpen className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-2xl mb-4 text-secondary">
                      {t("primary.anglophone")}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-secondary/5 rounded-lg">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>PN (Pre-Nursery)</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-secondary/5 rounded-lg">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>Nursery 1</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-secondary/5 rounded-lg">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>Nursery 2</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-secondary/5 rounded-lg">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>Class 1 - Class 6</span>
                    </div>
                  </div>
                  <Button
                    className="w-full mt-6 bg-secondary hover:bg-secondary/90"
                    onClick={() => navigateTo("contact")}
                  >
                    {t("learnMore")}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights */}
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
                ? "Discover what makes Complex Pascal Primary School exceptional"
                : "Découvrez ce qui rend l'École Primaire Complex Pascal exceptionnelle"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Experienced Staff */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1744809482817-9a9d4fc280af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdGVhY2hlciUyMHN0dWRlbnRzfGVufDF8fHx8MTc2ODgwMzMwMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Experienced Teachers"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <Users className="w-12 h-12 text-white mb-4" />
                <h3 className="text-2xl text-white mb-3">
                  {language === "en"
                    ? "Stable & Experienced Staff"
                    : "Personnel Stable et Expérimenté"}
                </h3>
                <p className="text-white/90">
                  {language === "en"
                    ? "Our dedicated teachers bring years of expertise to create a nurturing learning environment."
                    : "Nos enseignants dévoués apportent des années d'expertise pour créer un environnement d'apprentissage stimulant."}
                </p>
              </div>
            </motion.div>

            {/* Affordable Fees */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1515302569996-e150029e73fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwa2lkcyUyMHNjaG9vbCUyMGhhcHB5fGVufDF8fHx8MTc2ODgwMzI5OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Happy Students"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <DollarSign className="w-12 h-12 text-white mb-4" />
                <h3 className="text-2xl text-white mb-3">
                  {language === "en"
                    ? "Affordable Tuition Fees"
                    : "Frais de Scolarité Abordables"}
                </h3>
                <p className="text-white/90">
                  {language === "en"
                    ? "Quality education at reasonable costs, making excellence accessible to all families."
                    : "Une éducation de qualité à des coûts raisonnables, rendant l'excellence accessible à toutes les familles."}
                </p>
              </div>
            </motion.div>

            {/* Bilingual Students */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1523396140703-e5bdad4e5dea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2hpbGRyZW4lMjByZWFkaW5nJTIwYm9va3N8ZW58MXx8fHwxNzY4ODAzMzAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Reading Children"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <Languages className="w-12 h-12 text-white mb-4" />
                <h3 className="text-2xl text-white mb-3">
                  {language === "en"
                    ? "Perfectly Bilingual Students"
                    : "Élèves Parfaitement Bilingues"}
                </h3>
                <p className="text-white/90">
                  {language === "en"
                    ? "Students achieve fluency in both English and French through our immersive program."
                    : "Les élèves atteignent la maîtrise de l'anglais et du français grâce à notre programme immersif."}
                </p>
              </div>
            </motion.div>

            {/* Attentive Administration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1521493959102-bdd6677fdd81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc3R1ZGVudHMlMjBjbGFzc3Jvb20lMjBzbWlsaW5nfGVufDF8fHx8MTc2ODgwMzI5OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Caring Environment"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <Star className="w-12 h-12 text-white mb-4" />
                <h3 className="text-2xl text-white mb-3">
                  {language === "en"
                    ? "Attentive Administration"
                    : "Administration Attentive"}
                </h3>
                <p className="text-white/90">
                  {language === "en"
                    ? "We maintain open communication with parents and prioritize student well-being."
                    : "Nous maintenons une communication ouverte avec les parents et priorisons le bien-être des élèves."}
                </p>
              </div>
            </motion.div>

            {/* Top School */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1666281269793-da06484657e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIweW91dGglMjBlZHVjYXRpb258ZW58MXx8fHwxNzY4ODAzMzAxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Excellence"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <Award className="w-12 h-12 text-white mb-4" />
                <h3 className="text-2xl text-white mb-3">
                  {language === "en"
                    ? "Top Schools in the Region"
                    : "Parmi les Meilleures Écoles"}
                </h3>
                <p className="text-white/90">
                  {language === "en"
                    ? "Recognized as one of the leading educational institutions in the area."
                    : "Reconnue comme l'une des principales institutions éducatives de la région."}
                </p>
              </div>
            </motion.div>

            {/* Easy Access */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1617056239820-8ce90ba48193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc2Nob29sJTIwY2hpbGRyZW4lMjBvdXRkb29yfGVufDF8fHx8MTc2ODgwMzMwMnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="School Location"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <MapPin className="w-12 h-12 text-white mb-4" />
                <h3 className="text-2xl text-white mb-3">
                  {language === "en"
                    ? "Easy Access Location"
                    : "Emplacement Facile d'Accès"}
                </h3>
                <p className="text-white/90">
                  {language === "en"
                    ? "Conveniently located with excellent transportation links for families."
                    : "Idéalement situé avec d'excellentes liaisons de transport pour les familles."}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-6"
          >
            <motion.div
              className="rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1636772523547-5577d04e8dc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY2hpbGRyZW4lMjBjbGFzc3Jvb218ZW58MXx8fHwxNzY4NzQ1ODM5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Classroom"
                className="w-full h-64 object-cover"
              />
            </motion.div>
            <motion.div
              className="rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1607586597362-cb492b31d4cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwc3R1ZGVudHMlMjBncm91cHxlbnwxfHx8fDE3Njg3NDU4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Teachers and Students"
                className="w-full h-64 object-cover"
              />
            </motion.div>
            <motion.div
              className="rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1565373086464-c8af0d586c0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzY4NzM2NTk0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Happy Learning"
                className="w-full h-64 object-cover"
              />
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
        className="py-20 bg-gradient-to-r from-primary to-secondary text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <TrendingUp className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl mb-4 text-white">
            {language === "en" ? "Ready to Join Us?" : "Prêt à Nous Rejoindre?"}
          </h2>
          <p className="text-xl mb-8 text-white/95 max-w-2xl mx-auto">
            {language === "en"
              ? "Give your child the gift of bilingual excellence. Enroll today!"
              : "Offrez à votre enfant le cadeau de l'excellence bilingue. Inscrivez-vous dès aujourd'hui!"}
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
              {language === "en" ? "Schedule a Visit" : "Planifier une Visite"}
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
