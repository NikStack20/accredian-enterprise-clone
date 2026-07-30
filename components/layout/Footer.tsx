import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const footerColumns: FooterColumn[] = [
  {
    title: "Enterprise",
    links: [
      { label: "Programs", href: "#" },
      { label: "Domain Expertise", href: "#" },
      { label: "Learning Paths", href: "#" },
      { label: "Case Studies", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Support", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <Container>
        <div className="grid grid-cols-1 gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <h2 className="text-2xl font-bold text-white">Accredian</h2>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              Enterprise learning solutions designed to help organizations
              upskill teams and build future-ready talent.
            </p>
          </div>

          {/* Dynamic Columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-semibold text-white">
                {column.title}
              </h3>

              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-blue-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Contact
            </h3>

            <div className="mt-4 space-y-4">
              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Gurugram, Haryana</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>enterprise@accredian.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 py-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Accredian. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}