import './Items.css'


export default function Items(props){
    const { name, description, price, imgURL, type } = props

    return(
        <div className='item'>
            <div className='product_info'>
            <h4>{name}</h4>
            <p>{description}</p>
            <p>{price}</p>
            <p>{type}</p>
            </div>
            <img src={imgURL} alt='' />
            <button>Add to Cart</button>
        </div>
    )
}