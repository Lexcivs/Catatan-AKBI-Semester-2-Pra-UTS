window.AKBI_DATA.tm3 = `
<div class="page-header">
    <div class="page-badge" style="background: rgba(245,66,100,0.15); color: var(--tm3);">TM 03</div>
    <h1 class="page-title">Siklus Biaya <span class="term-en">Cost Cycle</span></h1>
    <p class="page-desc">Alur Biaya Manufaktur &middot; HPP (COGS) &middot; Laporan Laba Rugi &middot; Jurnal Dasar</p>
</div>

<div class="card color-tm3">
    <div class="card-title">4 Langkah Perhitungan HPP <span class="term-en">COGS Formula</span> <span class="tag">KUNCI</span></div>
    <div class="formula-box">
        <div class="formula-label">LANGKAH 1 - Pemakaian Bahan Baku (Direct Materials Used)</div>
        <div class="formula-main">DM Used = Pers. Awal BB + Pembelian BB &minus; Pers. Akhir BB</div>
    </div>
    <div class="formula-box">
        <div class="formula-label">LANGKAH 2 - Total Biaya Manufaktur (Total Manufacturing Cost)</div>
        <div class="formula-main">TMC = DM Used + TKL (DL) + FOH</div>
        <div class="formula-note">Mencakup SEMUA biaya yang dimasukkan ke proses produksi pada periode ini.</div>
    </div>
    <div class="formula-box">
        <div class="formula-label">LANGKAH 3 - Kos Produk Selesai (Cost of Goods Manufactured / COGM)</div>
        <div class="formula-main">COGM = Pers. Awal WIP + TMC &minus; Pers. Akhir WIP</div>
        <div class="formula-note">Hanya produk yang SELESAI diproses dan ditransfer ke gudang barang jadi.</div>
    </div>
    <div class="formula-box">
        <div class="formula-label">LANGKAH 4 - Harga Pokok Penjualan (Cost of Goods Sold / COGS)</div>
        <div class="formula-main">COGS = Pers. Awal FG + COGM &minus; Pers. Akhir FG</div>
        <div class="formula-note">Hanya produk yang TELAH DIJUAL ke pelanggan. Masuk ke Laporan Laba Rugi.</div>
    </div>
</div>

<div class="card color-tm3">
    <div class="card-title">Contoh Soal HPP - PT. Shion <span class="tag">CONTOH UTS</span></div>
    <div class="worked-example">
        <div class="we-label">DATA SOAL</div>
        <div class="we-problem">Pers. Awal BB=1.300; Pembelian BB=12.500; Pers. Akhir BB=1.600; TKL=15.200; FOH=12.400; Pers. Awal BDP=3.400; Pers. Akhir BDP=3.800; Pers. Awal BJ=2.400; Pers. Akhir BJ=2.600</div>
        <div class="we-step">(1) DM Used = 1.300 + 12.500 &minus; 1.600 = <strong>12.200</strong></div>
        <div class="we-step">(2) Kos Manufaktur = 12.200 + 15.200 + 12.400 = <strong>39.800</strong></div>
        <div class="we-step">(3) COGM = 3.400 + 39.800 &minus; 3.800 = <strong>39.400</strong></div>
        <div class="we-step">(4) COGS = 2.400 + 39.400 &minus; 2.600 = <strong>39.200</strong></div>
        <div class="we-result">HPP = Rp39.200</div>
    </div>
</div>

<div class="card color-tm3">
    <div class="card-title">Contoh Soal HPP - PT. Milim <span class="tag">CONTOH UTS</span></div>
    <div class="worked-example">
        <div class="we-label">DATA SOAL</div>
        <div class="we-problem">Pers. Awal BB=1.250; Pembelian=17.500; Pers. Akhir BB=1.500; TKL=22.000; FOH=18.000; Beg WIP=2.500; End WIP=3.000; Beg FG=3.250; End FG=3.500</div>
        <div class="we-step">(1) DM Used = 1.250 + 17.500 &minus; 1.500 = 17.250</div>
        <div class="we-step">(2) Kos Manufaktur = 17.250 + 22.000 + 18.000 = 57.250</div>
        <div class="we-step">(3) COGM = 2.500 + 57.250 &minus; 3.000 = 56.750</div>
        <div class="we-step">(4) COGS = 3.250 + 56.750 &minus; 3.500 = <strong>56.500</strong></div>
        <div class="we-result">HPP = Rp56.500</div>
    </div>
</div>

<div class="card color-tm3">
    <div class="card-title">Jurnal-Jurnal Penting Manufaktur <span class="term-en">Journal Entries</span> <span class="tag">JURNAL</span></div>
    <div class="table-container">
        <table>
            <tr><th>Transaksi</th><th>Debit</th><th>Kredit</th></tr>
            <tr><td>Pembelian Bahan Baku (Kredit)</td><td>Persediaan Bahan Baku</td><td>Hutang Dagang</td></tr>
            <tr><td>Pemakaian Bahan Baku Langsung</td><td>Persediaan Barang Dalam Proses (WIP)</td><td>Persediaan Bahan Baku</td></tr>
            <tr><td>Pemakaian Tenaga Kerja Langsung</td><td>Persediaan Barang Dalam Proses (WIP)</td><td>Hutang Gaji / Kas</td></tr>
            <tr><td>Pembebanan Overhead Pabrik</td><td>Persediaan Barang Dalam Proses (WIP)</td><td>FOH Dibebankan (Applied FOH)</td></tr>
            <tr><td><strong>Transfer Produk Selesai ke Gudang</strong></td><td><span class="hl-red">Persediaan Barang Jadi (FG Inv)</span></td><td><span class="hl-red">Persediaan BDP (WIP Inv)</span></td></tr>
            <tr><td>Penjualan (sisi pendapatan)</td><td>Kas / Piutang</td><td>Penjualan</td></tr>
            <tr><td>Penjualan (sisi HPP)</td><td>HPP / COGS</td><td>Persediaan Barang Jadi</td></tr>
        </table>
    </div>
    <div class="callout warning" style="margin-top:12px;">
        <div class="callout-title">&#x26A1; Sering Keluar: Jurnal Transfer ke Barang Jadi</div>
        "Jurnal untuk mencatat produk yang telah selesai diproduksi (transfer ke barang jadi)"<br><br>
        = <strong>Debit: Persediaan Barang Jadi | Kredit: Persediaan Barang Dalam Proses</strong><br><br>
        <em>Ingat: baru selesai DIPRODUKSI, belum dijual maka masuk ke FG dulu, belum ke COGS!</em>
    </div>
    <div class="callout warning" style="margin-top:10px;">
        <div class="callout-title">&#x26A1; Jurnal Process Costing: Transfer ke FG</div>
        "Transfer biaya ke persediaan barang jadi Rp25.000":<br>
        <strong>Debit: Persediaan Barang Jadi Rp25.000 | Kredit: Persediaan BDP Rp25.000</strong>
    </div>
</div>

<div class="card color-tm3">
    <div class="card-title">Penerapan Jurnal dalam Process Costing Multi-Departemen <span class="tag">PENERAPAN</span></div>
    <div class="table-container">
        <table>
            <tr><th>Transaksi</th><th>Debit</th><th>Kredit</th></tr>
            <tr><td>(1) Biaya dibebankan ke Dept. Produksi</td><td>WIP - Dept. Produksi</td><td>Materials Inv / Payroll Payable / Applied FOH</td></tr>
            <tr><td>(2) Transfer dari Dept. A ke Dept. B</td><td>WIP - Dept. B (tujuan)</td><td>WIP - Dept. A (asal)</td></tr>
            <tr><td>(3) Transfer dari Dept. B ke Finished Goods</td><td>Finished Goods Inventory</td><td>WIP - Dept. B</td></tr>
            <tr><td>(4) Penjualan Produk (HPP)</td><td>Cost of Goods Sold (COGS)</td><td>Finished Goods Inventory</td></tr>
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