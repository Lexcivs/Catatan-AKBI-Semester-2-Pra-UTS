window.AKBI_DATA.tm2 = `
<div class="page-header">
    <div class="page-badge" style="background: rgba(66,184,245,0.15); color: var(--tm2);">TM 02</div>
    <h1 class="page-title">Perilaku Biaya <span class="term-en">Cost Behavior</span></h1>
    <p class="page-desc">Fixed &middot; Variable &middot; Mixed &middot; High-Low Method &middot; Least Squares</p>
</div>

<div class="card color-tm2">
    <div class="card-title">3 Jenis Perilaku Biaya <span class="tag">KONSEP DASAR</span></div>
    <div class="table-container">
        <table>
            <tr><th>Jenis</th><th>Per Unit</th><th>Total</th><th>Contoh</th></tr>
            <tr>
                <td><strong>Biaya Tetap</strong> <span class="term-en">Fixed Cost</span></td>
                <td><span class="hl-red">Berubah</span> (turun jika produksi naik)</td>
                <td><span class="hl-green">Tetap</span></td>
                <td>Sewa gedung, asuransi kebakaran, gaji manajer</td>
            </tr>
            <tr>
                <td><strong>Biaya Variabel</strong> <span class="term-en">Variable Cost</span></td>
                <td><span class="hl-green">Tetap</span></td>
                <td><span class="hl-red">Berubah</span> (naik seiring produksi)</td>
                <td>BBL (kain, tepung), bahan baku</td>
            </tr>
            <tr>
                <td><strong>Biaya Campuran</strong> <span class="term-en">Mixed Cost</span></td>
                <td>Campuran</td>
                <td>Campuran</td>
                <td>Tagihan listrik (ada biaya tetap + pemakaian)</td>
            </tr>
        </table>
    </div>
    <div class="callout warning" style="margin-top:12px;">
        <div class="callout-title">&#x26A1; Pernyataan yang BENAR tentang perilaku biaya</div>
        OK "Dalam jangka panjang, semua biaya bersifat <strong>variabel</strong>" - BENAR<br>
        X "Biaya tetap secara per unit juga memiliki sifat yang tetap" - SALAH (per unit berubah!)<br>
        X "Biaya variabel per unit akan menurun seiring peningkatan produksi" - SALAH (tetap per unit)
    </div>
</div>

<div class="card color-tm2">
    <div class="card-title">BBL memiliki Perilaku... <span class="tag">KEY ANSWER</span></div>
    <p>Bahan baku langsung memiliki perilaku: <span class="hl">Variabel per unitnya DAN variabel secara total</span></p>
    <p>Karena setiap unit produk butuh jumlah bahan baku yang sama (tetap per unit), dan total bahan baku berubah sesuai jumlah produksi.</p>
    <div class="callout warning">
        <div class="callout-title">&#x26A0;&#xFE0F; Perhatikan!</div>
        Jawaban yang benar: <strong>"Variabel perunitnya dan juga variabel secara total"</strong><br>
        BBL = variabel, artinya <strong>total biaya naik</strong> seiring produksi naik.
    </div>
</div>

<div class="card color-tm2">
    <div class="card-title">Contoh Soal Kategori Biaya - Produksi Sarung <span class="tag">CONTOH UTS</span></div>
    <div class="table-container">
        <table>
            <tr><th>Biaya</th><th>Kategori</th><th>Alasan</th></tr>
            <tr><td>Penggunaan kain</td><td><span class="hl-green">Biaya Variabel</span></td><td>Semakin banyak sarung dibuat, semakin banyak kain terpakai</td></tr>
            <tr><td>Biaya asuransi kebakaran gedung</td><td><span class="hl">Biaya Tetap</span></td><td>Preminya tetap tidak tergantung produksi</td></tr>
            <tr><td>Biaya sewa mesin</td><td><span class="hl">Biaya Tetap</span></td><td>Sewa per bulan tetap, tidak peduli mesin dipakai berapa jam</td></tr>
            <tr><td>Biaya tagihan listrik (non-voucher)</td><td><span class="hl-blue">Biaya Campuran</span></td><td>Ada biaya dasar (tetap) + komponen pemakaian (variabel)</td></tr>
        </table>
    </div>
    <div class="callout warning" style="margin-top:12px;">
        <div class="callout-title">&#x26A1; Jawaban Benar Soal Ini</div>
        <strong>a. Biaya variabel; biaya tetap; biaya tetap; biaya campuran</strong> &larr; BENAR
    </div>
</div>

<div class="card color-tm2">
    <div class="card-title">Fungsi Pengendalian Biaya <span class="tag">FUNGSI</span></div>
    <p>"Menganalisis kos yang sudah terjadi dalam rangka menentukan penyebab timbulnya kos" adalah fungsi...</p>
    <p>Jawaban: <span class="hl">CONTROLLING (Pengendalian)</span></p>
    <ul style="margin-left:20px; font-size:13px; margin-top:8px; line-height:1.8;">
        <li><strong>Planning</strong> = merencanakan biaya yang akan terjadi di masa depan</li>
        <li><strong>Actuating</strong> = menggerakkan/melaksanakan rencana</li>
        <li><strong>Controlling</strong> = <span class="hl">menganalisis biaya yang sudah terjadi</span>, menemukan penyebab penyimpangan</li>
        <li><strong>Decision Making</strong> = memilih alternatif terbaik</li>
    </ul>
</div>

<div class="card color-tm2">
    <div class="card-title">Metode Titik Tertinggi-Terendah <span class="term-en">High-Low Method</span> <span class="tag">METODE</span></div>
    <div class="formula-box">
        <div class="formula-label">RUMUS HIGH-LOW</div>
        <div class="formula-main" style="margin-bottom:8px;">VC per unit (b) = (Biaya Tertinggi &minus; Biaya Terendah) / (Unit Tertinggi &minus; Unit Terendah)</div>
        <div class="formula-main" style="margin-bottom:8px;">Total FC (a) = Total Cost &minus; (VC per unit &times; Unit)</div>
        <div class="formula-main">Persamaan Biaya: TC = a + bX</div>
    </div>
    <div class="worked-example" style="margin-top:16px;">
        <div class="we-label">CONTOH SOAL - PT. SCODELARIO (SERING KELUAR!)</div>
        <div class="we-problem">Bulan Januari: 1.600 unit, Total Cost Rp9.650. Bulan Februari: 1.900 unit, Total Cost Rp11.225. Tentukan persamaan biaya!</div>
        <div class="we-step">(1) VC/unit = (11.225 &minus; 9.650) / (1.900 &minus; 1.600) = 1.575 / 300 = <strong>Rp5,25/unit</strong></div>
        <div class="we-step">(2) VC Total (di unit terendah) = 5,25 &times; 1.600 = Rp8.400</div>
        <div class="we-step">(3) FC = TC &minus; VC = 9.650 &minus; 8.400 = <strong>Rp1.250</strong></div>
        <div class="we-result">JAWABAN: TC = 1.250 + 5,25Q</div>
    </div>
    <div class="worked-example" style="margin-top:12px;">
        <div class="we-label">CONTOH SOAL - SALMAN INC.</div>
        <div class="we-problem">Maret: 200 unit, TC = Rp2.000. April: 600 unit, TC = Rp5.020.</div>
        <div class="we-step">(1) VC/unit = (5.020 &minus; 2.000) / (600 &minus; 200) = 3.020 / 400 = <strong>Rp7,55/unit</strong></div>
        <div class="we-step">(2) VC total (unit rendah) = 7,55 &times; 200 = Rp1.510</div>
        <div class="we-step">(3) FC = 2.000 &minus; 1.510 = <strong>Rp490</strong></div>
        <div class="we-result">JAWABAN: TC = 490 + 7,55Q</div>
    </div>
</div>

<div class="card color-tm2">
    <div class="card-title">Metode Regresi / Least Squares <span class="tag">REGRESI</span></div>
    <div class="formula-box">
        <div class="formula-label">RUMUS</div>
        <div class="formula-main">TC = a + bX</div>
        <div class="formula-note">a = Constant (fixed cost/intercept) | b = X Coefficient (variable cost/slope) | X = volume produksi</div>
    </div>
    <div class="callout" style="margin-top:12px;">
        <div class="callout-title">&#x26A1; Contoh Soal Colbie-Cailat</div>
        Constant = $47.500; X Coefficient = $450; R Squared = 0,90<br><br>
        <strong>Persamaan biaya = TC = 47.500 + 450Q</strong><br><br>
        R Squared (0,90) = goodness of fit, BUKAN dimasukkan ke persamaan!<br>
        Std. Err = ukuran kesalahan standar, BUKAN dimasukkan ke persamaan!
    </div>
    <div class="callout" style="margin-top:12px;">
        <div class="callout-title">&#x1F4A1; Analisis Output Software</div>
        Dalam UTS, Anda biasanya diberikan output regresi dari Excel atau SPSS. Fokus pada:<br><br>
        &bull; <strong>Constant / Intercept:</strong> Ini adalah Total Fixed Cost (a)<br>
        &bull; <strong>X Variable / X Coefficient:</strong> Ini adalah Variable Cost per unit (b)<br><br>
        <em>Abaikan R Square dan Standard Error saat diminta menyusun persamaan biaya!</em>
    </div>
</div>
`;