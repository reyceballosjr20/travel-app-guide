import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { destinations } from "@/data/destinations";
import { ArrowLeft, MapPin, Calendar, Utensils, Activity } from "lucide-react";

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

const DestinationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const destination = destinations.find((d) => d.id === Number(id));

  if (!destination) {
    return <Navigate to="/destinations" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Image */}
        <div className="relative h-[50vh] md:h-[60vh]">
          <img
            src={imageMap[destination.image]}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0">
            <div className="container px-4 pb-8">
              <Link to="/destinations">
                <Button variant="ghost" className="mb-4 text-button gap-2" size="sm">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Destinations
                </Button>
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold mb-2 text-foreground">
                {destination.name}
              </h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span className="text-subheadline">{destination.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <section>
                <h2 className="text-headline md:text-2xl font-semibold mb-4">Overview</h2>
                <p className="text-body leading-relaxed text-foreground">
                  {destination.detailedDescription}
                </p>
              </section>

              {/* Activities */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-subheadline">
                    <Activity className="h-5 w-5 text-primary" />
                    Top Activities & Attractions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {destination.activities.map((activity, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Badge variant="outline" className="mt-0.5 shrink-0">
                          {index + 1}
                        </Badge>
                        <span className="text-body">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Cuisine */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-subheadline">
                    <Utensils className="h-5 w-5 text-secondary" />
                    Local Cuisine & Delicacies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {destination.cuisine.map((food, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                      >
                        <div className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                        <span className="text-body">{food}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Best Time to Visit */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-subheadline">
                    <Calendar className="h-5 w-5 text-accent" />
                    Best Time to Visit
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-body leading-relaxed">
                    {destination.bestTimeToVisit}
                  </p>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-subheadline">Travel Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-body">
                  <div>
                    <strong className="font-semibold">Language:</strong> Filipino, English
                  </div>
                  <div>
                    <strong className="font-semibold">Currency:</strong> Philippine Peso (₱)
                  </div>
                  <div>
                    <strong className="font-semibold">Emergency:</strong> Dial 911
                  </div>
                  <div>
                    <strong className="font-semibold">Tourist Info:</strong> Available at local tourism offices
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="bg-gradient-to-br from-primary to-secondary text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <h3 className="text-subheadline font-semibold mb-2">
                    Ready to Explore?
                  </h3>
                  <p className="text-sm mb-4 opacity-90">
                    Start planning your {destination.name} adventure today!
                  </p>
                  <Link to="/destinations">
                    <Button variant="secondary" className="w-full text-button">
                      View More Destinations
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

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

export default DestinationDetail;
