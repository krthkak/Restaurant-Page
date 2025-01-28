import restaurantImage from './restaurant.jpeg';

const constructHomepage = function(){
    const content = document.querySelector("#content");

    const home = document.createElement('div');

    const img = document.createElement('img');
    img.src = restaurantImage

    content.classList.add('homepage')
    home.appendChild(img);
    content.appendChild(home);
}


export {constructHomepage}