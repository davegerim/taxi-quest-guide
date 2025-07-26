import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MapPin, Navigation, Clock, Map } from "lucide-react";


interface SearchResult {
  route: string;
  pickup: string;
  landmark: string;
  walkingTime: string;
  coordinates: { lat: number; lng: number };
}

interface SearchSectionProps {
  onSearchResults: (results: SearchResult[]) => void;
}

const mockResults: SearchResult[] = [
  {
    route: "Lafto → Mexico",
    pickup: "Lafto Tera Station",
    landmark: "Near Sheger Park",
    walkingTime: "2 min walk",
    coordinates: { lat: 9.0123, lng: 38.7890 }
  },
  {
    route: "Bole → Piassa",
    pickup: "Bole Medhanialem",
    landmark: "Opposite ECA Building",
    walkingTime: "3 min walk",
    coordinates: { lat: 9.0125, lng: 38.7892 }
  }
];

export default function SearchSection({ onSearchResults }: SearchSectionProps) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    if (!from || !to) return;
    
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      const filteredResults = mockResults.filter(result => 
        result.route.toLowerCase().includes(from.toLowerCase()) ||
        result.route.toLowerCase().includes(to.toLowerCase())
      );
      const finalResults = filteredResults.length > 0 ? filteredResults : mockResults.slice(0, 1);
      setResults(finalResults);
      onSearchResults(finalResults);
      setIsSearching(false);
    }, 1000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Search Form */}
      <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50" 
            style={{ boxShadow: 'var(--shadow-card)' }}>
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">Where are you going?</h2>
            <p className="text-muted-foreground">Find the nearest taxi pickup point for your route</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">From</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Enter starting location"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="pl-10 h-12 bg-input border-border"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">To</label>
              <div className="relative">
                <Navigation className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Enter destination"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="pl-10 h-12 bg-input border-border"
                />
              </div>
            </div>
          </div>
          
          <Button 
            onClick={handleSearch}
            disabled={!from || !to || isSearching}
            variant="hero"
            className="w-full h-12 text-lg font-semibold"
          >
            {isSearching ? "Searching..." : "Find Pickup Point"}
          </Button>
        </div>
      </Card>

      {/* Results */}
      {results.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground">Available Routes</h3>
          {results.map((result, index) => (
            <Card key={index} className="p-6 bg-card border-border/50 hover:shadow-lg transition-all duration-300 animate-fade-in">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-primary">{result.route}</h4>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    {result.walkingTime}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">{result.pickup}</p>
                      <p className="text-sm text-muted-foreground">{result.landmark}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-3 pt-4">
                  <Button variant="outline" size="sm" className="flex items-center space-x-2">
                    <Map className="w-4 h-4" />
                    <span>View on Map</span>
                  </Button>
                  <Button variant="secondary" size="sm">
                    Walking Directions
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}