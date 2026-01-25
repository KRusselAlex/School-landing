import { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Facebook,
  Instagram,
  MessageCircle,
  Award,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useLanguage } from "../contexts/LanguageContext";
import { toast } from "sonner@2.0.3";

export function ContactPage() {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    toast.success(
      language === "en"
        ? "Message sent successfully! We will contact you soon."
        : "Message envoyé avec succès! Nous vous contacterons bientôt.",
    );
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-primary to-secondary text-white py-20"
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Mail className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl mb-6 text-white">
              {t("contact.title")}
            </h1>
            <p className="text-xl mb-4 text-white/95">
              {t("contact.subtitle")}
            </p>
            <p className="text-lg text-white/90">{t("contact.message")}</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Motto Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="py-12 bg-gradient-to-r from-secondary/10 to-primary/10"
      >
        <div className="container mx-auto px-4 text-center">
          <Award className="w-12 h-12 mx-auto mb-4 text-secondary" />
          <h2 className="text-3xl mb-2 text-primary italic">"{t("motto")}"</h2>
          <p className="text-muted-foreground">
            {language === "en"
              ? "Our Guiding Principle"
              : "Notre Principe Directeur"}
          </p>
        </div>
      </motion.section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl mb-6">
                    {language === "en"
                      ? "Send Us a Message"
                      : "Envoyez-Nous un Message"}
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block mb-2 text-sm">
                        {language === "en" ? "Full Name" : "Nom Complet"}
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder={
                          language === "en" ? "John Doe" : "Jean Dupont"
                        }
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="example@email.com"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm">
                        {language === "en" ? "Phone" : "Téléphone"}
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="+237 XXX XXX XXX"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm">
                        {language === "en" ? "Subject" : "Sujet"}
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder={
                          language === "en"
                            ? "Inquiry about..."
                            : "Demande concernant..."
                        }
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm">Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full"
                        placeholder={
                          language === "en"
                            ? "Your message here..."
                            : "Votre message ici..."
                        }
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90"
                      size="lg"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {language === "en"
                        ? "Send Message"
                        : "Envoyer le Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* School Info */}
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl mb-6 text-primary">
                    {language === "en"
                      ? "School Information"
                      : "Informations Scolaires"}
                  </h3>
                  <div className="space-y-4">
                    <motion.div
                      className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg"
                      whileHover={{ scale: 1.02 }}
                    >
                      <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {language === "en" ? "Address" : "Adresse"}
                        </p>
                        <p>
                          Complex Pascal
                          <br />
                          [Your Address Here]
                          <br />
                          [City, Cameroon]
                        </p>
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg"
                      whileHover={{ scale: 1.02 }}
                    >
                      <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {language === "en" ? "Phone" : "Téléphone"}
                        </p>
                        <p>+237 XXX XXX XXX</p>
                        <p>+237 XXX XXX XXX</p>
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg"
                      whileHover={{ scale: 1.02 }}
                    >
                      <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          Email
                        </p>
                        <p>info@complexpascal.com</p>
                        <p>admissions@complexpascal.com</p>
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg"
                      whileHover={{ scale: 1.02 }}
                    >
                      <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {language === "en" ? "Hours" : "Horaires"}
                        </p>
                        <p>
                          {language === "en"
                            ? "Monday - Friday"
                            : "Lundi - Vendredi"}
                          : 7:00 - 17:00
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>

              {/* Event Hall Bookings */}
              <Card className="shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-secondary/5 to-secondary/10">
                <CardContent className="p-8">
                  <h3 className="text-2xl mb-4 text-secondary">
                    {language === "en"
                      ? "Event Hall Bookings"
                      : "Réservations Salle de Fête"}
                  </h3>
                  <p className="mb-4 text-muted-foreground">
                    {language === "en"
                      ? "For event hall reservations, please contact our events coordinator:"
                      : "Pour les réservations de salle de fête, veuillez contacter notre coordinateur d'événements:"}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-secondary" />
                      <span>+237 XXX XXX XXX</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-secondary" />
                      <span>events@complexpascal.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl mb-6">
                    {language === "en" ? "Follow Us" : "Suivez-Nous"}
                  </h3>
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href="#"
                      className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                    >
                      <Facebook className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href="#"
                      className="w-14 h-14 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                    >
                      <Instagram className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href="#"
                      className="w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
                    >
                      <MessageCircle className="w-6 h-6" />
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-muted/30"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl mb-8 text-center">
            {language === "en" ? "Find Us" : "Trouvez-Nous"}
          </h2>
          <Card className="shadow-xl overflow-hidden">
            <div className="w-full h-96 bg-muted flex items-center justify-center relative group cursor-pointer">
              {/* Clickable overlay */}
              <a
                href="https://www.google.com/maps/place/Institut+MBOUGANG+PASCAL/@3.9678646,11.5343334,18z/data=!4m22!1m15!4m14!1m6!1m2!1s0x108bcf86f33e9e27:0x6ce698fc40310153!2sPoste+Centrale,+Yaound%C3%A9,+Cameroon!2m2!1d11.5204988!2d3.8606987!1m6!1m2!1s0x108bc7007a86d1cf:0x4b5f175995d7fdb4!2sInstitut+MBOUGANG+PASCAL,+Soa,+Cameroon!2m2!1d11.536158!2d3.9678352!3m5!1s0x108bc7007a86d1cf:0x4b5f175995d7fdb4!8m2!3d3.9678369!4d11.5361131!16s%2Fg%2F11w_dg0tt9?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                title="Open in Google Maps"
              ></a>

              {/* Embedded Google Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.999447502661!2d11.5343334!3d3.9678646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bc7007a86d1cf%3A0x4b5f175995d7fdb4!2sInstitut%20MBOUGANG%20PASCAL!5e0!3m2!1sen!2s!4v1705616000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Institut Mbougang Pascal Location"
                className="transition-transform duration-500 group-hover:scale-105"
              ></iframe>

              {/* Overlay hint */}
              <div className="absolute bottom-4 right-4 bg-white/80 text-gray-800 px-3 py-1 rounded-lg text-sm hidden group-hover:flex items-center space-x-1">
                <span>Click to view on Google Maps</span>
              </div>
            </div>
          </Card>
        </div>
      </motion.section>
    </div>
  );
}
