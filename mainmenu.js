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
            break;
        case 'evaluasi':
            transitionDOM.classList.add('evaluasi-trans', 'animated', 'slideInRight');
            break;
        case 'simulasi':
            transitionDOM.classList.add('simulasi-trans', 'animated', 'slideInRight');
            break;
        case 'tentang':
            transitionDOM.classList.add('tentang-trans', 'animated', 'slideInRight');
            break;
        default:
            console.error('no menu has selected!');
    }
}