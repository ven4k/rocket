import './index.html';
import './carusel.scss';
import './footer.scss';
import './header.scss';
import './index.scss';

let currPosition = 0;
let currNumberPage = 1;
let carusel = document.querySelector('.carusel__items');
let currPage = document.querySelector('.carusel__currPage');
currPage.innerHTML = '1/4';

document.querySelector('.carusel__rightArrow').addEventListener('click', () => {
    if (currPosition > 200) {
        currPosition = -100;
        currNumberPage = 0;
    }
    currPosition += 100;
    currNumberPage+=1
    carusel.style.left = -currPosition + '%';
    currPage.innerHTML = currNumberPage + '/4'

}) 
document.querySelector('.carusel__leftArrow').addEventListener('click', () => {
    if(currPosition < 100) {
        currPosition = 400
        currNumberPage = 5
    }
    currPosition -= 100;
    currNumberPage -= 1
    carusel.style.left = -currPosition + '%';
    currPage.innerHTML = currNumberPage + '/4'
}) 