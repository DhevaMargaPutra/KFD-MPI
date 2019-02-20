function showLabel(element) {
    element.children[0].style.display = 'initial';
}

function hideLabel(element) {
    element.children[0].style.display = 'none';
}

const transitionDOM = document.getElementById('transition');
function goTo(menu) {
    switch(menu) {
        case 'materi':
            transitionDOM.classList.add('materi-trans', 'animated', 'slideInRight');
            transitionDOM.addEventListener('animationend', function() {
                document.location.href = 'materi.html';
            });
            break;
        case 'evaluasi':
            transitionDOM.classList.add('evaluasi-trans', 'animated', 'slideInRight');
            transitionDOM.addEventListener('animationend', function() {
                document.location.href = 'evaluasi.html';
            });
            break;
        case 'simulasi':
            transitionDOM.classList.add('simulasi-trans', 'animated', 'slideInRight');
            transitionDOM.addEventListener('animationend', function() {
                document.location.href = 'simulasi.html';
            });
            break;
        case 'tentang':
            transitionDOM.classList.add('tentang-trans', 'animated', 'slideInRight');
            transitionDOM.addEventListener('animationend', function() {
                document.location.href = 'tentang.html';
            });
            break;
        default:
            console.error('no menu has selected!');
    }
}