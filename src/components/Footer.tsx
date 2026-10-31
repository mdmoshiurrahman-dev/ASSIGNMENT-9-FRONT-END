import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#082218] text-white overflow-hidden">
      {/* Top Main Footer Area */}
      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 items-start">
          {/* Column 1: Brand & Socials (approx 3.5 cols) */}
          <div>
            {/* Logo */}
            <Link href="/" className="inline-block">
              <Image
                src="/footer_logo.png"
                alt="SocialServe Logo"
                width={200}
                height={70}
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </Link>

            {/* Tagline */}
            <p className="text-zinc-300 text-xs sm:text-sm font-normal">
              Stronger Community. Brighter Tomorrow.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2 text-white">
              {/* GitHub */}
              <Link
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-white/90 hover:text-[#99f74a] transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </Link>

              {/* Facebook */}
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-white/90 hover:text-[#99f74a] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>

              {/* YouTube */}
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="text-white/90 hover:text-[#99f74a] transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>

              {/* X / Twitter */}
              <Link
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="text-white/90 hover:text-[#99f74a] transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-white/90 hover:text-[#99f74a] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm sm:text-base tracking-tight">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="hover:text-white transition-colors"
                >
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources (approx 2 cols) */}
          <div>
            <h4 className="text-white font-bold text-sm sm:text-base tracking-tight">
              Resources
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
              <li>
                <Link
                  href="/create-event"
                  className="hover:text-white transition-colors"
                >
                  Create Event
                </Link>
              </li>
              <li>
                <Link
                  href="/manage-events"
                  className="hover:text-white transition-colors"
                >
                  Manage Events
                </Link>
              </li>
              <li>
                <Link
                  href="/joined-events"
                  className="hover:text-white transition-colors"
                >
                  Joined Events
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us (approx 2 cols) */}
          <div>
            <h4 className="text-white font-bold text-sm sm:text-base tracking-tight">
              Contact Us
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white shrink-0" />
                <a
                  href="mailto:hello@socialserve.org"
                  className="hover:text-white transition-colors truncate"
                >
                  hello@socialserve.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-white shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white shrink-0" />
                <a
                  href="tel:+8801234567890"
                  className="hover:text-white transition-colors"
                >
                  +880 1234 567890
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Together We Care Logo (approx 1.5 cols) */}
          <div className=" flex items-center justify-center">
            <div className="w-36 flex justify-center items-center sm:w-40 h-auto">
              <Image
                src="/together_we_caree.png"
                alt="Together We Care"
                width={280}
                height={220}
                className="w-full h-auto object-contain drop-shadow"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Theme Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-zinc-400">
          <div>
            <p>© 2026 SocialServe. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
