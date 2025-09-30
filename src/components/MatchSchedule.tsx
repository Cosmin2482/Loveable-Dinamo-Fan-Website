import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";

const matches = [
  {
    id: 1,
    opponent: "FC Steaua",
    date: "30 Septembrie 2025",
    time: "20:00",
    venue: "Stadionul Dinamo",
    isHome: true,
  },
  {
    id: 2,
    opponent: "CFR Cluj",
    date: "7 Octombrie 2025",
    time: "18:30",
    venue: "Stadionul Dr. Constantin Rădulescu",
    isHome: false,
  },
  {
    id: 3,
    opponent: "Universitatea Craiova",
    date: "14 Octombrie 2025",
    time: "21:00",
    venue: "Stadionul Dinamo",
    isHome: true,
  },
];

const MatchSchedule = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-foreground">
            Meciuri Viitoare
          </h2>
          <p className="text-xl text-muted-foreground">
            Susține Câinii Roșii la următoarele meciuri
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {matches.map((match) => (
            <Card
              key={match.id}
              className="relative overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)] hover:-translate-y-2 border-2 border-border/50"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[image:var(--gradient-primary)] opacity-10 rounded-bl-full" />
              
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    match.isHome 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary text-secondary-foreground'
                  }`}>
                    {match.isHome ? 'ACASĂ' : 'DEPLASARE'}
                  </span>
                </div>
                <CardTitle className="text-2xl font-bold">
                  VS {match.opponent}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar size={18} className="text-primary" />
                  <span>{match.date}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock size={18} className="text-primary" />
                  <span>{match.time}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={18} className="text-primary" />
                  <span className="text-sm">{match.venue}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MatchSchedule;
