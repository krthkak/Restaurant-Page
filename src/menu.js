import menuImage from './menu.jpeg';

const renderMenu = function(){
    const content = document.querySelector("#content");

    const home = document.createElement('div');

    const img = document.createElement('img');
    img.src = menuImage

    content.classList.add('homepage')
    home.appendChild(img);
    content.appendChild(home);
}


export {renderMenu}