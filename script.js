// deklarasi variable
var arrQuote = ['Yang perlu kalian ingat, nilai bukanlah satu-satunya tolak ukur kalian untuk sukses. Setiap orang memiliki kelebihan dan kekurangannya masing-masing, boleh jadi di bidang akademik, ataupun non akademik.',
'Lo boleh istirahat, lo boleh sedih, lo boleh marah. Itu yang membuat lo menjadi manusia. Tapi satu yang perlu lo inget, lo ga boleh menyerah.',
'Kalo lo ga sanggup menahan lelahnya belajar, ya siap-siap menahan kebodohan.',
'Kalo lo ga jalan sekarang, lo harus lari besok.',
'Kalo lo ga melakukan yang terbaik, jangan berharap dapat yang terbaik.',
'Di saat lo males-malesan, banyak orang di luar sana yang mati-matian belajar.',
'Kerjain aja, gausah banyak dipikirin. Nanti juga selesai.',
'Mungkin lo merasa lelah, apalagi orang tua lo?',
'Yang rajin aja belum tentu dapet, apalagi yang... ya tau lah.',
'Gausah keseringan mikirin saingan lo, lawan lo sebenernya yaa diri lo sendiri. Males, menunda-nunda, nyantai, ga percaya diri, overthinking.',
'Berakit-rakit ke hulu, berenang ke tepian. Kerjaannya rebahan melulu, gimana mau menang kemudian.',
'Tiap hari liat quotes, tapi tetep aja ga berubah. Apa lo harus gagal dulu baru mau berubah?',
'Lo udah merasa seberapa pantas buat raih impian lo?',
'Lo boleh istirahat, lo boleh sedih, lo boleh marah. Itu yang membuat lo menjadi manusia. Tapi satu yang perlu lo inget, lo ga boleh menyerah.'];
var output = document.querySelector('#output');
var outputHasil = document.querySelector('#outputHasil');
// end

// fungsi acak arrQuote
function rndmQuote() {
    var randm = arrQuote[Math.floor(Math.random() * arrQuote.length)];
    return randm;
}
// end

// fungsi menampilkan hasil acak arrQuote
function out(){
    return outputHasil.innerHTML = `<p class="font-main-content-text-output">${rndmQuote()} - @AjakGerak.</p>`;
}
// end

// hasil keluar apabila diklik
output.addEventListener('click', () => {
    out();
    outputHasil.style.display = 'block';
});
// end