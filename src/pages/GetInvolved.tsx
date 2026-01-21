import { Heart, Users, Handshake, GraduationCap, BookOpen, UserCheck, Mail, Phone, MapPin, Send, MessageSquare, ArrowRight, Briefcase, Search, FileEdit, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaveDecoration from "@/components/WaveDecoration";
import studentPhone from "@/assets/gallery/student-phone-learning.jpg";
import smilingStudent from "@/assets/gallery/smiling-student-notebook.jpg";
import studentsOutdoor from "@/assets/gallery/students-outdoor-learning.jpg";
import volunteerTeaching from "@/assets/gallery/volunteer-teaching.jpg";
import groupStudy from "@/assets/gallery/group-study.jpg";
import donateChildren from "@/assets/donate-children.jpg";
const GetInvolved = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img src={smilingStudent} alt="Smiling student with notebook" className="w-full h-full object-cover" />
          </div>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 z-[1]"></div>
          
          {/* Wave Decoration at Bottom */}
          <WaveDecoration position="bottom" />
          
          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white animate-fade-in">
                Get Involved
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed max-w-3xl mx-auto">
                Join us in creating transformative change through education and community action
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a href="https://www.readastory.org.in/signup" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base">
                    Get Involved
                  </Button>
                </a>
                <Link to="/programs">
                  <Button size="lg" variant="outline" className="border-2 border-white bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-base">
                    Explore Our Programs
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer Opportunities Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-600">
                Volunteer Opportunities
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Be the change. Share your time and skills to empower children and communities.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Reading Sessions */}
              <Card className="bg-white hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <BookOpen className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-blue-600 text-center">Reading Sessions For Read-A-Story</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    Conduct One-On-One Or Small Group Reading Sessions With Children
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Evaluation Support */}
              <Card className="bg-white hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Search className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-blue-600 text-center">Evaluation Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    Help Assess Program Impact And Student Progress
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Content Creation */}
              <Card className="bg-white hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <FileEdit className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-blue-600 text-center">Content Creation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    Develop Educational Materials And Resources
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* Image with Quote */}
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <img src={volunteerTeaching} alt="Volunteers with children" className="w-full h-[400px] object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <p className="text-white text-2xl sm:text-3xl font-medium text-center px-8 max-w-4xl">
                  "Our volunteers are not just readers of stories; <span className="italic text-orange-400">they are creators of dreams.</span>"
                </p>
              </div>
            </div>

            {/* Sign up Button */}
            <div className="text-center">
              <a href="https://readastory.org.in/signup" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg">
                  Sign up to Volunteer <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Donate Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="text-orange-500">Donate</span> <span className="text-gray-900 italic">- ways to support</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl">
                Your contribution creates lasting impact. Every donation matters.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start mb-8">
              {/* Image */}
              <div className="rounded-2xl overflow-hidden">
                <img src={donateChildren} alt="Children with books" className="w-full h-full object-cover" />
              </div>

              {/* Donation Cards - 2x2 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="bg-white shadow-md hover:shadow-xl transition-all">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl font-bold text-gray-900">Fund Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-gray-600">
                      Books, Story Kits, & Mobile Phones For Programs
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-md hover:shadow-xl transition-all">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl font-bold text-gray-900">Sponsor Facilitators</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-gray-600">
                      Support Community Facilitator Salaries
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-md hover:shadow-xl transition-all">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl font-bold text-gray-900">Sponsor Transport</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-gray-600">
                      Cycles Or Two-Wheelers For Facilitators
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-md hover:shadow-xl transition-all">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl font-bold text-gray-900">General Support</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-gray-600">
                      Flexible Funding For Program Needs
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Tax Benefits Banner */}
            <div className="bg-cyan-50 border-2 border-cyan-400 rounded-2xl p-6 mb-8">
              <p className="text-cyan-600 font-semibold text-center text-lg">
                Tax Benefits Available
              </p>
              <p className="text-gray-700 text-center mt-2">
                Donations To N+1 Social Foundation Are Eligible For Tax Benefits Under 80G And 12A
              </p>
            </div>

            {/* Donate Button */}
            <div className="text-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-lg rounded-lg">
                Donate Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Career & Internships Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Career Card */}
              <Card className="bg-white hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <Briefcase className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">Career</CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    Join Our Dynamic Team At The Intersection Of Education And Social Innovation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6 text-gray-700">
                    <li>• Program Managers</li>
                    <li>• Communication Associates</li>
                    <li>• Research Coordinators</li>
                  </ul>
                  <Link to="/contact">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                      View Open Positions
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Internships Card */}
              <Card className="bg-white hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <GraduationCap className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">Internships</CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    Gain Hands-On Exposure, Mentorship, And Certification In Social Impact Work.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6 text-gray-700">
                    <li>• Program Support</li>
                    <li>• Content Development</li>
                    <li>• Research & Analysis</li>
                  </ul>
                  <Link to="/contact">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                      Apply for Internships
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Partner with US Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
          <WaveDecoration position="top" />
          <WaveDecoration position="bottom" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <div className="flex justify-center">
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-full">
                  <LinkIcon className="h-16 w-16 text-white" />
                </div>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Partner with US
              </h2>
              
              <p className="text-xl text-white/95 max-w-3xl mx-auto">
                Collaborate as a school, corporate, or NGO to expand our impact
              </p>

              <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
                We work with Z.P. Schools, corporate CSR programs, universities, and NGOs to create sustainable partnerships that amplify our reach and deepen our impact in underserved communities.
              </p>

              <div className="pt-6">
                <Link to="/contact">
                  <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-10 py-6 text-lg">
                    Explore Partnership Opportunities
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        
      </main>
      <Footer />
    </div>;
};
export default GetInvolved;