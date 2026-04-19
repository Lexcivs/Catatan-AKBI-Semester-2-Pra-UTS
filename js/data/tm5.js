window.AKBI_DATA.tm5 = `
<div class="page-header">
    <div class="page-badge" style="background: rgba(200,66,245,0.15); color: var(--tm5);">TM 05</div>
    <h1 class="page-title">Process Costing <span class="term-en">Weighted Average Method</span></h1>
    <p class="page-desc">Metode Rata-Rata Tertimbang &middot; Unit Ekuivalen &middot; Cost per EU &middot; Jurnal Multi-Departemen</p>
</div>

<div class="card color-tm5">
    <div class="card-title">Kapan Process Costing Digunakan? <span class="tag">DEFINISI</span></div>
    <p>Digunakan saat perusahaan memproduksi barang secara <strong>massal dan berkelanjutan</strong> (homogen), seperti pabrik mie, kilang minyak, pabrik semen. Tidak bisa melacak biaya per unit spesifik - kita hitung <em>rata-rata per unit ekuivalen</em>.</p>
    <div class="grid-2" style="margin-top:16px;">
        <div style="background:var(--bg-tertiary); padding:14px; border-radius:8px;">
            <div style="color:var(--tm5); font-weight:700; margin-bottom:6px;">Average Method - Prinsip</div>
            <ul style="margin-left:16px; font-size:13px; line-height:1.6;">
                <li>Biaya Beginning WIP <strong>digabungkan</strong> dengan biaya periode ini</li>
                <li>Semua unit dianggap "dimulai dari awal" di periode ini</li>
                <li>Lebih sederhana, tidak perlu pisahkan biaya lama vs baru</li>
                <li>EU = Transfer Out + (Ending WIP &times; %)</li>
            </ul>
        </div>
        <div style="background:var(--bg-tertiary); padding:14px; border-radius:8px;">
            <div style="color:var(--tm6); font-weight:700; margin-bottom:6px;">FIFO Method - Perbedaan</div>
            <ul style="margin-left:16px; font-size:13px; line-height:1.6;">
                <li>Biaya Beginning WIP <strong>dipisah</strong> dari biaya periode ini</li>
                <li>BWIP diselesaikan dulu, baru unit baru diproses</li>
                <li>Lebih akurat, tapi lebih kompleks</li>
                <li>EU = Sisa BWIP + S&amp;C + (Ending &times; %)</li>
            </ul>
        </div>
    </div>
</div>

<div class="card color-tm5">
    <div class="card-title">4 Langkah Process Costing Average <span class="tag">LANGKAH UTAMA</span></div>
    <div class="formula-box">
        <div class="formula-label">LANGKAH 1 - Skedul Kuantitas (Quantity Schedule)</div>
        <div class="formula-main">Beg. WIP + Units Started = Transfer Out + Ending WIP</div>
        <div class="formula-note">Jika ada nilai yang belum diketahui (???), cari terlebih dahulu dari persamaan ini!</div>
    </div>
    <div class="formula-box">
        <div class="formula-label">LANGKAH 2 - EU Average Method</div>
        <div class="formula-main">EU = Transfer Out + (Ending WIP &times; % selesai)</div>
        <div class="formula-note">Hitung TERPISAH untuk setiap elemen biaya (BBL, TKL, FOH, TI). Setiap elemen bisa punya % selesai berbeda!</div>
    </div>
    <div class="formula-box">
        <div class="formula-label">LANGKAH 3 - Cost/EU Average (KUNCI!)</div>
        <div class="formula-main">Cost/EU = (Beg. WIP Cost + Cost Added This Period) / EU</div>
        <div class="formula-note">KUNCI AVERAGE: Biaya awal DIGABUNG dengan biaya periode ini di pembilang (numerator)!</div>
    </div>
    <div class="formula-box">
        <div class="formula-label">LANGKAH 4 - Alokasi Biaya (Cost Accounted For)</div>
        <div class="formula-main">Biaya Transfer Out = Transfer Out &times; Total Cost/EU</div>
        <div class="formula-main">Biaya Ending WIP = Jumlah (EU per elemen &times; Cost/EU per elemen)</div>
        <div class="formula-note">Cek: Biaya Transfer + Biaya Ending WIP = Total Biaya Tersedia</div>
    </div>
</div>

<div class="card color-tm5">
    <div class="card-title">Contoh Soal - PT. Alexandra Daddario (1 Elemen Biaya) <span class="tag">SOAL UTS KLASIK</span></div>
    <div class="worked-example">
        <div class="we-label">DATA SOAL</div>
        <div class="we-problem">Beg.WIP=250; Added=1.250; Transfer Out=1.000; End.WIP=??? (50% selesai). Biaya Awal=Rp1.000.000; Biaya Ditambahkan=Rp6.500.000</div>
        <div class="we-step"><strong>Step 1 - Skedul Kuantitas:</strong> 250+1.250=1.500 &rarr; 1.000+X=1.500 &rarr; Ending WIP=<strong>500 unit</strong></div>
        <div class="we-step"><strong>Step 2 - EU (Average):</strong> 1.000 + (500&times;50%) = 1.000+250 = <strong>1.250 EU</strong></div>
        <div class="we-step"><strong>Step 3 - Cost/EU (Average):</strong> (1.000.000+6.500.000)/1.250 = 7.500.000/1.250 = <strong>Rp6.000/unit</strong></div>
        <div class="we-step"><strong>Step 4a - Biaya Transfer Out:</strong> 1.000&times;6.000 = <strong>Rp6.000.000</strong></div>
        <div class="we-step"><strong>Step 4b - Biaya Ending WIP:</strong> (500&times;50%)&times;6.000 = 250&times;6.000 = <strong>Rp1.500.000</strong></div>
        <div class="we-result">Cek: 6.000.000+1.500.000=7.500.000 = 1.000.000+6.500.000 SEIMBANG</div>
    </div>
</div>

<div class="card color-tm5">
    <div class="card-title">Contoh Soal - PT. Alicia Vikander (BBL &amp; Konversi) <span class="tag">SERING KELUAR!</span></div>
    <div class="worked-example">
        <div class="we-label">DATA SOAL</div>
        <div class="we-problem">Beg.WIP=200; Added=1.800; Transfer=1.500; End.WIP=500 (BBL 80%, Konversi 60%). BBL: Beg=60.000 + Added=130.000. Konversi: Beg=44.000 + Added=100.000</div>
        <div class="we-step">Cek kuantitas: 200+1.800=2.000 = 1.500+500 OK</div>
        <div class="we-step"><strong>EU BBL:</strong> 1.500+(500&times;80%)=1.500+400=<strong>1.900</strong> | <strong>EU Konversi:</strong> 1.500+(500&times;60%)=1.500+300=<strong>1.800</strong></div>
        <div class="we-step"><strong>Cost/EU BBL:</strong> (60.000+130.000)/1.900 = 190.000/1.900 = <strong>Rp100/unit</strong></div>
        <div class="we-step"><strong>Cost/EU Konversi:</strong> (44.000+100.000)/1.800 = 144.000/1.800 = <strong>Rp80/unit</strong></div>
        <div class="we-step"><strong>Biaya Transfer Out:</strong> 1.500&times;(100+80)=1.500&times;180 = <strong>270.000</strong></div>
        <div class="we-step"><strong>Ending WIP:</strong> BBL=400&times;100=40.000 | Konversi=300&times;80=24.000 &rarr; Total=<strong>64.000</strong></div>
        <div class="we-result">Cek: 270.000+64.000=334.000 = 190.000+144.000 SEIMBANG</div>
    </div>
</div>

<div class="card color-tm5">
    <div class="card-title">Aturan Transferred-In Cost (TI) <span class="tag">PENTING</span></div>
    <div class="callout warning">
        <div class="callout-title">&#x26A1; Aturan Transferred-In Cost</div>
        1. TI cost diperlakukan sebagai elemen biaya TERSENDIRI (bukan BBL, TKL, atau FOH)<br>
        2. % selesai TI cost = <strong>selalu 100%</strong> (karena unit sudah selesai di dept. sebelumnya)<br>
        3. EU(TI) = Transfer Out + (Ending WIP &times; <strong>100%</strong>)<br>
        4. Cost/EU(TI) Average = (TI Cost Beg.WIP + TI Cost Added) / EU(TI)<br>
        5. Biaya Ending WIP untuk TI = Ending WIP &times; 100% &times; Cost/EU(TI)
    </div>
</div>

<div class="card color-tm5">
    <div class="card-title">Jurnal Umum - Process Costing Multi-Departemen <span class="tag">JURNAL</span></div>
    <p>Contoh: PT. Tekstil Jaya - Dept. Cutting &amp; Dept. Assembly</p>
    <div class="table-container">
        <table>
            <tr><th>Keterangan</th><th>Debit</th><th>Kredit</th></tr>
            <tr><td colspan="3" style="background:var(--bg-tertiary); font-weight:700;">(1) Biaya dibebankan ke Dept. Cutting</td></tr>
            <tr><td style="padding-left:24px;">WIP - Cutting Department</td><td>$41.600</td><td></td></tr>
            <tr><td style="padding-left:36px;">Materials Inventory (BBL)</td><td></td><td>$20.000</td></tr>
            <tr><td style="padding-left:36px;">Payroll Payable (TKL)</td><td></td><td>$12.600</td></tr>
            <tr><td style="padding-left:36px;">Factory Overhead Applied (FOH)</td><td></td><td>$9.000</td></tr>
            <tr><td colspan="3" style="background:var(--bg-tertiary); font-weight:700;">(2) Biaya dibebankan ke Dept. Assembly</td></tr>
            <tr><td style="padding-left:24px;">WIP - Assembly Department</td><td>$23.000</td><td></td></tr>
            <tr><td style="padding-left:36px;">Materials Inventory (BBL)</td><td></td><td>$9.000</td></tr>
            <tr><td style="padding-left:36px;">Payroll Payable (TKL)</td><td></td><td>$8.400</td></tr>
            <tr><td style="padding-left:36px;">Factory Overhead Applied (FOH)</td><td></td><td>$5.600</td></tr>
            <tr><td colspan="3" style="background:var(--bg-tertiary); font-weight:700;">(3) Transfer dari Cutting ke Assembly</td></tr>
            <tr><td style="padding-left:24px;">WIP - Assembly Department</td><td>$35.200</td><td></td></tr>
            <tr><td style="padding-left:36px;">WIP - Cutting Department</td><td></td><td>$35.200</td></tr>
            <tr><td colspan="3" style="background:var(--bg-tertiary); font-weight:700;">(4) Transfer dari Assembly ke Finished Goods</td></tr>
            <tr><td style="padding-left:24px;">Finished Goods Inventory</td><td>$45.600</td><td></td></tr>
            <tr><td style="padding-left:36px;">WIP - Assembly Department</td><td></td><td>$45.600</td></tr>
        </table>
    </div>
    <div class="callout warning" style="margin-top:12px;">
        <div class="callout-title">&#x26A1; Pola Jurnal Process Costing</div>
        &bull; Biaya produksi &rarr; Dr. WIP Dept. yang bersangkutan<br>
        &bull; Transfer antar dept. &rarr; Dr. WIP Dept. tujuan | Cr. WIP Dept. asal<br>
        &bull; Produk selesai &rarr; Dr. Finished Goods | Cr. WIP dept. terakhir
    </div>
</div>
`;