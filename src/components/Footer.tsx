import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Despre Dinamo</h3>
            <p className="text-accent-foreground/80 text-sm leading-relaxed">
              Dinamo București - Un club cu tradiție, pasiune și istorie în 
              fotbalul românesc. Susținem excelența și spiritul de echipă.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Link-uri Rapide</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => document.getElementById("news")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-primary-foreground transition-[var(--transition-smooth)] cursor-pointer"
                >
                  Știri
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("matches")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-primary-foreground transition-[var(--transition-smooth)] cursor-pointer"
                >
                  Program Meciuri
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("history")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-primary-foreground transition-[var(--transition-smooth)] cursor-pointer"
                >
                  Istorie
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="hover:text-primary-foreground transition-[var(--transition-smooth)] cursor-pointer"
                >
                  Înapoi Sus
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Urmărește-ne</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/dinamobucuresti"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent-foreground/10 hover:bg-primary hover:scale-110 flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com/dinamobucuresti"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent-foreground/10 hover:bg-primary hover:scale-110 flex items-center justify-center transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com/dinamobucuresti"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent-foreground/10 hover:bg-primary hover:scale-110 flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com/@dinamobucuresti"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent-foreground/10 hover:bg-primary hover:scale-110 flex items-center justify-center transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 pt-8 text-center text-sm text-accent-foreground/60">
          <p>© 2025 Dinamo București. Toate drepturile rezervate.</p>
          <p className="mt-2">Susține Câinii Roșii!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
