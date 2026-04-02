import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "2009 yılında kurulan, inşaatta kalite, güvenlik ve yeniliğe kendini adamış Karadeniz İnşaat hakkında bilgi edinin. Deneyimli ekibimizle tanışın.",
};

const team = [
  {
    name: "ALİ YILMAZ",
    title: "Genel Müdür",
    bio: "Polished construction professional with extensive experience managing diverse projects including high-rise buildings, hospitals, bridges, airports, convention centers, parking structures, and critical NASA infrastructure. Holds a degree in Construction Science from Texas A&M University.",
    image: "/images/services/ali.png",
  },
  {
    name: "ALPEREN YILMAZ",
    title: "Genel Müdür Yardımcısı",
    bio: "Over a decade of experience as Ironworker, Foreman, and Superintendent. Specializes in industrial towers, metal buildings, platforms, pipe racks, and superstructures.",
    image: "/images/services/alperen.jpg",
  },
  {
    name: "BAYRAM AYDIN",
    title: "Uzman Emlak Danışmanı",
    bio: "Specialty Pipefitter, Ironworker, and Quality Control/Safety Manager with experience across heavy industrial, commercial, and critical infrastructure projects.",
    image: "/images/services/bay.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="HAKKIMIZDA"
        subtitle="Bizi Tanıyın"
        image="/images/projects/plaza/PLAZA9.png"
      />

      {/* About Company - Asymmetric layout */}
      <section className="section-padding">
        <div className="mx-auto max-w-[1140px] px-4">
          <ScrollReveal>
            <div className="about-section">
              <figure>
                <Image
                  src="/images/projects/s/S4.png"
                  alt="Karadeniz İnşaat"
                  width={1200}
                  height={800}
                  className="h-auto w-full"
                  sizes="(max-width: 991px) 100vw, 66vw"
                />
              </figure>
              <div className="about-caption">
                <div className="section-number">.01</div>
                <div className="section-subtitle">Şirketimiz</div>
                <div className="section-title">Karadeniz İnşaat Hakkında</div>
                <p>
                  Karadeniz İnşaat olarak, yapı sektöründe kalite,
                  güven ve dayanıklılığı ön planda tutuyoruz. Amacımız yalnızca
                  yapılar inşa etmek değil, uzun ömürlü ve güvenilir yaşam alanları
                  oluşturmaktır.
                  </p>

                  <p>
                  Faaliyet alanlarımız arasında konut projeleri, ticari yapılar,
                  anahtar teslim inşaat çözümleri ve gayrimenkul danışmanlığı
                  bulunmaktadır. Deneyimli ekibimiz ile her projede yüksek kalite
                  standartlarını hedeflemekteyiz.
                  </p>
                <br />
                <div className="butn-dark">
                  <Link href="/hizmetlerimiz">
                    <span>
                      Hizmetlerimiz <ArrowRight className="inline h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* History - Asymmetric reversed */}
      <section className="section-padding">
        <div className="mx-auto max-w-[1140px] px-4">
          <ScrollReveal>
            <div className="asymmetric-section">
              <figure>
                <Image
                  src="/images/projects/büyük/DEV2.jpeg"
                  alt="Company History"
                  width={1200}
                  height={800}
                  className="h-auto w-full"
                  sizes="(max-width: 991px) 100vw, 66vw"
                />
              </figure>
              <div className="asymmetric-caption">
                <div className="section-number">.02</div>
                <div className="section-subtitle">Hikayemiz</div>
                <div className="section-title">Sağlam Temeller</div>
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
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="mx-auto max-w-[1140px] px-4">
          <div className="relative mb-[30px] text-center">
            <div className="section-number">.03</div>
            <div className="section-subtitle">Motİvasyonumuz</div>
            <div className="section-title">Mİsyon & Vİzyon</div>
          </div>

          <ScrollReveal>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="border border-primary-light border-t-2 border-t-accent p-10 transition-colors hover:bg-primary-light">
                <div className="section-subtitle mb-4">Mİsyonumuz</div>
                <h3 className="mb-4 text-[24px] font-normal uppercase tracking-[1px] text-white"
                  style={{ fontFamily: "var(--font-heading), 'Oswald', sans-serif" }}
                >
                  Kalite ile Güven İnşa Etmek
                </h3>
                <p>
                  Tüm dünyada inşaat sektöründe yaşanan teknik ve mimari gelişmeleri yakından takip ederek sağlam, güvenlikli, kaliteli projeler sunmanın yanı sıra sürekli gelişen ihtiyaç ve beklentileri önceden ön görerek projelendirmek. İnsan yaşamını kolaylaştırmak ve yaşam kalitesini arttırmak hedefiyle “kalite ve insan” odaklı hizmet sunmak.
                </p>
              </div>
              <div className="border border-primary-light border-t-2 border-t-accent p-10 transition-colors hover:bg-primary-light">
                <div className="section-subtitle mb-4">Vİzyonumuz</div>
                <h3 className="mb-4 text-[24px] font-normal uppercase tracking-[1px] text-white"
                  style={{ fontFamily: "var(--font-heading), 'Oswald', sans-serif" }}
                >
                  Yenilikçi ve Güvenilir Bir Marka Olmak
                </h3>
                <p>
                  Doğal dengeyi koruyan, yatırım yaptığı alanlara değer kazandıran, her yatırımda standartları yükseltmeyi amaçlayan, Karadeniz İnşaat ailesi bu vizyonu ile, önderimiz Mustafa Kemal Atatürk’ün çağdaş muassır medeniyetler seviyesi üzerine çıkmak olarak belirttiği ülkemizin vizyonunu kendisine rehber edinmiş ve bundan sonra da ortaya koyacağı projeler ile ulusal ve uluslararası bir öncü firma olma yolunda çalışmalarını sürdürecektir.
                            Yenilikçi, rekabetçi ve güven inşa eden bir vizyona sahibiz.
                            
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

       {/* Team Section */}
        <section className="section-padding">
          <div className="mx-auto max-w-[1140px] px-4">
            <div className="relative mb-[30px] text-center">
              <div className="section-number">.04</div>
              <div className="section-subtitle">Uzmanlarımız</div>
              <div className="section-title">Yönetİm Ekİbİ</div>
            </div>
        
            <ScrollReveal>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                {team.map((member) => (
                  <div key={member.name} className="team-card">
                    <div
                      className="relative w-full overflow-hidden"
                      style={{ height: "380px" }}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      />
                    </div>
                    <div className="team-info">
                      <h5>{member.name}</h5>
                      <p className="text-accent">{member.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
    </>
  );
}
