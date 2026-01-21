import { Users, BookOpen, Clock, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const ImpactSection = () => {
  const stats = [
    { 
      icon: Users, 
      value: "2,800+", 
      label: "Children Engaged",
      color: "text-orange-500"
    },
    { 
      icon: BookOpen, 
      value: "90+", 
      label: "Youth Participants",
      color: "text-blue-500"
    },
    { 
      icon: Clock, 
      value: "47,000+", 
      label: "Volunteer Hours",
      color: "text-cyan-500"
    },
    { 
      icon: TrendingUp, 
      value: "9,000+", 
      label: "Students Impacted",
      color: "text-pink-500"
    },
  ];

  return (
    <section className="relative py-20 bg-[#FEFBF1]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left side - Text content */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-dm-serif font-normal  lg:leading-[80px]  text-[#FEB344]">
                Our <span className="italic text-[#FEB344]">Impact</span>
              </h2>
              <p className="text-2xl text-[#494949] max-w-xl font-poppins font-medium">
                Every number represents a life touched, a story shared, and a future brightened
              </p> 
            </div>

            {/* Right side - Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <Card 
                  key={index} 
                  className="p-6 rounded-[18px]  text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white border-0 shadow-lg"
                >
                  <div className="flex flex-col items-center space-y-3">
                    <stat.icon className={`h-[34px] w-[34px] ${stat.color}`} strokeWidth={1.5} />
                    <div className="font-poppins">
                      <p className="text-3xl sm:text-4xl font-semibold text-foreground mb-1">{stat.value}</p>
                      <p className="text-sm text-[#494949] font-medium">{stat.label}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
