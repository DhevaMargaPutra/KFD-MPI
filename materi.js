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
cahaya tersebut dengan mengatur ASA (ISO Speed), diafragma (aperture), dan penggunaan filter.`,
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
        alert('Sudah mencapai halaman terakhir. Klik bagian atas halaman untuk kembali ke halaman sebelumnya');
        return;
    }
    
    //halaman depan di turunin, tambah animasi, setelah animasi buang animasi, tetap di bawah dulu
    //halaman depan yang di bawah diisi materi sesuai halaman
    //halaman depan dipindah lagi di tengah
    //halaman belakang diisi materi setelahnya
    //jika materi setelahnya tidak ada nggak usah di isi
    foregroundPaperDOM.classList.add('mySlideOutDown');
    foregroundPaperDOM.addEventListener('animationend', function() {
        foregroundPaperDOM.style.transform = 'translateY(150%)';
        fillPage(1, materis[currentChapter][currentPage]);
        foregroundPaperDOM.style.transform = 'translateY(0%)';
        if (currentPage <= materis[currentChapter].length - 2) {
            fillPage(2, materis[currentChapter][currentPage + 1]);
        }
        foregroundPaperDOM.classList.remove('mySlideOutDown');
    });

    currentPage++;
    console.log(currentPage);
}

function prevPage() {
    if (currentPage === 1) {
        alert('Halaman pertama. Klik bagian bawah halaman untuk beralih ke halaman selanjutnya');
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
    console.log(currentPage);
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
