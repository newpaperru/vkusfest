const imgWrapper = document.querySelector('.info-card__img-wrapper');
const btnNext = document.querySelector('.arrow-next');
const bannerWrapper = document.querySelector('.banner');
const lightVersionArray = [480, 240, 'https://i.ibb.co/Dw6p4Gc/image.png'];
const darkVersionArray = [640, 240, 'https://i.ibb.co/jw2s3Q6/image.png'];

btnNext.addEventListener('click', () => toggleClass(bannerWrapper, btnNext));

function toggleClass(el, btn) {
    if (!el.classList.contains('banner--light-version') && !el.classList.contains('banner--dark-version')) {
        el.classList.add('banner--light-version');
        createNewImage(lightVersionArray[0], lightVersionArray[1], lightVersionArray[2], imgWrapper);
    } else if (el.classList.contains('banner--light-version')) {
        el.classList.replace('banner--light-version', 'banner--dark-version');
        changeImage(darkVersionArray[0], darkVersionArray[1], darkVersionArray[2], '.info-card__img');
        btn.parentNode.removeChild(btn);
    }
}

function createNewImage(width, height, source, place) {
    const img = new Image(width, height);
    img.src = source;
    img.alt = "Иллюстрация ресторана внутри";
    img.classList.add('info-card__img');
    place.appendChild(img);
}

function changeImage(width, height, source, name) {
    let img = document.querySelector(name);
    img.src = source;
    img.width = width;
    img.height = height;
}