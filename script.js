// var angka1 = prompt("Masukan angka yang ingin anda pangkatkan");
// var angka2 = prompt("Mau di pangkatkan berapa?");

// var hasil = angka1 ** angka2;
// document.writeln(hasil);

function submitAngka() {
  var inputAngka = document.getElementById("angka").value;
  var inputAngka2 = document.getElementById("angka2").value;
  var hasil = document.getElementById("hasil");
  var hasilPangkat = inputAngka ** inputAngka2;

  // if (inputAngka !== "" && inputAngka2 !== "") {
  //   hasil.innerHTML = "Anda memasukkan angka: " + inputAngka + "<br>";
  //   hasil.innerHTML += "Dan akan dipangkatkan menjadi: " + inputAngka2 + "<br>";
  //   hasil.innerHTML += "Maka hasilnya adalah: " + hasilPangkat;
  // } else {
  //   hasil.innerHTML = "Silakan masukkan angka terlebih dahulu.";
  // }
  if (inputAngka !== "" && inputAngka2 !== "") {
    hasil.innerHTML = "<p style='text-align: center;'>Anda memasukkan angka: " + inputAngka + "<br>";
    hasil.innerHTML += "<p style='text-align: center;'>Dan akan dipangkatkan menjadi: " + inputAngka2 + "<br>";
    hasil.innerHTML += "<p style='text-align: center;'>Maka hasilnya adalah: " + hasilPangkat + "</p>";
  } else {
    hasil.innerHTML = "<p style='text-align: center;'>Silakan masukkan angka terlebih dahulu.</p>";
  }
}
