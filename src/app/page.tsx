import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import HeroVideo from "@/components/HeroVideo";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Karadeniz İnşaat "};
const partners = [
  { name: "T.C. ÇEKMEKÖY BELEDİYESİ", logo: "/images/partners/cekmekoy.png" },
  { name: "ULUTAŞLAR İNŞAAT BETON", logo: "/images/partners/ulutaslar.jpg" },
  { name: "CVK İNŞAAT", logo: "/images/partners/cvk.png" },
  { name: "HASSÖNMEZLER İNŞAAT", logo: "/images/partners/hassonmezler.png" },
  { name: "EMR GRUP GAYRİMENKUL", logo: "/images/partners/emrgrup.png" },
  { name: "SAFİ BETON", logo: "/images/partners/safibeton.jpg" },
  { name: "ALBAYRAK BETON", logo: "/images/partners/albayrak.png" },
  { name: "İZKA ELEKTRİK", logo: "/images/partners/izka.png" },
  { name: "YEŞİLYURT ORMAN ÜRÜNLERİ", logo: "/images/partners/yesilyurt.jpg" },
  { name: "KOÇAKKALE DEMİR", logo: "/images/partners/kocakkale.png" },
];
export default function Home() {
  return (
    <>
      {/* Hero Video */}
      <HeroVideo />

      {/* About Section - Asymmetric layout */}
      <section className="section-padding">
        <div className="mx-auto max-w-[1140px] px-4">
          <ScrollReveal>
            <div className="about-section">
              <figure>
                <Image
                  src="/images/projects/ikiz/İKİZ7.png"
                  alt="About Karadeniz İnşaat"
                  width={1200}
                  height={800}
                  className="h-auto w-full"
                  sizes="(max-width: 991px) 100vw, 66vw"
                />
              </figure>
              <div className="about-caption">
                <div className="section-number">.01</div>
                <div className="section-subtitle">Hakkımızda</div>
                <div className="section-title">Karadeniz İnşaat</div>
                <p>
                   Karadeniz İnşaat olarak, 17 yıllık tecrübemizle 
                   kaliteli inşaat ve güvenilir emlak hizmetleri sunuyoruz. Ev sahibi olmak artık çok kolay!
                </p> <br /> <br />
                <div className="butn-dark">
                  <Link href="/hakkimizda">
                    <span>
                      Daha fazla <ArrowRight className="inline h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding pt-0">
        <div className="mx-auto max-w-[1140px] px-4">
          <ScrollReveal>
            <div className="relative mb-[30px]">
              <div className="section-number">.02</div>
              <div className="section-subtitle">NE YAPIYORUZ</div>
              <div className="section-title">HİZMETLERİMİZ</div>
              <p className="mt-4 max-w-3xl">
                Karadeniz İnşaat olarak biz sadece binalar inşa etmiyoruz. Güven ve kalite standartları yaratıyoruz. Uzman ekibimiz, titiz planlama ve deneyimli uygulama ile projelerinizi başarılı bir şekilde tamamlar. Genel müteahhitlik
                 veya inşaat danışmanlığı fark etmeksizin, Karadeniz İnşaat projelerinize değer katar. Sağlam, güvenilir ve liderlik için tasarlanmış yapılar sunar.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.slug}
                className="service-card"
                style={{
                  backgroundImage: `url(${service.image})`,
                }}
              >
                <div className="service-content">
                  <div className="mb-5 flex justify-center">
                    <Image
                      src="/images/logos/logo.png"
                      alt=""
                      width={200}
                      height={200}
                      className="!h-[60px] !w-[60px] object-contain opacity-80"
                    />
                  </div>
                  <h5>{service.shortTitle}</h5>
                  <p>{service.description.split(".")[0]}.</p>
                </div>
              </div>
            ))}
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* History / Mission / Vision */}
      <section className="section-padding">
        <div className="mx-auto max-w-[1140px] px-4">
          <ScrollReveal>
            <div className="asymmetric-section">
              <figure>
                <Image
                  src="/images/services/Modolith-Image-107.jpg"
                  alt="Modolith History"
                  width={1200}
                  height={800}
                  className="h-auto w-full"
                  sizes="(max-width: 991px) 100vw, 66vw"
                />
              </figure>
              <div className="asymmetric-caption">
                <div className="section-number">.03</div>
                <div className="section-subtitle">2009'dan bu yana</div>
                <div className="section-title">Hİkayemİz</div>
                <p>
                  Karadeniz İnşaat, sektörde kaliteli ve güvenilir
                  projeler üretme hedefiyle 2009 yılında kurulmuştur. Kurulduğu günden bu yana
                  müşteri memnuniyetini ön planda tutarak birçok başarılı projeye
                  imza atmıştır.
                </p>

                  <p>
                  Her geçen yıl büyüyen yapımızla birlikte, modern teknikler ve
                  yenilikçi çözümler kullanarak sektörde güçlü bir yer edinmeye
                  devam ediyoruz.
                  </p>
                <br />
                <div className="butn-dark">
                  <Link href="/hakkimizda">
                    <span>
                      Daha FAzla <ArrowRight className="inline h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="section-padding pt-0">
        <div className="mx-auto max-w-[1140px] px-4">
          <ScrollReveal>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="relative overflow-hidden border border-primary-light p-10">
                {/* Background icon */}
                <svg
                  className="absolute -right-4 -bottom-4 h-40 w-40 text-accent opacity-[0.07]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
                <div className="section-subtitle mb-4">Misyonumuz</div>
                <p>
                   Tüm dünyada inşaat sektöründe yaşanan teknik ve mimari gelişmeleri yakından takip ederek sağlam, güvenlikli, kaliteli projeler sunmanın yanı sıra sürekli gelişen ihtiyaç ve beklentileri önceden ön görerek projelendirmek. İnsan yaşamını kolaylaştırmak ve yaşam kalitesini arttırmak hedefiyle “kalite ve insan” odaklı hizmet sunmak.
                </p>
              </div>
              <div className="relative overflow-hidden border border-primary-light p-10">
                {/* Background icon */}
                <svg
                  className="absolute -right-4 -bottom-4 h-40 w-40 text-accent opacity-[0.07]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44" />
                  <path d="m13.56 11.747 4.332-.924" />
                  <path d="m16 21-3.105-6.21" />
                  <path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z" />
                  <path d="m6.158 8.633 1.114 4.456" />
                  <path d="m8 21-3.105-6.21" />
                </svg>
                <div className="section-subtitle mb-4">Vizyonumuz</div>
                <p>
                  Doğal dengeyi koruyan, yatırım yaptığı alanlara değer kazandıran, her yatırımda standartları yükseltmeyi amaçlayan, Karadeniz İnşaat ailesi bu vizyonu ile, önderimiz Mustafa Kemal Atatürk’ün çağdaş muassır medeniyetler seviyesi üzerine çıkmak olarak belirttiği ülkemizin vizyonunu kendisine rehber edinmiş ve bundan sonra da ortaya koyacağı projeler ile ulusal ve uluslararası bir öncü firma olma yolunda çalışmalarını sürdürecektir.
                            Yenilikçi, rekabetçi ve güven inşa eden bir vizyona sahibiz.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding">
        <div className="mx-auto max-w-[1140px] px-4">
          <div className="relative mb-[30px]">
            <div className="section-number">.04</div>
            <div className="section-subtitle">Projeler</div>
            <div className="section-title">PROJELERİMİZ</div>
          </div>

          <ScrollReveal>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.slice(0, 6).map((project) => (
                <Link
                  key={project.slug}
                  href={`/projeler/${project.slug}`}
                  className="project-card group"
                >
                  <div className="project-card-img">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="project-card-content">
                    <div className="project-card-tagline">{project.type}</div>
                    <div className="project-card-title">{project.title}</div>
                    <div className="project-card-arrow">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>

          <div className="mt-12 text-center">
            <div className="butn-dark">
              <Link href="/projeler">
                <span>
                  Tüm PROJELERİ GÖRÜNTÜLEYİN <ArrowRight className="inline h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Let's Build Something That Lasts */}
      <section className="section-padding">
        <div className="mx-auto max-w-[1140px] px-4">
          <ScrollReveal>
            <div className="about-section">
              <figure>
                <Image
                  src="/images/projects/kirmizi/KIRMIZI1.jpeg"
                  alt="Let's Build Something That Lasts"
                  width={1200}
                  height={800}
                  className="h-auto w-full"
                  sizes="(max-width: 991px) 100vw, 66vw"
                />
              </figure>
              <div className="about-caption">
                <div className="section-number">.05</div>
                <div className="section-subtitle">Güvenilir. Kaliteli. Geleceği İnşa Ediyoruz.</div>
                <div className="section-title">
                  Birlikte Kalıcı Yapılar İnşa Edelim
                </div>
                <p>
                  İster konut projesi planlıyor olun, ister güvenilir bir gayrimenkul danışmanlığı arıyor olun, Karadeniz İnşaat her adımda yanınızda. Deneyimli ekibimiz, sağlam mühendislik anlayışı ve profesyonel yaklaşımıyla projelerinizi en yüksek kalite standartlarında hayata geçirir.
                  Hayalinizdeki projeyi gerçeğe dönüştürmek için bizimle iletişime geçin.
                </p>
                <br />
                <div className="butn-dark">
                  <Link href="/iletisim">
                    <span>
                      İletişim <ArrowRight className="inline h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Clients & Partners */}
      <section className="section-padding">
        <div className="mx-auto max-w-[1140px] px-4 text-center">
          <ScrollReveal>
            <div className="section-subtitle">Güven Üzerine Kuruldu. İş Birliğiyle Güçlendi.</div>
            <div className="section-title mb-16">İş Ortaklarımız & Referanslarımız</div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex aspect-square flex-col items-center justify-center gap-3 border border-primary-light p-4 text-center transition-colors hover:border-accent"
              >
                <div className="relative h-16 w-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                </div>
                <span
                  className="text-[11px] font-500 uppercase leading-tight tracking-[1px] text-gray-warm"
                  style={{ fontFamily: "var(--font-heading), 'Oswald', sans-serif" }}
                >
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="relative overflow-hidden py-32">
  <div className="absolute inset-0">
    <Image
      src="/images/services/Modolith-Image-110.jpg"
      alt="Collaboration"
      fill
      className="object-contain brightness-[0.35]"  
      priority
      sizes="100vw"
    />
    {/* bg-black/70 div'i tamamen kaldırıldı */}
  </div>
  <div className="relative z-10 mx-auto max-w-[1140px] px-4 text-center">
          <ScrollReveal>
            <div className="section-subtitle">İş Birliği</div>
            <h2
              className="mx-auto mb-6 max-w-3xl text-[48px] font-500 uppercase leading-tight tracking-[3px] text-white md:text-[60px]"
              style={{ fontFamily: "var(--font-heading), 'Oswald', sans-serif" }}
            >
              Birlikte Çalışalım.
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-[16px] leading-relaxed text-white/70">
              Hayaliniz bizim için bir projedir. 
              Karadeniz İnşaat olarak konut projeleri, 
              anahtar teslim inşaat hizmetleri ve gayrimenkul danışmanlığı 
              alanlarında projenizi fikir aşamasından teslim sürecine kadar 
              profesyonel bir şekilde yönetiyoruz.
            </p>
            <div className="butn-dark">
              <Link href="/iletisim">
                <span>
                  BİZİMLE İLETİŞİME GEÇİN <ArrowRight className="inline h-4 w-4" />
                </span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
