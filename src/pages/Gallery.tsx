import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Download, Calendar } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    title: "Community Health Education Session",
    description: "Teaching proper hygiene practices in rural communities",
    category: "Education",
    date: "January 2025",
    image: "/api/placeholder/400/300"
  },
  {
    id: 2,
    title: "Health Screening in Tema",
    description: "Free health screenings for community members",
    category: "Outreach",
    date: "December 2024",
    image: "/api/placeholder/400/300"
  },
  {
    id: 3,
    title: "Nutrition Workshop for Mothers",
    description: "Interactive nutrition education for expecting mothers",
    category: "Education",
    date: "December 2024",
    image: "/api/placeholder/400/300"
  },
  {
    id: 4,
    title: "Community Health Champions Training",
    description: "Training local health advocates",
    category: "Empowerment",
    date: "November 2024",
    image: "/api/placeholder/400/300"
  },
  {
    id: 5,
    title: "Mobile Health Clinic",
    description: "Bringing healthcare to remote areas",
    category: "Outreach",
    date: "November 2024",
    image: "/api/placeholder/400/300"
  },
  {
    id: 6,
    title: "Youth Health Leadership Program",
    description: "Empowering young health advocates",
    category: "Empowerment",
    date: "October 2024",
    image: "/api/placeholder/400/300"
  },
  {
    id: 7,
    title: "Water Safety Education",
    description: "Teaching proper water storage and treatment",
    category: "Education",
    date: "October 2024",
    image: "/api/placeholder/400/300"
  },
  {
    id: 8,
    title: "Elderly Care Workshop",
    description: "Specialized health education for elderly care",
    category: "Education",
    date: "September 2024",
    image: "/api/placeholder/400/300"
  },
  {
    id: 9,
    title: "Community Health Fair",
    description: "Large-scale health awareness event",
    category: "Outreach",
    date: "September 2024",
    image: "/api/placeholder/400/300"
  }
];

const categories = ["All", "Education", "Outreach", "Empowerment"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Gallery
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Capturing moments of impact, transformation, and community building 
              across our health initiatives in Ghana.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Filters */}
      <section className="py-8 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "hero" : "outline"}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <Card 
                key={image.id} 
                className="group hover:shadow-floating transition-all duration-300 cursor-pointer border-0 bg-white animate-slide-up"
                onClick={() => setSelectedImage(image)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    {/* Image placeholder with gradient */}
                    <div className="w-full h-64 bg-gradient-primary rounded-t-lg flex items-center justify-center text-white text-4xl font-bold">
                      {image.title.split(' ').map(word => word[0]).join('').slice(0, 3)}
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button size="sm" variant="secondary" className="backdrop-blur-sm">
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge 
                        variant="secondary"
                        className={
                          image.category === "Education" ? "bg-trust-blue/90 text-white" :
                          image.category === "Outreach" ? "bg-primary/90 text-white" :
                          "bg-warm-orange/90 text-white"
                        }
                      >
                        {image.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      {image.date}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {image.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {image.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    {selectedImage.title}
                  </h2>
                  <div className="flex items-center space-x-4">
                    <Badge 
                      variant="secondary"
                      className={
                        selectedImage.category === "Education" ? "bg-trust-blue text-white" :
                        selectedImage.category === "Outreach" ? "bg-primary text-white" :
                        "bg-warm-orange text-white"
                      }
                    >
                      {selectedImage.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {selectedImage.date}
                    </div>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setSelectedImage(null)}
                >
                  Close
                </Button>
              </div>
              
              {/* Large image placeholder */}
              <div className="w-full h-96 bg-gradient-primary rounded-lg flex items-center justify-center text-white text-6xl font-bold mb-4">
                {selectedImage.title.split(' ').map(word => word[0]).join('').slice(0, 3)}
              </div>
              
              <p className="text-lg text-muted-foreground mb-6">
                {selectedImage.description}
              </p>
              
              <div className="flex space-x-4">
                <Button variant="hero">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button variant="outline">
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Be Part of Our Story
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join us in our mission and help create more moments of positive impact 
              in communities across Ghana.
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