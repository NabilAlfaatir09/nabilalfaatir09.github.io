const nav = document.querySelector(".navbar");
document.querySelector("#hamburger-menu").onclick = () => {
    nav.classList.toggle("active");
}

const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove("active");
    }
});

function validation() {
    const nama = document.forms["form-contact"]["nama"].value;
    const tglLahir = document.forms["form-contact"]["tanggal-lahir"].value;
    const gender = document.forms["form-contact"]["gender"].value;
    const pesan = document.forms["form-contact"]["pesan"].value;

    outputNama(nama);
    outputValidation(nama, tglLahir, gender, pesan);
    return false;
}

function outputValidation(nama, tglLahir, gender, pesan) {
    document.getElementById("output-nama").innerHTML = nama;
    document.getElementById("output-lahir").innerHTML = tglLahir;
    document.getElementById("output-kelamin").innerHTML = gender;
    document.getElementById("output-pesan").innerHTML = pesan;
}

function outputNama(nama) {
    document.querySelector(".nama").innerHTML = nama;
}