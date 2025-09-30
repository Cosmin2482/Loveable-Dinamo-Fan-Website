import { Trophy, Award, Users, Star } from "lucide-react";
import trophiesImage from "@/assets/trophies.jpg";

const achievements = [
  {
    icon: Trophy,
    title: "18 Titluri",
    description: "Campionate Naționale",
  },
  {
    icon: Award,
    title: "13 Cupe",
    description: "Cupa României",
  },
  {
    icon: Star,
    title: "2 Semifinale",
    description: "Cupa Cupelor UEFA",
  },
  {
    icon: Users,
    title: "75+ Ani",
    description: "De Tradiție și Glorie",
  },
];

const HistorySection = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-[image:var(--gradient-primary)] opacity-20 blur-3xl group-hover:opacity-30 transition-[var(--transition-smooth)] rounded-lg" />
            <img
              src={trophiesImage}
              alt="Dinamo București Trophies"
              className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-5xl font-bold mb-6 text-foreground">
              O Istorie Legendară
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Fondat în 1948, Dinamo București este unul dintre cele mai titrate și 
              iubite cluburi din România. Cu o istorie bogată de succese și o bază 
              de suporteri pasionați, Câinii Roșii au marcat fotbalul românesc prin 
              performanțe memorabile atât pe plan intern, cât și internațional.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)]"
                >
                  <achievement.icon className="w-12 h-12 mb-3 text-primary" strokeWidth={1.5} />
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {achievement.title}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
