let saldo = 0;

function updateDisplaySaldo() {
    document.getElementById("displaySaldo").innerText = saldo;
}

function addSaldo() {
    let total = window.prompt("Jumlah Saldo Yang Mau Ditambah: ");

    if (total === null) {
        return;
    }

    if (isNaN(total)){
        alert("Input tidak Valid, Harap Coba Lagi!");
        return;
    } 

    total = parseFloat(total)

    if (total > 4999) {
        saldo += total;
        alert(`Saldo Berhasil Ditambahkan, Saldo Saat Ini: ${saldo}`);
        updateDisplaySaldo();
    } else {
        alert("Minimal jumlah Saldo yang ditambahkan adalah Rp. 5.000");
    }
}

function decreaseSaldo() {
    let total = window.prompt("Jumlah Saldo Yang Mau Dikurangi: ");

    if (total === null) {
        return;
    }

    if (isNaN(total)){
        alert("Input tidak Valid, Harap Coba Lagi!");
        return;
    }

    total = parseFloat(total)

    if (total > 4999 && total <= saldo) {
        saldo -= total;
        alert(`Saldo Berhasil Dikurangi, Sisa Saldo Saat Ini: ${saldo}`);
        updateDisplaySaldo();
    } else {
        alert("Minimal jumlah Saldo yang akan Dikurangi adalah Rp. 5.000");
    }
}