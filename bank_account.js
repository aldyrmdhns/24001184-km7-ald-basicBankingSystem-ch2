export class BankAccount {
    constructor(name, money) {
        this.name = name;
        this.money = money;
    }

    deposit(amount, callback){
        setTimeout(() =>{
            if (amount >= 5000) {
                this.money += amount;
                alert(`Deposit Saldo Berhasil, Saldo Saat Ini: ${this.money}`);
                alert(`Deposit Berhasil Setelah 3 Detik!!!`);
                callback();
            } else {
                alert("Minimal jumlah Deposit adalah Rp. 5.000");
                alert(`Deposit Gagal Setelah 3 Detik!!!`);
                callback();
            }
        }, 3000)
    }

    withdraw(amount, callback){
        setTimeout(() => {
            if (amount >= 5000 && amount <= this.money) {
                this.money -= amount;
                alert(`Penarikan Saldo Berhasil, Sisa Saldo Saat Ini: ${this.money}`);
                alert(`Penarikan Berhasil Setelah 3 Detik!!!`);
                callback();
            } else {
                alert("Minimal jumlah Penarikan adalah Rp. 5.000");
                alert(`Penarikan Gagal Setelah 3 Detik!!!`);
                callback();
            }
        }, 3000)
    }

    updateDisplayMoney(element){
        element.innerText = this.money;
    }

    updateDisplayName(element){
        element.innerText = this.name;
    }
}
