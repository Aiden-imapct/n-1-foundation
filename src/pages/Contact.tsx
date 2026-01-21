import { Mail, Phone, MapPin, Send, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaveDecoration from "@/components/WaveDecoration";
import contactHero from "@/assets/contact-hero.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src={contactHero} 
              alt="School children" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 z-[1]"></div>
          
          {/* Wave Decoration at Bottom */}
          <WaveDecoration position="bottom" />
          
          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Contact Us
              </h1>
              
              <p className="text-lg sm:text-xl text-white leading-relaxed max-w-3xl mx-auto">
                Let's create change together. Reach out to learn more or get involved.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base">
                  Get Involved
                </Button>
                <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-base">
                  Explore Our Programs
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-orange-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div>
                <h2 className="text-4xl font-bold mb-8">
                  Get In <span className="text-orange-500 italic">Touch</span>
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">Aman.Jha@aidenai.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600">+91-123-456-7890</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-600">
                        Pune, Maharashtra, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Send Us A Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700">Your Name *</Label>
                    <Input id="name" placeholder="Enter your name" className="bg-gray-50" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">Email Address *</Label>
                    <Input id="email" type="email" placeholder="example@domain.com" className="bg-gray-50" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700">Phone Number *</Label>
                    <div className="flex gap-2">
                      <select className="border rounded-md px-3 py-2 bg-gray-50 w-20">
                        <option>+91</option>
                      </select>
                      <Input id="phone" type="tel" placeholder="" className="bg-gray-50 flex-1" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-gray-700">Subject *</Label>
                    <Input id="subject" placeholder="Enter your subject" className="bg-gray-50" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-700">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your inquiry"
                      className="min-h-[120px] bg-gray-50"
                    />
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Send Message <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Visit Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-600">Visit Us</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                We welcome visitors to our office. Please contact us in advance to schedule an appointment and ensure someone is available to meet with you.
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160989077!2d72.71637332542264!3d19.082502005891443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
          <WaveDecoration position="top" />
          <WaveDecoration position="bottom" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">FAQ</h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="volunteering" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8 bg-white/10">
                  <TabsTrigger value="volunteering" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-white">
                    Volunteering
                  </TabsTrigger>
                  <TabsTrigger value="commitment" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-white">
                    Time Commitment
                  </TabsTrigger>
                  <TabsTrigger value="teaching" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-white">
                    Get Started & Teaching
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="volunteering" className="bg-white rounded-xl p-8">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-left text-blue-600 font-semibold">
                        How do I get involved?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        It's easy! Start by signing up on our website platform by giving some contact details. Complete your profile by filling out basic details without taking any  development commitments.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-left text-blue-600 font-semibold">
                        What are the required skills to teach?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        No special teaching credentials are required. We provide comprehensive training and support materials for all our volunteers.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-left text-blue-600 font-semibold">
                        Can I teach from outside of India?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        Yes! Many of our programs can be conducted remotely through video calls, allowing volunteers from anywhere in the world to participate.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-left text-blue-600 font-semibold">
                        Where are the students located?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        Our students are primarily located in rural and underserved communities across Maharashtra, India.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger className="text-left text-blue-600 font-semibold">
                        Do I need to have the ability to speak the local language?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        While knowledge of local languages is helpful, it's not mandatory. Many of our programs are conducted in English or with translation support.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>

                <TabsContent value="commitment" className="bg-white rounded-xl p-8">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-left text-blue-600 font-semibold">
                        Are all times in the registration form IST times?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        Yes, all times mentioned in our registration forms and scheduling system are in Indian Standard Time (IST).
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-left text-blue-600 font-semibold">
                        What telephony vendors have worked well in the past for international dialing?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        We recommend WhatsApp calling, Skype, or Google Meet for international communication as they provide reliable and cost-effective solutions.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>

                <TabsContent value="teaching" className="bg-white rounded-xl p-8">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-left text-blue-600 font-semibold">
                        How do I get started with teaching?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        After signing up, you'll receive an orientation session followed by training materials. We'll then match you with students based on your availability and preferences.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;