import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import teamCelebration from "@/assets/team-celebration.jpg";

const newsItems = [
  {
    id: 1,
    title: "Victorie Spectaculoasă în Deplasare",
    description: "Dinamo câștigă cu 3-1 într-un meci palpitant departe de casă.",
    date: "25 Septembrie 2025",
    category: "Meciuri",
    image: teamCelebration,
  },
  {
    id: 2,
    title: "Transferuri de Vară: Noi Jucători",
    description: "Clubul anunță achiziții strategice pentru sezonul viitor.",
    date: "20 Septembrie 2025",
    category: "Transferuri",
  },
  {
    id: 3,
    title: "Aniversare: 75 de Ani de Istorie",
    description: "Celebrăm moștenirea bogată și realizările clubului nostru iubit.",
    date: "18 Septembrie 2025",
    category: "Club",
  },
];

const NewsSection = () => {
  return (
    <section id="content" className="py-20 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-foreground">
            Ultimele Știri
          </h2>
          <p className="text-xl text-muted-foreground">
            Fii la curent cu toate noutățile despre Dinamo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)] hover:-translate-y-2 cursor-pointer border-border/50"
            >
              {item.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[image:var(--gradient-overlay)]" />
                </div>
              )}
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    {item.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar size={14} />
                    <span>{item.date}</span>
                  </div>
                </div>
                <CardTitle className="text-xl hover:text-primary transition-[var(--transition-smooth)]">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
