import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const upcomingEvents = [
  {
    title: "Community Health Screening",
    date: "February 15, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "Tema Community Center",
    description: "Free health screening including blood pressure, diabetes, and general health consultations.",
    participants: "200+ expected",
    status: "upcoming"
  },
  {
    title: "Nutrition Education Workshop",
    date: "February 22, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Kumasi Community Hall",
    description: "Interactive workshop on proper nutrition, meal planning, and food safety for families.",
    participants: "50+ families",
    status: "upcoming"
  },
  {
    title: "Health Advocate Training",
    date: "March 1, 2025",
    time: "8:00 AM - 5:00 PM",
    location: "Accra Training Center",
    description: "Comprehensive training program for community members to become certified health advocates.",
    participants: "30 trainees",
    status: "upcoming"
  }
];

const currentProjects = [
  {
    title: "Rural Health Education Initiative",
    description: "Bringing essential health education to remote communities across the Northern Region of Ghana.",
    status: "ongoing",
    startDate: "January 2024",
    endDate: "December 2025",
    beneficiaries: "15,000+ people",
    communities: "25 communities",
    image: "/api/placeholder/400/300"
  },
  {
    title: "Mother & Child Health Program",
    description: "Focused on maternal health education and child nutrition in underserved urban areas.",
    status: "ongoing",
    startDate: "March 2024",
    endDate: "February 2026",
    beneficiaries: "3,000+ mothers",
    communities: "10 communities",
    image: "/api/placeholder/400/300"
  },
  {
    title: "Community Health Champion Network",
    description: "Training and supporting local health advocates to create sustainable health programs.",
    status: "expanding",
    startDate: "June 2023",
    endDate: "Ongoing",
    beneficiaries: "500+ advocates",
    communities: "40 communities",
    image: "/api/placeholder/400/300"
  }
];

const completedProjects = [
  {
    title: "Clean Water & Hygiene Campaign",
    description: "Successfully educated 20 communities on water safety and hygiene practices.",
    completedDate: "December 2024",
    impact: "8,000+ people reached",
    outcome: "50% reduction in waterborne illnesses"
  },
  {
    title: "Youth Health Leadership Program",
    description: "Trained 100 young people as health ambassadors in their schools and communities.",
    completedDate: "November 2024",
    impact: "100 youth leaders",
    outcome: "Established in 20 schools"
  },
  {
    title: "Elderly Care Education Series",
    description: "Provided specialized health education for elderly care in rural communities.",
    completedDate: "October 2024",
    impact: "2,000+ elderly individuals",
    outcome: "Improved quality of life metrics"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Projects & Impact
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Discover our ongoing initiatives and upcoming events that are transforming 
              health outcomes across Ghana.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join us at our upcoming community health events and make a difference in your area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={event.title} className="group hover:shadow-floating transition-all duration-300 border-0 bg-gradient-card">
                <CardContent className="p-6 animate-slide-up">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      Upcoming
                    </Badge>
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      <span className="text-sm">{event.participants}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <Button variant="hero" className="w-full">
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Current Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our ongoing initiatives that are making a lasting impact in communities across Ghana.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {currentProjects.map((project, index) => (
              <Card key={project.title} className="group hover:shadow-floating transition-all duration-300 border-0 bg-white">
                <CardContent className="p-0 animate-slide-up">
                  <div className="h-48 bg-gradient-primary rounded-t-lg flex items-center justify-center text-white text-2xl font-bold">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge 
                        variant={project.status === 'ongoing' ? 'default' : 'secondary'}
                        className={project.status === 'ongoing' ? 'bg-primary' : 'bg-warm-orange'}
                      >
                        {project.status}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {project.startDate} - {project.endDate}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-primary/5 rounded-lg">
                        <div className="text-lg font-bold text-primary">{project.beneficiaries}</div>
                        <div className="text-sm text-muted-foreground">Beneficiaries</div>
                      </div>
                      <div className="text-center p-3 bg-primary/5 rounded-lg">
                        <div className="text-lg font-bold text-primary">{project.communities}</div>
                        <div className="text-sm text-muted-foreground">Communities</div>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Completed Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Celebrating the successful completion of projects that have made lasting improvements 
              in community health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project, index) => (
              <Card key={project.title} className="group hover:shadow-floating transition-all duration-300 border-0 bg-gradient-card">
                <CardContent className="p-6 animate-slide-up">
                  <Badge variant="secondary" className="bg-health-green/10 text-health-green mb-4">
                    Completed
                  </Badge>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Completed:</span>
                      <span className="text-sm font-medium text-foreground">{project.completedDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Impact:</span>
                      <span className="text-sm font-medium text-foreground">{project.impact}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Outcome:</span>
                      <span className="text-sm font-medium text-foreground">{project.outcome}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Support Our Projects
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Your support helps us expand our reach and create more impactful health programs 
              for communities that need them most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Donate Now
              </Button>
              <Button size="lg" variant="outline" 
                className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10">
                Volunteer
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}