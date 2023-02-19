import { products } from "../products"


const ArrayFilter = () => {
    const filteredArr = products.filter(({onSale}) => onSale == true).map(({id, name}) => {
        return <li key = {id}>{name}</li>
    })

    return <div>
    <ul>
        <p>Products on sale: </p>{filteredArr}
    </ul>
    </div>



}







export default ArrayFilter