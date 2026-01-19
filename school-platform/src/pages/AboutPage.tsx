import { motion } from "motion/react";
import {
  Award,
  Target,
  Eye,
  Users,
  TrendingUp,
  Calendar,
  BookOpen,
  Heart,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import { useNavigation } from "../contexts/NavigationContext";

export function AboutPage() {
  const { language, t } = useLanguage();
  const { navigateTo } = useNavigation();

  const stats = [
    {
      icon: <Calendar className="w-10 h-10" />,
      numberEn: "15+",
      numberFr: "15+",
      labelEn: "Years of Excellence",
      labelFr: "Années d'Excellence",
    },
    {
      icon: <Users className="w-10 h-10" />,
      numberEn: "500+",
      numberFr: "500+",
      labelEn: "Happy Students",
      labelFr: "Élèves Satisfaits",
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      numberEn: "2",
      numberFr: "2",
      labelEn: "School Levels",
      labelFr: "Niveaux Scolaires",
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      numberEn: "95%",
      numberFr: "95%",
      labelEn: "Success Rate",
      labelFr: "Taux de Réussite",
    },
  ];

  const values = [
    {
      icon: <Award className="w-12 h-12" />,
      titleEn: "Excellence",
      titleFr: "Excellence",
      descEn:
        "We strive for the highest standards in bilingual education, ensuring every student reaches their full potential.",
      descFr:
        "Nous visons les plus hauts standards en éducation bilingue, garantissant que chaque élève atteigne son plein potentiel.",
    },
    {
      icon: <Heart className="w-12 h-12" />,
      titleEn: "Care",
      titleFr: "Bienveillance",
      descEn:
        "We create a nurturing environment where students feel valued, supported, and motivated to succeed.",
      descFr:
        "Nous créons un environnement stimulant où les élèves se sentent valorisés, soutenus et motivés à réussir.",
    },
    {
      icon: <Users className="w-12 h-12" />,
      titleEn: "Community",
      titleFr: "Communauté",
      descEn:
        "We foster strong partnerships between students, parents, teachers, and the broader community.",
      descFr:
        "Nous favorisons des partenariats solides entre élèves, parents, enseignants et la communauté au sens large.",
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      titleEn: "Innovation",
      titleFr: "Innovation",
      descEn:
        "We embrace modern teaching methods and technology to prepare students for tomorrow's challenges.",
      descFr:
        "Nous adoptons des méthodes pédagogiques modernes et la technologie pour préparer les élèves aux défis de demain.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-primary to-secondary text-white py-24"
      >
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <motion.img
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src="https://images.unsplash.com/photo-1739249327281-e918124ac540?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzdHVkZW50cyUyMG91dGRvb3J8ZW58MXx8fHwxNzY4ODAyMjIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="About Us"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Award className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl mb-6 text-white">
              {t("about.title")}
            </h1>
            <p className="text-xl mb-4 text-white/95">{t("about.subtitle")}</p>
            <p className="text-lg text-white/90 italic">"{t("motto")}"</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl mb-6 text-primary">
                {language === "en" ? "Our Story" : "Notre Histoire"}
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  {language === "en"
                    ? "Founded over 15 years ago, Complex Pascal has been a cornerstone of bilingual education in Cameroon. What began as a small educational initiative has grown into a comprehensive institution serving hundreds of families."
                    : "Fondé il y a plus de 15 ans, Complex Pascal est un pilier de l'éducation bilingue au Cameroun. Ce qui a commencé comme une petite initiative éducative s'est transformé en une institution complète au service de centaines de familles."}
                </p>
                <p>
                  {language === "en"
                    ? "Our journey has been marked by unwavering commitment to excellence, innovation in teaching methods, and a deep understanding of the needs of bilingual students in our community."
                    : "Notre parcours a été marqué par un engagement inébranlable envers l'excellence, l'innovation dans les méthodes d'enseignement et une compréhension profonde des besoins des élèves bilingues de notre communauté."}
                </p>
                <p>
                  {language === "en"
                    ? "Today, Complex Pascal stands as a testament to what dedicated educators, supportive parents, and motivated students can achieve together."
                    : "Aujourd'hui, Complex Pascal témoigne de ce que des éducateurs dévoués, des parents soutenants et des élèves motivés peuvent accomplir ensemble."}
                </p>
              </div>
              <Button
                size="lg"
                onClick={() => navigateTo("contact")}
                className="mt-8 bg-secondary hover:bg-secondary/90"
              >
                {t("joinUs")}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://images.unsplash.com/photo-1636772523547-5577d04e8dc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY2hpbGRyZW4lMjBjbGFzc3Jvb218ZW58MXx8fHwxNzY4NzQ1ODM5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students"
                className="rounded-lg shadow-lg h-64 w-full object-cover"
              />
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://images.unsplash.com/photo-1649920442906-3c8ef428fb6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwdGVhY2hpbmclMjBjbGFzc3Jvb218ZW58MXx8fHwxNzY4NzQ2NjEyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Teaching"
                className="rounded-lg shadow-lg h-64 w-full object-cover mt-8"
              />
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://images.unsplash.com/photo-1607586597362-cb492b31d4cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwc3R1ZGVudHMlMjBncm91cHxlbnwxfHx8fDE3Njg3NDU4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Learning"
                className="rounded-lg shadow-lg h-64 w-full object-cover"
              />
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://images.unsplash.com/photo-1565373086464-c8af0d586c0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzY4NzM2NTk0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Happy Students"
                className="rounded-lg shadow-lg h-64 w-full object-cover mt-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4">
              {language === "en"
                ? "Our Impact in Numbers"
                : "Notre Impact en Chiffres"}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                <Card className="text-center hover:shadow-xl transition-all border-2 border-transparent hover:border-primary/20">
                  <CardContent className="p-8">
                    <motion.div
                      className="text-primary mx-auto mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {stat.icon}
                    </motion.div>
                    <h3 className="text-4xl mb-2 text-primary">
                      {language === "en" ? stat.numberEn : stat.numberFr}
                    </h3>
                    <p className="text-muted-foreground">
                      {language === "en" ? stat.labelEn : stat.labelFr}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full bg-gradient-to-br from-primary/5 to-primary/10 border-l-4 border-l-primary hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <Eye className="w-14 h-14 text-primary mb-6" />
                  <h3 className="text-3xl mb-4 text-primary">
                    {language === "en" ? "Our Vision" : "Notre Vision"}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {language === "en"
                      ? "To be the leading bilingual educational institution in the region, recognized for academic excellence, innovation, and the holistic development of students who are prepared to succeed in a globalized world."
                      : "Être l'institution éducative bilingue de premier plan dans la région, reconnue pour l'excellence académique, l'innovation et le développement holistique des élèves préparés à réussir dans un monde globalisé."}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full bg-gradient-to-br from-secondary/5 to-secondary/10 border-l-4 border-l-secondary hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <Target className="w-14 h-14 text-secondary mb-6" />
                  <h3 className="text-3xl mb-4 text-secondary">
                    {language === "en" ? "Our Mission" : "Notre Mission"}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {language === "en"
                      ? "To provide exceptional bilingual education that nurtures academic excellence, character development, and critical thinking skills. We are committed to creating a supportive learning environment where every student can discover their potential and achieve success."
                      : "Fournir une éducation bilingue exceptionnelle qui favorise l'excellence académique, le développement du caractère et les compétences de pensée critique. Nous nous engageons à créer un environnement d'apprentissage favorable où chaque élève peut découvrir son potentiel et réussir."}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">
              {language === "en"
                ? "Our Core Values"
                : "Nos Valeurs Fondamentales"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === "en"
                ? "The principles that guide everything we do"
                : "Les principes qui guident tout ce que nous faisons"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full text-center hover:shadow-xl transition-all">
                  <CardContent className="p-8">
                    <motion.div
                      className="text-primary mx-auto mb-6"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {value.icon}
                    </motion.div>
                    <h3 className="text-xl mb-4 text-primary">
                      {language === "en" ? value.titleEn : value.titleFr}
                    </h3>
                    <p className="text-muted-foreground">
                      {language === "en" ? value.descEn : value.descFr}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4">
              {language === "en"
                ? "What Makes Us Stand Out"
                : "Ce Qui Nous Distingue"}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                titleEn: "15+ Years of Experience",
                titleFr: "15+ Années d'Expérience",
                descEn:
                  "Proven track record of academic excellence and student success",
                descFr:
                  "Bilan éprouvé d'excellence académique et de réussite des élèves",
              },
              {
                titleEn: "Stable & Expert Staff",
                titleFr: "Personnel Stable et Expert",
                descEn:
                  "Experienced teachers dedicated to student growth and achievement",
                descFr:
                  "Enseignants expérimentés dévoués à la croissance et à la réussite des élèves",
              },
              {
                titleEn: "Comprehensive Facilities",
                titleFr: "Installations Complètes",
                descEn:
                  "Modern classrooms, labs, event hall, and sports facilities",
                descFr:
                  "Salles de classe modernes, laboratoires, salle de fête et installations sportives",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-xl transition-all border-2 border-transparent hover:border-secondary/30">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-white">{index + 1}</span>
                    </div>
                    <h4 className="mb-3 text-secondary">
                      {language === "en" ? item.titleEn : item.titleFr}
                    </h4>
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

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-primary to-secondary text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-6 text-white">
            {language === "en"
              ? "Be Part of Our Story"
              : "Faites Partie de Notre Histoire"}
          </h2>
          <p className="text-xl mb-8 text-white/95 max-w-2xl mx-auto">
            {language === "en"
              ? "Join the Complex Pascal family and help us write the next chapter of educational excellence"
              : "Rejoignez la famille Complex Pascal et aidez-nous à écrire le prochain chapitre de l'excellence éducative"}
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
              onClick={() => navigateTo("primary")}
              className="bg-primary  text-white hover:bg-white/10"
            >
              {language === "en"
                ? "Explore Our Schools"
                : "Explorez Nos Écoles"}
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
