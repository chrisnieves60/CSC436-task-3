import { products } from "../products";
const ArrayReduce = () => {

     //take an array, reduce to single value. 
    //in this scenario, we will be calculating total cost of all products in the array

    //reduce iterates thru array, return value is used as argument (accumulator) in each 
    //iteration. 0 is initial value. 
    
    const totalCost = products.reduce((accumulator, product) => {
        return accumulator + product.price; 
    }, 0)



    return <div>
        <p>total price of all products is {totalCost}</p>
    </div>
}

export default ArrayReduce; 