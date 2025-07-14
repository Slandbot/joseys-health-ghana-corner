import { Calendar, User, ArrowRight, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    id: 1,
    title: "The Impact of Community Health Education in Rural Ghana",
    excerpt: "Exploring how targeted health education programs are transforming health outcomes in remote communities across Ghana.",
    content: "Our recent study shows that communities receiving regular health education sessions have seen a 40% improvement in preventive health practices...",
    author: "Dr. Josephine Asante",
    date: "January 15, 2025",
    category: "Research",
    readTime: "8 min read",
    featured: true
  },
  {
    id: 2,
    title: "Nutrition Myths and Facts: What Every Ghanaian Family Should Know",
    excerpt: "Debunking common nutrition misconceptions and providing evidence-based guidance for healthy eating in Ghana.",
    content: "Many families in Ghana hold beliefs about nutrition that may not align with current health science. In this comprehensive guide...",
    author: "Ama Boateng",
    date: "January 10, 2025",
    category: "Health Education",
    readTime: "6 min read",
    featured: false
  },
  {
    id: 3,
    title: "Building Sustainable Health Programs: Lessons from Our Experience",
    excerpt: "Key insights and strategies for creating health programs that create lasting impact in underserved communities.",
    content: "After five years of implementing health programs across Ghana, we've learned valuable lessons about sustainability...",
    author: "Kwame Osei",
    date: "January 5, 2025",
    category: "Program Development",
    readTime: "10 min read",
    featured: false
  },
  {
    id: 4,
    title: "Mental Health Awareness in Ghanaian Communities",
    excerpt: "Breaking the stigma and promoting mental health awareness through culturally sensitive approaches.",
    content: "Mental health remains a significant challenge in many Ghanaian communities, often surrounded by stigma and misconceptions...",
    author: "Samuel Addo",
    date: "December 28, 2024",
    category: "Mental Health",
    readTime: "7 min read",
    featured: false
  },
  {
    id: 5,
    title: "The Role of Traditional Medicine in Modern Healthcare",
    excerpt: "Exploring the integration of traditional healing practices with modern medical approaches in Ghana.",
    content: "Ghana has a rich tradition of herbal medicine and traditional healing practices. Our research explores how these can complement...",
    author: "Dr. Josephine Asante",
    date: "December 20, 2024",
    category: "Traditional Medicine",
    readTime: "9 min read",
    featured: false
  },
  {
    id: 6,
    title: "Youth Leadership in Health Advocacy",
    excerpt: "How young Ghanaians are becoming powerful advocates for health in their communities.",
    content: "Our Youth Health Leadership Program has trained over 100 young advocates who are now leading health initiatives in their schools...",
    author: "Ama Boateng",
    date: "December 15, 2024",
    category: "Youth Programs",
    readTime: "5 min read",
    featured: false
  }
];

const mediaFeatures = [
  {
    id: 1,
    title: "Josey's Health Corner Featured on Ghana Health Service Newsletter",
    publication: "Ghana Health Service",
    date: "January 2025",
    type: "Newsletter Feature",
    description: "Our rural health education initiative was highlighted as a model program for community health engagement.",
    link: "#"
  },
  {
    id: 2,
    title: "Radio Interview: Community Health Champions",
    publication: "Joy FM",
    date: "December 2024",
    type: "Radio Interview",
    description: "Dr. Josephine Asante discussed the importance of community-led health initiatives on the Super Morning Show.",
    link: "#"
  },
  {
    id: 3,
    title: "Research Publication: Health Education Impact Study",
    publication: "Ghana Medical Journal",
    date: "November 2024",
    type: "Research Publication",
    description: "Our comprehensive study on the effectiveness of community health education programs was published in the Ghana Medical Journal.",
    link: "#"
  },
  {
    id: 4,
    title: "TV Documentary: Health Heroes of Ghana",
    publication: "GTV",
    date: "October 2024",
    type: "Television Feature",
    description: "Our organization was featured in a documentary highlighting innovative health programs across Ghana.",
    link: "#"
  }
];

const categories = ["All", "Research", "Health Education", "Program Development", "Mental Health", "Traditional Medicine", "Youth Programs"];

export default function Blog() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Blog & Media
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Insights, research, and stories from our health education work 
              across Ghana, plus our media coverage and publications.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-0 shadow-floating bg-gradient-card animate-slide-up">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="h-80 lg:h-auto bg-gradient-primary rounded-l-lg flex items-center justify-center text-white text-6xl font-bold">
                    {featuredPost.title.split(' ').map(word => word[0]).join('').slice(0, 3)}
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <Badge variant="secondary" className="bg-warm-orange text-white w-fit mb-4">
                      Featured Article
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center space-x-6 mb-6 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {featuredPost.date}
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <Button variant="hero" size="lg" className="w-fit">
                      Read Full Article
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Regular Blog Posts */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert insights and practical guidance on health education, 
              community development, and healthcare innovation in Ghana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Card key={post.id} className="group hover:shadow-floating transition-all duration-300 border-0 bg-white animate-slide-up">
                <CardContent className="p-6">
                  <Badge 
                    variant="secondary" 
                    className={
                      post.category === "Research" ? "bg-trust-blue/10 text-trust-blue" :
                      post.category === "Health Education" ? "bg-primary/10 text-primary" :
                      "bg-warm-orange/10 text-warm-orange"
                    }
                  >
                    {post.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-foreground mt-4 mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:bg-transparent">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Mentions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Media Mentions & Publications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our work has been recognized and featured across various media outlets 
              and professional publications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaFeatures.map((feature, index) => (
              <Card key={feature.id} className="group hover:shadow-floating transition-all duration-300 border-0 bg-gradient-card animate-slide-up">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge 
                      variant="secondary" 
                      className={
                        feature.type === "Research Publication" ? "bg-trust-blue/10 text-trust-blue" :
                        feature.type === "Radio Interview" ? "bg-primary/10 text-primary" :
                        feature.type === "Television Feature" ? "bg-warm-orange/10 text-warm-orange" :
                        "bg-health-green/10 text-health-green"
                      }
                    >
                      {feature.type}
                    </Badge>
                    <div className="text-sm text-muted-foreground">{feature.date}</div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-primary font-medium mb-3">{feature.publication}</p>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <Button variant="outline" size="sm" className="w-fit">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to our newsletter to receive the latest articles, research findings, 
              and updates on our health education programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg text-foreground"
              />
              <Button size="lg" variant="secondary" className="px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}