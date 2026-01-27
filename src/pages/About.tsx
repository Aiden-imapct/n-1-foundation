import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaveDecoration from "@/components/WaveDecoration";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Shield,
  Sparkles,
  UserRound,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import rahulImg from "@/assets/team/rahul.jpg";
import amodImg from "@/assets/team/amod.jpg";
import gauriImg from "@/assets/team/gauri.jpg";
import anjaliImg from "@/assets/team/anjali.jpg";
import pallaviImg from "@/assets/team/pallavi.jpg";
import vinayakImg from "@/assets/team/vinayak.jpg";
import ankitaImg from "@/assets/team/ankita.jpg";
import varshaImg from "@/assets/team/varsha.jpg";
import aboutHero from "@/assets/about-hero.png";
import butterflyLifecycle from "@/assets/butterfly-lifecycle.png";
import logo from "@/assets/logo-short.png";
import teachingSession from "@/assets/gallery/teaching-session.jpg";
import classroomStudents from "@/assets/gallery/classroom-students.jpg";
import studentsLearning from "@/assets/gallery/students-learning.jpg";
import groupStudy from "@/assets/gallery/group-study.jpg";
import volunteerTeaching from "@/assets/gallery/volunteer-teaching.jpg";
const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Empathy",
      description:
        "Listening and responding to community needs with compassion and understanding.",
    },
    {
      icon: Target,
      title: "Innovation",
      description:
        "Designing simple, scalable solutions that create lasting impact.",
    },
    {
      icon: Shield,
      title: "Transparency",
      description:
        "Accountability through open reports, audits, and clear communication.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Building partnerships for sustained impact across communities.",
    },
  ];
  const recognitions = [
    "Recognized by State Education Boards for literacy promotion",
    "Featured at CSR forums for innovative volunteer-driven models",
    "Community appreciation awards from schools and local bodies",
  ];
  const teamMembers = [
    {
      name: "Rahul Pathak",
      image: rahulImg,
      initials: "RP",
    },
    {
      name: "Amod Joshi",
      image: amodImg,
      initials: "AJ",
    },
    {
      name: "Gauri Mehendale",
      image: gauriImg,
      initials: "GM",
    },
    {
      name: "Anjali Desai",
      image: anjaliImg,
      initials: "AD",
    },
    {
      name: "Pallavi Paranjape",
      image: pallaviImg,
      initials: "PP",
    },
    {
      name: "Vinayak Deo",
      image: vinayakImg,
      initials: "VD",
    },
    {
      name: "Ankita Pujari",
      image: ankitaImg,
      initials: "AP",
    },
    {
      name: "Varsha Dhodi",
      image: varshaImg,
      initials: "VD",
    },
  ];
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={aboutHero}
              alt="Students with books"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 z-[1]"></div>

          {/* Wave Decoration at Bottom */}
          <WaveDecoration position="bottom" />

          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-dm-serif font-normal leading-tight text-white animate-fade-in">
                About US
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed max-w-5xl mx-auto font-sarabun">
                The n+1 Social Foundation is a registered non-profit committed
                to transforming lives through literacy, innovation, and
                community-led change
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="pt-12 pb-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mx-auto max-w-6xl">
              <h2 className="text-3xl sm:text-4xl lg:text-[55px]  lg:leading-[80px] font-dm-serif font-normal text-[#004AAD]">
                Who We Are:{" "}
                <img src={logo} alt="n+1" className="h-12 inline-block" />
              </h2>
              <p className="text-2xl text-[#494949] font-sarabun font-medium">
                The n+1 Social Foundation is a registered non-profit committed
                to transforming lives through literacy, innovation, and
                community-led change. We believe that small, consistent efforts
                multiply into transformative change.
              </p>
              <p className="text-2xl text-[#494949] font-sarabun font-medium mt-1">
                Through our flagship programs Read-a-Story and
                Solve-with-Bharat, we empower children to learn joyfully and
                youth to be actively involved, ensuring that education and
                community-led action become powerful engines of nation-building.
              </p>
            </div>
          </div>
        </section>

        {/* Butterfly Lifecycle */}
        <section className="">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto overflow-hidden">
              <img
                src={butterflyLifecycle}
                alt="Transforming Lives Through Literacy - Butterfly lifecycle showing educational transformation"
                className="block w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="pt-8 pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="border-l-4 border-l-primary shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Eye className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl">Our Vision</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    A society where every child has access to joyful learning,
                    and every young mind has the opportunity to better shape
                    their future.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Target className="h-8 w-8 text-secondary" />
                    <CardTitle className="text-2xl">Our Mission</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Bridge literacy gaps through volunteer and community
                      involvement
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Inspire youth to design solutions for rural challenges
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Build ecosystems of empathy, innovation, and partnerships
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Impact in Action - Full Width Banner Style */}

        {/* Meet The Team */}
        <section className="pt-16 pb-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-[55px]  lg:leading-[80px] font-dm-serif font-normal text-[#004AAD]">
                Meet The Team
              </h2>
              <p className="text-2xl text-[#494949]  font-sarabun font-medium">
                People behind n+1 Social Foundation
              </p>
            </div>

            <div
              className="grid  grid-cols-1 
  sm:grid-cols-2 
  lg:grid-cols-3 
  2xl:grid-cols-4 gap-12 max-w-5xl mx-auto"
            >
              {teamMembers.map((member, index) => {
                // Alternate gradient colors: blue and orange
                const gradientColor =
                  index % 2 === 0
                    ? "bg-gradient-to-t from-[#004EAD] to-transparent"
                    : "bg-gradient-to-t from-[#F1A826] to-transparent";
                return (
                  <div key={index} className="group">
                    <div className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[3/4]">
                      
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                      {/* Gradient overlay at bottom */}
                      <div
                        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t ${gradientColor} pt-12 pb-4 px-4`}
                      >
                        <h3 className="text-white font-semibold text-center text-[clamp(24px,1.7vw,28px)]">
                          {member.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-[#FEFBF1]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex gap-14">
              <div className="mb-16 whitespace-nowrap">
                <h2 className="text-3xl sm:text-4xl lg:text-[55px] lg:leading-[80px] font-dm-serif font-normal">
                  <span className="text-[#FEB344]">Our Core </span>
                  <span className="text-[#FEB344] italic">Values</span>
                </h2>
                <p className="text-[#494949] font-sarabun text-2xl font-medium">
                  The principles that guide everything we do
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Empathy */}
                <Card className="bg-white hover:shadow-xl transition-all duration-300 border-none shadow-md">
                  <CardHeader className="text-center pb-2">
                    <div className="flex justify-center mb-[10px]">
                      <Heart className="h-[32px] w-[32px] text-pink-500" />
                    </div>
                    <CardTitle className="text-[28px] font-semibold text-black">
                      Empathy
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center font-poppins ">
                    <p className="text-[#494949] font-poppins text-sm">
                      Listening And Responding To Community Needs With
                      Compassion And Understanding.
                    </p>
                  </CardContent>
                </Card>

                {/* Innovation */}
                <Card className="bg-white hover:shadow-xl transition-all duration-300 border-none shadow-md">
                  <CardHeader className="text-center pb-2">
                    <div className="flex justify-center mb-[10px]">
                      <Sparkles className="h-[28px] w-[28px] text-blue-500" />
                    </div>
                    <CardTitle className="text-[28px] font-semibold text-black">
                      Innovation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center font-poppins ">
                    <p className="text-[#494949] font-poppins text-sm">
                      Designing Simple, Scalable Solutions That Create Lasting
                      Impact.
                    </p>
                  </CardContent>
                </Card>

                {/* Transparency */}
                <Card className="bg-white hover:shadow-xl transition-all duration-300 border-none shadow-md">
                  <CardHeader className="text-center pb-2">
                    <div className="flex justify-center mb-[10px]">
                      <Shield className="h-[32px] w-[32px] text-teal-500" />
                    </div>
                    <CardTitle className="text-[28px] font-semibold text-black">
                      Transparency
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center font-poppins">
                    <p className="text-[#494949] font-poppins text-sm">
                      Accountability Through Open Reports, Audits, And Honest
                    </p>
                  </CardContent>
                </Card>

                {/* Collaboration */}
                <Card className="bg-white hover:shadow-xl transition-all duration-300 border-none shadow-md">
                  <CardHeader className="text-center pb-2">
                    <div className="flex justify-center mb-[10px]">
                      <UserRound className="h-[34px] w-[34px] text-orange-500" />
                    </div>
                    <CardTitle className="text-[28px] font-semibold text-black">
                      Collaboration
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center font-poppins">
                    <p className="text-[#494949] font-poppins text-sm">
                      Building Partnerships For Sustained, Community-Driven
                      Change.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Awards & Recognition + Legal */}
        <section className="relative py-20 bg-[#3A86FF] overflow-hidden">
          <WaveDecoration position="top" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Awards & Recognition Card */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 shadow-xl text-white">
                <h2 className="text-2xl font-semibold mb-6">
                  Awards & Recognition
                </h2>
                <ul className="space-y-2 font-poppins">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 flex-shrink-0">✓</span>
                    <span className="text-sm font-medium">
                      Recognized By State Education Boards For Literacy
                      Promotion
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 flex-shrink-0">✓</span>
                    <span className="text-sm font-medium">
                      Featured At CSR Forums For Innovative Volunteer-Driven
                      Models
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 flex-shrink-0">✓</span>
                    <span className="text-sm font-medium">
                      Community Appreciation Awards From Schools And Local
                      Bodies
                    </span>
                  </li>
                </ul>
              </div>

              {/* Legal & Financial Transparency Card */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 shadow-xl text-white">
                <h2 className="text-2xl font-semibold mb-6">
                  Legal & Financial Transparency
                </h2>
                <ul className="space-y-2 font-poppins">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 flex-shrink-0">•</span>
                    <span className="text-sm font-medium">
                      Registered Under The Societies Registration Act
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 flex-shrink-0">•</span>
                    <span className="text-sm font-medium">
                      Certified Under 80G And 12A - Donors Enjoy Tax Exemptions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 flex-shrink-0">•</span>
                    <span className="text-sm font-medium">
                      Annual Independent Audits Conducted
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 flex-shrink-0">•</span>
                    <span className="text-sm font-medium">
                      Financial And Impact Reports Publicly Available
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
export default About;
