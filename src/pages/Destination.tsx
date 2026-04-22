import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { destinations } from "@/data/destinations";
import { MapPin } from "lucide-react";

// Import all destination images
import boracayImg from "@/assets/boracay.jpg";
import palawanImg from "@/assets/palawan.jpg";
import banaueImg from "@/assets/banaue.jpg";
import chocolateHillsImg from "@/assets/chocolate-hills.jpg";
import mayonImg from "@/assets/mayon.jpg";
import viganImg from "@/assets/vigan.jpg";

const imageMap: Record<string, string> = {
  boracay: boracayImg,
  palawan: palawanImg,
  banaue: banaueImg,
  "chocolate-hills": chocolateHillsImg,
  mayon: mayonImg,
  vigan: viganImg,
};

const Destinations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container px-4 py-12">
        <header className="text-center mb-12">
          <Badge className="mb-4 text-button" variant="secondary">
            Explore Philippines
          </Badge>
          <h1 className="text-headline md:text-4xl font-bold mb-4">
            Top Philippine Destinations
          </h1>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            From world-famous beaches to ancient cultural sites, discover the most breathtaking destinations 
            across the Philippine archipelago
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {destinations.map((destination) => (
            <Link 
              key={destination.id} 
              to={`/destination/${destination.id}`}
              className="group"
            >
              <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 h-full">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={imageMap[destination.image]}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                      {destination.name}
                    </h2>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="text-body">{destination.location.split(",")[0]}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-5">
                  <p className="text-body text-muted-foreground line-clamp-2">
                    {destination.shortDescription}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>

      <footer className="py-8 border-t bg-card mt-12">
        <div className="container px-4 text-center">
          <p className="text-body text-muted-foreground">
            © 2025 Discover Philippines. Your ultimate travel guide to the Pearl of the Orient Seas.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Destinations;
