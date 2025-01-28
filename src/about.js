import aboutImage from './about.png';

const renderAbout = function(){
    const content = document.querySelector("#content");

    const home = document.createElement('div');

    const img = document.createElement('img');
    img.src = aboutImage

    content.classList.add('homepage')
    home.appendChild(img);
    content.appendChild(home);
}


export {renderAbout}