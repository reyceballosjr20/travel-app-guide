import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Users, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import heroImage from "@/assets/hero-philippines.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background" />
        </div>
        
        <div className="relative z-10 container text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Welcome to the Philippines
          </h1>
          <p className="text-subheadline md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Discover the beauty of 7,641 islands and rich Filipino culture. 
            Your ultimate travel guide awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Link to="/destinations">
              <Button size="lg" className="text-button gap-2 shadow-lg hover:shadow-xl transition-all">
                Explore Destinations
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-button">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-headline md:text-3xl font-bold mb-4">Why Visit the Philippines?</h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              From pristine beaches to ancient rice terraces, the Philippines offers unforgettable experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-subheadline font-semibold mb-2">Diverse Destinations</h3>
              <p className="text-body text-muted-foreground">
                Explore beaches, mountains, cities, and cultural heritage sites across 7,641 islands
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 mb-4">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-subheadline font-semibold mb-2">Warm Hospitality</h3>
              <p className="text-body text-muted-foreground">
                Experience the famous Filipino hospitality and welcoming culture
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                <Calendar className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-subheadline font-semibold mb-2">Year-Round Paradise</h3>
              <p className="text-body text-muted-foreground">
                Tropical climate perfect for beach activities, island hopping, and adventures
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="text-headline md:text-3xl font-bold mb-4">
            Ready to Start Your Philippine Adventure?
          </h2>
          <p className="text-subheadline mb-8 max-w-2xl mx-auto opacity-90">
            Browse our curated destinations and start planning your dream vacation today
          </p>
          <Link to="/destinations">
            <Button size="lg" variant="secondary" className="text-button gap-2 shadow-lg">
              View All Destinations
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t bg-card">
        <div className="container px-4 text-center">
          <p className="text-body text-muted-foreground">
            © 2026 Discover Philippines. Your ultimate travel guide to the Pearl of the Orient Seas. Created by John Mart Santiago.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
