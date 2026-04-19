// Navigation Configuration
const navItems = [
    { id: 'home', label: 'Home / Overview', icon: '🏠' },
    { id: 'tm1', label: 'TM 1: Pengantar Akuntansi', icon: '01' },
    { id: 'tm2', label: 'TM 2: Perilaku Biaya', icon: '02' },
    { id: 'tm3', label: 'TM 3: Siklus Biaya', icon: '03' },
    { id: 'tm4', label: 'TM 4: Job Order Costing', icon: '04' },
    { id: 'tm5', label: 'TM 5: Process Costing (Avg)', icon: '05' },
    { id: 'tm6', label: 'TM 6: Process Costing (FIFO)', icon: '06' },
    { id: 'tm7', label: 'TM 7: Biaya Kualitas', icon: '07' },
    { id: 'interactive', label: '📝 Praktik Laporan', icon: '✏️' },
    { id: 'tips', label: '🎯 Tips UTS', icon: '💡' },
    { id: 'quiz', label: '🧪 Latihan Soal', icon: 'Q' }
];

const audioOverviews = {
    home: "Selamat datang di AKBI Masterclass, panduan belajar interaktif Akuntansi Biaya untuk ujian tengah semester. Materi tersedia dari Tatap Muka 1 hingga 7, mencakup klasifikasi biaya, perilaku biaya, siklus HPP, Job Order Costing, Process Costing Average dan FIFO, serta Biaya Kualitas. Gunakan menu di kiri untuk berpindah materi. Selamat belajar!",

    tm1: "Tatap Muka 1: Pengantar Akuntansi Biaya. Akuntansi biaya adalah cabang akuntansi yang berfokus pada pengumpulan, pengukuran, dan pelaporan informasi biaya untuk membantu manajemen dalam perencanaan dan pengendalian operasi perusahaan. Tujuan utamanya untuk pihak internal yaitu manajemen, bukan untuk investor atau pajak. Ada lima cara mengklasifikasikan biaya. Pertama, berdasarkan kemudahan ditelusuri ke objek, menghasilkan biaya langsung dan biaya tidak langsung. Kedua, berdasarkan fungsi, menghasilkan biaya produk dan biaya periodik. Ketiga, berdasarkan perilaku, menghasilkan biaya tetap dan biaya variabel. Keempat, berdasarkan pengambilan keputusan, menghasilkan biaya relevan dan tidak relevan. Kelima, berdasarkan hubungan produksi, yaitu Bahan Baku Langsung, Tenaga Kerja Langsung, dan Overhead Pabrik. Perusahaan manufaktur memiliki tiga akun persediaan: Persediaan Bahan Baku, Persediaan Barang Dalam Proses, dan Persediaan Barang Jadi. Dua konsep penting: Prime Cost atau Biaya Utama adalah gabungan Bahan Baku Langsung dan Tenaga Kerja Langsung. Conversion Cost atau Biaya Konversi adalah gabungan Tenaga Kerja Langsung dan Overhead Pabrik. Jebakan yang sering keluar: Gas LPG untuk pisang goreng adalah Overhead Pabrik, bukan biaya langsung, karena sulit ditelusuri per unit produk. Tiga sistem biaya: Actual Costing menggunakan semua biaya aktual untuk BBL, TKL, dan FOH. Normal Costing menggunakan tarif yang ditentukan di muka hanya untuk FOH. Standard Costing menggunakan standar untuk semua elemen biaya.",

    tm2: "Tatap Muka 2: Perilaku Biaya. Ada tiga jenis perilaku biaya. Pertama, Biaya Tetap atau Fixed Cost: total biaya tidak berubah meskipun volume produksi berubah, tetapi biaya per unit akan turun jika produksi naik. Contohnya sewa gedung dan gaji manajer. Kedua, Biaya Variabel atau Variable Cost: biaya per unit tetap, tetapi total biaya berubah seiring perubahan volume. Contohnya bahan baku langsung. Ketiga, Biaya Campuran atau Mixed Cost: memiliki komponen tetap dan komponen variabel. Contohnya tagihan listrik. Poin penting: Bahan Baku Langsung memiliki perilaku variabel per unit dan variabel secara total. Untuk memisahkan biaya campuran, digunakan Metode Titik Tertinggi-Terendah. Rumusnya: biaya variabel per unit sama dengan selisih biaya tertinggi dan terendah dibagi selisih unit tertinggi dan terendah. Kemudian biaya tetap sama dengan total biaya dikurangi biaya variabel dikali unit. Persamaan biaya: TC sama dengan a ditambah b kali X. Contoh soal PT Scodelario: Januari 1.600 unit biaya 9.650, Februari 1.900 unit biaya 11.225. Biaya variabel per unit sama dengan 1.575 dibagi 300 sama dengan 5,25 rupiah per unit. Biaya tetap sama dengan 9.650 dikurangi 8.400 sama dengan 1.250. Persamaan biaya: TC sama dengan 1.250 ditambah 5,25 Q. Untuk Metode Regresi, persamaan TC sama dengan a ditambah b kali X, di mana a adalah konstanta atau Fixed Cost dari kolom Constant, dan b adalah Variable Cost per unit dari kolom X Coefficient. Ingat: R Squared dan Standard Error tidak dimasukkan ke dalam persamaan biaya!",

    tm3: "Tatap Muka 3: Siklus Biaya dan Perhitungan Harga Pokok Penjualan. Ada empat langkah. Langkah pertama: hitung pemakaian bahan baku. Rumusnya persediaan awal bahan baku ditambah pembelian dikurangi persediaan akhir bahan baku. Langkah kedua: hitung total biaya manufaktur, yaitu pemakaian bahan baku ditambah tenaga kerja langsung ditambah overhead pabrik. Langkah ketiga: hitung kos produk selesai atau COGM, yaitu persediaan awal WIP ditambah total biaya manufaktur dikurangi persediaan akhir WIP. Langkah keempat: hitung harga pokok penjualan atau COGS, yaitu persediaan awal barang jadi ditambah COGM dikurangi persediaan akhir barang jadi. Jurnal-jurnal penting yang harus diingat: Pembelian bahan baku: debit persediaan bahan baku, kredit hutang dagang. Pemakaian bahan baku: debit WIP, kredit persediaan bahan baku. Tenaga kerja langsung: debit WIP, kredit hutang gaji. Overhead pabrik: debit WIP, kredit FOH dibebankan. Produk selesai dipindah ke gudang: debit persediaan barang jadi, kredit WIP. Penjualan: debit kas atau piutang, kredit penjualan. HPP saat penjualan: debit HPP, kredit persediaan barang jadi. Pola jurnal process costing multi-departemen: transfer antar departemen adalah debit WIP departemen tujuan dan kredit WIP departemen asal. Produk selesai ke barang jadi: debit finished goods, kredit WIP departemen terakhir.",

    tm4: "Tatap Muka 4: Job Order Costing atau Sistem Pesanan. Job Order Costing digunakan saat produk dibuat berdasarkan pesanan spesifik pelanggan dengan variasi yang luas. Cocok untuk percetakan, bengkel custom, kantor pengacara, dan rumah sakit. Berbeda dengan Process Costing yang untuk produksi massal homogen seperti pabrik mie dan kilang minyak. Status pesanan menentukan pencatatan biaya. Pesanan yang masih dalam proses dicatat sebagai WIP di neraca. Pesanan yang selesai tapi belum terjual dicatat sebagai Barang Jadi di neraca. Pesanan yang sudah terjual dicatat sebagai HPP di laporan laba rugi. Poin sangat penting: Total Biaya Manufaktur mencakup SEMUA pesanan yang diproses pada periode tersebut, termasuk yang masih WIP, sudah jadi, maupun yang sudah terjual. Contoh: Pesanan 101 senilai 4.500, pesanan 102 senilai 3.500, pesanan 103 senilai 3.000, pesanan 104 senilai 1.500. Yang selesai adalah 101, 102, dan 103. Yang terjual adalah 101 dan 102. Total biaya manufaktur adalah 12.500. Barang jadi adalah pesanan 103 senilai 3.000. HPP adalah pesanan 101 ditambah 102 senilai 8.000. WIP adalah pesanan 104 senilai 1.500. Jurnal saat pesanan selesai diproduksi: debit Finished Goods Inventory dan kredit Work In Process Inventory. Saat pesanan dijual: debit piutang kredit penjualan, dan debit HPP kredit barang jadi.",

    tm5: "Tatap Muka 5: Process Costing Metode Average atau Rata-Rata Tertimbang. Prinsip metode Average: biaya persediaan awal WIP digabungkan dengan biaya periode berjalan. Semua unit dianggap dimulai dari awal di periode ini. Ada empat langkah. Langkah satu: skedul kuantitas, pastikan balance yaitu persediaan awal WIP ditambah unit dimulai sama dengan transfer out ditambah persediaan akhir WIP. Langkah dua: hitung unit ekuivalen. Rumus Average: transfer out ditambah persediaan akhir WIP dikali persentase selesai. Hitung terpisah untuk setiap elemen biaya. Langkah tiga: hitung biaya per unit ekuivalen. Kunci Average: pembilangnya adalah biaya awal WIP ditambah biaya yang ditambahkan, dibagi unit ekuivalen. Langkah empat: alokasi biaya. Transfer out dikali total biaya per EU. Ending WIP: jumlahkan EU per elemen dikali biaya per EU per elemen. Periksa: biaya transfer ditambah biaya ending WIP harus sama dengan total biaya tersedia. Aturan Transferred-In Cost: diperlakukan sebagai elemen biaya tersendiri, persentase selesainya selalu 100 persen karena unit sudah selesai dari departemen sebelumnya. Jurnal multi-departemen: transfer antar departemen debit WIP tujuan kredit WIP asal. Transfer ke finished goods debit finished goods kredit WIP departemen terakhir.",

    tm6: "Tatap Muka 6: Process Costing Metode FIFO atau First In First Out. Perbedaan utama dengan Average: dalam FIFO, biaya persediaan awal WIP dipisahkan dari biaya periode ini. Unit dari persediaan awal diselesaikan lebih dulu sebelum unit baru diproses. Biaya per unit ekuivalen dalam FIFO hanya menggunakan biaya yang ditambahkan di periode ini saja. Rumus EU FIFO terdiri dari tiga komponen. Komponen pertama: menyelesaikan persediaan awal WIP, yaitu persediaan awal dikali satu dikurangi persentase sudah selesai. Komponen kedua: unit Started and Completed atau S&C, yaitu transfer out dikurangi persediaan awal. Komponen ketiga: persediaan akhir WIP dikali persentase selesai. Alokasi biaya Transfer Out dalam FIFO: Komponen satu yaitu biaya penyelesaian persediaan awal, terdiri dari biaya bawaan periode lalu ditambah biaya tambahan untuk menyelesaikan sisa pekerjaan. Komponen dua yaitu unit Started and Completed dikali total biaya per EU periode ini. Tentang Spoilage: Normal Spoilage tidak bisa dihindari, biayanya diserap oleh produk baik sehingga menambah biaya per unit produk baik. Abnormal Spoilage seharusnya bisa dicegah, biayanya diakui sebagai kerugian periode di laporan laba rugi. Net Spoilage Cost sama dengan Gross Spoilage dikurangi Scrap Value.",

    tm7: "Tatap Muka 7: Biaya Kualitas dan Kerugian Produksi. Ada empat kategori biaya kualitas. Pertama, Prevention Costs atau biaya pencegahan: biaya untuk mencegah terjadinya cacat, contohnya training karyawan, desain produk, dan pemeliharaan preventif mesin. Kedua, Appraisal Costs atau biaya penilaian: biaya untuk mendeteksi kualitas, contohnya inspeksi bahan baku, pengujian produk jadi, dan kalibrasi alat ukur. Ketiga, Internal Failure Costs atau biaya kegagalan internal: biaya akibat cacat yang ditemukan sebelum produk sampai ke pelanggan, contohnya rework, scrap, dan downtime. Keempat, External Failure Costs atau biaya kegagalan eksternal: biaya akibat cacat yang ditemukan setelah produk sampai ke pelanggan, ini yang paling mahal, contohnya garansi, retur produk, dan kehilangan reputasi. Jenis kerugian produksi: Spoiled Goods adalah produk cacat yang tidak bisa diperbaiki secara ekonomis. Rework adalah produk cacat yang masih bisa diperbaiki. Scrap adalah sisa bahan baku dengan nilai jual rendah. Waste adalah material yang terbuang tanpa nilai. Normal Spoilage tidak bisa dihindari meski proses efisien, biayanya diserap oleh produk baik. Abnormal Spoilage seharusnya bisa dicegah, biayanya diakui sebagai kerugian periode di laporan laba rugi. Rumus: Net Spoilage Cost sama dengan Gross Spoilage Cost dikurangi Scrap Value. Jurnal Normal Rework dibebankan ke FOH. Jurnal Abnormal Rework dicatat sebagai kerugian periode.",

    interactive: "Ini adalah modul praktik interaktif untuk menyusun Laporan Biaya Produksi. Anda dapat berlatih mengisi angka untuk metode Average dan FIFO di berbagai departemen. Tersedia juga latihan lanjutan untuk PT Lapis Bento dan PT Long Bite. Jika jawaban Anda salah, tanda bintang merah akan muncul. Jika benar, tanda centang hijau akan tampil.",

    tips: "Berikut tips dan trik untuk ujian tengah semester Akuntansi Biaya. Satu: klasifikasi biaya berdasarkan kemudahan ditelusuri adalah biaya langsung dan tidak langsung. Dua: klasifikasi berdasarkan fungsi adalah biaya produk dan biaya periodik. Tiga: Total Biaya Manufaktur mencakup SEMUA pesanan yang diproses termasuk WIP, barang jadi, dan yang sudah terjual. Empat: EU Average sama dengan Transfer Out ditambah ending WIP dikali persen. Lima: EU FIFO terdiri dari tiga komponen yaitu penyelesaian BWIP, plus unit Started and Completed, plus ending WIP dikali persen. Enam: Gas LPG adalah Overhead Pabrik bukan biaya langsung. Tujuh: Normal Spoilage diserap produk baik, Abnormal Spoilage adalah kerugian periode. Delapan: jurnal transfer produk selesai adalah debit barang jadi kredit WIP. Sembilan: R Squared dan Standard Error tidak masuk ke persamaan biaya regresi. Sepuluh: Actual Costing menggunakan semua biaya aktual untuk BBL, TKL, dan FOH.",

    quiz: "Ini adalah bagian kuis latihan. Uji pemahaman Anda dengan soal-soal pilihan ganda yang mirip dengan ujian asli. Pilih jawaban yang menurut Anda paling tepat, lalu sistem akan memberikan umpan balik langsung apakah jawaban Anda benar atau salah beserta penjelasannya. Selamat berlatih!"
};

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavigation();
    window.addEventListener('hashchange', handleRouteChange);
    
    // Initial route
    if (!window.location.hash) {
        window.location.hash = '#home';
    } else {
        handleRouteChange();
    }
});

function initNavigation() {
    const navContainer = document.getElementById('sidebar-nav');
    navContainer.innerHTML = navItems.map(item => `
        <a href="#${item.id}" class="nav-item" data-id="${item.id}">
            <div class="nav-icon">${item.icon}</div>
            ${item.label}
        </a>
    `).join('');
}

function handleRouteChange() {
    const hash = window.location.hash.substring(1) || 'home';
    
    // Update active state in sidebar
    document.querySelectorAll('.nav-item').forEach(el => {
        el.classList.toggle('active', el.dataset.id === hash);
    });

    // Render content
    const viewContainer = document.getElementById('view-container');
    
    // Stop any playing audio when changing routes
    window.speechSynthesis.cancel();
    
    // Smooth transition
    viewContainer.style.opacity = 0;
    setTimeout(() => {
        if (window.AKBI_DATA[hash]) {
            viewContainer.innerHTML = window.AKBI_DATA[hash];
            
            // Inject Audio Button
            if (audioOverviews[hash]) {
                const header = viewContainer.querySelector('.page-header');
                if (header) {
                    const audioBtn = document.createElement('button');
                    audioBtn.className = 'audio-btn';
                    audioBtn.innerHTML = '🔊 Dengarkan Ringkasan';
                    audioBtn.onclick = () => playAudio(hash, audioBtn);
                    header.appendChild(audioBtn);
                }
            }
        } else {
            viewContainer.innerHTML = `
                <div class="page-header">
                    <h1 class="page-title">Content Not Found</h1>
                    <p class="page-desc">The requested section is still under construction or does not exist.</p>
                </div>
            `;
        }
        viewContainer.style.opacity = 1;
        window.scrollTo(0, 0);
    }, 200);
}

// Interactivity Handlers (Global because content is injected dynamically)
window.toggleAcc = function(header) {
    const body = header.nextElementSibling;
    const isOpen = body.classList.contains('open');
    
    // Close all in same container
    const parent = header.closest('.card') || document.body;
    parent.querySelectorAll('.acc-body.open').forEach(b => {
        b.classList.remove('open');
        b.previousElementSibling.classList.remove('open');
    });
    
    if(!isOpen) {
        body.classList.add('open');
        header.classList.add('open');
    }
};

window.switchTab = function(btn, panelId) {
    const pillsContainer = btn.closest('.tab-pills');
    if (!pillsContainer) return;
    
    // Remove active from all pills
    pillsContainer.querySelectorAll('.tab-pill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    
    // Find all tab panels in same scope
    const scope = btn.closest('.card') || document.getElementById('view-container');
    scope.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    
    const target = document.getElementById(panelId);
    if(target) target.classList.add('active');
};

let correctCount = 0;
let answeredCount = 0;

window.answerQuiz = function(btn, result) {
    const question = btn.closest('.quiz-question');
    if(question.dataset.answered === 'true') return;
    
    question.dataset.answered = 'true';
    answeredCount++;
    
    // Disable all options
    question.querySelectorAll('.quiz-opt').forEach(opt => {
        opt.style.pointerEvents = 'none';
        opt.style.opacity = '0.6';
    });
    
    btn.classList.add(result);
    btn.style.opacity = '1';
    
    if(result === 'correct') {
        correctCount++;
    } else {
        // Find the correct one and highlight
        const correctBtn = Array.from(question.querySelectorAll('.quiz-opt')).find(b => b.onclick.toString().includes('correct'));
        if (correctBtn) {
            correctBtn.classList.add('correct');
            correctBtn.style.opacity = '1';
        }
    }
    
    // Show explanation
    const exp = question.querySelector('.quiz-explanation');
    if (exp) exp.classList.add('show');
    
    // Update score if scoreboard exists
    const scoreEl = document.getElementById('score');
    const totalEl = document.getElementById('total');
    if (scoreEl && totalEl) {
        scoreEl.textContent = correctCount;
        totalEl.textContent = answeredCount;
    }
};

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        document.getElementById('themeToggleBtn').textContent = '🌙';
    }
}

window.toggleTheme = function() {
    const isLight = document.body.classList.toggle('light-theme');
    const btn = document.getElementById('themeToggleBtn');
    if (isLight) {
        localStorage.setItem('theme', 'light');
        btn.textContent = '🌙';
    } else {
        localStorage.setItem('theme', 'dark');
        btn.textContent = '☀️';
    }
};

// Audio Overview Logic
window.playAudio = function(hashKey, btn) {
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        btn.classList.remove('playing');
        btn.innerHTML = '🔊 Dengarkan Ringkasan';
        return;
    }

    const text = audioOverviews[hashKey];
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID';
    utterance.rate = 0.95; // Slightly slower for better comprehension
    
    utterance.onstart = () => {
        btn.classList.add('playing');
        btn.innerHTML = '⏸️ Hentikan Audio';
    };
    
    utterance.onend = () => {
        btn.classList.remove('playing');
        btn.innerHTML = '🔊 Dengarkan Ringkasan';
    };
    
    utterance.onerror = () => {
        btn.classList.remove('playing');
        btn.innerHTML = '🔊 Dengarkan Ringkasan';
        alert('Gagal memutar audio. Pastikan browser Anda mendukung Text-to-Speech bahasa Indonesia.');
    };

    window.speechSynthesis.speak(utterance);
};

// Cost Report Validation Logic
window.validateReportInput = function(input) {
    const expected = parseFloat(input.getAttribute('data-ans'));
    const actual = parseFloat(input.value);
    
    // Clear previous states
    input.classList.remove('error', 'success');
    const icon = input.nextElementSibling;
    
    // If empty, do nothing or show error
    if (input.value.trim() === '') {
        if(icon) icon.style.opacity = '0';
        return;
    }
    
    if (isNaN(actual)) {
        input.classList.add('error');
        if(icon) {
            icon.textContent = '*';
            icon.style.opacity = '1';
            icon.style.color = 'var(--danger)';
        }
        return;
    }
    
    // Check match with small tolerance for float precision (e.g. 69.90)
    if (Math.abs(expected - actual) < 0.02) {
        input.classList.add('success');
        if(icon) {
            icon.textContent = '✓';
            icon.style.opacity = '1';
            icon.style.color = 'var(--success)';
        }
    } else {
        input.classList.add('error');
        if(icon) {
            icon.textContent = '*';
            icon.style.opacity = '1';
            icon.style.color = 'var(--danger)';
        }
    }
};

window.resetPractice = function(btn) {
    const panel = btn.closest('.tab-panel');
    if (!panel) return;
    
    panel.querySelectorAll('.cpr-input').forEach(input => {
        input.value = '';
        input.classList.remove('error', 'success');
        const icon = input.nextElementSibling;
        if(icon) {
            icon.textContent = '*';
            icon.style.opacity = '0';
            icon.style.color = '';
        }
    });
};
