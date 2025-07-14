import { Heart, Users, DollarSign, Calendar, Mail, Phone, ArrowRight, CheckCircle, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const volunteerOpportunities = [
  {
    title: "Health Education Facilitator",
    description: "Lead community health education sessions and workshops",
    commitment: "4-6 hours per week",
    requirements: ["Basic health knowledge", "Strong communication skills", "Passion for community service"],
    location: "Various communities in Greater Accra"
  },
  {
    title: "Community Outreach Coordinator",
    description: "Help organize and coordinate community health events",
    commitment: "8-10 hours per week",
    requirements: ["Event planning experience", "Local language skills", "Transportation available"],
    location: "Accra, Tema, and surrounding areas"
  },
  {
    title: "Data Collection Assistant",
    description: "Support research and program evaluation activities",
    commitment: "6-8 hours per week",
    requirements: ["Basic computer skills", "Attention to detail", "Research interest"],
    location: "Office-based with field visits"
  },
  {
    title: "Social Media & Communications",
    description: "Help share our impact stories and engage with community online",
    commitment: "3-5 hours per week",
    requirements: ["Social media experience", "Content creation skills", "English proficiency"],
    location: "Remote/flexible"
  }
];

const donationTiers = [
  {
    amount: "₵50",
    title: "Community Supporter",
    description: "Provide health education materials for 5 families",
    benefits: ["Monthly impact updates", "Thank you certificate"],
    popular: false
  },
  {
    amount: "₵150",
    title: "Health Advocate",
    description: "Support a complete health screening for 10 community members",
    benefits: ["Quarterly impact reports", "Invitation to events", "Recognition on website"],
    popular: true
  },
  {
    amount: "₵500",
    title: "Community Champion",
    description: "Fund a full health education workshop for an entire community",
    benefits: ["Personal impact stories", "Annual report", "Meet & greet with team", "Tax deduction certificate"],
    popular: false
  },
  {
    amount: "₵1000+",
    title: "Health Partner",
    description: "Sponsor ongoing health programs in multiple communities",
    benefits: ["Dedicated program updates", "Site visits", "Recognition plaque", "Partnership opportunities"],
    popular: false
  }
];

const partnershipOpportunities = [
  {
    type: "Healthcare Institutions",
    description: "Partner with us to extend your reach into underserved communities",
    benefits: ["Expanded community impact", "Shared resources", "Professional development opportunities"]
  },
  {
    type: "Educational Institutions",
    description: "Collaborate on research and student placement programs",
    benefits: ["Research opportunities", "Student internships", "Knowledge exchange"]
  },
  {
    type: "Corporate Partners",
    description: "Support our mission through CSR initiatives and employee volunteering",
    benefits: ["Brand visibility", "Employee engagement", "Social impact reporting"]
  },
  {
    type: "Government Agencies",
    description: "Work together to implement large-scale health improvement programs",
    benefits: ["Policy influence", "Sustainable funding", "Wider community reach"]
  }
];

export default function GetInvolved() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get Involved
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Join our mission to transform health outcomes in Ghana. Whether through 
              volunteering, donations, or partnerships, your support makes a real difference.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ways to Make a Difference
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose how you'd like to contribute to our mission of improving health 
              outcomes in Ghanaian communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <Card className="text-center border-0 shadow-card hover:shadow-floating transition-all duration-300 bg-gradient-card animate-slide-up">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Volunteer</h3>
                <p className="text-muted-foreground mb-6">
                  Share your skills and time to directly impact communities through our various programs.
                </p>
                <Button variant="hero" className="w-full">
                  Become a Volunteer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-card hover:shadow-floating transition-all duration-300 bg-gradient-card animate-slide-up">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-warm-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-warm-orange" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Donate</h3>
                <p className="text-muted-foreground mb-6">
                  Support our programs financially to help us reach more communities with essential health services.
                </p>
                <Button variant="cta" className="w-full">
                  Make a Donation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-card hover:shadow-floating transition-all duration-300 bg-gradient-card animate-slide-up">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-trust-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-trust-blue" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Partner</h3>
                <p className="text-muted-foreground mb-6">
                  Collaborate with us as an organization to amplify our impact and reach.
                </p>
                <Button variant="outline" className="w-full">
                  Explore Partnerships
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Volunteer Opportunities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find the perfect role that matches your skills, interests, and availability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {volunteerOpportunities.map((opportunity, index) => (
              <Card key={opportunity.title} className="border-0 shadow-card hover:shadow-floating transition-all duration-300 bg-white animate-slide-up">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {opportunity.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {opportunity.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm text-foreground">{opportunity.commitment}</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground mb-1">Requirements:</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {opportunity.requirements.map((req, idx) => (
                            <li key={idx}>• {req}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm text-foreground">{opportunity.location}</span>
                    </div>
                  </div>
                  
                  <Button variant="hero" className="w-full">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Support Our Mission
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your donation directly funds health education, outreach programs, and 
              community empowerment initiatives across Ghana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationTiers.map((tier, index) => (
              <Card 
                key={tier.title} 
                className={`relative border-0 shadow-card hover:shadow-floating transition-all duration-300 animate-slide-up ${
                  tier.popular ? 'ring-2 ring-primary shadow-floating' : 'bg-white'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge variant="default" className="bg-primary text-white">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{tier.amount}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{tier.title}</h3>
                  <p className="text-muted-foreground mb-6">{tier.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {tier.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant={tier.popular ? "hero" : "outline"} 
                    className="w-full"
                  >
                    Donate {tier.amount}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="cta" className="px-12">
              Custom Donation Amount
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join forces with us to create sustainable health improvements across Ghana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipOpportunities.map((partnership, index) => (
              <Card key={partnership.type} className="border-0 shadow-card hover:shadow-floating transition-all duration-300 bg-white animate-slide-up">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {partnership.type}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {partnership.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <p className="text-sm font-medium text-foreground">Benefits:</p>
                    {partnership.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us to learn more about how you can make a difference in your community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 bg-white/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-white/80 mb-4">Get in touch for more information</p>
                <Button variant="secondary" className="w-full">
                  info@joseyshealth.org
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-white/80 mb-4">Speak directly with our team</p>
                <Button variant="secondary" className="w-full">
                  +233 XX XXX XXXX
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}