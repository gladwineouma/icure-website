import { Heart, Users, Award, Phone, Mail, ArrowLeft, HandHeart, Wrench, Smartphone, ArrowUp, GraduationCap, Recycle } from "lucide-react";
import { motion } from "framer-motion";
import { } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import StaggerChildren, { staggerItem } from "@/components/StaggerChildren";

const teamMembers = [
  { name: "Irene Muthoni", role: "Director", image: "/irine.jpg" },
  { name: "Member 2", role: "Training Lead", image: "/images/team/member2.jpg" },
  { name: "Member 3", role: "Technical Trainer", image: "/images/team/member3.jpg" },
  { name: "Member 4", role: "Youth Mentor", image: "/images/team/member4.jpg" },
  { name: "Member 5", role: "Community Outreach", image: "/images/team/member5.jpg" },
  { name: "Member 6", role: "Program Coordinator", image: "/images/team/member6.jpg" },
];

const CboPage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Header */}
      <div className="bg-black text-white">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/icure-logo.png" alt="iCure" className="h-10 w-8 object-contain" />
            <span className="text-xl font-bold text-[#E91F31]">iCure</span>
          </Link>
          <Link
            to="/#about"
            className="px-6 py-2 rounded-lg text-sm font-semibold text-white border border-white/30 bg-white/5 hover:bg-white hover:text-black hover:border-[#E91F31] transition-all duration-300"
          >
            <ArrowLeft className="inline h-4 w-4 mr-2" /> Back to Home
          </Link>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-lg text-sm font-semibold text-white border border-[#E91F31]/30 bg-[#E91F31]/90 hover:bg-white hover:text-black hover:border-[#E91F31] transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-red-500/50 hover:scale-105"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: window.pageYOffset > 300 ? 1 : 0, scale: window.pageYOffset > 300 ? 1 : 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>

      {/* Hero Banner - APPLIED NEW FONT FORMAT */}
      <section className="relative py-24 bg-gradient-to-r from-black to-black/60 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-black" />
          <div className="absolute right-0 top-0 bottom-0 w-2/3 bg-gradient-to-b from-[#E91F31]/30 via-[#E91F31]/10 to-transparent" />
        </div>

        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-12 left-8 text-[#E91F31]/10 animate-pulse">
            <Users className="h-32 w-32 md:h-48 md:w-48" />
          </div>
          <div className="absolute bottom-12 right-8 text-[#E91F31]/10 animate-pulse" style={{ animationDelay: "1.5s" }}>
            <Heart className="h-24 w-24 md:h-36 md:w-36" />
          </div>
        </div>

        <div className="container relative z-10 mx-auto px-6 max-w-6xl text-center">
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <span className="inline-block rounded-full border border-[#E91F31]/40 bg-[#E91F31]/10 px-4 py-1.5 text-xs font-semibold text-[#E91F31] mb-4 backdrop-blur-sm">
                Community Based Organisation
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight">
                Empowering <span className="text-[#E91F31]">Less Fortunate Youth</span>
              </h1>
              <p className="mt-4 mx-auto max-w-2xl text-gray-300 text-sm md:text-base leading-relaxed">
                iCure Mentorship and Empowerment Training Centre is a registered Community Based Organisation
                dedicated to transforming the lives of underprivileged youth through skills training, mentorship,
                and empowerment in electronics repair and technology.
              </p>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story - APPLIED NEW FONT FORMAT */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E91F31] block mb-3">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 tracking-tight">
                Building Futures, <span className="text-[#E91F31]">One Youth at a Time</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div>
                <div className="mt-6 space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                  <p>
                    We believe every young person deserves a chance to succeed. Many youth in our community face
                    economic hardships that deny them access to quality education and employment opportunities.
                  </p>
                  <p>
                    iCure was founded to bridge this gap — providing free and subsidised hands-on training in
                    phone and laptop repair, equipping young people with marketable skills that lead to
                    self-employment and financial independence.
                  </p>
                  <p>
                    Our programmes focus on practical, industry-relevant skills combined with mentorship,
                    life skills, and entrepreneurship training to create well-rounded, empowered individuals.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                  <img
                    src="/gallery-4.png"
                    alt="iCure CBO Registration"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 rounded-xl bg-[#E91F31] text-white px-4 py-2 text-sm font-semibold shadow-lg">
                  <Award className="inline h-4 w-4 mr-1" /> Registered CBO
                </div>
              </div>


            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gray-50/50">
        <div className="container mx-auto px-6">
          <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, value: "200+", label: "Youth Trained" },
              { icon: Heart, value: "6", label: "Team Members" },
              { icon: Award, value: "100%", label: "Commitment" },
              { icon: HandHeart, value: "∞", label: "Impact" },
            ].map((stat) => (
              <motion.div key={stat.label} variants={staggerItem} className="text-center p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <stat.icon className="h-12 w-12 mx-auto text-[#E91F31] mb-4 hover:scale-110 transition-transform duration-200" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Team Section - APPLIED NEW FONT FORMAT */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E91F31] block mb-3">
                Our Team
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 tracking-tight">
                Meet the People Behind iCure
              </h2>
              <p className="mt-4 text-gray-600 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                Passionate individuals dedicated to mentoring and empowering youth in our community.
              </p>
            </motion.div>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div key={member.name} variants={staggerItem}>
                <div key={member.name} className="group relative h-full w-full">
                  <div className="aspect-[4/5] w-full h-full rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl hover:shadow-3xl hover:-translate-y-3 bg-gradient-to-br from-black/10 to-black/20 backdrop-blur-sm transition-all duration-500 max-h-[450px]">
                    {/* Full Image - Occupies ALL space */}
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Glassy Name Overlay - Floats on TOP */}
                    <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/10 backdrop-blur-2xl border border-white/60 rounded-2xl shadow-xl group-hover:bg-black/30 transition-all duration-400">
                      <h3 className="text-sm md:text-base font-semibold text-white mb-1 truncate drop-shadow-lg">
                        {member.name}
                      </h3>
                      <p className="text-[#E91F31] font-semibold text-xs md:text-sm px-2 py-px bg-white/40 rounded-full inline-block shadow-sm">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>


              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Donate Section - APPLIED NEW FONT FORMAT */}

      <section id="donate" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/training-img.jpg" alt="" className="h-full w-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="absolute top-12 left-8 text-[#E91F31]/10 animate-pulse">
          <Phone className="h-32 w-32 md:h-48 md:w-48" />
        </div>
        <div className="absolute bottom-12 right-8 text-[#E91F31]/10 animate-pulse" style={{ animationDelay: "1.5s" }}>
          <Wrench className="h-24 w-24 md:h-36 md:w-36" />
        </div>

        <div className="container relative z-10 mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block rounded-full border border-[#E91F31]/40 bg-[#E91F31]/10 px-4 py-1.5 text-xs font-semibold text-[#E91F31] mb-4 backdrop-blur-sm">
              Support Our Cause
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white">
              Make a <span className="text-[#E91F31]">Donation</span>
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-gray-300 text-sm md:text-base leading-relaxed">
              Choose how you want to make an impact — sponsor a student, support sustainability, or equip our training workshop.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">

            {/* Sponsor a Student */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl border border-[#E91F31]/20 bg-white/5 backdrop-blur-md p-8 transition-all duration-500 hover:border-[#E91F31]/50 hover:bg-white/10 shadow-lg shadow-red-500/20"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wider bg-[#E91F31] text-white px-3 py-1 rounded-full shadow-md">
                Most Impactful
              </div>

              <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-[#E91F31]/50 transition-all duration-300 group-hover:h-1.5 group-hover:bg-[#E91F31]" />
              <div className="relative">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#E91F31]/20 text-[#E91F31] transition-all duration-300 group-hover:bg-[#E91F31] group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-500/30">
                  <GraduationCap className="h-7 w-7" strokeWidth={1.5} />
                </div>

                <span className="text-xs font-semibold uppercase tracking-widest text-[#E91F31] block mb-3">
                  Sponsor a Student
                </span>

                <h3 className="mt-2 text-xl font-medium text-white mb-4 leading-snug">
                  Change a Life Through Training
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-300">
                  Support a young person’s journey by covering training, mentorship, and certification.
                </p>

                <div className="mt-6 space-y-3 text-sm">
                  <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                    <span className="text-gray-300 block mb-1">How to sponsor:</span>
                    <span className="font-semibold text-white text-base">
                      Get in touch and we’ll guide you through the process
                    </span>
                  </div>
                  <div className="mt-6">
                    <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                      <span className="text-gray-300 block mb-1">What happens next:</span>
                      <span className="font-semibold text-white text-base">
                        We connect you with a student and support you as you transform their future
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover CTA */}
                <div className="mt-6 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <span className="text-[#E91F31] font-semibold text-sm tracking-wide">
                    Start Sponsoring →
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Go Green */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl border border-[#E91F31]/20 bg-white/5 backdrop-blur-md p-8 transition-all duration-500 hover:border-[#E91F31]/50 hover:bg-white/10 shadow-lg shadow-red-500/20"
            >
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-[#E91F31]/50 transition-all duration-300 group-hover:h-1.5 group-hover:bg-[#E91F31]" />
              <div className="relative">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#E91F31]/20 text-[#E91F31] transition-all duration-300 group-hover:bg-[#E91F31] group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-500/30">
                  <Recycle className="h-7 w-7" strokeWidth={1.5} />
                </div>

                <span className="text-xs font-semibold uppercase tracking-widest text-[#E91F31] block mb-3">
                  Go Green
                </span>

                <h3 className="mt-2 text-xl font-medium text-white mb-4 leading-snug">
                  Recycle for Learning
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-300">
                  Donate unused electronics to promote sustainability while helping students gain hands-on experience using real devices in their training.
                </p>

                <div className="mt-6 space-y-3 text-sm">
                  <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                    <span className="text-gray-300 block mb-1">Donate:</span>
                    <span className="font-semibold text-[#E91F31] text-base">
                      Old phones, laptops, accessories & other electronic devices
                    </span>
                  </div>
                  <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                    <span className="text-gray-300 block mb-1">Impact:</span>
                    <span className="font-semibold text-white text-base">
                      Reduce e-waste while supporting practical, real-world learning
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tools & Equipment */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl border border-[#E91F31]/20 bg-white/5 backdrop-blur-md p-8 transition-all duration-500 hover:border-[#E91F31]/50 hover:bg-white/10 shadow-lg shadow-red-500/20"
            >
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-[#E91F31]/50 transition-all duration-300 group-hover:h-1.5 group-hover:bg-[#E91F31]" />
              <div className="relative">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#E91F31]/20 text-[#E91F31] transition-all duration-300 group-hover:bg-[#E91F31] group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-500/30">
                  <Wrench className="h-7 w-7" strokeWidth={1.5} />
                </div>

                <span className="text-xs font-semibold uppercase tracking-widest text-[#E91F31] block mb-3">
                  Tools & Equipment
                </span>

                <h3 className="mt-2 text-xl font-medium text-white mb-4 leading-snug">
                  Equip Future Technicians
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-300">
                  Support hands-on training by providing the essential tools and equipment students need to practice, learn, and build real technical skills.
                </p>

                <div className="mt-6 space-y-3 text-sm">
                  <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm text-left">
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <Smartphone className="h-4 w-4 text-[#E91F31]" />
                        Devices for diagnostics and repair practice
                      </li>
                      <li className="flex items-center gap-2">
                        <Wrench className="h-4 w-4 text-[#E91F31]" />
                        Professional repair tools and toolkits
                      </li>
                      <li className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-[#E91F31]" />
                        Training materials and learning resources
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                    <span className="text-gray-300 block mb-1">Impact:</span>
                    <span className="font-semibold text-white text-base">
                      Enable practical training and prepare students for real-world repair work
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* CTA - APPLIED NEW FONT FORMAT */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 tracking-tight mb-6">
                Want to Partner With Us?
              </h3>
              <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
                We welcome partnerships with organisations, corporates, and individuals who share our vision of youth empowerment.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="mailto:info@icure.africa"
                  className="inline-flex items-center gap-2 rounded-md border-2 border-[#E91F31]/40 bg-[#E91F31] px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#E91F31]/60 hover:bg-[#E91F31]/20 hover:shadow-lg hover:shadow-red-500/20 hover:scale-105"
                >
                  Email Us
                </a>
                <a
                  href="https://wa.me/254722415157"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border-2 border-[#E91F31]/40 bg-white px-8 py-4 text-sm font-semibold text-[#E91F31] backdrop-blur-sm transition-all duration-300 hover:border-[#E91F31]/60 hover:bg-[#E91F31]/20 hover:shadow-lg hover:shadow-red-500/20 hover:scale-105"
                >
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 text-center text-sm text-white/70">
        © {new Date().getFullYear()} iCure Mentorship and Empowerment Training Centre. All rights reserved.
      </footer>
    </div>
  );
};

export default CboPage;
