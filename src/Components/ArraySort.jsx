import { products } from "../products";
const ArraySort = () => {


    const arrayOfPrices = products.map(({price}) => {
        return price
    }).sort((a, b)=>a-b);

    console.log(arrayOfPrices)

    return arrayOfPrices.map((price) => {
        return <li>{price}</li>
})
}

export default ArraySort; 