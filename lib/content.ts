// ============================================================
//  TETAPAN MUDAH UBAH — edit di sini sahaja
// ============================================================

/** Pautan Google Form maklum balas. Gantikan "#" dengan pautan sebenar. */
export const GOOGLE_FORM_URL: string = "https://forms.gle/kVjwFAqAR9juxqNG6";

/** Gambar kod QR "Feedback MPP 25/26" (dalam public/). Kosongkan ("") untuk sembunyikan. */
export const FEEDBACK_QR_IMAGE: string = "/images/qr-feedback.png";

export const SITE = {
  shortName: "MPP UiTMCTKKT 25/26",
  title: "Majlis Perwakilan Pelajar (MPP)",
  campus: "UiTM Cawangan Terengganu Kampus Kuala Terengganu",
  campusShort: "UiTMCTKKT",
  session: "Sesi 2025/2026",
  motto: "Meneraju Aspirasi, Membina Kecemerlangan",
  badge: "Pemakluman Rasmi & Penghargaan Pembubaran",
  date: "Jumaat, 13 November 2026",
  hijri: "3 Jamadilakhir 1448H",
};

export const NAV = [
  { href: "#kenyataan", label: "Kenyataan" },
  { href: "#pencapaian", label: "Pencapaian" },
  { href: "#legasi", label: "Legasi" },
  { href: "#galeri", label: "Galeri" },
  { href: "#maklum-balas", label: "Maklum Balas" },
];

// ------------------------------------------------------------
//  Statistik Hero
// ------------------------------------------------------------
export const MANDATE = {
  total: 1309,
  candidates: [
    { name: "Raden", votes: 655 },
    { name: "Khairi", votes: 654 },
  ],
};

// ------------------------------------------------------------
//  Kenyataan rasmi pembubaran
// ------------------------------------------------------------
export const STATEMENT = {
  greeting: "Salam UiTM Di Hatiku dan Salam Sejahtera.",
  paragraphs: [
    "Dengan penuh rasa syukur ke hadrat Ilahi, Majlis Perwakilan Pelajar (MPP) UiTM Cawangan Terengganu Kampus Kuala Terengganu Sesi 2025/2026 dengan rasminya memaklumkan bahawa tempoh perkhidmatan majlis ini telah tamat dan dibubarkan pada hari Jumaat, 13 November 2026 bersamaan 3 Jamadilakhir 1448H, selaras dengan pemakluman pihak universiti.",
    "Sepanjang tempoh mandat ini, kami telah berusaha menunaikan setiap janji yang dimeterai melalui manifesto, dan alhamdulillah, kesemuanya telah disempurnakan sepenuhnya. Pencapaian ini bukan milik kami semata-mata, tetapi hasil sokongan, teguran dan kepercayaan seluruh warga kampus.",
    "Setinggi-tinggi penghargaan kami rakamkan kepada Pengurusan Universiti, Hal Ehwal Pelajar, barisan pensyarah dan staf, kelab dan persatuan, serta seluruh mahasiswa dan mahasiswi UiTMCTKKT yang telah memberikan mandat dan bersama-sama kami sepanjang perjalanan ini.",
    "Kami memohon ampun dan maaf atas segala kekurangan dan kelemahan sepanjang tempoh kami berkhidmat. Semoga kepimpinan mahasiswa yang akan datang terus membawa suara mahasiswa dengan lebih cemerlang.",
  ],
  closing: "Demi Mahasiswa, Bersama Mahasiswa.",
  signature: [
    "MAJLIS PERWAKILAN PELAJAR",
    "KAMPUS KUALA TERENGGANU",
    "UiTM CAWANGAN TERENGGANU",
    "SESI 2025/2026",
  ],
};

// ------------------------------------------------------------
//  Pencapaian (tab)
// ------------------------------------------------------------
export type AchievementItem = {
  title: string;
  desc?: string;
  icon: string; // nama ikon lucide (lihat components/Icon.tsx)
  highlight?: boolean;
};

export type AchievementTab = {
  id: string;
  label: string;
  shortLabel: string;
  icon: string;
  tagline: string;
  items: AchievementItem[];
  footnote?: string;
};

export const ACHIEVEMENTS: AchievementTab[] = [
  {
    id: "kebajikan",
    label: "Kebajikan & Resolusi Isu Kampus",
    shortLabel: "Kebajikan",
    icon: "HeartHandshake",
    tagline: "Impak langsung kepada kehidupan harian mahasiswa.",
    items: [
      {
        title: "Pengurusan Isu Bekalan Air Kampus",
        desc: "Mempercepatkan usaha penyelesaian masalah bekalan air kampus bersama pihak berkaitan.",
        icon: "Droplets",
        highlight: true,
      },
      {
        title: "Bantuan Bencana Banjir",
        desc: "Memperjuangkan pelaksanaan kelas secara hibrid bagi mahasiswa yang terjejas.",
        icon: "CloudRain",
        highlight: true,
      },
      {
        title: "Lawatan Muhibah 1.0 & 2.0",
        desc: "Memperkukuh hubungan dan kerjasama kebajikan mahasiswa bersama pengurusan residen.",
        icon: "Handshake",
      },
      {
        title: "Isu Merit",
        desc: "Menangani dan menyelesaikan isu pemarkahan merit mahasiswa.",
        icon: "BadgeCheck",
      },
      {
        title: "MPP Care & Bantuan Makanan",
        desc: "Agihan sarapan, baucar McDonald’s dan roti Gardenia percuma kepada mahasiswa/wi.",
        icon: "Sandwich",
      },
    ],
  },
  {
    id: "infrastruktur",
    label: "Cadangan & Naik Taraf Infrastruktur",
    shortLabel: "Infrastruktur",
    icon: "Building2",
    tagline: "Projek fizikal dan fasiliti yang kekal untuk generasi seterusnya.",
    items: [
      {
        title: "Penaiktarafan / Peruntukan Dewan Kampus",
        desc: "Hasil impak permohonan dan sesi Sembang Santai bersama Menteri Pendidikan Tinggi (KPT).",
        icon: "Landmark",
        highlight: true,
      },
      {
        title: "Studio UiTMCTKKT",
        desc: "Ruang studio khas untuk pembikinan podcast, rakaman media dan aktiviti fotografi mahasiswa.",
        icon: "Mic",
        highlight: true,
      },
      {
        title: "Inisiatif Fasiliti Dobi Siswi",
        desc: "Penyediaan dan penyelarasan ruang dobi yang lebih kondusif untuk siswi.",
        icon: "WashingMachine",
      },
      {
        title: "Outdoor Gym",
        desc: "Fasiliti riadah dan sukan terbuka untuk gaya hidup sihat mahasiswa.",
        icon: "Dumbbell",
      },
      {
        title: "Mini Billboard & Board Biru Kelab",
        desc: "Ruang hebahan maklumat dan papan kenyataan khas untuk persatuan/kelab pelajar.",
        icon: "Pin",
      },
    ],
  },
  {
    id: "vvip",
    label: "Program Rasmi Berprofil Tinggi",
    shortLabel: "Program VVIP",
    icon: "Landmark",
    tagline: "Suara mahasiswa dibawa terus ke peringkat kepimpinan negara.",
    items: [
      { title: "Konvensyen Ekuiti Usahawan Bumiputera", desc: "Bersama Timbalan Perdana Menteri.", icon: "Briefcase", highlight: true },
      { title: "Sembang Santai", desc: "Bersama Menteri Pendidikan Tinggi.", icon: "MessagesSquare", highlight: true },
      { title: "Sinergi Kepimpinan", desc: "Bersama Lembaga Pengarah Universiti (UiTM).", icon: "Users" },
      { title: "Kembara Inspirasi Belia", desc: "Bersama Menteri Belia dan Sukan.", icon: "Mountain" },
      { title: "Seminar Biodiversiti Terengganu", desc: "Bersama KDYMM Sultan Terengganu.", icon: "Crown" },
    ],
    footnote: "Dan pelbagai program rasmi lain.",
  },
  {
    id: "kebudayaan",
    label: "Program Penglibatan & Kebudayaan",
    shortLabel: "Kebudayaan",
    icon: "PartyPopper",
    tagline: "Menghidupkan kampus melalui budaya, warisan dan semangat kesukarelawanan.",
    items: [
      { title: "MECFEST", icon: "Sparkles", highlight: true },
      { title: "CLUBFEST", icon: "Flag", highlight: true },
      { title: "Laluan Malam Kerawang", icon: "Moon" },
      { title: "Seminar Kenegaraan Malaysia", icon: "BookOpen" },
      { title: "Warna Warni Warisan Terengganu 2025", icon: "Palette" },
    ],
    footnote: "Serta program jemputan luar dan aktiviti mahasiswa.",
  },
];

// ------------------------------------------------------------
//  Legasi / Handover
// ------------------------------------------------------------
export const LEGACY = [
  {
    no: "01",
    title: "Group Hebahan Rasmi Mahasiswa UiTMCTKKT",
    desc: "Saluran makluman rasmi kepada seluruh mahasiswa kampus.",
    icon: "Megaphone",
  },
  {
    no: "02",
    title: "Group Non-Resident (NR)",
    desc: "Platform khas untuk mahasiswa yang tinggal di luar kampus.",
    icon: "House",
  },
  {
    no: "03",
    title: "Akaun TikTok Rasmi Kepimpinan",
    desc: "Wajah digital kepimpinan mahasiswa untuk hebahan & dokumentasi.",
    icon: "Smartphone",
  },
  {
    no: "04",
    title: "Koridor Keusahawanan",
    desc: "Pemerkasaan ruang niaga mahasiswa di Foyer Kasa & Sutera.",
    icon: "Store",
  },
];

// ------------------------------------------------------------
//  Footer
// ------------------------------------------------------------
export const THANKS = [
  "Pengurusan Universiti",
  "Barisan Pensyarah & Staf",
  "Kelab & Persatuan",
  "Seluruh Mahasiswa/wi UiTMCTKKT",
];

export const HASHTAGS = [
  "#UiTMDiHatiku",
  "#UiTMCTKKT",
  "#MPPUiTMCT",
  "#MandatMahasiswa",
  "#Manifesto100Percent",
  "#DemiMahasiswa",
  "#TerimaKasihMPP25/26",
];
