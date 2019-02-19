const materis = [
    [
        {}
    ],
    [
        {},
        {
            bab: 'BAB 1: Apa Itu Fotografi',
            gambar: 'Images/camera.png',
            teks: `
APA ITU FOTOGRAFI menurut Evin | Global

Kata Fotografi diambil dari Yunani yaitu kata Fotos yang berarti sinar atau cahaya, dan Grafos yang
bararti gambar. Dalam seni rupa, fotografi adalah proses pembuatan lukisan dengan menggunakan media
cahaya. Sebagai istilah umum, fotografi berarti proses atau metode untuk menghasilkan gambar atau foto
dari suatu obyek dengan merekam pantulan cahaya yang mengenai obyek tersebut pada media yang peka
cahaya.`,
            halaman: 1
        },
        {
            bab: '',
            gambar: '',
            teks: `
Alat paling populer untuk menangkap cahaya ini adalah kamera.

Prinsip fotografi adalah memfokuskan cahaya dengan bantuan pembiasan sehingga mampu
membakar medium penangkap cahaya. Medium yang telah dibakar dengan ukuran luminitas cahaya yang
tepat akan menghasilkan bayangan identik dengan cahaya yang memasuki medium pembiasan
(selanjutnya disebut lensa).

Pada umumnya semua hasil karya fotografi dikerjakan dengan kamera, dan kebanyakan kamera
memiliki cara kerja yang sama dengan cara kerja mata manusia. Seperti halnya mata, kamera memiliki
lensa, dan mengambil pantulan cahaya terhadap suatu objek dan menjadi sebuah image.

Tetapi, sebuah kamera dapat merekam sebuah image ke dalam sebuah film dan hasilnya tidak`,
            halaman: 2
        },
        {
            bab: '',
            gambar: '',
            teks: `
hanya bisa dibuat permanen tetapi dapat pula diperbanyak, dan diperlihatkan kepada orang lain.
Sedangkan mata, hanya dapat merekam image kedalam memori otak dan tidak bisa dilihat secara
langsung kepada orang lain.

Untuk menghasilkan ukuran cahaya yang tepat untuk menghasilkan bayangan, digunakan bantuan
alat ukur lightmeter. Setelah mendapat ukuran cahaya yang tepat, seorang fotografer bisa mengatur
cahaya tersebut dengan mengatur ASA (ISO Speed), diafragma (aperture), dan penggunaan filter.

https://adhiemedia.wordpress.com/download/komposisi-foto-digital/`,
            halaman: 3
        }
    ],
    [
        {},
        {
            bab: 'BAB 2: Mengenal Segitiga Exposure',
            gambar: 'Images/shutter.jpg',
            teks:`
Shutter Speed

Shutter Speed atau biasa disebut dengan kecepatan rana adalah nilai kecepatan terbukanya jendela kamera sehingga cahaya bisa masuk ke dalam sensor kamera. Shutter speed bisa diibaratkan dengan keran air, jika kita membuka keran air dengan lama maka air yang keluar banyak, sebaliknya jika kita membuka keran air dengan cepat maka air yang dikeluarkan tentunya sedikit. Kira-kira begitu logika sederhana dari shutter speed ini. Oia, Satuan shutter speed adalah detik (s). `,
            halaman: 1
        },
        {
            bab: '',
            gambar: '',
            teks:`
Kalo kalian mau membekukan subjek yang bergerak maka gunakan shutter speed yang cepat misalnya 1/500 atau 1/800 tapi disesuaikan dengan kondisi cahaya. Nah kalo kalian mau membuat subjek yang bergerak tersebut menjadi blur maka gunakan shutter speed yang lambat misalnya 1 s (detik) atau 1/4 s (detik) tergantung kondisi cahaya ya. Karena komponen yang lainnya seperti aperture dan ISO juga harus seimbang.`,
            halaman: 2
        },
        {
            bab: '',
            gambar: 'Images/apreture.jpg',
            teks:`
Aperture/ Diafragma

Aperture atau biasa disebut juga dengan diafragma adalah bukaan komponen lensa. Aperture ini terbuat dari bilah-bilah lempengan logam yang ditengahnya bisa membuka dengan lebar dan sempit sehingga mempengaruhi intensitas cahaya yang masuk ke dalam lensa sampai ke sensor kamera. Dalam fotografi aperture ini dilambangkan dengan huruf "f" dengan satuannya diameter bilah-bilah logam tersebut.

Contoh penulisannya seperti ini f/1.8 atau f/x dimana "x" aalah diameter bilah-bilah tadi. Kalo logika sederhananya adalah aperture bagaikan besarnya pipa yang mengalirkan air.`,
            halaman: 3
        }
    ]
];

//[ [{},{}], [{},{}]]

const foregroundPaperDOM = document.getElementById('foreground');
const backgroundPaperDOM = document.getElementById('background');

let currentChapter = 1;
let currentPage = 1;

fillPage(1, materis[1][1]);
fillPage(2, materis[1][2]);

function nextPage() {
    //sampai halaman terakhir return
    if (currentPage === materis[currentChapter].length - 1) {
        alert('Sudah mencapai halaman terakhir. Klik bagian atas halaman kertas untuk kembali ke halaman sebelumnya');
        return;
    }
    
    //halaman belakang diisi materi berikutnya
    //jika materi setelahnya tidak ada nggak usah di isi
    //halaman depan di turunin, setelah animasi selesai buang animasi, tetap di bawah dulu
    //halaman depan yang di bawah diisi materi sesuai halaman
    //halaman depan dipindah lagi di tengah
    if (currentPage <= materis[currentChapter].length - 2) {
        fillPage(2, materis[currentChapter][currentPage + 1]);
    }
    foregroundPaperDOM.classList.add('mySlideOutDown');
    foregroundPaperDOM.addEventListener('animationend', function() {
        foregroundPaperDOM.style.transform = 'translateY(150%)';
        fillPage(1, materis[currentChapter][currentPage]);
        foregroundPaperDOM.style.transform = 'translateY(0%)';
        foregroundPaperDOM.classList.remove('mySlideOutDown');
    });

    currentPage++;
    console.log('currentPage: ' + currentPage);
}

function prevPage() {
    if (currentPage === 1) {
        alert('Halaman pertama. Klik bagian bawah halaman kertas untuk beralih ke halaman selanjutnya');
        return;
    }

    //halaman depan dinaikin, halaman belakang diisi currentPage
    //saat halapan depan naik diisi materi selanjutnya
    fillPage(2, materis[currentChapter][currentPage]);
    foregroundPaperDOM.classList.add('mySlideInUp');
    fillPage(1, materis[currentChapter][currentPage - 1]);
    foregroundPaperDOM.addEventListener('animationend', function() {
        foregroundPaperDOM.style.transform = 'translateY(0%)';
        foregroundPaperDOM.classList.remove('mySlideInUp');
    });

    currentPage--;
    console.log('currentPage: ' + currentPage);
}

function fillPage(layer, materi) {
    if(layer === 1) {
        foregroundPaperDOM.children[0].innerHTML = materi.bab;
        foregroundPaperDOM.children[1].src = materi.gambar;
        foregroundPaperDOM.children[2].innerHTML = materi.teks;
        foregroundPaperDOM.children[3].innerHTML = materi.halaman;
    } else if(layer === 2) {
        backgroundPaperDOM.children[0].innerHTML = materi.bab;
        backgroundPaperDOM.children[1].src = materi.gambar;
        backgroundPaperDOM.children[2].innerHTML = materi.teks;
        backgroundPaperDOM.children[3].innerHTML = materi.halaman;
    }
}

function showLabel(element, navigation) {
    element.children[0].style.display = 'initial';
}

function hideLabel(element) {
    element.children[0].style.display = 'none';
}

function changeChapter(navigation) {
    if(navigation === 'next') {
        //jika currentChapter = 2, gak usah next, karena length 3
        if (currentChapter === materis.length - 1) {
            alert('Sudah mencapai Bab terakhir.\nKlik kertas yang ada di kiri layar untuk kembali ke bab sebelumnya!');
            return;
        }

        //halaman belakang diisi currentPage
        //pindah bab, currentChapter + 1, currentHalaman = 1
        //halaman depan di seret dari kanan, diisi bab berikutnya halaman 1
        fillPage(2, materis[currentChapter][currentPage]);

        currentChapter++;
        currentPage = 1;
        console.log('currentChapter: ' + currentChapter);

        fillPage(1, materis[currentChapter][currentPage]);

        foregroundPaperDOM.classList.add('animated', 'slideInRight');
        foregroundPaperDOM.addEventListener('animationend', function() {
            foregroundPaperDOM.classList.remove('animated', 'slideInRight');
        });
    } else if(navigation === 'prev') {
        //jika currentChapter = 1, gak usah prev, karena masih awal
        if (currentChapter === 1) {
            alert('Masih di awal Bab.\nKlik kertas yang ada di kanan layar untuk menuju ke bab berikutnya!');
            return;
        }

        //halaman belakang diisi currentPage
        //pindah bab, currentChapter - 1, currentHalaman = 1
        //halaman depan diisi bab sebelumnya halaman 1
        //halaman depan diseret dari kanan
        fillPage(2, materis[currentChapter][currentPage]);

        currentChapter--;
        currentPage = 1;
        console.log('currentChapter: ' + currentChapter);

        fillPage(1, materis[currentChapter][currentPage]);

        foregroundPaperDOM.classList.add('animated', 'slideInLeft');
        foregroundPaperDOM.addEventListener('animationend', function() {
            foregroundPaperDOM.classList.remove('animationend', 'slideInLeft');
        });
    }
}