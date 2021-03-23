export default function renderProductFrame(data) { 
    return `
    <section class="Products" id="Products">
        
        <h1> Products </h1>
        ${filterRadioButton()}
        <div class="product-list">
            ${renderProducts(data)}
        </div>
    </section>`;
}

export function filterRadioButton() { 
    return `
    <div class="filter">

        <label>
        <input type="radio" name="filter" value="all" checked>
        All
        </label>

        <label>
        <input type="radio" name="filter" value="Tripadvisor">
        Tripadvisor
        </label>

        <label>
        <input type="radio" name="filter" value="Google Travel">
        Google Travel
        </label>

        <label>
        <input type="radio" name="filter" value="Kayak">
        Kayak
        </label>

    </div>
    `;
}

export function renderProducts(data)  { 
    console.log("RENDER PRODUCTS CALLED" + data)
    return data.map(d=>`
       <div class="Item">
        ${renderProduct(d)}
        </div>
	`).join('');
}

function prosObj(pros) { 
    return pros.map(d=>` 
    <li> ${d} </li>    
    ` ).join('');
}

function consObj(cons) { 
    return cons.map(d=>` 
    <li> ${d} </li>
    ` ).join('');
}
export function renderProduct(product) { 
    console.log(product.picture)
    return `
        <div>
        <h1 class="title"> ${product.name} </h1>
        <p> ${product.details}</p>
        <a href="${product.url}" target="_blank">
            <i class="fas fa-link"></i>
        </a>
        <img class="product-photo" src="${product.picture}" alt="Product photo" width="100%>
        </div>
        <div class="row"> 
        <p> <strong> Pros </strong> </p>
        <ul>    
        ${prosObj(product.pros)}
        </ul>    
        <p> <strong> Cons </strong> </p>
        <ul>
        ${consObj(product.cons)}
        </ul>            
        </div>

    `;
}