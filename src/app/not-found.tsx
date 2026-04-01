import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-lg text-center">
        <div
          className="mb-4 text-[150px] font-bold leading-none text-transparent"
          style={{
            fontFamily: "var(--font-heading), 'Oswald', sans-serif",
            WebkitTextStroke: "1px #333",
          }}
        >
          404
        </div>
        <div className="section-subtitle mb-4">Sayfa Bulunamadı</div>
        <div className="section-title mb-6">
          Yapım Aşamasında Olan Bir Sayfaya Geldiniz
        </div>
        <p className="mb-10 text-gray-warm">
          Aradığınız sayfa mevcut değil veya taşınmış.
            Sizi ana sayfaya geri döndürelim.
        </p>
        <div className="butn-dark">
          <Link href="/">
            <span>
             Ana Sayfaya Dön <ArrowRight className="inline h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
