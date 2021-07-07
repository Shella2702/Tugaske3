//Tugas No 1
document.write("<b>Jawaban No.1</b><br>");
for (let i=1; i<=100; i++){
    document.write("User ke - ", i, "<br>");
}

//Tugas No 2
document.write("<br><b>Jawaban Soal No.2</b><br>");
for (let n=0; n < 20; n+=2){
    document.write(n, "<br>");
}

//Soal No 3
document.write("<br><b>Jawaban No.3</b><br>");
for(let b=0; b <= 20; b++){
    if(b % 2 == 0){
        document.write(b," Genap <br>");
    }
    else {
        document.write(b," Ganjil <br>");
    }
}

//Soal No 4

let ulang = confirm("Apakah anda mau mengulang?");
let hitung = 0;

while (ulang){
    hitung++;
    ulang = confirm("Apakah anda mau mengulang?");
}
document.write("<br><b>Jawaban No.4</b><br>");
document.write("Perulangan sudah dilakukan sebanyak ", hitung, " kali");

//Soal No 5

let jawaban = prompt("Sebutkan kepanjangan dari nama IB ?");

while(jawaban != null){
    if (jawaban !="Impact Byte"){
        jawaban = prompt("Jawaban kamu salah. Silahkan ulangi Lagi.\n Sebutkan kepanjangan dari nama IB !");
    }
    else {
        alert("Selamat jawaban kamu benar");
        break;
    }
}