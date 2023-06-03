import getHash from '../utils/getHash';
import getProducts from '../utils/getProducts';


const Productos = async () => {

    const id = getHash();
    const products = getProducts(id);
    console.log(products)

    const view =`

         <div class = "Products-inner">
            <article class = "Products-card">
                <img src="${products.image}" alt="${products.name}">  
                <h2>${products.name}</h2>
            </article>

            <article class = "Products-card">
            <h3> name: <span>${products.name}</span></</h3>
            <h3> cost: <span>${products.cost}</span></</h3>
            <h3> category: <span>${products.category}</span></h3>
            
            </article>
        </div>  
        `

        
    return view;
}     

export default Productos;