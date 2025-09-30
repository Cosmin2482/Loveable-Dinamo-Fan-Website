import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Ticket, Users, TrendingUp, ChevronDown, ChevronUp } from "lucide-react";

interface Match {
  id: number;
  opponent: string;
  opponentLogo?: string;
  date: string;
  time: string;
  venue: string;
  isHome: boolean;
  ticketsAvailable: number;
  lastResult?: string;
  competition: string;
}

const matches: Match[] = [
  {
    id: 1,
    opponent: "FC Steaua",
    date: "2025-09-30",
    time: "20:00",
    venue: "Stadionul Dinamo",
    isHome: true,
    ticketsAvailable: 5420,
    lastResult: "2-1 V",
    competition: "Liga 1",
  },
  {
    id: 2,
    opponent: "CFR Cluj",
    date: "2025-10-07",
    time: "18:30",
    venue: "Stadionul Dr. Constantin Rădulescu",
    isHome: false,
    ticketsAvailable: 1200,
    lastResult: "1-1 E",
    competition: "Liga 1",
  },
  {
    id: 3,
    opponent: "Universitatea Craiova",
    date: "2025-10-14",
    time: "21:00",
    venue: "Stadionul Dinamo",
    isHome: true,
    ticketsAvailable: 8900,
    lastResult: "3-0 V",
    competition: "Cupa României",
  },
  {
    id: 4,
    opponent: "FCSB",
    date: "2025-10-21",
    time: "19:00",
    venue: "Arena Națională",
    isHome: false,
    ticketsAvailable: 2100,
    lastResult: "0-2 Î",
    competition: "Liga 1",
  },
];

const MatchCard = ({ match, index }: { match: Match; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const matchDate = new Date(`${match.date}T${match.time}`);
      const now = new Date();
      const difference = matchDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

        if (days > 0) {
          setTimeLeft(`${days}z ${hours}h`);
        } else if (hours > 0) {
          setTimeLeft(`${hours}h ${minutes}m`);
        } else {
          setTimeLeft(`${minutes}m`);
        }
      } else {
        setTimeLeft("LIVE");
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 60000);
    return () => clearInterval(interval);
  }, [match.date, match.time]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('ro-RO', { 
      weekday: 'short', 
      day: 'numeric', 
      month: 'long' 
    });
  };

  return (
    <Card
      className="relative overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-all duration-500 hover:-translate-y-3 border-2 border-border/50 hover:border-primary/50 cursor-pointer group animate-slide-up"
      style={{ animationDelay: `${index * 150}ms` }}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Animated Background Gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[image:var(--gradient-primary)] opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-bl-full blur-2xl" />
      
      {/* Countdown Badge */}
      {timeLeft && (
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
          timeLeft === "LIVE" 
            ? 'bg-destructive text-destructive-foreground animate-pulse-glow' 
            : 'bg-primary/10 text-primary border border-primary/30'
        }`}>
          {timeLeft === "LIVE" ? "● LIVE" : `⏱ ${timeLeft}`}
        </div>
      )}

      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs font-bold px-4 py-1.5 rounded-full shadow-md transition-all duration-300 ${
            match.isHome 
              ? 'bg-primary text-primary-foreground group-hover:scale-110' 
              : 'bg-secondary text-secondary-foreground group-hover:scale-110'
          }`}>
            {match.isHome ? '🏠 ACASĂ' : '✈️ DEPLASARE'}
          </span>
          <span className="text-xs text-muted-foreground font-semibold">
            {match.competition}
          </span>
        </div>
        
        <CardTitle className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors duration-300">
          <div className="flex items-center gap-3">
            <span className="text-primary">DINAMO</span>
            <span className="text-muted-foreground">VS</span>
            <span>{match.opponent}</span>
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Basic Info */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
            <Calendar size={18} className="text-primary" />
            <span className="font-medium">{formatDate(match.date)}</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
            <Clock size={18} className="text-primary" />
            <span className="font-medium">{match.time}</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
            <MapPin size={18} className="text-primary" />
            <span className="text-sm font-medium">{match.venue}</span>
          </div>
        </div>

        {/* Expandable Content */}
        <div className={`overflow-hidden transition-all duration-500 ${
          expanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-4 border-t border-border/50 space-y-4 animate-fade-in">
            {/* Additional Info */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-sm">
                <Users size={16} className="text-primary" />
                <div>
                  <div className="text-xs text-muted-foreground">Bilete</div>
                  <div className="font-bold">{match.ticketsAvailable.toLocaleString()}</div>
                </div>
              </div>
              {match.lastResult && (
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp size={16} className="text-primary" />
                  <div>
                    <div className="text-xs text-muted-foreground">Ultimul Meci</div>
                    <div className="font-bold">{match.lastResult}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button 
                variant="default" 
                size="sm" 
                className="flex-1 group/btn"
                onClick={(e) => e.stopPropagation()}
              >
                <Ticket size={16} className="mr-2 group-hover/btn:animate-pulse" />
                Cumpără Bilete
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={(e) => e.stopPropagation()}
              >
                Detalii
              </Button>
            </div>
          </div>
        </div>

        {/* Expand/Collapse Indicator */}
        <div className="flex items-center justify-center pt-2">
          {expanded ? (
            <ChevronUp size={20} className="text-muted-foreground animate-bounce" />
          ) : (
            <ChevronDown size={20} className="text-muted-foreground animate-bounce" />
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const MatchSchedule = () => {
  return (
    <section id="matches" className="py-20 px-4 bg-background relative overflow-hidden scroll-mt-4">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Meciuri Viitoare
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Susține Câinii Roșii la următoarele meciuri 🔴⚪
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {matches.map((match, index) => (
            <MatchCard key={match.id} match={match} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in">
          <Button variant="hero" size="lg" className="text-lg">
            Vezi Toate Meciurile
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MatchSchedule;
