// Perhitungan BMI
var hitung = document.getElementById('hitung');

hitung.addEventListener('click', function(event){
    event.preventDefault();
    console.log("test");
    var weight = document.getElementById('berat-badan').value;
    var height = document.getElementById('tinggi-badan').value;
    var finalbmi = (weight / (height * height)*10000);
    document.getElementById('bmi-output').value = finalbmi.toFixed(1);
    var hasil="";


    if (finalbmi <= 18.5) hasil = "Anda Kekurangan Berat Badan"
    else if(finalbmi >= 18.5) hasil = "Berat Badan Anda Normal/Ideal"
    else if(finalbmi >= 25.0) hasil = "Anda Kelebihan Berat Badan"
    else if(finalbmi >= 30.0) hasil = "Anda Kegemukan (Obesitas)"

    document.getElementById("hasil-perhitungan").innerText=hasil;
})

