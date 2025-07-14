import { ArrowRight, Users, Heart, Target, CheckCircle, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-health.jpg";
import educationImage from "@/assets/education-service.jpg";
import outreachImage from "@/assets/outreach-service.jpg";
import empowermentImage from "@/assets/empowerment-service.jpg";

const services = [
  {
    title: "Education",
    description: "We conduct free health education sessions that cover essential topics like nutrition, disease prevention, and wellness. We aim to equip individuals with the knowledge they need.",
    image: educationImage,
    icon: Users,
  },
  {
    title: "Outreach",
    description: "Our outreach programs connect with remote communities, providing vital health services and resources. We focus on addressing local health challenges through direct engagement and support.",
    image: outreachImage,
    icon: Heart,
  },
  {
    title: "Empowerment",
    description: "We empower community leaders and individuals by providing tools and training for sustained health advocacy and practices. Our goal is to build local capacities for ongoing change.",
    image: empowermentImage,
    icon: Target,
  },
];

const benefits = [
  "Community-Centric Approach",
  "Sustainable Impact",
  "Professional Excellence",
  "Cultural Sensitivity",
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Empowering Health in{" "}
              <span className="bg-gradient-to-r from-health-green to-trust-blue bg-clip-text text-transparent">
                Ghana
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join us in transforming lives through health education, outreach, and community 
              initiatives tailored for those in need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="hero" className="text-lg px-8 py-4">
                Get Involved
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" 
                className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Health Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our diverse range of offerings designed to enhance health awareness 
              and outcomes in communities across Ghana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="group hover:shadow-floating transition-all duration-300 animate-slide-up border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                The Story Behind Josey's Health Corner
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Josey's Health Corner, we have extensive experience in delivering health education 
                and preventive care in Ghana's underserved communities. Our skilled network of health 
                professionals, social workers, and dedicated volunteers collaborates tirelessly to 
                devise innovative health solutions that resonate with the local culture and address 
                the unique challenges communities face.
              </p>
              <Button variant="hero" size="lg">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-fade-in">
              {benefits.map((benefit, index) => (
                <div key={benefit} className="flex items-center space-x-3 p-4 bg-gradient-card rounded-lg shadow-soft">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <Quote className="h-12 w-12 text-primary mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-medium text-foreground mb-6 italic">
              "Josey's Health Corner has changed my life. Their outreach programs brought crucial 
              health information to our community and encouraged healthier living."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold">KM</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Kwame Mensah</p>
                <p className="text-muted-foreground">Accra</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Josey's Health Corner?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We blend professionalism and empathy in our services, prioritizing the specific 
              health needs of communities. Our commitment to collaboration ensures our initiatives 
              are impactful and sustainable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-floating transition-all duration-300 border-0 bg-gradient-card">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Community-Centric Approach
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our initiatives are designed with the community's input, ensuring that services 
                  are tailored to meet the specific needs of each location we serve.
                </p>
                <Button variant="ghost" className="p-0 h-auto font-semibold text-primary hover:bg-transparent">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-floating transition-all duration-300 border-0 bg-gradient-card">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Sustainable Impact
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We focus on creating lasting changes through education and empowerment, developing 
                  local leaders who will carry on our mission long into the future.
                </p>
                <Button variant="ghost" className="p-0 h-auto font-semibold text-primary hover:bg-transparent">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join the Movement
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Be a part of our mission to improve health outcomes. Volunteer, donate, 
              or spread the word to help us create a healthy future for all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Get Involved
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" 
                className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10">
                Donate Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}