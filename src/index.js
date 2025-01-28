import {constructHomepage} from './homepage' 
import {renderMenu} from './menu'
import {renderAbout} from './about'
import "./style.css"

const renderTab = function(tabToLoad){

    const content = document.querySelector("#content");
    content.replaceChildren(); // Removes all children
    if(tabToLoad == 'Home')
        constructHomepage();
    if(tabToLoad == 'Menu')
        renderMenu();
    if(tabToLoad == 'About')
        renderAbout();
}

renderTab('Home')
console.log('hi')
document.querySelector('#Menu').addEventListener('click',()=>renderTab('Menu'));
document.querySelector('#About').addEventListener('click',()=>renderTab('About'));
document.querySelector('#Home').addEventListener('click',()=>renderTab('Home'));

export {renderTab}