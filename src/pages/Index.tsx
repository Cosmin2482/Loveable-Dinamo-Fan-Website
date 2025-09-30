import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import MatchSchedule from "@/components/MatchSchedule";
import HistorySection from "@/components/HistorySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <NewsSection />
      <MatchSchedule />
      <HistorySection />
      <Footer />
    </div>
  );
};

export default Index;
