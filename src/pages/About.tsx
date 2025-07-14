import { Users, Target, Heart, Award, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Dr. Josephine Asante",
    role: "Founder & Director",
    bio: "Dr. Asante has over 15 years of experience in public health and community medicine. She founded Josey's Health Corner to address healthcare gaps in underserved communities.",
    image: "/api/placeholder/300/300"
  },
  {
    name: "Kwame Osei",
    role: "Program Coordinator",
    bio: "Kwame manages our outreach programs and has extensive experience in community health education and volunteer coordination.",
    image: "/api/placeholder/300/300"
  },
  {
    name: "Ama Boateng",
    role: "Health Educator",
    bio: "Ama leads our educational initiatives and specializes in nutrition and preventive care education for rural communities.",
    image: "/api/placeholder/300/300"
  },
  {
    name: "Samuel Addo",
    role: "Community Liaison",
    bio: "Samuel bridges the gap between our organization and local communities, ensuring culturally sensitive and effective program delivery.",
    image: "/api/placeholder/300/300"
  }
];

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We approach every community with empathy and understanding, recognizing the unique challenges they face."
  },
  {
    icon: Users,
    title: "Community Partnership",
    description: "We believe in working with communities, not for them, ensuring local ownership of health initiatives."
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We maintain the highest standards in our programs and continuously strive for measurable impact."
  },
  {
    icon: Award,
    title: "Integrity",
    description: "We operate with transparency and accountability, ensuring resources reach those who need them most."
  }
];

const achievements = [
  "Reached over 50,000 people through health education programs",
  "Established health education centers in 25 communities",
  "Trained 200+ community health advocates",
  "Partnered with 15 local healthcare facilities",
  "Distributed essential health resources to 30+ remote areas"
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Josey's Health Corner
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Committed to transforming health outcomes in Ghana through education, 
              outreach, and sustainable community partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-card bg-gradient-card">
              <CardContent className="p-8 animate-slide-up">
                <Target className="h-12 w-12 text-primary mb-6" />
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower Ghanaian communities with essential health knowledge and resources, 
                  fostering sustainable improvements in health outcomes through culturally sensitive 
                  education, comprehensive outreach programs, and community-driven initiatives that 
                  address the unique challenges faced by underserved populations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card">
              <CardContent className="p-8 animate-slide-up">
                <Heart className="h-12 w-12 text-primary mb-6" />
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A Ghana where every individual and community has access to quality health education 
                  and resources, resulting in healthier lives, stronger communities, and reduced health 
                  disparities. We envision a future where preventive care and health literacy are 
                  foundational elements of community well-being.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These values guide every decision we make and every program we implement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="text-center border-0 shadow-card hover:shadow-floating transition-all duration-300 bg-white">
                <CardContent className="p-6 animate-slide-up">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the dedicated professionals who lead our mission to improve health 
              outcomes across Ghana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={member.name} className="group hover:shadow-floating transition-all duration-300 border-0 bg-white">
                <CardContent className="p-0 animate-slide-up">
                  <div className="aspect-square bg-gradient-primary rounded-t-lg flex items-center justify-center text-white text-4xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Achievements
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Since our founding, we have made significant strides in improving health outcomes 
                across Ghana. Our impact speaks to the dedication of our team and the trust of 
                the communities we serve.
              </p>
              <Button variant="hero" size="lg">
                View Our Impact Report
              </Button>
            </div>

            <div className="space-y-4 animate-fade-in">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-soft">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Whether through volunteering, partnerships, or donations, there are many ways 
              to support our work and make a difference in communities across Ghana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Get Involved
              </Button>
              <Button size="lg" variant="outline" 
                className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}