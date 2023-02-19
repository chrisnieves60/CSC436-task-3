import { products } from "../products";
const ArrayMap = () => {

    
    const productNames = products.map(({id, name}) => {
            return <li key = {id}>{name}</li>
    })



    return <div>
        <ul>
            {productNames}
        </ul>
    </div>
}

export default ArrayMap; 