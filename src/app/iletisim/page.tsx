import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    " Karadeniz İnşaat ve Gayrimenkul ile iletişime geçin - projeleriniz için uzman inşaat çözümleri sunuyoruz. Ofis adresimiz, telefon numaramız ve çalışma saatlerimizle bize kolayca ulaşabilirsiniz.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="İLETİŞİM"
        subtitle="BİZİMLE İLETİŞİME GEÇİN"
        image="/images/services/a.png"
      />

      <section className="section-padding">
        <div className="mx-auto max-w-[1140px] px-4">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Contact Info */}
            <ScrollReveal direction="left">
              <div>
                <div className="section-subtitle">İLETİŞİM</div>
                <div className="section-title">BİZİMLE İLETİŞİME GEÇİN</div>
                <p className="mb-8">
                  Yeni bir proje mi planlıyorsunuz?
                  Karadeniz İnşaat olarak
                  size en uygun çözümleri sunmak için buradayız.
                  Bizimle iletisime geçerek projenizi birlikte planlayabiliriz.
                </p>

                <div className="space-y-4">
                  <div className="border-l-2 border-accent bg-primary-light px-6 py-5">
                    <h6 className="mb-2 text-[14px] font-light uppercase tracking-[3px] text-white"
                      style={{ fontFamily: "var(--font-heading), 'Oswald', sans-serif" }}
                    >
                      OfİS ADRESİ
                    </h6>
                    <p className="mb-0">
                      <a
                        href="https://maps.app.goo.gl/QSC9GJAABwjog3xr7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-accent"
                      >
                        Güngören, Tolgahan Sk. No:1 ofis 25, 34788 Çekmeköy/İstanbul
                      </a>
                    </p>
                  </div>
                  <div className="border-l-2 border-accent bg-primary-light px-6 py-5">
                    <h6 className="mb-2 text-[14px] font-light uppercase tracking-[3px] text-white"
                      style={{ fontFamily: "var(--font-heading), 'Oswald', sans-serif" }}
                    >
                      telefon
                    </h6>
                    <p className="mb-0">
                      <a
                        href="tel:+18325198584"
                        className="transition-colors hover:text-accent"
                      >
                        +90 535 490 57 28
                      </a>
                    </p>
                  </div>
                  <div className="border-l-2 border-accent bg-primary-light px-6 py-5">
                    <h6 className="mb-2 text-[14px] font-light uppercase tracking-[3px] text-white"
                      style={{ fontFamily: "var(--font-heading), 'Oswald', sans-serif" }}
                    >
                      Email
                    </h6>
                    <p className="mb-0">
                      <a
                        href="mailto:info@karadenizinsaatvegayrimenkul.com"
                        className="transition-colors hover:text-accent"
                      >
                        info@karadenizinsaatvegayrimenkul.com
                      </a>
                    </p>
                  </div>
                  <div className="border-l-2 border-accent bg-primary-light px-6 py-5">
                    <h6 className="mb-2 text-[14px] font-light uppercase tracking-[3px] text-white"
                      style={{ fontFamily: "var(--font-heading), 'Oswald', sans-serif" }}
                    >
                      Çalışma SaatlerİMİZ
                    </h6>
                    <p className="mb-0">Pazartesi - Cumartesi, 9:00 - 18:00 </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal direction="right">
              <div className="contact-form border border-primary-light p-8">
                <div className="section-subtitle mb-4">MESAJ GÖNDERİN</div>
                <br />
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.0283591675343!2d29.217088!3d41.024635499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cacf28e3aa6af7%3A0xfede643a6fe640e1!2sKaradeniz%20%C4%B0nsaat!5e0!3m2!1str!2str!4v1770043568010!5m2!1str!2str"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Karadeniz İnşaat Ofis Haritası"
        />
      </section>
    </>
  );
}
