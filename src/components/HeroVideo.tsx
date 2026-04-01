"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroVideo() {
  return (
    <header className="hero-video">
      {/* YouTube Background Video */}
      <div className="hero-video-bg">
        <iframe 
          src="https://www.youtube.com/embed/2uiD7sPZjRI?autoplay=1&mute=1&loop=1&playlist=2uiD7sPZjRI&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&fs=0&iv_load_policy=3"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Modolith Structures Background Video"
        />
      </div>

      {/* Dark overlay */}
      <div className="hero-video-overlay" />

      {/* Caption */}
      <div className="hero-caption">
        <div className="overflow-hidden">
          <h1 className="animate-fade-in-up">
            GELECEĞİ
            SAĞLAM TEMELLER ÜZERİNE İNŞA EDİYORUZ.
          </h1>
          <div className="animate-fade-in-up-delay">
            <div className="butn-dark mt-8 mb-8">
              <Link href="/projeler">
                <span>
                  PROJELERİMİZ <ArrowRight className="inline h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Social icons */}
      <div className="slider-social">
        <a
          href="https://www.instagram.com/modolith_structures/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/modolith_structures/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
          </svg>
        </a>
      </div>
    </header>
  );
}
