/* ==========================================================================
   AMUNGSA FOUNDATION — MAIN JAVASCRIPT & BILINGUAL ENGINE (ID / EN)
   WITH DUAL THEME CONTROLLER (DARK / LIGHT)
   ========================================================================== */

(function() {
  'use strict';

  // --------------------------------------------------------------------------
  // BILINGUAL DICTIONARY (Bahasa Indonesia & English)
  // --------------------------------------------------------------------------
  const translations = {
    id: {
      // Top Announcement Bar
      announcement_tag: 'Aksi Nyata',
      announcement_text: 'Budidaya Bioflok Lele & Nutrisi Keluarga bersama Pemuda di Prov. Papua Tengah',
      announcement_link: 'Lihat Program →',

      // Navbar
      nav_home: 'Beranda',
      nav_about: 'Tentang',
      nav_team: 'Tokoh',
      nav_program: 'Program',
      nav_partners: 'Mitra',
      nav_impact: 'Dampak',
      nav_gallery: 'Galeri',
      nav_news: 'Berita',
      nav_contact: 'Kontak',
      nav_cta: 'Kolaborasi Bersama',

      // Hero
      hero_badge: 'Gerakan Kemandirian Pangan & Generasi Emas Papua',
      hero_title_1: 'Dari Piring Sehat,',
      hero_title_2: 'Lahir Masa Depan Hebat.',
      hero_desc: 'Yayasan <strong>Amungsa Foundation</strong> hadir mendampingi masyarakat di Provinsi Papua Tengah melalui inovasi budidaya perikanan bioflok, pemenuhan gizi keluarga, pemberdayaan ekonomi pemuda, serta aksi kepedulian sosial berkelanjutan.',
      hero_btn_program: 'Jelajahi Program Kami',
      hero_btn_contact: 'Hubungi Tim Yayasan',

      // Stats Strip
      stat_pools: 'Kolam Bioflok Aktif',
      stat_beneficiaries: 'Penerima Manfaat Gizi',
      stat_youth: 'Komunitas Pemuda Mitra',
      stat_commitment: 'Komitmen untuk Papua',

      // About
      about_tag: 'Tentang Amungsa Foundation',
      about_title: 'Merajut Harapan dari Bumi Cenderawasih',
      about_quote: '"Dari Piring Sehat, Lahir Masa Depan Hebat"',
      about_sub: 'Pembudidaya & Relawan Lapangan Amungsa Foundation',
      about_badge_title: 'Kearifan Lokal & Teknologi',
      about_badge_sub: 'Bioflok ramah lingkungan di dataran Papua',
      about_body_1: 'Amungsa Foundation lahir dari kepedulian mendalam terhadap potensi sumber daya alam dan kualitas hidup anak-anak serta keluarga di Provinsi Papua Tengah.',
      about_body_2: 'Melalui payung gerakan <strong>Amungsa Cares</strong>, kami memadukan teknologi budidaya air tawar (bioflok lele) yang efisien dengan program edukasi gizi piring sehat, mendampingi para pemuda dan kelompok petani lokal untuk berdaya secara mandiri.',
      val_1_title: 'Kemandirian Pangan',
      val_1_desc: 'Membudidayakan sumber protein hewani berkualitas tinggi langsung di lingkungan warga.',
      val_2_title: 'Gizi Generasi Emas',
      val_2_desc: 'Mencegah stunting dengan memastikan piring anak-anak kaya nutrisi dan protein seimbang.',
      val_3_title: 'Kemitraan Pemuda',
      val_3_desc: 'Menggandeng organisasi pemuda lokal seperti Pemuda Muslimin Indonesia (PMI) Papua Tengah.',

      // Team / Tokoh
      team_tag: 'Tokoh Penggerak',
      team_title: 'Pelaku di Balik Amungsa Foundation',
      team_subtitle: 'Mengenal inisiator, dewan pembina, dan para pejuang lapangan yang mendedikasikan tenaga serta visi untuk kemandirian masyarakat Papua Tengah.',
      team_1_tag: 'Ketua Yayasan',
      team_1_role: 'Ketua Yayasan &middot; Ketua IDI Mimika',
      team_1_bio: 'Dokter dan akademisi biomedis putri asli suku Amungme. Ketua IDI Mimika (2025–2028) dan peneliti kesehatan masyarakat yang mendedikasikan ilmunya untuk intervensi gizi protein anak dan pencegahan stunting di Papua Tengah.',
      team_1_badge: '"Katalisator Pembangunan & Gizi Papua"',
      team_2_tag: 'Sekretaris',
      team_2_role: 'Sekretaris Yayasan &middot; Sutradara Dokumenter',
      team_2_bio: 'Sineas peraih Best Short Documentary Eagle Awards (*Mama Amamapare*). Mengawal manajemen kemitraan yayasan bersama PMI, pemerintah daerah, dan kelompok masyarakat untuk menyukseskan program pembangunan daerah.',
      team_2_badge: '"Sinergi Nyata Mengawal Pembangunan"',
      team_3_tag: 'Dewan Pembina',
      team_3_role: 'Inisiator & Pembina Yayasan',
      team_3_bio: 'Tokoh inisiator pemuda Papua (eks Koordinator Bidang Pendidikan & Kesehatan Papua Muda Inspiratif Mimika). Mengadvokasi pemberdayaan potensi pemuda dan kekuatan sumber daya lokal agar mandiri secara ekonomi.',
      team_3_badge: '"Mengoptimalkan Kekuatan Sumber Daya Lokal"',
      team_4_tag: 'Mitra Pembudidaya',
      team_4_role: 'Ketua Kelompok Perikanan Bina Utama Maju',
      team_4_bio: 'Praktisi pembudidaya ikan air tawar di SP3 Mimika sejak 2015. Memimpin 10 petani kolam lele, patin, nila, dan gurame, serta aktif memperjuangkan akses komoditas petani lokal ke rantai pasok perusahaan besar di Mimika.',
      team_4_badge: '"Pemberdayaan Nyata Petani Kolam Lokal"',
      team_5_tag: 'Mitra Advokasi',
      team_5_role: 'Ketua PW PMI Provinsi Papua Tengah',
      team_5_bio: 'Tokoh pemuda yang turun langsung mengawal aspirasi petani kolam lokal dan mengadvokasi regulasi penyerapan komoditas lokal oleh industri dan perusahaan besar ke meja legislatif DPRK Mimika.',
      team_5_badge: '"Membawa Aspirasi Petani ke Meja Dewan"',

      // Programs
      program_tag: 'Program Unggulan',
      program_title: 'Inisiatif Nyata Membangun Masa Depan',
      program_subtitle: 'Empat pilar program terpadu untuk mendorong kesejahteraan, kesehatan nutrisi, dan ketrampilan masyarakat Papua Tengah.',
      prog_1_pill: 'Pilar Pangan',
      prog_1_title: 'Budidaya Perikanan Bioflok Lele',
      prog_1_desc: 'Pemanfaatan teknologi kolam terpal bulat bioflok yang hemat air, efisien pakan, dan menghasilkan panen lele kaya protein untuk konsumsi keluarga serta bernilai ekonomi tinggi.',
      prog_1_point_1: 'Instalasi kolam terpal bioflok terstandar',
      prog_1_point_2: 'Pemberian bibit unggul & pendampingan pakan',
      prog_1_point_3: 'Pelatihan teknis pemeliharaan & sirkulasi air',
      prog_2_pill: 'Pilar Kesehatan',
      prog_2_title: 'Gerakan Piring Sehat Papua',
      prog_2_desc: 'Kampanye pemenuhan gizi seimbang dengan slogan <em>"Dari Piring Sehat, Lahir Masa Depan Hebat"</em> untuk mencegah stunting dan meningkatkan tumbuh kembang anak-anak Papua.',
      prog_2_point_1: 'Penyediaan olahan ikan segar untuk balita',
      prog_2_point_2: 'Edukasi gizi bagi ibu dan keluarga',
      prog_2_point_3: 'Pengukuran tumbuh kembang rutin di komunitas',
      prog_3_pill: 'Pilar Vokasi',
      prog_3_title: 'Kemitraan Pemuda & Vokasi',
      prog_3_desc: 'Kolaborasi aktif bersama organisasi pemuda (seperti Pemuda Muslimin Indonesia - PMI Papua Tengah) dalam mencetak wirausaha muda di sektor perikanan dan agrikultur.',
      prog_3_point_1: 'Pelatihan kewirausahaan budidaya air tawar',
      prog_3_point_2: 'Penyaluran sarana produksi perikanan',
      prog_3_point_3: 'Jejaring pemasaran hasil panen kelompok',
      prog_4_pill: 'Pilar Sosial',
      prog_4_title: 'Amungsa Cares Peduli',
      prog_4_desc: 'Aksi tanggap sosial kemanusiaan, bantuan logistik masyarakat pelosok, dan pendampingan kesejahteraan sosial bagi keluarga rentan di pedalaman Papua Tengah.',
      prog_4_point_1: 'Bantuan paket sembako & nutrisi keluarga',
      prog_4_point_2: 'Dukungan perlengkapan sekolah anak-anak',
      prog_4_point_3: 'Tanggap darurat bencana dan krisis sosial',

      // Impact
      impact_tag: 'Dampak Nyata',
      impact_title: 'Bersama Menghadirkan Perubahan Berkelanjutan',
      impact_desc: 'Setiap kolam yang terbangun dan setiap porsi makanan bergizi yang disajikan adalah langkah nyata menuju generasi Papua yang sehat, tangguh, dan berdaya saing.',
      stat_name_1: 'Titik Kolam Bioflok',
      stat_sub_1: 'Tersebar di kelompok binaan pemuda & warga',
      stat_name_2: 'Bibit Lele Unggul',
      stat_sub_2: 'Telah ditebar dan dipanen bersama',
      stat_name_3: 'Penerima Asupan Nutrisi',
      stat_sub_3: 'Anak dan keluarga mendapatkan manfaat gizi',
      stat_name_4: 'Mitra Strategis',
      stat_sub_4: 'Organisasi kemasyarakatan & komunitas lokal',

      // Partners
      partners_tag: 'Kolaborasi Strategis',
      partners_title: 'Mitra Kerja Sama Kami',
      partners_subtitle: 'Sinergi berkelanjutan bersama lembaga pemerintah, media partner Galeri Papua, dan organisasi masyarakat dalam mendorong kemajuan Papua Tengah.',
      partner_1_cat: 'Pemerintah Daerah',
      partner_1_title: 'Pemerintah Provinsi Papua Tengah',
      partner_1_desc: 'Sinergi bersama instansi pemerintahan tingkat provinsi dan kabupaten (Dinas Kelautan & Perikanan, Dinas Koperasi & UMKM, Dinas Sosial) dalam sinkronisasi program ketahanan pangan daerah, bimbingan teknis budidaya perikanan darat, serta akselerasi pencegahan stunting anak.',
      partner_1_bullet_1: 'Dukungan regulasi & fasilitasi bimbingan teknis kelompok tani perikanan',
      partner_1_bullet_2: 'Sinergi program penanganan gizi spesifik keluarga rentan',
      partner_1_bullet_3: 'Pemberdayaan ekonomi mikro keluarga pembudidaya lokal',
      partner_2_cat: 'Media Partner Resmi',
      partner_2_title: 'Galeri Papua (Media Galeri Papua)',
      partner_2_desc: 'Media publikasi dan dokumentasi visual terpercaya yang setia mengangkat keindahan alam, budaya, karya anak bangsa, dan geliat pembangunan di Tanah Papua. Galeri Papua berperan sebagai mitra publikasi warta kegiatan lapangan, rilis berita resmi, serta kampanye edukasi gizi ke khalayak luas.',
      partner_2_bullet_1: 'Peliputan dokumentasi visual profesional kegiatan bioflok & panen',
      partner_2_bullet_2: 'Publikasi warta inspiratif & testimoni pembudidaya lele',
      partner_2_bullet_3: 'Kampanye digital gerakan "Dari Piring Sehat, Lahir Masa Depan Hebat"',
      partner_2_badge: '📰 Media Partner Resmi Publikasi Papua',
      partner_3_cat: 'Organisasi Kepemudaan',
      partner_3_title: 'Pemuda Muslimin Indonesia (PMI) Papua Tengah',
      partner_3_desc: 'Mitra aksi lapangan yang menggerakkan pemuda milenial di Papua Tengah untuk aktif berwirausaha mandiri di sektor perikanan air tawar, gotong royong instalasi kolam bioflok, serta advokasi kebijakan pasar komoditas petani ke DPRK Mimika.',
      partner_3_bullet_1: 'Pemberdayaan pemuda pembudidaya lele mandiri',
      partner_3_bullet_2: 'Advokasi kebijakan pasar komoditas petani ke DPRK Mimika',
      partner_3_bullet_3: 'Gotong royong bakti kemanusiaan Amungsa Cares',
      partner_4_cat: 'Intervensi Gizi & Kesehatan',
      partner_4_title: 'Dinas Kesehatan Kabupaten Mimika',
      partner_4_desc: 'Mitra penyerapan komoditas ikan air tawar lokal untuk pemenuhan gizi protein hewani dalam program intervensi spesifik penanganan dan pencegahan stunting pada balita dan anak-anak di Kabupaten Mimika.',
      partner_4_bullet_1: 'Penyerapan hasil panen lele segar lokal untuk program stunting',
      partner_4_bullet_2: 'Edukasi gizi piring sehat kaya nutrisi bagi keluarga',
      partner_4_bullet_3: 'Kolaborasi pemantauan tumbuh kembang anak generasi emas',
      partner_5_cat: 'Sentra Budidaya Lapangan',
      partner_5_title: 'Kelompok Perikanan Bina Utama Maju (SP3)',
      partner_5_desc: 'Kelompok pembudidaya perikanan air tawar di SP3 Mimika yang dipimpin oleh Bapak Djasiyo. Telah merintis budidaya lele, patin, gurame, dan bawal sejak 2015 serta menjadi sentra percontohan kemandirian pangan lokal.',
      partner_5_bullet_1: 'Pengembangan klaster kolam budidaya lele berstandar',
      partner_5_bullet_2: 'Penyediaan bibit dan pasokan ikan konsumsi berkualitas',
      partner_5_bullet_3: 'Kemitraan rantai pasok ke perusahaan dan pasar daerah',

      // Gallery
      gallery_tag: 'Dokumentasi Lapangan',
      gallery_title: 'Jejak Langkah di Tanah Papua Tengah',
      gallery_subtitle: 'Potret nyata kebersamaan relawan, pengurus yayasan, dan para pembudidaya lele saat beraktivitas di lapangan.',
      filter_all: 'Semua Foto',
      filter_bioflok: 'Kolam Bioflok',
      filter_panen: 'Panen Lele',
      filter_kemitraan: 'Kemitraan Pemuda',
      gal_1_tag: '🐟 Panen',
      gal_1_title: 'Panen Lele Bersama Pembudidaya',
      gal_1_desc: 'Proses sortir lele hasil kolam bioflok berkualitas tinggi di Papua Tengah.',
      gal_2_tag: '💧 Bioflok',
      gal_2_title: 'Inspeksi Kolam Air Tawar',
      gal_2_desc: 'Pengecekan aerasi oksigen dan kesehatan ekosistem air bioflok.',
      gal_3_tag: '🤝 Kemitraan',
      gal_3_title: 'Kolaborasi bersama PMI Papua Tengah',
      gal_3_desc: 'Pemberian bibit & pelatihan budidaya pemuda muslimin lokal.',
      gal_4_tag: '🐟 Panen Dinkes',
      gal_4_title: 'Panen 90 Kg Lele Program Stunting',
      gal_4_desc: 'Amungsa Foundation & PMI membantu panen lele untuk pemenuhan gizi Dinas Kesehatan Mimika.',
      gal_5_tag: '🤝 Sinergi Lapangan',
      gal_5_title: 'Sinergi Bersama Pembudidaya',
      gal_5_desc: 'Sekretaris Yayasan Febian Kakisina mendampingi langsung Bapak Djasiyo di kolam SP3.',
      gal_6_tag: '📋 Serap Aspirasi',
      gal_6_title: 'Dialog Aspirasi Pasar Bersama Petani',
      gal_6_desc: 'Mendengar langsung kebutuhan pembudidaya lokal guna didorong ke DPRK Mimika.',

      // News
      news_tag: 'Warta Yayasan',
      news_title: 'Kabar & Publikasi Terkini',
      news_subtitle: 'Liputan perkembangan program, rilis kemitraan, dan cerita inspiratif dari lapangan.',
      news_1_cat: 'LIPUTAN KHUSUS &middot; ADVOKASI',
      news_1_video_badge: 'Liputan Video YouTube',
      news_1_title: 'Ikan Lokal Mimika Butuh Akses Pasar Besar: PMI & Amungsa Foundation Siap Kawal Aspirasi Petani ke DPRK',
      news_1_desc: 'Amungsa Foundation bersama Pemuda Muslimin Indonesia (PMI) Papua Tengah meninjau Kelompok Perikanan Bina Utama Maju di SP3 Mimika dan membantu memanen 90 kg ikan lele untuk program gizi stunting Dinas Kesehatan. Yayasan mendorong pembukaan rantai pasok ke perusahaan besar di Mimika.',
      news_1_author: 'Warta Galeri Papua (Endy L.)',
      news_1_btn_yt: '▶ Tonton Video',
      news_1_btn_read: 'Baca Berita ↗',
      news_2_cat: 'GIZI SEHAT',
      news_2_title: 'Sosialisasi "Dari Piring Sehat, Lahir Masa Depan Hebat" untuk Pencegahan Stunting Anak',
      news_2_desc: 'Kampanye nutrisi berbasis konsumsi protein ikan air tawar guna memastikan asupan nutrisi optimal bagi balita dan anak-anak usia sekolah.',
      news_2_author: 'Oleh Divisi Kesehatan',
      news_read_more: 'Selengkapnya →',
      news_3_cat: 'PEMBERDAYAAN',
      news_3_title: 'Panen Raya Bioflok Tahap II: Bukti Keberhasilan Kemandirian Ekonomi Warga Binaan',
      news_3_desc: 'Hasil panen lele melimpah siap diserap pasar lokal sekaligus memenuhi ketersediaan lauk sehat bergizi bagi keluarga pembudidaya.',
      news_3_author: 'Oleh Tim Lapangan',

      // Contact & Form
      contact_tag: 'Mari Bersinergi',
      contact_title: 'Mari Bergandengan Tangan untuk Papua Tengah',
      contact_desc: 'Amungsa Foundation terbuka untuk kemitraan bersama instansi pemerintah, lembaga kemanusiaan, perusahaan, maupun relawan perorangan.',
      contact_lbl_loc: 'Wilayah Kerja & Kantor',
      contact_val_loc: 'Provinsi Papua Tengah, Indonesia',
      contact_lbl_wa: 'WhatsApp Resmi',
      contact_lbl_email: 'Surat Elektronik (Email)',
      contact_lbl_web: 'Portal Website',
      contact_follow: 'Ikuti Akun Resmi:',
      form_title: 'Kirim Pesan atau Permohonan Kerjasama',
      form_lbl_name: 'Nama Lengkap / Instansi',
      form_ph_name: 'Contoh: Budi Santoso / Komunitas Pemuda',
      form_lbl_phone: 'Nomor WhatsApp / HP',
      form_lbl_email: 'Alamat Email',
      form_lbl_topic: 'Topik Kolaborasi',
      form_opt_1: 'Kemitraan Budidaya Bioflok Lele',
      form_opt_2: 'Program Piring Sehat & Nutrisi',
      form_opt_3: 'Dukungan Donasi / Amungsa Cares',
      form_opt_4: 'Menjadi Relawan Lapangan',
      form_opt_5: 'Pertanyaan Umum Lainnya',
      form_lbl_msg: 'Pesan atau Rencana Kerjasama',
      form_ph_msg: 'Tuliskan pesan atau detail rencana kemitraan Anda...',
      btn_submit: 'Kirim Pesan Sekarang',

      // Footer
      footer_bio: 'Yayasan non-profit berdedikasi membangun ketahanan pangan, perbaikan nutrisi, dan pemberdayaan generasi emas di Provinsi Papua Tengah.',
      footer_slogan: '"Dari Piring Sehat, Lahir Masa Depan Hebat"',
      footer_title_nav: 'Navigasi Utama',
      footer_title_prog: 'Program Fokus',
      footer_title_tools: 'Alat & Media',
      footer_p1: 'Bioflok Lele Berkelanjutan',
      footer_p2: 'Gerakan Piring Sehat',
      footer_p3: 'Kemitraan Pemuda & Vokasi',
      footer_p4: 'Aksi Sosial Amungsa Cares',
      footer_t1: 'Generator Template Foto Instagram',
      footer_t2: 'Studio Editor Foto',
      footer_t3: 'Hubungi Sekretariat',
      footer_copy: '&copy; 2026 Amungsa Foundation (Amungsa Cares Papua). Seluruh Hak Cipta Dilindungi.',
      view_mode_label: 'Tampilan:',
      view_mode_desktop: '🖥️ Desktop',
      view_mode_mobile: '📱 Mobile',

      // Floating Dock & Out of Screen Drawer
      float_cta_btn: 'Kolaborasi Bersama',
      float_cta_badge: 'Mitra Baru',
      drawer_title: 'Pintu Kolaborasi Strategis',
      drawer_subtitle: 'Amungsa Foundation · Papua Tengah',
      drawer_desc: 'Kami menyambut kemitraan dengan instansi pemerintah, perusahaan BUMN/Swasta (CSR), lembaga filantropi, media publikasi, dan komunitas lokal untuk bersama mempercepat kemandirian pangan dan generasi emas Papua Tengah.',
      channel_wa_title: 'Chat Tim Sekretariat (WhatsApp)',
      channel_wa_desc: 'Respon cepat direct WhatsApp untuk inisiasi kemitraan & kunjungan',
      channel_form_title: 'Formulir Kemitraan Resmi',
      channel_form_desc: 'Kirim proposal atau permohonan kerjasama terstruktur via formulir web',
      drawer_areas_title: 'Bentuk Kolaborasi Terbuka:',
      drawer_area_1: 'Replikasi klaster budidaya bioflok lele di kampung-kampung',
      drawer_area_2: 'Penyediaan makanan piring sehat protein hewani cegah stunting',
      drawer_area_3: 'Penyaluran dana CSR perusahaan untuk vokasi pemuda Papua',
      drawer_area_4: 'Publikasi jurnalistik dan edukasi masyarakat bersama Galeri Papua',
      badge_papua_tengah: 'Papua Tengah',
      date_month_aug: 'AGU',
      contact_val_wa: '+62 812-xxxx-xxxx (Resmi)',
      drawer_loc: '📍 Nabire, Provinsi Papua Tengah',
      area_badge_bioflok: 'Bioflok',
      area_badge_nutrisi: 'Nutrisi',
      area_badge_media: 'Media'
    },

    en: {
      // Top Announcement Bar
      announcement_tag: 'Action in Motion',
      announcement_text: 'Biofloc Catfish Farming & Family Nutrition alongside Youth in Central Papua',
      announcement_link: 'Explore Programs →',

      // Navbar
      nav_home: 'Home',
      nav_about: 'About',
      nav_team: 'Leadership',
      nav_program: 'Programs',
      nav_partners: 'Partners',
      nav_impact: 'Impact',
      nav_gallery: 'Gallery',
      nav_news: 'News',
      nav_contact: 'Contact',
      nav_cta: 'Partner With Us',

      // Hero
      hero_badge: 'Food Self-Reliance & Golden Generation Movement of Papua',
      hero_title_1: 'From Healthy Plates,',
      hero_title_2: 'Rises a Brighter Future.',
      hero_desc: '<strong>Amungsa Foundation</strong> is dedicated to empowering communities across Central Papua through biofloc aquaculture innovation, family nutrition, youth economic development, and sustainable humanitarian action.',
      hero_btn_program: 'Explore Our Programs',
      hero_btn_contact: 'Contact Our Team',

      // Stats Strip
      stat_pools: 'Active Biofloc Pools',
      stat_beneficiaries: 'Nutrition Beneficiaries',
      stat_youth: 'Youth Community Partners',
      stat_commitment: 'Commitment to Papua',

      // About
      about_tag: 'About Amungsa Foundation',
      about_title: 'Weaving Hope Across the Land of Papua',
      about_quote: '"From Healthy Plates, Rises a Brighter Future"',
      about_sub: 'Aquaculturists & Field Volunteers of Amungsa Foundation',
      about_badge_title: 'Indigenous Wisdom & Technology',
      about_badge_sub: 'Eco-friendly biofloc in the Papuan highlands',
      about_body_1: 'Amungsa Foundation was founded with a profound dedication to unlocking local agricultural potential and uplifting the well-being of families across Central Papua.',
      about_body_2: 'Under our <strong>Amungsa Cares</strong> initiative, we combine efficient freshwater biofloc technology with nutritious diet campaigns, coaching youth and local farming groups to thrive self-reliantly.',
      val_1_title: 'Food Sovereignty',
      val_1_desc: 'Cultivating high-protein fresh fish directly within community neighborhoods.',
      val_2_title: 'Golden Generation Nutrition',
      val_2_desc: 'Combating stunting by ensuring children receive balanced, protein-rich diets.',
      val_3_title: 'Youth Partnerships',
      val_3_desc: 'Collaborating with youth associations like Pemuda Muslimin Indonesia (PMI) Central Papua.',

      // Team / Tokoh
      team_tag: 'Driving Forces',
      team_title: 'The People Behind Amungsa Foundation',
      team_subtitle: 'Meet the initiators, trustees, and field pioneers dedicating their passion and skills to the self-reliance of Central Papua.',
      team_1_tag: 'Foundation Head',
      team_1_role: 'Foundation Head &middot; Chairperson of IDI Mimika',
      team_1_bio: 'Biomedical physician and academic native to the Amungme tribe. Chairperson of the Indonesian Medical Association (IDI) Mimika (2025–2028) and public health researcher dedicating her expertise to child protein nutrition and stunting prevention in Central Papua.',
      team_1_badge: '"Catalyst for Papuan Growth & Nutrition"',
      team_2_tag: 'Secretary',
      team_2_role: 'Foundation Secretary &middot; Documentary Director',
      team_2_bio: 'Award-winning filmmaker (Best Short Documentary Eagle Awards for *Mama Amamapare*). Managing strategic foundation partnerships with PMI, local government, and community groups to advance regional development.',
      team_2_badge: '"Tangible Synergy for Regional Development"',
      team_3_tag: 'Board of Trustees',
      team_3_role: 'Initiator & Foundation Trustee',
      team_3_bio: 'Prominent Papuan youth initiator (former Education & Health Coordinator of Papua Muda Inspiratif Mimika). Championing youth empowerment and local resource optimization toward economic sovereignty.',
      team_3_badge: '"Optimizing the Power of Local Resources"',
      team_4_tag: 'Cultivator Partner',
      team_4_role: 'Head of Bina Utama Maju Aquaculture Group',
      team_4_bio: 'Freshwater aquaculture practitioner in SP3 Mimika since 2015. Leading 10 farmers in catfish, pangasius, tilapia, and gourami ponds, actively advocating for local farmers to supply major enterprises in Mimika.',
      team_4_badge: '"Concrete Empowerment of Local Farmers"',
      team_5_tag: 'Advocacy Partner',
      team_5_role: 'Chairperson of PW PMI Central Papua',
      team_5_bio: 'Youth leader directly escorting local farmer aspirations and championing regional procurement policies before the Mimika Regional Parliament (DPRK).',
      team_5_badge: '"Bringing Farmer Voices to Parliament"',

      // Programs
      program_tag: 'Key Programs',
      program_title: 'Action-Driven Initiatives for the Future',
      program_subtitle: 'Four integrated strategic pillars elevating community welfare, family nutrition, and vocational skills across Central Papua.',
      prog_1_pill: 'Food Pillar',
      prog_1_title: 'Biofloc Catfish Aquaculture',
      prog_1_desc: 'Deployment of round biofloc tarpaulin pools that conserve water, optimize feed efficiency, and yield nutrient-dense catfish for family food security and strong economic returns.',
      prog_1_point_1: 'Standardized biofloc tarpaulin pool installation',
      prog_1_point_2: 'Quality fingerlings supply & feed coaching',
      prog_1_point_3: 'Technical training on water circulation & flock maintenance',
      prog_2_pill: 'Health Pillar',
      prog_2_title: 'Papua Healthy Plate Movement',
      prog_2_desc: 'Balanced nutrition campaign under the slogan <em>"From Healthy Plates, Rises a Brighter Future"</em> to prevent child stunting and foster optimal growth.',
      prog_2_point_1: 'Fresh fish meal provisions for toddlers',
      prog_2_point_2: 'Nutritional workshops for mothers and families',
      prog_2_point_3: 'Routine child growth & health monitoring',
      prog_3_pill: 'Vocational Pillar',
      prog_3_title: 'Youth Partnership & Vocational Skills',
      prog_3_desc: 'Active collaboration with youth organizations (such as PMI Central Papua) in cultivating young entrepreneurs in aquaculture and agriculture.',
      prog_3_point_1: 'Aquaculture entrepreneurship training',
      prog_3_point_2: 'Distribution of fishery production facilities',
      prog_3_point_3: 'Collective harvest marketing and sales network',
      prog_4_pill: 'Social Pillar',
      prog_4_title: 'Amungsa Cares Outreach',
      prog_4_desc: 'Humanitarian relief action, logistics aid for remote villages, and social welfare mentoring for vulnerable families across the Papuan interior.',
      prog_4_point_1: 'Essential staple & family nutrition packages',
      prog_4_point_2: 'Educational supply packages for school children',
      prog_4_point_3: 'Disaster relief and emergency humanitarian response',

      // Impact
      impact_tag: 'Measurable Impact',
      impact_title: 'Creating Sustainable Transformation Together',
      impact_desc: 'Every installed biofloc pool and every nutritious meal delivered represents a concrete stride toward a healthier, more resilient generation in Papua.',
      stat_name_1: 'Biofloc Pool Units',
      stat_sub_1: 'Spread across youth & local farmer clusters',
      stat_name_2: 'Quality Fish Fingerlings',
      stat_sub_2: 'Cultivated and harvested collaboratively',
      stat_name_3: 'Nutrition Beneficiaries',
      stat_sub_3: 'Children and families receiving healthy diet support',
      stat_name_4: 'Strategic Partners',
      stat_sub_4: 'Civil organizations, government & local communities',

      // Partners
      partners_tag: 'Strategic Collaboration',
      partners_title: 'Our Valued Partners',
      partners_subtitle: 'Sustainable synergy with government authorities, Galeri Papua media partner, and community groups advancing Central Papua.',
      partner_1_cat: 'Regional Government',
      partner_1_title: 'Provincial Government of Central Papua',
      partner_1_desc: 'Synergy with provincial and district agencies (Fisheries & Marine Affairs, Cooperatives & SMEs, Social Affairs) in synchronizing regional food security, aquaculture technical assistance, and child stunting reduction.',
      partner_1_bullet_1: 'Regulatory support & technical guidance for farmer groups',
      partner_1_bullet_2: 'Synergy in specific nutritional aid for vulnerable families',
      partner_1_bullet_3: 'Micro-economic empowerment for local farming households',
      partner_2_cat: 'Official Media Partner',
      partner_2_title: 'Galeri Papua Media',
      partner_2_desc: 'Trusted visual documentation and journalistic media dedicated to highlighting Papua\'s culture, innovations, and development progress. Galeri Papua serves as our official publication partner for field stories, press releases, and nutrition advocacy.',
      partner_2_bullet_1: 'Professional visual coverage of biofloc operations & harvests',
      partner_2_bullet_2: 'Inspiring news features & local farmer testimonials',
      partner_2_bullet_3: 'Digital campaigns for "From Healthy Plates, Rises a Brighter Future"',
      partner_2_badge: '📰 Official Papuan Media Publication Partner',
      partner_3_cat: 'Youth Organization',
      partner_3_title: 'Pemuda Muslimin Indonesia (PMI) Central Papua',
      partner_3_desc: 'Field partner mobilizing youth across Central Papua for aquaculture entrepreneurship, cooperative pool setups, and farmer commodity market advocacy to the Mimika Parliament.',
      partner_3_bullet_1: 'Empowering independent youth aquaculture entrepreneurs',
      partner_3_bullet_2: 'Market policy advocacy for farmers to Mimika Parliament',
      partner_3_bullet_3: 'Voluntary collaboration for Amungsa Cares outreach',
      partner_4_cat: 'Nutrition & Health Intervention',
      partner_4_title: 'Mimika District Health Office',
      partner_4_desc: 'Off-taker partner procuring locally harvested fish to supply animal protein for specific stunting prevention and child nutrition programs in Mimika.',
      partner_4_bullet_1: 'Local fresh catfish procurement for stunting diet programs',
      partner_4_bullet_2: 'Nutritious healthy plate community education',
      partner_4_bullet_3: 'Collaborative growth monitoring for the golden generation',
      partner_5_cat: 'Field Aquaculture Center',
      partner_5_title: 'Bina Utama Maju Aquaculture Group (SP3)',
      partner_5_desc: 'Freshwater farming collective in SP3 Mimika spearheaded by Mr. Djasiyo, pioneering catfish, pangasius, gourami, and pomfret farming since 2015 as a model of local food sovereignty.',
      partner_5_bullet_1: 'Standardized biofloc catfish pond cluster development',
      partner_5_bullet_2: 'Quality fingerlings and fresh food fish supply',
      partner_5_bullet_3: 'Supply chain linkage to regional firms and public markets',

      // Gallery
      gallery_tag: 'Field Documentation',
      gallery_title: 'Footprints Across Central Papua',
      gallery_subtitle: 'Authentic moments of dedication with volunteers, foundation leaders, and local catfish farmers in the field.',
      filter_all: 'All Photos',
      filter_bioflok: 'Biofloc Pools',
      filter_panen: 'Harvesting',
      filter_kemitraan: 'Youth Partnership',
      gal_1_tag: '🐟 Harvest',
      gal_1_title: 'Catfish Harvest with Local Farmers',
      gal_1_desc: 'Sorting high-quality biofloc catfish harvest in Central Papua.',
      gal_2_tag: '💧 Biofloc',
      gal_2_title: 'Freshwater Pond Inspection',
      gal_2_desc: 'Inspecting oxygen aeration and biofloc water quality.',
      gal_3_tag: '🤝 Partnership',
      gal_3_title: 'Collaboration with PMI Central Papua',
      gal_3_desc: 'Distributing fingerlings and training local youth leaders.',
      gal_4_tag: '🐟 Health Office Harvest',
      gal_4_title: '90 Kg Harvest for Stunting Program',
      gal_4_desc: 'Amungsa Foundation & PMI harvesting catfish for Mimika Health Office nutrition support.',
      gal_5_tag: '🤝 Field Synergy',
      gal_5_title: 'Synergy with Farmers',
      gal_5_desc: 'Foundation Secretary Febian Kakisina mentoring Mr. Djasiyo at the SP3 pools.',
      gal_6_tag: '📋 Community Voices',
      gal_6_title: 'Market Dialogue with Farmers',
      gal_6_desc: 'Listening to local farmer needs to champion them before the Mimika Parliament.',

      // News
      news_tag: 'Press & Stories',
      news_title: 'Latest News & Publications',
      news_subtitle: 'Updates on community milestones, partnership announcements, and inspiring stories from the field.',
      news_1_cat: 'SPECIAL REPORT &middot; ADVOCACY',
      news_1_video_badge: 'YouTube Video Report',
      news_1_title: 'Mimika Fish Farmers Need Major Market Access: PMI & Amungsa Foundation Stand Ready to Champion Farmer Voices to Regional Parliament',
      news_1_desc: 'Amungsa Foundation alongside Pemuda Muslimin Indonesia (PMI) Central Papua visited the Bina Utama Maju aquaculture cluster in SP3 Mimika and helped harvest 90 kg of catfish for the Health Office stunting intervention, urging local companies to buy from homegrown producers.',
      news_1_author: 'Galeri Papua Report (Endy L.)',
      news_1_btn_yt: '▶ Watch Video',
      news_1_btn_read: 'Read Article ↗',
      news_2_cat: 'HEALTHY NUTRITION',
      news_2_title: 'Rollout of "From Healthy Plates, Rises a Brighter Future" to Combat Child Stunting',
      news_2_desc: 'Nutrition campaign promoting freshwater fish protein to guarantee optimal nutrition for toddlers and schoolchildren.',
      news_2_author: 'By Health Division',
      news_read_more: 'Read More →',
      news_3_cat: 'EMPOWERMENT',
      news_3_title: 'Phase II Biofloc Grand Harvest: Proving Economic Self-Reliance for Local Families',
      news_3_desc: 'Abundant catfish harvests ready for local markets while supplying nutritious, wholesome protein for farming households.',
      news_3_author: 'By Field Operations',

      // Contact & Form
      contact_tag: 'Let’s Collaborate',
      contact_title: 'Hand in Hand for Central Papua',
      contact_desc: 'Amungsa Foundation welcomes collaborations with government institutions, humanitarian agencies, corporate CSR partners, and passionate volunteers.',
      contact_lbl_loc: 'Work Region & Secretariat',
      contact_val_loc: 'Central Papua Province, Indonesia',
      contact_lbl_wa: 'Official WhatsApp',
      contact_lbl_email: 'Email Address',
      contact_lbl_web: 'Official Website',
      contact_follow: 'Follow Official Accounts:',
      form_title: 'Send a Message or Partnership Request',
      form_lbl_name: 'Full Name / Organization',
      form_ph_name: 'e.g. John Doe / Youth Organization',
      form_lbl_phone: 'WhatsApp / Phone Number',
      form_lbl_email: 'Email Address',
      form_lbl_topic: 'Collaboration Topic',
      form_opt_1: 'Biofloc Catfish Partnership',
      form_opt_2: 'Healthy Plate & Nutrition Program',
      form_opt_3: 'Donation / Amungsa Cares Support',
      form_opt_4: 'Join as Field Volunteer',
      form_opt_5: 'General Inquiries',
      form_lbl_msg: 'Message or Collaboration Plan',
      form_ph_msg: 'Write your message or partnership proposal details...',
      btn_submit: 'Send Message Now',

      // Footer
      footer_bio: 'Non-profit foundation dedicated to building food security, improving nutrition, and empowering the golden generation in Central Papua Province.',
      footer_slogan: '"From Healthy Plates, Rises a Brighter Future"',
      footer_title_nav: 'Main Navigation',
      footer_title_prog: 'Focus Programs',
      footer_title_tools: 'Tools & Media',
      footer_p1: 'Sustainable Biofloc Catfish',
      footer_p2: 'Healthy Plate Movement',
      footer_p3: 'Youth Partnership & Skills',
      footer_p4: 'Amungsa Cares Humanitarian',
      footer_t1: 'Instagram Photo Template Generator',
      footer_t2: 'Photo Studio Editor',
      footer_t3: 'Contact Secretariat',
      footer_copy: '&copy; 2026 Amungsa Foundation (Amungsa Cares Papua). All Rights Reserved.',
      view_mode_label: 'View:',
      view_mode_desktop: '🖥️ Desktop',
      view_mode_mobile: '📱 Mobile',

      // Floating Dock & Out of Screen Drawer
      float_cta_btn: 'Partner With Us',
      float_cta_badge: 'New Partner',
      drawer_title: 'Strategic Partnership Hub',
      drawer_subtitle: 'Amungsa Foundation · Central Papua',
      drawer_desc: 'We welcome collaborative partnerships with government bodies, corporate CSR programs, philanthropic foundations, media outlets, and local communities to accelerate food self-reliance and the golden generation of Papua.',
      channel_wa_title: 'Direct WhatsApp Secretariat',
      channel_wa_desc: 'Fast response via WhatsApp for partnership inquiries & field visits',
      channel_form_title: 'Official Partnership Form',
      channel_form_desc: 'Submit structured proposals or collaboration requests online',
      drawer_areas_title: 'Open Areas for Collaboration:',
      drawer_area_1: 'Replication of biofloc catfish clusters across local villages',
      drawer_area_2: 'Healthy Plate nutrition programs to prevent childhood stunting',
      drawer_area_3: 'Corporate CSR allocation for youth vocational training',
      drawer_area_4: 'Media coverage and community education in tandem with Galeri Papua',
      badge_papua_tengah: 'Central Papua',
      date_month_aug: 'AUG',
      contact_val_wa: '+62 812-xxxx-xxxx (Official)',
      drawer_loc: '📍 Nabire, Central Papua Province',
      area_badge_bioflok: 'Biofloc',
      area_badge_nutrisi: 'Nutrition',
      area_badge_media: 'Media'
    }
  };

  let currentLang = localStorage.getItem('amungsa_lang') || 'id';
  let currentTheme = localStorage.getItem('amungsa_theme') || 'dark';

  document.addEventListener('DOMContentLoaded', () => {
    initViewMode();
    initThemeToggle();
    initLanguageSwitcher();
    initNavbar();
    initMobileMenu();
    initStatsCounter();
    initGalleryFilter();
    initContactForm();
    initAnnouncement();
    init3DHeroCanvas();
    init3DCardTilt();
    initCollabDrawer();
  });

  // --------------------------------------------------------------------------
  // View Mode Engine (Default: Desktop Site, Mobile on demand)
  // --------------------------------------------------------------------------
  function initViewMode() {
    const metaViewport = document.getElementById('viewportMeta') || document.querySelector('meta[name="viewport"]');
    const btnDesktop = document.getElementById('btnViewDesktop');
    const btnMobile = document.getElementById('btnViewMobile');
    const topBtnDesktop = document.getElementById('topBtnViewDesktop');
    const topBtnMobile = document.getElementById('topBtnViewMobile');
    const drawerBtnDesktop = document.getElementById('drawerBtnViewDesktop');
    const drawerBtnMobile = document.getElementById('drawerBtnViewMobile');

    // Default to 'desktop' unless visitor explicitly selected 'mobile'
    let currentMode = 'desktop';
    try {
      const saved = localStorage.getItem('amungsa_view_mode');
      if (saved === 'mobile') {
        currentMode = 'mobile';
      }
    } catch (e) {}

    function updateButtons(mode) {
      const isDesktop = (mode === 'desktop');
      [btnDesktop, topBtnDesktop, drawerBtnDesktop].forEach(btn => {
        if (btn) btn.classList.toggle('active', isDesktop);
      });
      [btnMobile, topBtnMobile, drawerBtnMobile].forEach(btn => {
        if (btn) btn.classList.toggle('active', !isDesktop);
      });
    }

    function setViewMode(mode, save = true) {
      currentMode = mode;
      if (mode === 'mobile') {
        if (metaViewport) metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        document.documentElement.setAttribute('data-view-mode', 'mobile');
      } else {
        // Desktop Default: Fixed 1240 viewport forces mobile browsers to render full desktop site
        if (metaViewport) metaViewport.setAttribute('content', 'width=1240');
        document.documentElement.setAttribute('data-view-mode', 'desktop');
      }
      updateButtons(mode);
      if (save) {
        try {
          localStorage.setItem('amungsa_view_mode', mode);
        } catch (e) {}
      }
    }

    if (btnDesktop) btnDesktop.addEventListener('click', () => setViewMode('desktop'));
    if (btnMobile) btnMobile.addEventListener('click', () => setViewMode('mobile'));
    if (topBtnDesktop) topBtnDesktop.addEventListener('click', () => setViewMode('desktop'));
    if (topBtnMobile) topBtnMobile.addEventListener('click', () => setViewMode('mobile'));
    if (drawerBtnDesktop) drawerBtnDesktop.addEventListener('click', () => setViewMode('desktop'));
    if (drawerBtnMobile) drawerBtnMobile.addEventListener('click', () => setViewMode('mobile'));

    // Apply mode without re-saving
    setViewMode(currentMode, false);
  }

  // --------------------------------------------------------------------------
  // Theme Toggle Engine (Dark & Light Mode)
  // --------------------------------------------------------------------------
  function initThemeToggle() {
    const themeBtn = document.getElementById('themeToggleBtn');
    applyTheme(currentTheme);

    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        currentTheme = (currentTheme === 'dark') ? 'light' : 'dark';
        localStorage.setItem('amungsa_theme', currentTheme);
        applyTheme(currentTheme);
      });
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      if (theme === 'light') {
        themeBtn.classList.add('is-light');
        themeBtn.setAttribute('title', currentLang === 'en' ? 'Switch to Dark Mode' : 'Ganti ke Mode Gelap');
      } else {
        themeBtn.classList.remove('is-light');
        themeBtn.setAttribute('title', currentLang === 'en' ? 'Switch to Light Mode' : 'Ganti ke Mode Terang');
      }
    }
  }

  // --------------------------------------------------------------------------
  // Announcement Bar Dismiss
  // --------------------------------------------------------------------------
  function initAnnouncement() {
    const closeBtn = document.getElementById('closeAnnouncement');
    const bar = document.getElementById('topAnnouncement');
    if (closeBtn && bar) {
      closeBtn.addEventListener('click', () => {
        bar.style.transition = 'all 0.3s ease';
        bar.style.opacity = '0';
        bar.style.height = '0';
        bar.style.padding = '0';
        bar.style.overflow = 'hidden';
        setTimeout(() => { bar.style.display = 'none'; }, 300);
      });
    }
  }

  // --------------------------------------------------------------------------
  // Language Switcher Engine
  // --------------------------------------------------------------------------
  function initLanguageSwitcher() {
    const langBtns = document.querySelectorAll('.lang-btn');
    if (!langBtns.length) return;

    applyLanguage(currentLang);

    langBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        if (lang && (lang === 'id' || lang === 'en')) {
          currentLang = lang;
          localStorage.setItem('amungsa_lang', lang);
          applyLanguage(lang);
          // Also update theme button tooltip in selected language
          applyTheme(currentTheme);
        }
      });
    });
  }

  function applyLanguage(lang) {
    const dict = translations[lang] || translations.id;

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.dataset.lang === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // Translate input placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key] !== undefined) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Translate titles/tooltips
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.dataset.i18nTitle;
      if (dict[key] !== undefined) {
        el.setAttribute('title', dict[key]);
      }
    });
  }

  // --------------------------------------------------------------------------
  // Navbar Scroll Effect & Active Section Tracker
  // --------------------------------------------------------------------------
  function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      let currentSectionId = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSectionId = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }, { passive: true });
  }

  // --------------------------------------------------------------------------
  // Mobile Menu Toggle
  // --------------------------------------------------------------------------
  function initMobileMenu() {
    const toggleBtn = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!toggleBtn || !navMenu) return;

    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });

    document.addEventListener('click', (e) => {
      if (!toggleBtn.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('open');
      }
    });
  }

  // --------------------------------------------------------------------------
  // Animated Stats Counter
  // --------------------------------------------------------------------------
  function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    if (!statNumbers.length) return;

    let started = false;

    const animateCount = (el) => {
      const target = parseInt(el.dataset.target, 10);
      const duration = 1800;
      const stepTime = 20;
      const totalSteps = duration / stepTime;
      const increment = target / totalSteps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          el.textContent = target.toLocaleString(currentLang === 'en' ? 'en-US' : 'id-ID');
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(current).toLocaleString(currentLang === 'en' ? 'en-US' : 'id-ID');
        }
      }, stepTime);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !started) {
          started = true;
          statNumbers.forEach(numEl => animateCount(numEl));
        }
      });
    }, { threshold: 0.3 });

    const statsContainer = document.querySelector('.hero-stats');
    if (statsContainer) {
      observer.observe(statsContainer);
    }
  }

  // --------------------------------------------------------------------------
  // Gallery Tab Filtering
  // --------------------------------------------------------------------------
  function initGalleryFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (!filterBtns.length || !galleryItems.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        galleryItems.forEach(item => {
          const category = item.dataset.category;
          if (filter === 'all' || category === filter) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 50);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 250);
          }
        });
      });
    });
  }

  // --------------------------------------------------------------------------
  // Contact Form Handling
  // --------------------------------------------------------------------------
  function initContactForm() {
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');
    const btnSubmit = document.getElementById('btnSubmitForm');

    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('formName').value.trim();
      const phone = document.getElementById('formPhone').value.trim();
      const email = document.getElementById('formEmail').value.trim();
      const topic = document.getElementById('formTopic').options[document.getElementById('formTopic').selectedIndex].text;
      const message = document.getElementById('formMessage').value.trim();

      if (!name || !phone || !message) {
        alert(currentLang === 'en' ? 'Please complete all required fields before submitting.' : 'Mohon lengkapi formulir sebelum mengirim.');
        return;
      }

      btnSubmit.disabled = true;
      btnSubmit.innerHTML = `
        <svg class="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"/>
          <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"/>
        </svg>
        <span>${currentLang === 'en' ? 'Sending Message...' : 'Mengirim Pesan...'}</span>
      `;

      setTimeout(() => {
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = `
          <span>${currentLang === 'en' ? 'Send Message Now' : 'Kirim Pesan Sekarang'}</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
        `;

        feedback.className = 'form-feedback success';
        if (currentLang === 'en') {
          feedback.innerHTML = `Thank you <strong>${name}</strong>! Your message has been received by the Amungsa Foundation Secretariat. Our team will contact you via WhatsApp at <strong>${phone}</strong> shortly.`;
        } else {
          feedback.innerHTML = `Terima kasih Bapak/Ibu <strong>${name}</strong>! Pesan Anda telah diterima oleh Sekretariat Amungsa Foundation. Tim kami akan segera menghubungi Anda melalui nomor WhatsApp <strong>${phone}</strong>.`;
        }

        form.reset();
      }, 900);
    });
  }

  // --------------------------------------------------------------------------
  // Interactive 3D WebGL Hero Canvas (Three.js Aquatic/Bioflok Simulation)
  // --------------------------------------------------------------------------
  function init3DHeroCanvas() {
    const canvas = document.getElementById('webglHeroCanvas');
    if (!canvas || typeof THREE === 'undefined') return;

    const heroSection = document.getElementById('beranda');
    if (!heroSection) return;

    // Scene & Perspective Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, heroSection.clientWidth / heroSection.clientHeight, 0.1, 1000);
    camera.position.set(0, 48, 105);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const handleResize = () => {
      if (!heroSection) return;
      const width = heroSection.clientWidth;
      const height = heroSection.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    // Interactive 3D Particle Wave Mesh (Bioflok & Water currents)
    const SEPARATION = 4.2;
    const AMOUNTX = 64;
    const AMOUNTY = 44;
    const numParticles = AMOUNTX * AMOUNTY;

    const positions = new Float32Array(numParticles * 3);
    const scales = new Float32Array(numParticles);
    const colors = new Float32Array(numParticles * 3);

    const colorCyan = new THREE.Color(0x38bdf8);  // Bright cyan
    const colorBlue = new THREE.Color(0x0284c7);  // Deep oceanic blue
    const colorGold = new THREE.Color(0xf59e0b);  // Warm gold accent

    let i = 0, j = 0;
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        positions[i] = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2); // x
        positions[i + 1] = 0; // y
        positions[i + 2] = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2); // z

        scales[j] = 2.4;

        // Gradient color along depth with golden glints
        const ratio = (ix / AMOUNTX + iy / AMOUNTY) * 0.5;
        const c = (ix % 11 === 0 && iy % 9 === 0) ? colorGold : (ratio > 0.45 ? colorCyan : colorBlue);
        colors[i] = c.r;
        colors[i + 1] = c.g;
        colors[i + 2] = c.b;

        i += 3;
        j++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom circular soft glow particle texture
    const createGlowTexture = () => {
      const c = document.createElement('canvas');
      c.width = 64;
      c.height = 64;
      const ctx = c.getContext('2d');
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.35, 'rgba(56, 189, 248, 0.85)');
      gradient.addColorStop(0.8, 'rgba(2, 132, 199, 0.25)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
      const texture = new THREE.Texture(c);
      texture.needsUpdate = true;
      return texture;
    };

    const material = new THREE.PointsMaterial({
      size: 4.8,
      map: createGlowTexture(),
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(geometry, material);
    particles.rotation.x = 0.22;
    scene.add(particles);

    // Floating ambient micro-particles (Bioflok bubbles)
    const floatCount = 60;
    const floatGeo = new THREE.BufferGeometry();
    const floatPos = new Float32Array(floatCount * 3);
    for (let f = 0; f < floatCount * 3; f += 3) {
      floatPos[f] = (Math.random() - 0.5) * 220;
      floatPos[f + 1] = Math.random() * 80;
      floatPos[f + 2] = (Math.random() - 0.5) * 160;
    }
    floatGeo.setAttribute('position', new THREE.BufferAttribute(floatPos, 3));
    const floatMat = new THREE.PointsMaterial({
      size: 3.2,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending
    });
    const floatMesh = new THREE.Points(floatGeo, floatMat);
    scene.add(floatMesh);

    // Mouse Interaction Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetCameraX = 0;
    let targetCameraY = 48;

    window.addEventListener('mousemove', (e) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseX = normX * 26;
      mouseY = normY * 16;
    }, { passive: true });

    // Animation Loop
    let count = 0;

    const animate = () => {
      requestAnimationFrame(animate);

      count += 0.035;

      // Smooth camera interpolation with mouse parallax
      targetCameraX += (mouseX - targetCameraX) * 0.04;
      targetCameraY += (48 + mouseY - targetCameraY) * 0.04;
      camera.position.x = targetCameraX;
      camera.position.y = targetCameraY;
      camera.lookAt(0, 5, 0);

      // Organic fluid wave math
      const posArray = geometry.attributes.position.array;
      let idx = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          posArray[idx + 1] = (Math.sin((ix + count) * 0.3) * 7.5) +
                              (Math.sin((iy + count) * 0.5) * 7.5);
          idx += 3;
        }
      }
      geometry.attributes.position.needsUpdate = true;

      // Rotate particles slightly with mouse
      particles.rotation.y = targetCameraX * 0.003;
      particles.rotation.z = Math.sin(count * 0.2) * 0.02;

      // Slowly elevate float bubbles
      const fPos = floatGeo.attributes.position.array;
      for (let f = 1; f < floatCount * 3; f += 3) {
        fPos[f] += 0.12;
        if (fPos[f] > 90) fPos[f] = -10;
      }
      floatGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();
  }

  // --------------------------------------------------------------------------
  // Interactive 3D Card Tilt Engine (Perspective, Rotation, Depth)
  // --------------------------------------------------------------------------
  function init3DCardTilt() {
    const cards = document.querySelectorAll('.program-card, .team-card, .stat-card, .gallery-item');
    if (!cards.length) return;

    if (window.matchMedia('(hover: none)').matches) return;

    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.12s ease-out, box-shadow 0.25s ease';
      });

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -11; // Max 11 deg tilt
        const rotateY = ((x - centerX) / centerX) * 11;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(12px) scale3d(1.02, 1.02, 1.02)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transition = 'transform 0.4s cubic-bezier(0.2, 0, 0.2, 1), box-shadow 0.3s ease';
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)';
      });
    });
  }

  // --------------------------------------------------------------------------
  // Out-of-Screen Collaboration Drawer & Floating Action Dock
  // --------------------------------------------------------------------------
  function initCollabDrawer() {
    const btnOpen = document.getElementById('btnOpenCollabDrawer');
    const btnClose = document.getElementById('btnCloseCollabDrawer');
    const overlay = document.getElementById('collabDrawerOverlay');
    const drawer = document.getElementById('collabDrawer');
    const btnToContact = document.getElementById('btnDrawerToContact');

    if (!btnOpen || !overlay) return;

    const openDrawer = () => {
      overlay.classList.add('active');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
      overlay.classList.remove('active');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    btnOpen.addEventListener('click', openDrawer);

    if (btnClose) {
      btnClose.addEventListener('click', closeDrawer);
    }

    overlay.addEventListener('click', (e) => {
      if (drawer && !drawer.contains(e.target)) {
        closeDrawer();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('active')) {
        closeDrawer();
      }
    });

    if (btnToContact) {
      btnToContact.addEventListener('click', () => {
        closeDrawer();
      });
    }
  }

})();
