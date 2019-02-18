const materis = [
    [
        {}
    ],
    [
        {},
        {
            bab: 'BAB 1',
            gambar: '/Images/camera.png',
            teks: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur repudiandae placeat facere animi dignissimos veniam nam dolores earum inventore. Aut odit exercitationem temporibus dolorum, saepe vitae iusto dicta ut fugit.',
            halaman: 1
        },
        {
            bab: 'BAB 1',
            gambar: '',
            teks: 'Halaman2 halaman2 halaman2.',
            halaman: 1
        },
        {
            bab: 'BAB 1',
            gambar: '',
            teks: 'Halaman2 halaman2 halaman2.',
            halaman: 1
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
    if (currentPage === materis[currentChapter][currentChapter.length]) return;
    
    foregroundPaperDOM.classList.add('mySlideOutDown');
    foregroundPaperDOM.addEventListener('animationend', function() {
        foregroundPaperDOM.style.transform = 'translateY(150%)';
        foregroundPaperDOM.classList.remove('mySlideOutDown');
    });

    currentPage++;
    console.log(currentPage);
}

function prevPage() {
    if (currentPage === 1) return;

    foregroundPaperDOM.classList.add('mySlideInUp');
    foregroundPaperDOM.addEventListener('animationend', function() {
        foregroundPaperDOM.style.transform = 'translateY(0%)';
        foregroundPaperDOM.classList.remove('mySlideInUp');
    });

    currentPage++;
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
