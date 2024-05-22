document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('keuangan-form');
    const listKeuangan = document.getElementById('list-keuangan');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const keterangan = form.keterangan.value;
        const jumlah = parseFloat(form.jumlah.value);
        const jenis = form.jenis.value;

        if (keterangan && jumlah && jenis) {
            const newItem = document.createElement('li');
            newItem.textContent = `${keterangan} - Rp${jumlah} (${jenis})`;
            listKeuangan.appendChild(newItem);

            form.reset();
        } else {
            alert('Silakan lengkapi semua kolom!');
        }
    });
});
