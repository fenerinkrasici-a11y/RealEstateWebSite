export interface Project {
  slug: string;
  title: string;
  location: string;
  client: string;
  type: string;
  description: string;
  scope: string[];
  details: string;
  image: string;
  images: string[];
}

export const projects: Project[] = [
  {
    slug: "gungoren-ikiz-apartmanlar",
    title: "Güngören İkiz Apartmanlar",
    location: "İstanbul, Türkiye",
    client: "2016",
    type: "Kentsel Dönüşüm Projesi",
    description: 
  "Güngören İkiz Apartmanları projesi kapsamında, mevcut yapılar yıkılarak modern ve güvenli yaşam alanları oluşturuldu. Proje, sürdürülebilir malzemeler ve yüksek kalite standartlarıyla, bölgeye yeni bir yaşam ve sosyal donatı alanı kazandırdı.",

scope: [
  "Mevcut yapıların yıkımı ve hafriyat işleri",
  "Yeni yapıların mühendislik ve tasarım çalışmaları",
  "Malzeme tedariki ve lojistik",
  "Betonarme ve çelik yapı inşaatı",
  "Duvarcılık ve dış cephe uygulamaları",
  "Elektrik, sıhhi tesisat ve aydınlatma sistemleri",
  "Peyzaj ve çevre düzenlemesi",
],

details: 
  "Proje, tasarım ve inşaat süreçlerinin baştan sona yönetimi ile gerçekleştirildi. Tüm iş kollarının koordinasyonu, kalite ve güvenlik standartları gözetilerek tamamlandı ve modern bir kentsel dönüşüm alanı yaratıldı.",
    image: "/images/projects/ikiz/İKİZ5.png",
    images: [
      "/images/projects/ikiz/İKİZ.jpeg",
      "/images/projects/ikiz/İKİZ2.jpeg",
      "/images/projects/ikiz/İKİZ3.jpeg",
      "/images/projects/ikiz/İKİZ4.jpeg",
      "/images/projects/ikiz/İKİZ5.png",
      "/images/projects/ikiz/İKİZ6.png",
      "/images/projects/ikiz/İKİZ7.png",
      "/images/projects/ikiz/İKİZ8.png",
    ],
  },
  {
    slug: "eksiogl-evleri",
    title: "EKŞİOĞLU EVLERİ",
    location: "İstanbul, Türkiye",
    client: "2022",
    type: "Kat Karşılığı İnşaat Projesi",
    description: 
  "EKSİOĞLU Evleri projesi kapsamında, mevcut alan yeniden yapılandırılarak modern ve güvenli yaşam alanları oluşturuldu. Proje, sürdürülebilir malzemeler ve yüksek kalite standartlarıyla, bölgeye yeni konutlar ve sosyal donatı alanları kazandırdı.",

scope: [
  "Mevcut yapıların yıkımı ve hafriyat işleri",
  "Yeni yapıların mühendislik ve mimari tasarım çalışmaları",
  "Malzeme tedariki ve lojistik yönetimi",
  "Betonarme ve çelik yapı inşaatı",
  "Duvarcılık ve dış cephe uygulamaları",
  "Elektrik, sıhhi tesisat ve aydınlatma sistemleri",
  "Peyzaj ve çevre düzenlemesi",
],

details: 
  "Proje, tasarım ve inşaat süreçlerinin baştan sona yönetimi ile tamamlandı. Tüm iş kollarının koordinasyonu sağlanarak kalite ve güvenlik standartları gözetildi, modern bir kentsel dönüşüm alanı yaratıldı.",
    image: "/images/projects/eks/eks.jpeg",
    images: [
      "/images/projects/eks/eks.jpeg",
      "/images/projects/eks/eks1.jpeg",
    ],
  },
  {
    slug: "karadeniz-is-merkezi",
    title: "KARADENİZ İŞ MERKEZİ",
    location: "İstanbul, Türkiye",
    client: "2014",
    type: "Kentsel Dönüşüm Projesi",
    description: 
  "Karadeniz İş Merkezi projesi kapsamında, eski yapılar modern ve fonksiyonel bir iş merkezi olarak dönüştürüldü. Proje, yüksek kalite standartlarıyla, İstanbul’da yeni çalışma alanları ve sosyal donatı alanları yarattı.",

scope: [
  "Mevcut yapıların yıkımı ve alan hazırlığı",
  "Yeni iş merkezi binalarının mühendislik ve mimari tasarımı",
  "Malzeme tedariki ve lojistik yönetimi",
  "Betonarme ve çelik yapı inşaatı",
  "Elektrik, sıhhi tesisat ve aydınlatma sistemleri",
  "Dış cephe ve iç mekan uygulamaları",
  "Peyzaj ve çevre düzenlemesi",
],

details: 
  "Proje, tasarım ve inşaat süreçlerinin baştan sona yönetimiyle tamamlandı. Tüm iş kollarının koordinasyonu sağlanarak kalite ve güvenlik standartları gözetildi, modern ve fonksiyonel bir iş merkezi alanı oluşturuldu.",
    image: "/images/projects/plaza/PLAZA8.png",
    images: [
      "/images/projects/plaza/PLAZA8.png",
      "/images/projects/plaza/PLAZA9.png",
      "/images/projects/plaza/PLAZA10.png",
      "/images/projects/plaza/PLAZA5.jpeg",
      "/images/projects/plaza/PLAZA6.jpeg",
    ],
  },
  {
    slug: "gungoren-sari-apartman",
    title: "GÜNGREN SARI APARTMAN PROJESİ",
    location: "İstanbul, Türkiye",
    client: "2018",
    type: "Kat Karşılığı İnşaat Projesi",
    description: 
  "Sarı Apartman projesi kapsamında, Çekmeköy ve Güngören bölgelerinde kat karşılığı anlaşmalarıyla modern ve güvenli konutlar inşa edildi. Proje, bölgeye kaliteli yaşam alanları ve sosyal donatı alanları kazandırdı.",

scope: [
  "Mevcut yapıların yıkımı ve hafriyat çalışmaları",
  "Yeni yapıların mühendislik ve mimari tasarımı",
  "Malzeme tedariki ve lojistik yönetimi",
  "Betonarme ve çelik yapı inşaatı",
  "Duvarcılık, dış cephe ve iç mekan uygulamaları",
  "Elektrik, sıhhi tesisat ve aydınlatma sistemleri",
  "Peyzaj ve çevre düzenlemesi",
],

details: 
  "Proje, kat karşılığı inşaat modeli kapsamında tasarım ve inşaat süreçlerinin baştan sona yönetimi ile tamamlandı. Tüm iş kollarının koordinasyonu sağlanarak kalite ve güvenlik standartları gözetildi ve bölgeye modern konut alanları kazandırıldı.",
    image: "/images/projects/sari/SARI3.jpeg",
    images: [
      "/images/projects/sari/SARI3.jpeg",
      "/images/projects/sari/SARI4.jpeg",
      "/images/projects/sari/SARI6.jpeg",
      "/images/projects/sari/SARI7.jpeg",
      "/images/projects/sari/SARI1.jpeg",
      "/images/projects/sari/SARI5.jpeg",
    ],
  },
  {
    slug: "karadeniz-insaat-ve-yildiz-insaat-kentsel-donusum-projesi",
    title: "KARADENİZ İNŞAAT VE YILDIZ İNŞAAT KENTSEL DÖNÜŞÜM PROJESİ",
    location: "İstanbul, Türkiye",
    client: "2015",
    type: "Kentsel Dönüşüm Projesi",
    description: 
  "Karadeniz İnşaat ve Yıldız İnşaat iş birliğiyle Çekmeköy ve Güngören’de hayata geçirilen kentsel dönüşüm projesi kapsamında, mevcut alanlar modern ve güvenli yaşam ve çalışma alanlarına dönüştürüldü. Proje, bölgeye yeni konutlar, sosyal donatı ve iş merkezi alanları kazandırdı.",

scope: [
  "Mevcut yapıların yıkımı ve alan hazırlığı",
  "Yeni binaların mühendislik ve mimari tasarımı",
  "Malzeme tedariki ve lojistik yönetimi",
  "Betonarme ve çelik yapı inşaatı",
  "Duvarcılık, dış cephe ve iç mekan uygulamaları",
  "Elektrik, sıhhi tesisat ve aydınlatma sistemleri",
  "Peyzaj ve çevre düzenlemesi",
],

details: 
  "Proje, tasarım ve inşaat süreçlerinin baştan sona yönetimi ile tamamlandı. Yıldız İnşaat ile koordineli yürütülen çalışmalarda kalite ve güvenlik standartları gözetildi, modern bir kentsel dönüşüm alanı oluşturuldu.",
    image: "/images/projects/s/S4.png",
    images: [
      "/images/projects/s/S4.png",
      "/images/projects/s/S3.png",
      "/images/projects/s/S2.jpeg",
      "/images/projects/s/S1.jpeg",
    ],
  },
  {
    slug: "tasdelen-kentsel-donusum-projesi",
    title: "TAŞDELEN KENTSEL DÖNÜŞÜM PROJESİ",
    location: "İstanbul, Türkiye",
    client: "2010",
    type: "Kentsel Dönüşüm Projesi",
    description: 
  "Taşdelen Kentsel Dönüşüm Projesi kapsamında, eski yapılar modern ve güvenli yaşam alanlarına dönüştürüldü. Proje, bölgeye yüksek standartlarda konutlar ve sosyal donatı alanları kazandırdı.",

scope: [
  "Mevcut yapıların yıkımı ve hafriyat çalışmaları",
  "Yeni yapıların mühendislik ve mimari tasarımı",
  "Malzeme tedariki ve lojistik yönetimi",
  "Betonarme ve çelik yapı inşaatı",
  "Duvarcılık, dış cephe ve iç mekan uygulamaları",
  "Elektrik, sıhhi tesisat ve aydınlatma sistemleri",
  "Peyzaj ve çevre düzenlemesi",
],

details: 
  "Proje, tasarım ve inşaat süreçlerinin baştan sona yönetimi ile tamamlandı. Tüm iş kollarının koordinasyonu sağlanarak kalite ve güvenlik standartları gözetildi ve modern bir kentsel dönüşüm alanı oluşturuldu.",
    image: "/images/projects/ince/İNCE2.jpeg",
    images: [
      "/images/projects/ince/İNCE2.jpeg",
      "/images/projects/ince/İNCE4.jpeg",
      "/images/projects/ince/İNCE3.jpeg",
      "/images/projects/ince/İNCE1.jpeg",
    ],
  },
  {
    slug: "kirazlidere-kentsel-donusum-projesi",
    title: "KİRAZLIDERE KENTSEL DÖNÜŞÜM PROJESİ",
    location: "İstanbul, Türkiye",
    client: "2019",
    type: "kAT KARŞILIĞI İNŞAAT PROJESİ",
    description: 
  "Kirazlıdere Kentsel Dönüşüm Projesi kapsamında, eski yapılar modern ve güvenli yaşam alanlarına dönüştürüldü. Proje, bölgeye yüksek standartlarda konutlar ve sosyal donatı alanları kazandırdı.",

scope: [
  "Mevcut yapıların yıkımı ve hafriyat çalışmaları",
  "Yeni yapıların mühendislik ve mimari tasarımı",
  "Malzeme tedariki ve lojistik yönetimi",
  "Betonarme ve çelik yapı inşaatı",
  "Duvarcılık, dış cephe ve iç mekan uygulamaları",
  "Elektrik, sıhhi tesisat ve aydınlatma sistemleri",
  "Peyzaj ve çevre düzenlemesi",
],

details: 
  "Proje, tasarım ve inşaat süreçlerinin baştan sona yönetimi ile tamamlandı. Tüm iş kollarının koordinasyonu sağlanarak kalite ve güvenlik standartları gözetildi ve modern bir kentsel dönüşüm alanı oluşturuldu.",
    image: "/images/projects/kb/kb1.jpeg",
    images: [
      "/images/projects/kb/kb1.jpeg",
       "/images/projects/kb/kb2.jpeg",
    ],
  },
  {
    slug: "tasdelen-koyici-kentsel-donusum-projesi",
    title: "TAŞDELEN KÖYİÇİ KENTSEL DÖNÜŞÜM PROJESİ",
    location: "İstanbul, Türkiye",
    client: "2023",
    type: "Kentsel Dönüşüm Projesi",
    description: 
  "Taşdelen Köyiçi Kentsel Dönüşüm Projesi kapsamında, bölgedeki eski yapılar modern ve güvenli konut ve yaşam alanlarına dönüştürüldü. Proje, sosyal donatı ve çevre düzenlemeleri ile bölgeye değer kattı.",

scope: [
  "Mevcut yapıların yıkımı ve hafriyat çalışmaları",
  "Yeni yapıların mühendislik ve mimari tasarımı",
  "Malzeme tedariki ve lojistik yönetimi",
  "Betonarme ve çelik yapı inşaatı",
  "Duvarcılık, dış cephe ve iç mekan uygulamaları",
  "Elektrik, sıhhi tesisat ve aydınlatma sistemleri",
  "Peyzaj ve çevre düzenlemesi",
],

details: 
  "Proje, tasarım ve inşaat süreçlerinin baştan sona yönetimi ile tamamlandı. Tüm iş kollarının koordinasyonu sağlanarak kalite ve güvenlik standartları gözetildi ve modern bir kentsel dönüşüm alanı oluşturuldu.",
    image: "/images/projects/beyaz/BEYAZ1.jpeg",
    images: [
      "/images/projects/beyaz/BEYAZ1.jpeg",
      "/images/projects/beyaz/BEYAZ2.jpeg",
      "/images/projects/beyaz/BEYAZ3.jpeg",
      "/images/projects/beyaz/BEYAZ4.jpeg",
      "/images/projects/beyaz/BEYAZ5.jpeg",
    ],
  },
  {
    slug: "alemdag-kentsel-donusum-projesi",
    title: "ALEMDAG KENTSEL DÖNÜŞÜM PROJESİ",
    location: "İstanbul, Türkiye",
    client: "2024",
    type: "Kentsel Dönüşüm Projesi",
    description: 
  "Alemdag Kentsel Dönüşüm Projesi kapsamında, bölgede eski yapıların yerine modern, güvenli ve konforlu yaşam alanları inşa edildi. Proje, sosyal donatı ve çevre düzenlemeleri ile bölgeye değer kattı.",

scope: [
  "Mevcut yapıların yıkımı ve alan hazırlığı",
  "Yeni yapıların mühendislik ve mimari tasarımı",
  "Malzeme tedariki ve lojistik yönetimi",
  "Betonarme ve çelik yapı inşaatı",
  "Duvarcılık, dış cephe ve iç mekan uygulamaları",
  "Elektrik, sıhhi tesisat ve aydınlatma sistemleri",
  "Peyzaj ve çevre düzenlemesi",
],

details: 
  "Proje, tasarım ve inşaat süreçlerinin baştan sona yönetimi ile tamamlandı. Tüm iş kollarının koordinasyonu sağlanarak kalite ve güvenlik standartları gözetildi ve modern bir kentsel dönüşüm alanı oluşturuldu.",
    image: "/images/projects/büyük/DEV1.jpeg",
    images: [
      "/images/projects/büyük/DEV1.jpeg",
      "/images/projects/büyük/DEV2.jpeg",
    ],
  },
  {
    slug: "sogukpinar-evleri",
    title: "SOĞUKPINAR EVLERİ",
    location: "İstanbul, Türkiye",
    client: "2012",
    type: "Kentsel Dönüşüm Projesi",
    description: 
  "Soğukpınar Evleri Kentsel Dönüşüm Projesi kapsamında, bölgedeki eski yapılar modern ve güvenli yaşam alanlarına dönüştürüldü. Proje, sosyal donatı ve çevre düzenlemeleri ile bölgeye değer kattı.",

scope: [
  "Mevcut yapıların yıkımı ve alan hazırlığı",
  "Yeni yapıların mühendislik ve mimari tasarımı",
  "Malzeme tedariki ve lojistik yönetimi",
  "Betonarme ve çelik yapı inşaatı",
  "Duvarcılık, dış cephe ve iç mekan uygulamaları",
  "Elektrik, sıhhi tesisat ve aydınlatma sistemleri",
  "Peyzaj ve çevre düzenlemesi",
],

details: 
  "Proje, tasarım ve inşaat süreçlerinin baştan sona yönetimi ile tamamlandı. Tüm iş kollarının koordinasyonu sağlanarak kalite ve güvenlik standartları gözetildi ve modern bir kentsel dönüşüm alanı oluşturuldu.",
    image: "/images/projects/kirmizi/KIRMIZI1.jpeg",
    images: [
      "/images/projects/kirmizi/KIRMIZI1.jpeg",
      "/images/projects/kirmizi/KIRMIZI2.jpeg",
    ],
  },
];
