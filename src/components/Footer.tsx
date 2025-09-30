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
                <a href="#" className="hover:text-primary-foreground transition-[var(--transition-smooth)]">
                  Știri
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-[var(--transition-smooth)]">
                  Program Meciuri
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-[var(--transition-smooth)]">
                  Istorie
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-[var(--transition-smooth)]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Urmărește-ne</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent-foreground/10 hover:bg-primary flex items-center justify-center transition-[var(--transition-smooth)]"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent-foreground/10 hover:bg-primary flex items-center justify-center transition-[var(--transition-smooth)]"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent-foreground/10 hover:bg-primary flex items-center justify-center transition-[var(--transition-smooth)]"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent-foreground/10 hover:bg-primary flex items-center justify-center transition-[var(--transition-smooth)]"
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
