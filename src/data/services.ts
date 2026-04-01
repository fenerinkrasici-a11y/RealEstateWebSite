export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  image: string;
  features: { title: string; description: string }[];
}

export const services: Service[] = [

  {
    slug: "kentsel-donusum",
    title: "Kentsel Dönüşüm Uygulamaları",
    shortTitle: "Kentsel Dönüşüm",
    subtitle: "Depreme Dayanıklı, Güvenli ve Modern Yaşam Alanları",
    description:
      "Kendi evinizi, binanızı veya sitenizi başka bir bölgeye taşınma korkusu yaşamadan, talebiniz doğrultusunda kentsel dönüşüm kanunu kapsamında yeniliyoruz. Yaşanabilir, güvenli ve modern yaşam alanları oluşturuyoruz.",

    image: "/images/services/kentsel-donusum.jpg",

    features: [
      {
        title: "Depreme Dayanıklı Yapılar",
        description:
          "Modern mühendislik teknikleri kullanılarak depreme dayanıklı ve güvenli yapılar inşa ediyoruz.",
      },
      {
        title: "Modern Mimari Tasarım",
        description:
          "Estetik ve fonksiyonel tasarımlar ile yaşam kalitenizi artırıyoruz.",
      },
      {
        title: "Yasal Süreç Yönetimi",
        description:
          "Kentsel dönüşüm sürecindeki tüm resmi işlemleri profesyonel şekilde takip ediyoruz.",
      },
      {
        title: "Anahtar Teslim Projeler",
        description:
          "Projelerinizi baştan sona eksiksiz şekilde tamamlayarak teslim ediyoruz.",
      },
    ],
  },


  {
    slug: "kat-karsiligi-insaat",
    title: "Kat Karşılığı İnşaat Projeleri",
    shortTitle: "Kat Karşılığı İnşaat",
    subtitle: "Arsanızı Değerlendirin, Değerinizi Artırın",
    description:
      "Arsasına inşaat yaptırmak isteyen kişiler için kat karşılığı projeler geliştiriyoruz. Arsa sahibi yeni ve değerli dairelere kavuşurken, projelerimiz karşılıklı kazanç sağlayacak şekilde planlanmaktadır.",

    image: "/images/services/kat-karsiligi.jpg",

    features: [
      {
        title: "Kazançlı Projeler",
        description:
          "Arsa sahiplerine maksimum değer sağlayacak projeler geliştiriyoruz.",
      },
      {
        title: "Şeffaf Sözleşme Süreci",
        description:
          "Tüm süreçler açık ve güvenilir sözleşmeler ile yürütülmektedir.",
      },
      {
        title: "Modern Yapılar",
        description:
          "Çağdaş mimari anlayış ile modern yaşam alanları oluşturuyoruz.",
      },
      {
        title: "Profesyonel Yönetim",
        description:
          "Projenin tüm aşamalarını uzman ekiplerimiz yönetmektedir.",
      },
    ],
  },


  {
    slug: "konut-insaati",
    title: "Konut Binaları Üretimi",
    shortTitle: "Konut Projeleri",
    subtitle: "Modern ve Konforlu Yaşam Alanları",
    description:
      "Konut projelerinde anahtar teslim çözümler sunuyoruz. Sosyal tesisler, altyapı işleri, çevre düzenlemeleri, otoparklar, elektrik ve mekanik sistemler dahil tüm detayları profesyonel şekilde planlayıp uyguluyoruz.",

    image: "/images/services/konut-projesi.jpg",

    features: [
      {
        title: "Anahtar Teslim Projeler",
        description:
          "Projelerinizi baştan sona eksiksiz şekilde tamamlıyoruz.",
      },
      {
        title: "Sosyal Alanlar",
        description:
          "Modern yaşam alanları için sosyal tesisler ve ortak alanlar oluşturuyoruz.",
      },
      {
        title: "Altyapı Çözümleri",
        description:
          "Su, elektrik ve diğer altyapı sistemlerini güvenli şekilde kuruyoruz.",
      },
      {
        title: "Kaliteli Malzeme Kullanımı",
        description:
          "Uzun ömürlü yapılar için kaliteli ve güvenilir malzemeler kullanıyoruz.",
      },
    ],
  },


  {
    slug: "villa-yapimi",
    title: "Villa ve Müstakil Ev Yapımı",
    shortTitle: "Villa Yapımı",
    subtitle: "Size Özel Tasarlanmış Yaşam Alanları",
    description:
      "Ürettiğimiz villalar tamamen kişiye özel tasarlanmaktadır. Arsanız üzerinde hayal ettiğiniz villayı anahtar teslim şekilde, eksiksiz ve yüksek kalite standartlarında teslim ediyoruz.",

    image: "/images/services/villa.jpg",

    features: [
      {
        title: "Kişiye Özel Tasarım",
        description:
          "Villalar tamamen müşterinin taleplerine göre özel olarak tasarlanır.",
      },
      {
        title: "Modern Mimari",
        description:
          "Estetik ve fonksiyonelliği bir araya getiren modern yapılar oluşturuyoruz.",
      },
      {
        title: "Uzman Ekip",
        description:
          "Tüm süreç deneyimli mühendis ve ustalar tarafından yürütülmektedir.",
      },
      {
        title: "Kaliteli Teslimat",
        description:
          "Projeleri zamanında ve eksiksiz şekilde teslim ediyoruz.",
      },
    ],
  },

];