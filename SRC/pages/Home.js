import getData from '../utils/getData';

const Home = async () => {

    const products = await getData()

    const view = `
       <div class = "product">
        ${products.map (product => `
            <article class = "product-items">

                <a href="#/${product.id}/">

                    <img src="${product.img.url}" alt= "${product.name}">
                    <h2>${product.name}</h2>
                </a>
            </article>
            `).join('')}    
            
       </div>
    `;
    
    return view;
}

export default Home; 