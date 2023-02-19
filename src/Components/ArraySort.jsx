import { products } from "../products";
const ArraySort = () => {


    const arrayOfPrices = products.map(({price}) => {//object, brackets NEEDED in parameter for .map
        return price
    }).sort((a, b)=>a-b);

    console.log(arrayOfPrices)

    
    return arrayOfPrices.map((price) => { //array, no brackets needed in parameter for .map
        return <div>
           <li>{price}</li>
            </div>
})
}

export default ArraySort; 