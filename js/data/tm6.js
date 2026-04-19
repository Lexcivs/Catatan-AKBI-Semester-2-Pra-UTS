window.AKBI_DATA.tm6 = `
<div class="page-header">
    <div class="page-badge" style="background: rgba(245,131,66,0.15); color: var(--tm6);">TM 06</div>
    <h1 class="page-title">Process Costing <span class="term-en">FIFO Method</span></h1>
    <p class="page-desc">First In First Out &middot; EU 3 Komponen &middot; Alokasi Biaya &middot; Spoilage</p>
</div>

<div class="card color-tm6">
    <div class="card-title">FIFO vs Average - Perbedaan Mendasar <span class="tag">KUNCI</span></div>
    <div class="table-container">
        <table>
            <tr><th>Aspek</th><th>AVERAGE</th><th>FIFO</th></tr>
            <tr><td><strong>Perlakuan Beg. WIP Cost</strong></td><td><span class="hl">DIGABUNGKAN</span> dengan biaya periode ini</td><td><span class="hl-red">DIPISAHKAN</span> dari biaya periode ini</td></tr>
            <tr><td><strong>Prioritas Penyelesaian</strong></td><td>Tidak ada - semua di-rata-rata</td><td>Beg. WIP <span class="hl-red">diselesaikan DULU</span></td></tr>
            <tr><td><strong>Rumus EU</strong></td><td>Transfer Out + (End. &times; %)</td><td>Beg.&times;(1&minus;%) + S&amp;C + (End.&times;%)</td></tr>
            <tr><td><strong>Rumus Cost/EU</strong></td><td>(Beg.Cost + Added) / EU</td><td>Added Cost <strong>ONLY</strong> / EU FIFO</td></tr>
            <tr><td><strong>Kerumitan</strong></td><td>Lebih sederhana</td><td>Lebih kompleks, tapi lebih akurat</td></tr>
        </table>
    </div>
    <div class="callout warning" style="margin-top:12px;">
        <div class="callout-title">&#x26A0;&#xFE0F; Jebakan FIFO vs Average</div>
        Dalam FIFO, Cost/EU menggunakan <strong>hanya biaya periode ini saja</strong> (tidak termasuk biaya beginning WIP)! Biaya beginning WIP dipakai terpisah untuk menghitung biaya penyelesaian BWIP.
    </div>
</div>

<div class="card color-tm6">
    <div class="card-title">Rumus Unit Ekuivalen FIFO - 3 Komponen <span class="tag">RUMUS</span></div>
    <div class="formula-box">
        <div class="formula-label">EU FIFO = 3 KOMPONEN</div>
        <div class="formula-main">EU = [Beg.WIP &times; (1 &minus; % sudah selesai)] + [Transfer Out &minus; Beg.WIP] + [End.WIP &times; %]</div>
        <div class="formula-note">Komponen 1: Sisa pekerjaan untuk menyelesaikan BWIP | Komponen 2: Unit Started &amp; Completed (S&amp;C) | Komponen 3: Ending WIP</div>
    </div>
    <div class="grid-3" style="margin-top:14px;">
        <div style="background:var(--bg-tertiary); border:1px solid rgba(245,131,66,0.3); border-radius:6px; padding:14px;">
            <div style="color:var(--tm6); font-weight:700; margin-bottom:6px;">KOMPONEN 1</div>
            <strong>Menyelesaikan BWIP</strong>
            <p style="font-size:12px; margin-top:6px; color:var(--text-secondary);">Beg.WIP &times; (1 &minus; % sudah selesai dari periode lalu)</p>
            <p style="font-size:12px; color:var(--tm1);">Mis: BWIP=200 (40% selesai) &rarr; 200&times;60% = 120 EU</p>
        </div>
        <div style="background:var(--bg-tertiary); border:1px solid rgba(245,131,66,0.3); border-radius:6px; padding:14px;">
            <div style="color:var(--tm6); font-weight:700; margin-bottom:6px;">KOMPONEN 2</div>
            <strong>Started &amp; Completed (S&amp;C)</strong>
            <p style="font-size:12px; margin-top:6px; color:var(--text-secondary);">Unit yang MULAI dan SELESAI dalam periode ini = Transfer Out &minus; Beg.WIP</p>
            <p style="font-size:12px; color:var(--tm1);">Mis: Transfer=800, BWIP=200 &rarr; S&amp;C=600 EU</p>
        </div>
        <div style="background:var(--bg-tertiary); border:1px solid rgba(245,131,66,0.3); border-radius:6px; padding:14px;">
            <div style="color:var(--tm6); font-weight:700; margin-bottom:6px;">KOMPONEN 3</div>
            <strong>Ending WIP</strong>
            <p style="font-size:12px; margin-top:6px; color:var(--text-secondary);">Pekerjaan yang sudah dilakukan pada unit yang belum selesai</p>
            <p style="font-size:12px; color:var(--tm1);">Mis: EWIP=300 (50% selesai) &rarr; 300&times;50% = 150 EU</p>
        </div>
    </div>
    <div class="formula-box" style="margin-top:14px;">
        <div class="formula-label">CEK BALANCE FIFO</div>
        <div class="formula-main">Biaya BWIP + Added = (Completing BWIP + S&amp;C) + Ending WIP</div>
        <div class="formula-note">Atau: Total Transfer Out + Ending WIP = Total Biaya Tersedia</div>
    </div>
</div>

<div class="card color-tm6">
    <div class="card-title">Contoh Soal - PT. Seiryu (FIFO, 3 Elemen Biaya) <span class="tag">SOAL LENGKAP</span></div>
    <div class="worked-example">
        <div class="we-label">DATA SOAL</div>
        <div class="we-problem">Beg.WIP=2.500 (BBL:80%, TKL:40%, FOH:60%); Transfer-in=15.000; Transfer-out=12.500; End.WIP=5.000 (BBL:60%, TKL:20%, FOH:40%). Added: BBL=6.804.000, TKL=2.500.000, FOH=3.952.000</div>
        <div class="we-step"><strong>Step 1 - Cek Kuantitas:</strong> 2.500+15.000=17.500 = 12.500+5.000 OK</div>
        <div class="we-step">S&amp;C = Transfer Out &minus; Beg.WIP = 12.500&minus;2.500 = <strong>10.000 unit</strong></div>
        <div class="we-step"><strong>Step 2 - EU BBL (FIFO):</strong> 2.500&times;(1&minus;80%) + 10.000 + 5.000&times;60% = 500+10.000+3.000 = <strong>13.500 EU</strong></div>
        <div class="we-step"><strong>EU TKL (FIFO):</strong> 2.500&times;(1&minus;40%) + 10.000 + 5.000&times;20% = 1.500+10.000+1.000 = <strong>12.500 EU</strong></div>
        <div class="we-step"><strong>EU FOH (FIFO):</strong> 2.500&times;(1&minus;60%) + 10.000 + 5.000&times;40% = 1.000+10.000+2.000 = <strong>13.000 EU</strong></div>
        <div class="we-step"><strong>Step 3 - Cost/EU FIFO (hanya biaya periode ini!):</strong></div>
        <div class="we-step">Cost/EU BBL = 6.804.000/13.500 = <strong>Rp504/unit</strong></div>
        <div class="we-step">Cost/EU TKL = 2.500.000/12.500 = <strong>Rp200/unit</strong></div>
        <div class="we-step">Cost/EU FOH = 3.952.000/13.000 = <strong>Rp304/unit</strong></div>
        <div class="we-result">Total Cost/EU = 504+200+304 = Rp1.008/unit</div>
    </div>
</div>

<div class="card color-tm6">
    <div class="card-title">Perbandingan EU: Average vs FIFO - Data yang Sama <span class="tag">KRITIS</span></div>
    <div class="table-container">
        <table>
            <tr><th>EU Component</th><th>AVERAGE</th><th>FIFO</th><th>Perbedaan</th></tr>
            <tr><td>EU (BBL)</td><td>2.400</td><td>2.000</td><td>FIFO lebih kecil 400 (= BWIP sudah 100% BBL)</td></tr>
            <tr><td>EU (Konv)</td><td>2.100</td><td>1.900</td><td>FIFO lebih kecil 200 (= BWIP sudah 50% Konv)</td></tr>
            <tr><td>Pembilang Cost/EU</td><td>Beg + Added</td><td>Added ONLY</td><td>FIFO mengecualikan biaya periode lalu</td></tr>
            <tr><td>Alokasi Transfer Out</td><td>1 langkah sederhana</td><td>2 komponen</td><td>FIFO lebih detail</td></tr>
        </table>
    </div>
</div>

<div class="card color-tm6">
    <div class="card-title">Spoiled Goods dalam FIFO - Normal vs Abnormal <span class="tag">SPOILAGE</span></div>
    <div class="formula-box">
        <div class="formula-label">SKEDUL KUANTITAS DENGAN SPOILAGE</div>
        <div class="formula-main">Beg.WIP + Added = Transfer Out + Ending WIP + Spoiled Units</div>
    </div>
    <div class="grid-2" style="margin-top:14px;">
        <div style="background:var(--bg-tertiary); border:1px solid rgba(66,245,160,0.2); border-radius:8px; padding:16px;">
            <div style="font-weight:700; color:var(--tm4); margin-bottom:8px;">Normal Spoilage</div>
            <ul style="margin-left:16px; font-size:13px; line-height:1.6;">
                <li>Tak terhindarkan dalam kondisi efisien</li>
                <li>Biaya diserap oleh <strong>produk BAIK yang di-transfer</strong></li>
                <li>Meningkatkan cost per unit produk baik</li>
                <li>Net Cost = Gross Spoilage &minus; Scrap Value</li>
            </ul>
        </div>
        <div style="background:var(--bg-tertiary); border:1px solid rgba(245,66,100,0.2); border-radius:8px; padding:16px;">
            <div style="font-weight:700; color:var(--tm3); margin-bottom:8px;">Abnormal Spoilage</div>
            <ul style="margin-left:16px; font-size:13px; line-height:1.6;">
                <li>Bisa dicegah (kesalahan, kecelakaan)</li>
                <li>Biaya diakui sebagai <strong>rugi periode (Loss)</strong></li>
                <li>Muncul di Laporan L/R</li>
                <li>Tidak mempengaruhi cost per unit produk baik</li>
            </ul>
        </div>
    </div>
    <div class="worked-example" style="margin-top:12px;">
        <div class="we-label">CONTOH SOAL - PT. FRESH SNACK (FIFO + Spoilage)</div>
        <div class="we-problem">Beg. WIP=5.000; Added=20.000; Transfer=18.000; End. WIP=6.000; Spoiled=1.000 (normal). Scrap value = Rp2.000/unit.</div>
        <div class="we-step"><strong>Cek kuantitas:</strong> 5.000+20.000=25.000 = 18.000+6.000+1.000 OK</div>
        <div class="we-step"><strong>Scrap value:</strong> 1.000 &times; 2.000 = <strong>Rp2.000.000</strong></div>
        <div class="we-result">Karena normal spoilage &rarr; biayanya diserap oleh 18.000 unit transfer (produk baik)</div>
    </div>
</div>
`;