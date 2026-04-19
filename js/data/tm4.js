window.AKBI_DATA.tm4 = `
<div class="page-header">
    <div class="page-badge" style="background: rgba(66,245,160,0.15); color: var(--tm4);">TM 04</div>
    <h1 class="page-title">Job Order Costing <span class="term-en">Sistem Pesanan</span></h1>
    <p class="page-desc">Sistem Pesanan &middot; WIP &middot; Finished Goods &middot; COGS &middot; Jurnal</p>
</div>

<div class="card color-tm4">
    <div class="card-title">Karakteristik Job Order Costing <span class="tag">DEFINISI</span></div>
    <div class="grid-2">
        <div style="background:var(--bg-tertiary); padding:16px; border-radius:8px;">
            <div style="color:var(--tm4); font-weight:700; margin-bottom:8px;">Job Order Costing</div>
            <ul style="margin-left:20px; font-size:13px; line-height:1.6;">
                <li>Produksi berdasarkan <strong>pesanan spesifik pelanggan</strong>.</li>
                <li>Produk memiliki variasi yang sangat luas, tidak standar.</li>
                <li>Dokumen utama: <span class="hl-green">Job Order Cost Sheet</span>.</li>
                <li><strong>Cocok untuk:</strong> Percetakan, bengkel custom, kantor pengacara, rumah sakit.</li>
            </ul>
        </div>
        <div style="background:var(--bg-tertiary); padding:16px; border-radius:8px;">
            <div style="color:var(--tm2); font-weight:700; margin-bottom:8px;">Process Costing (Perbandingan)</div>
            <ul style="margin-left:20px; font-size:13px; line-height:1.6;">
                <li>Produksi berdasarkan <strong>proses massal dan berkelanjutan</strong>.</li>
                <li>Produk <strong>homogen (seragam)</strong> untuk lini produk yang sama.</li>
                <li>Dokumen utama: <span class="hl-blue">Cost of Production Report</span>.</li>
                <li><strong>Cocok untuk:</strong> Kilang minyak, pabrik mie, pabrik semen.</li>
            </ul>
        </div>
    </div>
    <div class="table-container" style="margin-top:16px;">
        <table>
            <tr><th>Jenis Usaha</th><th>Sistem</th><th>Alasan</th></tr>
            <tr><td>Kilang minyak</td><td><span class="hl">Process Costing</span></td><td>Proses massal, produk homogen</td></tr>
            <tr><td>Rumah sakit</td><td><span class="hl-blue">Job Order</span></td><td>Setiap pasien = pesanan unik</td></tr>
            <tr><td>Kantor pengacara</td><td><span class="hl-blue">Job Order</span></td><td>Setiap kasus = pesanan berbeda</td></tr>
            <tr><td>Pabrik mie telur</td><td><span class="hl">Process Costing</span></td><td>Produksi massal, produk seragam</td></tr>
        </table>
    </div>
    <div class="callout warning" style="margin-top:12px;">
        <div class="callout-title">&#x26A1; Jawaban Soal Sistem Biaya</div>
        (1) kilang minyak = process; (2) rumah sakit = job order; (3) kantor pengacara = job order; (4) pabrik mie = process &rarr; <strong>Jawaban: a</strong>
    </div>
</div>

<div class="card color-tm4">
    <div class="card-title">Status Pesanan &amp; Akun Terkait <span class="tag">KUNCI UTAMA</span></div>
    <div class="table-container">
        <table>
            <tr><th>Status Pesanan</th><th>Akun Terkait</th><th>Posisi Laporan</th></tr>
            <tr>
                <td>Masih dalam proses pengerjaan (belum selesai)</td>
                <td><span class="hl">Persediaan Barang Dalam Proses (WIP)</span></td>
                <td>Neraca (Aset)</td>
            </tr>
            <tr>
                <td>Sudah selesai, TAPI belum diserahkan ke pelanggan</td>
                <td><span class="hl">Persediaan Barang Jadi (FG)</span></td>
                <td>Neraca (Aset)</td>
            </tr>
            <tr>
                <td>Sudah selesai, DAN sudah diserahkan (dijual)</td>
                <td><span class="hl">Harga Pokok Penjualan (COGS)</span></td>
                <td>Laba Rugi (Beban)</td>
            </tr>
        </table>
    </div>
    <div class="callout" style="margin-top:12px;">
        <div class="callout-title">&#x26A1; Total Biaya Manufaktur = SEMUA pesanan</div>
        Jika ditanya "Berapa Total Biaya Manufaktur?", hitunglah <strong>SEMUA</strong> biaya dari <strong>SEMUA</strong> pesanan yang diproses pada periode tersebut (WIP + FG + COGS).
    </div>
</div>

<div class="card color-tm4">
    <div class="card-title">Framework Soal Job Order - Pelajari Ini! <span class="tag">CONTOH UTS</span></div>
    <div class="worked-example">
        <div class="we-label">FRAMEWORK SOAL JOB ORDER</div>
        <div class="we-problem">Pesanan 101=4.500, 102=3.500, 103=3.000, 104=1.500. Selesai: 101, 102, 103. Terjual: 101 &amp; 102.</div>
        <div class="we-step"><strong>Total Biaya Manufaktur</strong> = 101+102+103+104 = 4.500+3.500+3.000+1.500 = <strong>12.500</strong></div>
        <div class="we-step"><strong>Persediaan Barang Jadi</strong> = Selesai tapi belum terjual = 103 = <strong>3.000</strong></div>
        <div class="we-step"><strong>COGS/HPP</strong> = Sudah terjual = 101+102 = 4.500+3.500 = <strong>8.000</strong></div>
        <div class="we-step"><strong>Persediaan BDP/WIP</strong> = Belum selesai = 104 = <strong>1.500</strong></div>
        <div class="we-result">Cek: TMC = 12.500 = WIP(1.500) + FG(3.000) + COGS(8.000) SEIMBANG</div>
    </div>
</div>

<div class="card color-tm4">
    <div class="card-title">Latihan Soal Terstruktur (dari UTS) <span class="tag">LATIHAN</span></div>
    <div class="accordion">
        <div class="acc-header" onclick="toggleAcc(this)">PT. Hitagi - Total Biaya Manufaktur <div class="acc-icon">+</div></div>
        <div class="acc-body">
            <p>Pesanan 101=2.500; 102=3.500; 103=2.000; 104=1.500. Selesai: 101,102,103. Terjual: 101,102.</p>
            <p><strong>Total Biaya Manufaktur</strong> = Semua pesanan = 2.500+3.500+2.000+1.500 = <span class="hl">Rp9.500</span></p>
            <p style="color:var(--text-secondary);font-size:12px;">Catatan: Total biaya manufaktur mencakup SEMUA pesanan yang diproses, bukan hanya yang selesai atau terjual.</p>
        </div>
    </div>
    <div class="accordion">
        <div class="acc-header" onclick="toggleAcc(this)">PT. Nadeko - Persediaan Akhir Barang Jadi <div class="acc-icon">+</div></div>
        <div class="acc-body">
            <p>Pesanan 201=2.500; 202=3.000; 203=2.000; 204=1.000; 205=500. Selesai: 201,202,203. Terjual: hanya 201. WIP: 204,205.</p>
            <p><strong>Ending FG</strong> = Selesai tapi belum terjual = 202 + 203 = 3.000+2.000 = <span class="hl">Rp5.000</span></p>
        </div>
    </div>
    <div class="accordion">
        <div class="acc-header" onclick="toggleAcc(this)">PT. Koyomi - Persediaan Akhir BDP <div class="acc-icon">+</div></div>
        <div class="acc-body">
            <p>Pesanan 201=3.000; 202=3.500; 203=4.500; 204=1.500; 205=1.000. Selesai: 201,202,203. Terjual: 201. WIP: 204,205.</p>
            <p><strong>Ending WIP</strong> = Masih dalam proses = 204+205 = 1.500+1.000 = <span class="hl">Rp2.500</span></p>
        </div>
    </div>
    <div class="accordion">
        <div class="acc-header" onclick="toggleAcc(this)">PT. Tsubasa - HPP/COGS <div class="acc-icon">+</div></div>
        <div class="acc-body">
            <p>Pesanan 201=5.500; 202=4.500; 203=4.000; 204=2.500; 205=1.000. Selesai: 201,202,203. Terjual: hanya 201.</p>
            <p><strong>HPP/COGS</strong> = Yang sudah terjual = 201 = <span class="hl">Rp5.500</span></p>
        </div>
    </div>
    <div class="accordion">
        <div class="acc-header" onclick="toggleAcc(this)">PT. Suruga - Laba Operasi (Income Statement) <div class="acc-icon">+</div></div>
        <div class="acc-body">
            <p>Pesanan 101=2.500; 102=3.000; 103=1.000. Selesai: 101,102. Terjual: hanya 101. Revenue dari 101 = 7.500. Biaya penjualan=1.000; Biaya administrasi=750.</p>
            <p><strong>Revenue</strong> = 7.500</p>
            <p><strong>COGS</strong> = Pesanan 101 = 2.500</p>
            <p><strong>Gross Profit</strong> = 7.500 &minus; 2.500 = 5.000</p>
            <p><strong>Operating Expenses</strong> = 1.000 + 750 = 1.750</p>
            <p><strong>Laba Operasi</strong> = 5.000 &minus; 1.750 = <span class="hl">Rp3.250</span></p>
        </div>
    </div>
</div>

<div class="card color-tm4">
    <div class="card-title">Jurnal Job Order Costing <span class="term-en">Journal Entries</span> <span class="tag">JURNAL</span></div>
    <div class="table-container">
        <table>
            <tr><th>Transaksi</th><th>Debit</th><th>Kredit</th></tr>
            <tr><td>Pembelian Bahan Baku</td><td>Raw Materials Inventory</td><td>Accounts Payable / Kas</td></tr>
            <tr><td>Pemakaian Bahan Baku ke Pesanan</td><td>Work In Process Inventory</td><td>Raw Materials Inventory</td></tr>
            <tr><td>Biaya Tenaga Kerja Langsung</td><td>Work In Process Inventory</td><td>Payroll Payable / Wages Payable</td></tr>
            <tr><td>Pembebanan Overhead Pabrik</td><td>Work In Process Inventory</td><td>Factory Overhead Applied</td></tr>
            <tr><td><strong>Pesanan Selesai Diproduksi</strong></td><td><span class="hl-red">Finished Goods Inventory</span></td><td><span class="hl-red">Work In Process Inventory</span></td></tr>
            <tr><td>Pesanan Terjual (Pendapatan)</td><td>Kas / Accounts Receivable</td><td>Sales Revenue</td></tr>
            <tr><td>Pesanan Terjual (HPP)</td><td>Cost of Goods Sold</td><td>Finished Goods Inventory</td></tr>
        </table>
    </div>
    <div class="callout warning" style="margin-top:12px;">
        <div class="callout-title">&#x26A1; Ingat! Jurnal Pesanan Selesai</div>
        Jurnal saat pesanan <strong>selesai diproduksi</strong> (bukan saat dijual) = <strong>Dr. Finished Goods | Cr. WIP</strong>. Saat dijual, baru ada dua jurnal: (1) Revenue dan (2) COGS.
    </div>
</div>
`;