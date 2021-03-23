import renderIntro from './Intro.js';
import renderProductFrame from './Product.js';

import renderProducts from './Product.js';
import Takeaway from './Takeaway.js';

export default function renderMainPage(data){

    document.querySelector('.container').innerHTML = `
        ${renderIntro(data.intro)}
        ${renderProductFrame(data.products)}
        ${Takeaway(data.takeaway)}
    `;

    addInteractions(data);
}

export function addInteractions(data) { 
    

    let buttons = document.querySelectorAll('.filter input[name="filter"]');

    buttons.forEach(cond=>cond.addEventListener('change', function(event){
        let tag = event.target.value;
        if(tag == "all") 
        { 
            document.querySelector('.product-list').innerHTML = renderProducts(data.products);
        } else 
        { 
            let filtered = data.products.filter(product=>(product.tag ===(event.target.value)));
            document.querySelector('.product-list').innerHTML = renderProducts(filtered);
        }
        }));
}