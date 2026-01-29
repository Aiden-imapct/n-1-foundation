import { FileText, Download, BookOpen, BarChart3, Users, Award, ExternalLink, Smile, Scale, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaveDecoration from "@/components/WaveDecoration";
import threeStudents from "@/assets/gallery/three-students-blackboard.jpg";
import schoolGroup from "@/assets/gallery/school-group-photo.jpg";
import studentsOutdoor from "@/assets/gallery/students-outdoor-learning.jpg";
import volunteerTeaching from "@/assets/gallery/volunteer-teaching.jpg";
import studentsLearning from "@/assets/gallery/students-learning.jpg";

const Resources = () => {
  const annualReports = [
    {
      year: "2024-2025",
      status: "Latest",
      description: "Our most recent impact report showcasing current programs and achievements."
    },
    {
      year: "2023-2024", 
      status: "Complete",
      description: "Comprehensive overview of our expanded reach and program development."
    },
    {
      year: "2022-2023",
      status: "Complete", 
      description: "Foundation year highlights and initial program launches."
    }
  ];

  const publications = [
    {
      title: "Case Studies On Literacy Outcomes",
      category: "Research",
      description: "Detailed Analysis Of Reading Improvement In Underserved Communities.",
      icon: BarChart3,
      image: studentsOutdoor,
      badgeColor: "bg-yellow-500"
    },
    {
      title: "Volunteer Handbooks & Training Modules",
      category: "Training",
      description: "Comprehensive Guides For New Volunteers and Training Materials.",
      icon: Users,
      image: volunteerTeaching,
      badgeColor: "bg-teal-500"
    },
    {
      title: "Solve-With-Bharat Innovation Whitepapers",
      category: "Innovation",
      description: "Research Findings From Youth-Led Innovation Challenges.",
      icon: Award,
      image: studentsLearning,
      badgeColor: "bg-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[84vh] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src={threeStudents} 
              alt="Three students at blackboard" 
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
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight text-orange-500 animate-fade-in">
                One Report. One Impact. One Truth.
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed max-w-3xl mx-auto">
                Access our annual reports, research publications, and training materials to understand our impact
              </p>
            </div>
          </div>
        </section>

        {/* Annual Reports */}
        <section className="py-20 bg-orange-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-orange-500">Annual Reports</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Transparent reporting of our <span className="text-blue-600 font-medium">impact</span>, <span className="text-blue-600 font-medium">finances</span>, and <span className="text-orange-500 font-medium">progress</span> toward our mission.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {annualReports.map((report, index) => (
                <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 relative">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <FileText className="h-10 w-10 text-orange-500" />
                      {report.status === "Latest" && (
                        <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                          NEW ✨
                        </span>
                      )}
                    </div>
                    <CardTitle className="text-2xl text-gray-900 mb-2">{report.year}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-6 text-gray-600">
                      {report.description}
                    </CardDescription>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                      <Button variant="outline" className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View PDF
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Research & Publications */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-[55px] lg:leading-[80px] font-dm-serif font-normal text-[#004AAD]">Research & Publications</h2>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto">
                  Evidence-based insights from our <span className="text-orange-500 font-medium">programs</span> and <span className="text-orange-500 font-medium">research initiatives</span>
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {publications.map((publication, index) => (
                  <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative h-48">
                      <img 
                        src={publication.image} 
                        alt={publication.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <publication.icon className="h-6 w-6 text-gray-600" />
                        <span className={`${publication.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                          {publication.category}
                        </span>
                      </div>
                      <CardTitle className="text-lg text-gray-900">{publication.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4 text-gray-600">
                        {publication.description}
                      </CardDescription>
                      <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Legal & Financial Transparency */}
        <section className="relative py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
          <WaveDecoration position="top" />
          <WaveDecoration position="bottom" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full">
                  <Smile className="h-12 w-12 text-white" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                Legal & Financial Transparency
              </h2>
              <p className="text-lg text-white/95 max-w-3xl mx-auto">
                We believe in complete <span className="text-orange-400 font-medium">transparency</span> and <span className="text-orange-400 font-medium">accountability</span> in all our operations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Legal Status Card */}
              <Card className="bg-white hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                    <Scale className="h-8 w-8 text-orange-500" />
                  </div>
                  <CardTitle className="text-2xl text-orange-500">Legal Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6 text-gray-700">
                    <li>• Registered Under Societies Act</li>
                    <li>• Certified Under 80G And 12A</li>
                    <li>• Tax Exemptions For Donors</li>
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Reports
                  </Button>
                </CardContent>
              </Card>

              {/* Financial Practices Card */}
              <Card className="bg-white hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                    <DollarSign className="h-8 w-8 text-orange-500" />
                  </div>
                  <CardTitle className="text-2xl text-orange-500">Financial Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6 text-gray-700">
                    <li>• Annual Independent Audits</li>
                    <li>• Public Financial Reports</li>
                    <li>• Transparent Impact Reporting</li>
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Reports
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;